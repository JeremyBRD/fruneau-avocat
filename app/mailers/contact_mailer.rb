class ContactMailer < ApplicationMailer

  def contact(contact)
    @contact = contact
    mail to: "avocat@fruneau-avocat.com", subject: "Nouveau Message de fruneau-avocat.com"
  end
  
end
