class ApplicationController < ActionController::Base
  before_action :contact_info

  private

  def contact_info
    @contact_info = ContactInfo.current
  end
end
