class CreateCreates < ActiveRecord::Migration[6.0]
  def change
    create_table :creates do |t|
      t.string   :shift
      t.timestamps
    end
  end
end
