class ContactInfo < ApplicationRecord
  validates :current_info, uniqueness: true, if: :current_info?

  def self.current
    find_by(current_info: true)
  end

  def google_map_url
    "https://www.google.com/maps?q=#{street_number}+#{street_name},+#{zip_code}+#{city}&output=embed"
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
