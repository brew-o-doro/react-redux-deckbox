puts "Seeding..."

Card.destroy_all


c1 = Card.create( name: 'Big Card', quantity: 4, card_type: 'trainer', image: 'https://i.ebayimg.com/images/g/xqcAAOSwjQRfpJet/s-l500.jpg')
c2 = Card.create( name: 'Bigger Card', quantity: 4, card_type: 'support', image: 'https://img.redbull.com/images/c_crop,x_0,y_0,h_500,w_400/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2017/10/20/6d662536-3fed-4236-8db7-14c16d08e5c0/shiny-gyarados-pokemon-trading-card-game')
c3 = Card.create( name: 'Biggest Card', quantity: 4, card_type: 'trainer', image: 'https://static.wikia.nocookie.net/cardfight/images/b/b8/G-TD12-003EN.png/revision/latest?cb=20170214151038')




puts "Seeding complete!"