class ContactInfo
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :first_name, :string
  attribute :last_name, :string
  attribute :email, :string
  attribute :phone, :string
  attribute :fax, :string
  attribute :street_number, :string
  attribute :street_name, :string
  attribute :zip_code, :string
  attribute :city, :string
  attribute :linkedin_url, :string

  def self.current
    new(
      first_name: 'Yuma',
      last_name: 'Fruneau',
      email: 'avocat@fruneau-avocat.com',
      phone: '09 81 29 56 39',
      fax: nil,
      street_number: '18',
      street_name: 'Rue Bonneterie',
      zip_code: '13002',
      city: 'Marseille',
      linkedin_url: 'https://www.linkedin.com/in/yuma-fruneau-b44b698b/'
    )
  end

  def google_map_url
    "https://www.google.com/maps?q=#{street_number}+#{street_name},+#{zip_code}+#{city}&output=embed"
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
