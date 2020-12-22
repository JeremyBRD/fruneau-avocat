class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact.subject
  #
  def contact
    mail to: "avocat@fruneau-avocat.com", subject: "Nouveau Message de fruneau-avocat.com"
  end
end
