class CreateHumen < ActiveRecord::Migration[6.0]
  def change
    create_table :humen do |t|
      t.string :name
      t.string :email
      t.integer :number
      t.string :password_digest

      t.timestamps
    end
  end
end
