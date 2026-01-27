source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.4.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 8.0.4'
# Use postgresql as the database for Active Record
gem "pg", "~> 1.5"
# Use Puma as the app server
gem 'puma', "~> 6.4"
# The modern asset pipeline for Rails [https://github.com/rails/propshaft]
gem "propshaft"
# SCSS compilation
gem "dartsass-rails"
# JavaScript importmap
gem 'importmap-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
# gem 'turbolinks', '~> 5'
gem "turbo-rails"
# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 4.0'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# Required by spring-watcher-listen in Ruby 3.4+
gem "mutex_m"

gem "connection_pool", "< 3"

gem 'postmark-rails'

gem 'autoprefixer-rails'
gem 'font-awesome-sass'
gem 'simple_form'

group :development, :test do
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'dotenv-rails'
  gem 'rubocop', require: false

  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri windows]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # Open a preview in the browser instead of sending
  gem 'letter_opener', '~> 1.7'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[windows jruby]
gem "recaptcha"
