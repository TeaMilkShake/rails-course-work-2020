class Suggestion < ApplicationRecord
    before_save do
        self.category.gsub!(/[\[\]\"]/,"")
        self.flat_type.gsub!(/[\[\]\"]/,"")
    end

    has_one_attached :image1
    has_one_attached :image2
    has_one_attached :image3
end
