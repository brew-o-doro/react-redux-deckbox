class CreateScratchpads < ActiveRecord::Migration[6.1]
  def change
    create_table :scratchpads do |t|
      t.string :text

      t.timestamps
    end
  end
end
