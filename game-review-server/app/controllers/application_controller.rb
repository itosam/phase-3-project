class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/games" do
    games = Game.all
    games.to_json
  end

  get '/users' do
    users = User.all
    users.to_json
  end

  get '/users/:id' do
    user = User.find(params[:id])
    user.to_json
  end

  get '/games/:id' do
    game = Game.find(params[:id])
    game.to_json(include: { reviews: { include: :user } })
  end

  get '/reviews' do
    review = Review.all
    review.to_json
  end

  post '/reviews' do
    review = Review.new(params[:review])
    review.save
    review.to_json
  end

  delete '/reviews/:id' do
    review = Review.find(params[:id])
    review.destroy
  end
  


  

end
