class AddPriceAndsquareToSuggestions < ActiveRecord::Migration[6.0]
  def change
    add_column :searches, :priceFrom, :float
    add_column :searches, :priceTo, :float
  end
end
