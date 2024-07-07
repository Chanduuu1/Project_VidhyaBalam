const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://preview.redd.it/z1h72ojv15s91.jpg?width=1080&crop=smart&auto=webp&s=1298e08b48ac63f1b319476bbe1d1e0054aecd98",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.8067, 34.0259],
    },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://img.etimg.com/photo/msid-98607114,imgsize-1219622/AdvancedProblemsinOrganicChemistry.jpg",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.0059, 40.7128],
    },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://img.clasf.in/2023/11/30/O-P-Tandon-chemistry-reference-book-for-IIT-JEE-20231130020929.7320310015.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911],
    },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://m.media-amazon.com/images/I/61qRRS+85UL.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://cdn.shopify.com/s/files/1/0855/0619/5729/files/9789355646880.jpg?v=1714392103&width=600",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231],
    },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://qph.cf2.quoracdn.net/main-qimg-cf2482ee611bc5d2d5ae51b7ffb015fd-lq",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://raibookshop.com/image/cache/catalog/Upsc/IMG-20230118-WA0004-1000x1000.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0441, 39.0968],
    },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeXfrdj9cdgiTXp1Mzpsf_rioXQ4voh-3RSvbvrKkt5op4_j-uRuNE5GLl2Bdn8amNAo&usqp=CAU",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://icai-cds.org/ICAIShop/resources/productImages/Final%20Gr%20II.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.2334, 46.0956],
    },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://icai-cds.org/ICAIShop/resources/productImages/Inter%20Hindi%20Gr%20I.jpg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.7984, -2.3333],
    },
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://qph.cf2.quoracdn.net/main-qimg-514e24405ba7610d662ac6ecb912505c-lq",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkJJQs5wXvWjdLiaHiX4ysQ5qWtTsWylZUFItWxS27be6-om6HE6Ln2iSy2H-ImqnTS8&usqp=CAU",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [179.1945, -16.5782],
    },
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://www.clankart.com/user-uploads/advert/CA_Final_course_study_books1706551448166.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.7603, 51.833],
    },
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://grbathla.com/wp-content/uploads/2021/01/Neet-Books.jpg",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.0589, 42.3601],
    },
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://ask.exprto.com/uploads/default/original/1X/b804ee971961f2b09de38218fd89e4237b9c76de.jpeg",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://eazysale.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/03034000/Arihant-GATE-TUTOR-2024-Computer-Science-Information-Technology.png",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://bookflow.in/wp-content/uploads/2024/03/ENGG-1-760x410.png.webp",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617],
    },
  },
  {
    title: "Luxury Yurt in Mongolia",
    description:
      "Experience the traditional nomadic lifestyle in a luxury yurt, with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://www.acelot.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-20-at-4.10.40-PM.jpeg",
    },
    price: 700,
    location: "Ulaanbaatar",
    country: "Mongolia",
    geometry: {
      type: "Point",
      coordinates: [106.917, 47.8864],
    },
  },
  {
    title: "Eco-Friendly Tiny House",
    description:
      "Reduce your carbon footprint in this eco-friendly tiny house equipped with solar panels.",
    image: {
      filename: "listingimage",
      url: "https://leverageedu.com/blog/wp-content/uploads/2021/01/Book-vs-Movie.jpg",
    },
    price: 600,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231],
    },
  },
  {
    title: "Palatial Riad in Marrakech",
    description:
      "Live like royalty in this opulent riad, featuring intricate mosaics and a beautiful courtyard.",
    image: {
      filename: "listingimage",
      url: "https://cdn.shopify.com/s/files/1/0855/0619/5729/files/WhatsApp_Image_2022-04-19_at_9.30.23_AM_1.jpg?v=1649758034",
    },
    price: 2800,
    location: "Marrakech",
    country: "Morocco",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295],
    },
  },
  {
    title: "Luxury Yacht in the Mediterranean",
    description:
      "Sail the turquoise waters of the Mediterranean in this fully-equipped luxury yacht.",
    image: {
      filename: "listingimage",
      url: "https://lh3.googleusercontent.com/p/AF1QipOsE-JuayYKoHsFM-iXGzIv2MYI6H1H5b4YVAFy=s1360-w1360-h1020",
    },
    price: 10000,
    location: "Monaco",
    country: "Monaco",
    geometry: {
      type: "Point",
      coordinates: [7.4246, 43.7384],
    },
  },
  {
    title: "Traditional Ryokan in Kyoto",
    description:
      "Immerse yourself in Japanese culture with a stay in a traditional ryokan, complete with tatami mats and hot springs.",
    image: {
      filename: "listingimage",
      url: "https://qph.cf2.quoracdn.net/main-qimg-249456d585c5f32e1f2ec4ba38ffb032.webp",
    },
    price: 1300,
    location: "Kyoto",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
  },

  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-110.3626, 46.8797],
    },
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.3289, 37.4467],
    },
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-83.7534, 9.7489],
    },
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-79.9311, 32.7765],
    },
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.5724, 43.1939],
    },
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911],
    },
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-83.7534, 9.7489],
    },
  },
];

module.exports = { data: sampleListings };
