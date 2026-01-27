#!/usr/bin/env ruby
# Script to check Postmark email status
# Usage: ruby check_postmark_email.rb <message_id>

require 'net/http'
require 'json'
require 'dotenv/load'

message_id = ARGV[0] || '12ee3acc-db29-41dc-ad92-626cb98270c2'
api_token = ENV['POSTMARK_API_TOKEN']

unless api_token
  puts "❌ Error: POSTMARK_API_TOKEN not found in .env"
  exit 1
end

uri = URI("https://api.postmarkapp.com/messages/outbound/#{message_id}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri)
request['Accept'] = 'application/json'
request['X-Postmark-Server-Token'] = api_token

response = http.request(request)

if response.code == '200'
  data = JSON.parse(response.body)
  
  puts "✅ Email Status Check"
  puts "=" * 50
  puts "Message ID: #{data['MessageID']}"
  puts "To: #{data['Recipients']&.join(', ')}"
  puts "From: #{data['From']}"
  puts "Subject: #{data['Subject']}"
  puts "Status: #{data['MessageEvents']&.last&.dig('Type') || 'Unknown'}"
  puts "Delivered At: #{data['DeliveredAt'] || 'Not delivered'}"
  puts "Bounced: #{data['BouncedAt'] ? 'Yes' : 'No'}"
  puts "Opened: #{data['OpenedAt'] ? 'Yes' : 'No'}"
  puts ""
  puts "Events:"
  data['MessageEvents']&.each do |event|
    puts "  - #{event['Type']} at #{event['ReceivedAt']}"
    puts "    Details: #{event['Details']}" if event['Details']
  end
else
  puts "❌ Error: #{response.code} - #{response.body}"
end
