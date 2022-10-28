class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.text :image_url
      t.string :title
      t.integer :price
      t.string :genre
      t.string :description
      t.string :platform

      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
