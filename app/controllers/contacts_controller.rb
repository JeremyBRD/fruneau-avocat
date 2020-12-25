class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create(redirectPath)
    @contact = Contact.new(contact_params)
    if @contact.valid?
      ContactMailer.contact(@contact).deliver_now
      redirect_to new_contact_url
      flash[:notice] = "Nous avons reçu votre message et reviendrons vers vous rapidement"
    else
      flash[:notice] = "Une erreur c'est produite, veuillez réessayer."
      render :new
    end
  end

private

  def contact_params
      params.require(:contact).permit(:name, :email, :body)
  end

end
