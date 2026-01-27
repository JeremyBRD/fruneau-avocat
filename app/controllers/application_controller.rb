class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  before_action :contact_info

  private

  def contact_info
    @contact_info = ContactInfo.find_by(current_info: true)
  end
end
