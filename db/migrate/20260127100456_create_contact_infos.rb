class CreateContactInfos < ActiveRecord::Migration[6.0]
  def up
    create_table :contact_infos do |t|
      t.timestamps
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :fax
      t.string :street_number
      t.string :street_name
      t.string :zip_code
      t.string :city
      t.string :linkedin_url
      t.boolean :current_info, default: true
    end

    add_index :contact_infos, :current_info, unique: true, where: "current_info = true", name: "index_contact_infos_on_current_info_true_unique"

    create_contact
  end

  def down
    remove_index :contact_infos, name: "index_contact_infos_on_current_info_true_unique"
    drop_table :contact_infos
  end

  private

  def create_contact
    ContactInfo.create(
      first_name: 'Yuma',
      last_name: 'Fruneau',
      email: 'avocat@fruneau-avocat.com',
      phone: '09 81 29 56 39',
      fax: nil,
      street_number: '18',
      street_name: 'Rue Bonneterie',
      zip_code: '13002',
      city: 'Marseille',
      linkedin_url: 'https://www.linkedin.com/in/yuma-fruneau-b44b698b/',
      current_info: true
    )
  end
end
