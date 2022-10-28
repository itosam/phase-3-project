puts "🌱 Seeding spices..."

# Seed your database here


elden = Game.create(title: "Elden Ring", price: 49.99, genre: "fantasy action", platform: "ps5, pc", image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1666286418")
hades = Game.create(title: "Hades", price: 31.49, genre: "underworld action", platform: "ps5, xbox, pc", image_url: "https://i.ytimg.com/vi/Bz8l935Bv0Y/maxresdefault.jpg")
deathloop = Game.create(title: "Deathloop", price: 19.99, genre: "action", platform: "ps4, xbox", image_url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEATHLOOP_ArkaneStudios_S1_2560x1440-bf6d342edbd2411ccf24e326852fca93")
halo = Game.create(title: "Halo Infinite", price: 49.99, genre: "adventure action", platform: "xbox, pc", image_url: "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png")
forza = Game.create(title: "forza Horizon", price: 59.99, genre: "racing", platform: "xbox, pc", image_url: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1665784964")
ratchet = Game.create(title: "Ratchet & Clank", price: 79.99, genre: "adventure action", platform: "ps4, pc", image_url: "https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/DwVjpbKOsFOyPdNzmSTSWuxG.png")
metroid = Game.create(title: "Metroid Dread", price: 46.49, genre: "adventure action", platform: "nintendo Switch", image_url: "https://i.ytimg.com/vi/V_XnbTayTH4/mqdefault.jpg")
call = Game.create(title: "Call of duty modern warfare", price: 69.99, genre: "shooting", platform: "ps4, pc", image_url: "https://m.media-amazon.com/images/M/MV5BMTc3NWY2ZTMtNTNlZC00MWM2LWI5MzYtMmU1YzY0ODk5ZjQ1XkEyXkFqcGdeQXVyODA2MTkwODk@._V1_.jpg")
horizon = Game.create(title: "Horizon Forbidden West", price: 79.99, genre: "role-action", platform: "ps4, ps5", image_url: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png")
pokemon = Game.create(title: "Pokemon Legends", price: 69.99, genre: "adventure", platform: "nintendo switch", image_url: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero")

sam = User.create(name: "Sam", lastname:"Ito", username: "sam", password: "sam123")
joshua = User.create(name: "Joshua", lastname:"Campos", username: "joshua", password: "joshua123")
ismael = User.create(name: "Ismael", lastname:"Aceves", username: "ismael", password: "ismael123")
tyler = User.create(name: "Tyler", lastname:"Martinez", username: "tyler", password: "tyler123")


Review.create(score: 5, comment:"This is a amazing game to play", game_id: elden.id, user_id: sam.id)
Review.create(score: 4, comment: "A great game to play", game_id: hades.id, user_id: joshua.id)
Review.create(score: 4, comment: "Like to play this one", game_id: deathloop.id, user_id: ismael.id)
Review.create(score: 3, comment: "I play it few times", game_id: halo.id, user_id: tyler.id)
Review.create(score: 1, comment: "Not the best", game_id: forza.id, user_id: sam.id)
Review.create(score: 2, comment: "I play better ones", game_id: ratchet.id, user_id: joshua.id)
Review.create(score: 3, comment: "fun to play", game_id: metroid.id, user_id: ismael.id)
Review.create(score: 5, comment: "My best game ever", game_id: call.id, user_id: tyler.id)
Review.create(score: 3, comment: "hade fun.", game_id: horizon.id, user_id: sam.id)
Review.create(score: 5, comment: "Still enjoy this game.", game_id: pokemon.id, user_id: joshua.id)

puts "✅ Done seeding!"
