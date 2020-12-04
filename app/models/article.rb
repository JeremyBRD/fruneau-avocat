class Article < ApplicationRecord
  has_one_attached :photo
  has_rich_text :rich_body
end
