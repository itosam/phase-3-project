class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :score
      t.string :comment
      t.integer :game_id
      t.integer :user_id

      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
