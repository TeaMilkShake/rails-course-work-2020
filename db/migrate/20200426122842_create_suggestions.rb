class CreateSuggestions < ActiveRecord::Migration[6.0]
  def change
    create_table :suggestions do |t|
      t.string :description
      t.string :price
      t.string :square
      t.string :city
      t.string :address
      t.string :owner
      t.string :category
      t.string :flat_type

      t.timestamps
    end
  end
end
