# Vérifier le statut d'un email Postmark via API

## Méthode 1 : Script Ruby

```bash
# Utiliser le Message-ID de l'email
ruby check_postmark_email.rb 12ee3acc-db29-41dc-ad92-626cb98270c2
```

## Méthode 2 : Script Shell (curl)

```bash
./check_postmark_curl.sh 12ee3acc-db29-41dc-ad92-626cb98270c2
```

## Méthode 3 : Curl direct

```bash
curl -X GET "https://api.postmarkapp.com/messages/outbound/12ee3acc-db29-41dc-ad92-626cb98270c2" \
  -H "Accept: application/json" \
  -H "X-Postmark-Server-Token: $(grep POSTMARK_API_TOKEN .env | cut -d '=' -f2)"
```

## Méthode 4 : Dans Rails Console

```ruby
require 'net/http'
require 'json'

message_id = '12ee3acc-db29-41dc-ad92-626cb98270c2'
api_token = ENV['POSTMARK_API_TOKEN']

uri = URI("https://api.postmarkapp.com/messages/outbound/#{message_id}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri)
request['Accept'] = 'application/json'
request['X-Postmark-Server-Token'] = api_token

response = http.request(request)
data = JSON.parse(response.body)

puts "Status: #{data['MessageEvents']&.last&.dig('Type')}"
puts "Delivered: #{data['DeliveredAt']}"
puts "Bounced: #{data['BouncedAt'] ? 'Yes' : 'No'}"
```

## Documentation API Postmark

- Endpoint: `GET https://api.postmarkapp.com/messages/outbound/{messageId}`
- Documentation: https://postmarkapp.com/developer/api/messages-api#outbound-message-details
