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
      from: contact.email,
      to: ENV.fetch('MAILGUN_RECIPIENT_TEST', ContactInfo.current.email),
      subject: "Nouveau message de #{contact.name} via fruneau-avocat.com",
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
