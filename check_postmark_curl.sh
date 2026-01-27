#!/bin/bash
# Quick script to check Postmark email status with curl
# Usage: ./check_postmark_curl.sh <message_id>

MESSAGE_ID=${1:-"12ee3acc-db29-41dc-ad92-626cb98270c2"}
API_TOKEN=$(grep POSTMARK_API_TOKEN .env | cut -d '=' -f2)

if [ -z "$API_TOKEN" ]; then
  echo "❌ Error: POSTMARK_API_TOKEN not found in .env"
  exit 1
fi

echo "Checking email status for Message-ID: $MESSAGE_ID"
echo ""

curl -X GET "https://api.postmarkapp.com/messages/outbound/$MESSAGE_ID" \
  -H "Accept: application/json" \
  -H "X-Postmark-Server-Token: $API_TOKEN" \
  | python3 -m json.tool 2>/dev/null || cat
