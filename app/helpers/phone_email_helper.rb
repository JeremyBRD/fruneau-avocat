module PhoneEmailHelper
  def phone_link
    link_to @contact_info.phone, "tel:#{@contact_info.phone.squish}"
  end

  def email_link
    link_to @contact_info.email, "mailto:#{@contact_info.email}"
  end
end
