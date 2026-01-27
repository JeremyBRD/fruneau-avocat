module PhoneEmailHelper
  def phone_link
    link_to @contact_info.phone, "tel:#{@contact_info.phone.squish}", class: 'link_email_phone'
  end

  def email_link
    link_to @contact_info.email, "mailto:#{@contact_info.email}", class: 'link_email_phone'
  end
end
