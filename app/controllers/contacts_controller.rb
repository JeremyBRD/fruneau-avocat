class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)

    if recaptcha_valid? && @contact.valid?
      send_mail!

      flash[:notice] = "Votre message a été envoyé avec succès."
      redirect_to root_path
    else
      flash[:alert] = "Une erreur c'est produite, veuillez réessayer."
      render :new, status: :unprocessable_entity
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :body)
  end

  def recaptcha_valid?
    Recaptcha.configuration.site_key.present? ? verify_recaptcha(model: @contact) : true
  end

  def send_mail!
    ContactMailer.contact(@contact).deliver_now
  end
end
