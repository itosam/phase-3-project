class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  # get "/game_reviews" do
  #   games = Game.all
  #   bakeries.to_json
  # end

  # get "/bakeries/:id" do
  #   bakery = Bakery.find(params[:id])
  #   bakery.to_json(include: :baked_goods)
  # end

  # get "/baked_goods/by_price" do
  #   baked_goods = BakedGood.by_price
  #   baked_goods.to_json
  # end

  # get "/baked_goods/most_expensive" do
  #   baked_goods = BakedGood.by_price.first
  #   baked_goods.to_json
  # end

end
