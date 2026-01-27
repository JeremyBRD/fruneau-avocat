class Mailer < ApplicationService
  def initialize(contact: nil)
    @contact = contact
  end

  def call
    send_mail!
  end

  private

  attr_reader :contact

  def send_mail!
    HTTParty.post(
      api_url,
      basic_auth: {
        username: 'api',
        password: ENV['MAILGUN_API_KEY']
      },
      body:
    )
  end

  def api_url
    "#{ENV['MAILGUN_BASE_URL']}/#{ENV['MAILGUN_DOMAIN']}/messages"
  end

  def body
    {
      from: 'Fruneau Avocat <hostmaster@fruneau-avocat.com>',
      to: ENV.fetch('MAILGUN_RECIPIENT_TEST', ContactInfo.current.email),
      subject: "Nouvelle demande de contact",
      text: contact.body,
      html: html_body
    }
  end

  def html_body
    ApplicationController.renderer.render(
      template: 'contact_mailer/contact',
      layout: 'mailer',
      assigns: { contact: }
    )
  end
end
