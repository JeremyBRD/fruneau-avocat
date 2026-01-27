class ContactMailer < ApplicationMailer
  def contact(contact)
    @contact = contact

    mail to: ContactInfo.current.email, subject: "Nouveau Message de fruneau-avocat.com"
  end
end
