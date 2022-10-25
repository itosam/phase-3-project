puts "🌱 Seeding spices..."

# Seed your database here


elden = Game.create(title: "Elden Ring", price: 49.99, genre: "fantasy action", platform: "ps5, pc", image_url: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/02/ER-head.jpg")
hades = Game.create(title: "Hades", price: 31.49, genre: "underworld action", platform: "ps5, xbox, pc", image_url: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/03/Wallpaper_Zagreus01.jpg?resize=2048,1151")
deathloop = Game.create(title: "Deathloop", price: 19.99, genre: "action", platform: "ps4, xbox", image_url: "https://www.stuff.tv/wp-content/uploads/sites/2/2021/07/8._deathloop_julianna_1.jpg")
halo = Game.create(title: "Halo Infinite", price: 49.99, genre: "adventure action", platform: "xbox, pc", image_url: "https://www.stuff.tv/wp-content/uploads/sites/2/2021/12/halo-infinite6.png")


sam = User.create(name: "Sam")
joshua = User.create(name: "Joshua")
ismael = User.create(name: "Ismael")
tyler = User.create(name: "Tyler")


Review.create(score: 5, comment:"This is a amazing game to play", game_id: elden.id, user_id: sam.id)
Review.create(score: 4, comment: "A great game to play", game_id: hades.id, user_id: joshua.id)
Review.create(score: 4, comment: "Like to play this one", game_id: deathloop.id, user_id: ismael.id)
Review.create(score: 3, comment: "I play it few times", game_id: halo.id, user_id: tyler.id)


puts "✅ Done seeding!"
