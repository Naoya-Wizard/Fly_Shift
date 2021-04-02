class CreateCreates < ActiveRecord::Migration[6.0]
  def change
    create_table :creates do |t|
      t.text   :shift, null: false
      t.integer  :month_id, null: false
      t.timestamps
    end
  end
end
