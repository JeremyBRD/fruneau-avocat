module ApplicationHelper
  require 'date'

  def copiright_year_update
    @date_footer = DateTime.now.year
  end
end
