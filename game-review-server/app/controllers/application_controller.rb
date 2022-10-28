class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # Add your routes here
  #Games route
  get "/games" do
    games = Game.all
    games.to_json(include: { reviews: { include: :user } })
  end
  #Users routes
  get '/users' do
    users = User.all
    users.to_json
  end
  get '/users/:id' do
    user = User.find(params[:id])
    user.to_json
  end
  post '/users' do
    newUser = User.new(params)
    newUser.save
    newUser.to_json
  end
  patch '/users/:id' do
    updateUser = User.find(params[:id])
    updateUser[:password] = params[:password]
    updateUser.save
    User.find(params[:id]).to_json
  end
  delete '/users/:id' do
    deleteUser = User.find(params[:id])
    deleteUser.reviews.destroy_all
    deleteUser.destroy
    deleteUser.save
  end
  get '/games/:id' do
    game = Game.find(params[:id])
    game.to_json(include: { reviews: { include: :user } })
  end
  #Reviews route
  get '/reviews' do
    reviews = Review.all
    reviews.to_json(only: [:id, :score, :comment, :game_id, :user_id, :created_at, :updated_at], include: {
      user: { only: [:id, :name, :lastname]}
    })
  end
  post '/reviews' do
    review = Review.new(params)
    review.save
    review.to_json(include: :user)
  end
  delete '/reviews/:id' do
    review = Review.find(params[:id])
    review.destroy
  end
  get '/gamesReview/:id' do
    sum = Game.find(params[:id]).reviews.sum{|r| r.score}
    reviewCount = Game.find(params[:id]).reviews.count
    a = reviewCount * 5
    calculate = sum * 100 / a
    f = calculate * 0.05
    f.to_json
  end
end












