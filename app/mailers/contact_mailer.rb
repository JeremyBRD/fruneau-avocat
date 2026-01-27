class ContactMailer < ApplicationMailer
  def contact(contact)
    @contact = contact
    # In development, send to thibault.chassine@gmail.com for testing
    # In production, send to avocat@fruneau-avocat.com
    recipient = Rails.env.development? ? "thibault.chassine@gmail.com" : "avocat@fruneau-avocat.com"
    mail to: recipient, subject: "Nouveau Message de fruneau-avocat.com"
  end
end
