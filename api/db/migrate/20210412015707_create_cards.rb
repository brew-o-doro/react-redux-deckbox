class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :quantity
      t.string :card_type
      t.string :image

      t.timestamps
    end
  end
end
