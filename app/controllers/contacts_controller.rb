class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if verify_recaptcha(model: @contact) && @contact.valid?
      ContactMailer.contact(@contact).deliver_now
      redirect_to '/'
    else
      flash[:notice] = "Une erreur c'est produite, veuillez réessayer."
    end
  end

private

  def contact_params
      params.require(:contact).permit(:name, :email, :body)
  end

end
