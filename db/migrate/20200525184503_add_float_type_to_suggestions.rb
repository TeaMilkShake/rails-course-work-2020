class AddFloatTypeToSuggestions < ActiveRecord::Migration[6.0]
  def change
    add_column :suggestions, :priceFloat, :float 
    add_column :suggestions, :squareFloat, :float 
  end
end
