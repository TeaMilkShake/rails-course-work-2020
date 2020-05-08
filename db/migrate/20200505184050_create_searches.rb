class CreateSearches < ActiveRecord::Migration[6.0]
  def change
    create_table :searches do |t|
      t.string :price
      t.string :square
      t.string :city
      t.string :category
      t.string :flat_type

      t.timestamps
    end
  end
end
