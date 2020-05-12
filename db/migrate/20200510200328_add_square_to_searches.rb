class AddSquareToSearches < ActiveRecord::Migration[6.0]
  def change
    add_column :searches, :squareFrom, :float
    add_column :searches, :squareTo, :float
  end
end
