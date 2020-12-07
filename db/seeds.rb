# require "open-uri"

# file = URI.open('https://giantbomb1.cbsistatic.com/uploads/original/9/99864/2419866-nes_console_set.png')
# article = Article.new(title: 'NES', body: "A great console")
# article.photo.attach(io: file, filename: 'nes.png', content_type: 'image/png')

puts 'Dropping database...'
User.destroy_all

puts 'Creating 3 user ...'

jeremy = User.new(email: 'jbarbedienne3@gmail.com', password: 'jbarbedienne3@gmail.com', admin: true)
jeremy.save

yuma = User.new(email: 'avocat@fruneau-avocat.com', password: 'avocat@fruneau-avocat.com', admin: true)
yuma.save

testaccount = User.new(email: 'test@test.com', password: 'test@test.com', admin: false)
testaccount.save
