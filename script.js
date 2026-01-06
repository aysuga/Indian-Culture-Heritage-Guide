// ---------- Data: State-wise information ----------

// ---------- WEATHER CONFIG ----------
const OPENWEATHER_API_KEY = "f53b6d6df95b18d3e0c4a89331e9a54c"; 

const stateData = {

  // Andaman & Nicobar Islands

"Andaman and Nicobar Islands": {
  Region: "Eastern India",         
  Capital: "Port Blair",           
  weatherCity: "Port Blair",  
   bestTime: "October to April – pleasant weather and calm seas for beaches & water sports.",

  // Outline / map image for Overview tab
  mapImage: "images/maps/andaman-map.png",

  overview:
    "Andaman and Nicobar Islands are a group of picturesque islands located in the Bay of Bengal, known for their crystal-clear waters, pristine beaches, rich marine life and diverse tribal heritage. The region attracts visitors with its tropical forests, coral reefs and calm island lifestyle.",

  history:
    "The islands have been home to several indigenous tribes for thousands of years, including the Great Andamanese, Nicobarese and Sentinelese. During the colonial period, the British established the infamous Cellular Jail, which held Indian freedom fighters under harsh conditions. After India's independence, the islands became a Union Territory in 1956 and gradually developed into a major strategic and tourism destination.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Fish Curry",
      detail:
        "A flavourful coastal-style curry made with freshly caught fish, coconut milk and local spices, reflecting the islanders‚ deep connection to seafood.",
      image: "images/food/andaman-fish-curry.jpg"
    },
    {
      name: "Lobster Masala",
      detail:
        "A rich and aromatic dish prepared using fresh lobster cooked in a spiced masala base, commonly enjoyed in coastal restaurants across the islands.",
      image: "images/food/andaman-lobster.jpg"
    },
    {
      name: "Coconut Prawn Curry",
      detail:
        "A creamy coconut-based curry made with tender prawns, mild spices and herbs, showcasing traditional island flavours.",
      image: "images/food/andaman-prawn-curry.jpg"
    },
    {
      name: "Grilled Squid",
      detail:
        "Fresh squid marinated with herbs, lime and mild spices, then grilled to perfection. A popular seafood dish among locals and tourists.",
      image: "images/food/andaman-grilled-squid.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Radhanagar Beach",
      place: "Havelock Island",
      note:
        "One of Asia's most beautiful beaches, known for its white sand, turquoise waters and peaceful environment. Ideal for swimming and sunset watching.",
      image: "images/places/andaman-radhanagar.jpg"
    },
    {
      name: "Cellular Jail",
      place: "Port Blair",
      note:
        "A national memorial that once housed Indian freedom fighters during British rule, now featuring historical galleries and a popular light-and-sound show.",
      image: "images/places/andaman-cellular-jail.jpg"
    },
    {
      name: "Elephant Beach",
      place: "Havelock Island",
      note:
        "A vibrant beach known for snorkeling, coral reefs and adventure activities such as sea-walking and jet skiing.",
      image: "images/places/andaman-elephant-beach.jpg"
    },
    {
      name: "Ross Island",
      place: "Near Port Blair",
      note:
        "An island famous for British-era ruins, forest pathways, a small museum and wildlife such as deer and peacocks roaming freely.",
      image: "images/places/andaman-ross-island.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Island Tourism Festival",
      detail:
        "The most celebrated festival in the islands, showcasing music, dance, food stalls, handicrafts and cultural performances over several days.",
      image: "images/festivals/andaman-tourism-festival.jpg"
    },
    {
      name: "Subhash Mela",
      detail:
        "Held in Havelock Island to mark the birth anniversary of Netaji Subhas Chandra Bose, featuring fairs, exhibitions and cultural events.",
      image: "images/festivals/andaman-subhash-mela.jpg"
    },
    {
      name: "Mari Amman Festival",
      detail:
        "A popular local festival celebrated with processions, rituals and traditional music in several parts of the islands.",
      image: "images/festivals/andaman-mariamman.jpg"
    },
    {
      name: "Nicobari Dance",
      detail:
        "A graceful and rhythmic group dance performed by the Nicobarese tribe during festivals and community celebrations.",
      image: "images/festivals/andaman-nicobari-dance.jpg"
    }
  ]
},

//Andhra Pradesh

"Andhra Pradesh": {
  Region: "South India",
  Capital: "Amaravati",
  weatherCity: "Vijayawada",
  bestTime: "November to February – comfortable temperatures for temple visits, coastal drives and hill stations like Araku.",
  

  // Outline / map image for the Overview tab
  mapImage: "images/maps/andhra-pradesh-map.png",

  overview:
    "Andhra Pradesh is a southeastern coastal state known for its long Bay of Bengal shoreline, fertile deltas, historic towns and vibrant Telugu culture. \
   Located in the Southern region of India, Andhra Pradesh is reputed for its distinct culture and fine arts. The state is mostly dominated by Telugu speaking people. The state blends ancient traditions with modern urban centers like Visakhapatnam and Vijayawada.",

  history:
    "Ancient Andhra was influenced by empires such as the Satavahanas, Ikshvakus and Eastern Chalukyas. \
The region later flourished under the Vijayanagara Empire and witnessed cultural growth through literature and temple architecture. \
After joining independent India in 1947, Andhra Pradesh became a Telugu-speaking state in 1956, and was reorganized in 2014 when Telangana was carved out.",

  // FOOD 
  food: [
    {
      name: "Pesarattu",
      detail: "A crisp green gram (moong dal) dosa, often served with upma and ginger chutney. It is a popular breakfast dish from the coastal Andhra and Rayalaseema regions.", image: "images/food/pesarattu.jpg" },
    
      {name: "Chepala Pulusu",
      detail:
        "A tangy and spicy fish curry made with tamarind, chilli and aromatic spices, slow-cooked so the fish absorbs all the flavours. It reflects the state's strong coastal food culture.",
      image: "images/food/chepala-pulusu.jpg"
    },
    {
      name: "Gongura Pachadi",
      detail: "A signature Andhra chutney made from sour gongura leaves, known for its bold flavor and often paired with hot rice and ghee.",
      image: "images/food/ap-gongura.jpg"
    },

    {
      name: "Pulihora (Tamarind Rice)",
      detail:
        "A festive rice dish tempered with mustard seeds, curry leaves, peanuts and a tangy tamarind paste. It is commonly prepared for temple offerings and special occasions.",
      image: "images/food/pulihora.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Undavalli Caves",
      place: "Near Vijayawada",
      note:
        "Ancient multi-storey rock-cut caves overlooking the Krishna River, known for their monolithic pillars, carved shrines and a large reclining Vishnu sculpture.",
      image: "images/places/undavalli-caves.jpg"
    },
    {
      name: "Gandikota",
      place: "Kadapa district",
      note:
        "Often called the Grand Canyon of India, Gandikota features a dramatic gorge carved by the Pennar River, along with a historical fort and old temples and mosques.",
      image: "images/places/gandikota.jpg"
    },
    {
      name: "Araku Valley",
      place: "Near Visakhapatnam",
      note:
        "A scenic hill station in the Eastern Ghats known for coffee plantations, waterfalls, tribal culture and cool climate, popular as a weekend getaway.",
      image: "images/places/araku-valley.jpg"
    },
    {
      name: "Tirumala Temple",
      place: "Tirupati",
      note: "Home to the famous Sri Venkateswara Temple, one of the most visited pilgrimage sites in the world.",
      image: "images/places/ap-tirupati.jpg"
    }

  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Sankranti (Pedda Panduga)",
      detail:
        "The major harvest festival of Andhra Pradesh, celebrated with colourful rangoli (muggu), decorated cattle, flying kites, special sweets and family gatherings over three festive days.",
      image: "images/festivals/sankranti-andhra.jpg"
    },
    {
      name: "Ugadi",
      detail:
        "The Telugu New Year festival, marked by the preparation of Ugadi pachadi, which blends sweet, sour, bitter and spicy tastes to symbolize the different flavors of life.",
      image: "images/festivals/ugadi.jpg"
    },
    {
      name: "Visakha Utsav",
      detail:
        " Three Day Annual Festival to celebrate and promote the unique culture, traditions, and tourism of Visakhapatnam.",
      image: "images/festivals/Visakha-utsav.jpg"
    },
    {
      name: "Kuchipudi Dance",
      detail:
        "A classical dance form that originated in the village of Kuchipudi in Andhra Pradesh, combining expressive acting, graceful movements and strong storytelling.",
      image: "images/festivals/kuchipudi-dance.jpg"
    }
  ]
},


//Arunachal Pradesh

"Arunachal Pradesh": {
  Region: "North-East India",
  Capital: "Itanagar",
  weatherCity:"Itanagar",
  bestTime: "March to June & September to October – clear skies and cool weather for monasteries, valleys and mountain passes.",

  // Map outline for Overview tab
  mapImage: "images/maps/arunachal-pradesh-map.png",

  // ---------- OVERVIEW ----------
  overview:
    "Arunachal Pradesh, the 'Land of the Rising Sun', is a serene Himalayan state known for snow-capped mountains, Buddhist monasteries, lush forests and diverse tribal cultures. \
Its natural beauty and strategic location along the borders with Bhutan, China and Myanmar make it one of India's most unique states.",

  // ---------- HISTORY ----------
  history:
    "The region has long been home to indigenous tribes with rich traditions and distinct cultural identities. \
Buddhism spread into the western districts through Tibetan influence, leading to the establishment of monasteries like Tawang. \
During British rule, the region was known as the North-East Frontier Agency (NEFA). It became a Union Territory in 1972 and achieved full statehood in 1987.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Thukpa",
      detail:
        "A Tibetan-style noodle soup with vegetables, herbs and mild spices. It is a staple during the cold winters.",
      image: "images/food/arunachal-thukpa.jpg"
    },
    {
      name: "Pika Pila",
      detail:
        "A traditional pickle made from bamboo shoot, chili and pork fat, commonly enjoyed by the Apatani tribe.",
      image: "images/food/arunachal-pikapila.jpg"
    },
    {
      name: "Zan / Khapse",
      detail:
        "Rice-based soft cakes or fried snacks served with stews and tea, often prepared during festivals.",
      image: "images/food/arunachal-ricecakes.jpg"
    },
    {
      name: "Lukter",
      detail:
        "A Monpa delicacy made with roasted meat (often beef) mixed with chili flakes, enjoyed for its smoky flavour.",
      image: "images/food/arunachal-lukter.jpg"
    }
  ],

  // ---------- PLACES  ----------
  places: [
    {
      name: "Tawang Monastery",
      place: "Tawang",
      note:
        "India's largest monastery and a major centre of Mahayana Buddhism, set amidst breathtaking Himalayan scenery.",
      image: "images/places/arunachal-tawang-monastery.jpg"
    },
    {
      name: "Gekar Sinyi",
      place: "Itanagar",
      note:
        "A peaceful natural lake surrounded by forests, popular for boating and scenic views.",
      image: "images/places/arunachal-ganga-lake.jpg"
    },
    {
      name: "Bomdila",
      place: "West Kameng",
      note:
        "A charming hill town known for monasteries, apple orchards and panoramic Himalayan vistas.",
      image: "images/places/arunachal-bomdila.jpg"
    },
    {
      name: "Sela Pass",
      place: "Between Tawang & West Kameng",
      note:
        "A high-altitude mountain pass at 13,700 ft featuring snow-bound landscapes and the sacred Sela Lake.",
      image: "images/places/arunachal-sela-pass.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Losar",
      detail:
        "The Monpa tribe's New Year celebration, involving traditional dances, prayers, feasts and colourful gatherings.",
      image: "images/festivals/arunachal-losar.jpg"
    },
    {
      name: "Dree Festival",
      detail:
        "The Apatani tribe's agricultural festival celebrated with rituals, dance and prayers for good harvest and prosperity.",
      image: "images/festivals/arunachal-dree.jpg"
    },
    {
      name: "Siang River Festival",
      detail:
        "A lively celebration showcasing adventure sports, tribal culture, river ceremonies and local music traditions.",
      image: "images/festivals/arunachal-siang-festival.jpg"
    },
    {
      name: "Ponung Dance",
      detail:
        "A traditional folk dance of the Adi tribe performed by groups of women, accompanied by rhythmic chants led by a Miri (priest).",
      image: "images/festivals/arunachal-ponung.jpg"
    }
  ]
},

//Assam

"Assam": {
  Region: "North-East India",
  Capital: "Dispur",
   weatherCity:"Dispur",
   bestTime: "November to March – cool, dry season ideal for tea gardens, Kaziranga safaris and river-island visits.",


  // Map for Overview tab
  mapImage: "images/maps/assam-map.png",

  // ---------- OVERVIEW ----------
  overview:
    "Assam, the gateway to Northeast India, is known for its lush tea gardens, rich wildlife, river islands and vibrant cultural heritage. \
The mighty Brahmaputra River flows across the state, shaping its landscape, traditions and economy.",

  // ---------- HISTORY ----------
  history:
    "Ancient Assam was ruled by the Kamarupa Kingdom followed by the Ahom dynasty, which governed for nearly 600 years and shaped the region's identity. \
The arrival of Vaishnavite reformer Srimanta Sankardev in the 15th century brought major cultural transformation. \
During British rule, Assam became a global tea-producing hub. After independence, it remained the heart of northeastern trade, culture and biodiversity.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Assamese Thali",
      detail:
        "A wholesome platter featuring rice, dal, leafy greens, pitika, fish curry and local vegetables, showcasing the mild yet flavourful Assamese cuisine.",
      image: "images/food/assam-thali.jpg"
    },
    {
      name: "Masor Tenga",
      detail:
        "A light and tangy fish curry made with tomatoes or elephant apple (ou tenga), known for its refreshing sour taste.",
      image: "images/food/assam-masor-tenga.jpg"
    },
    {
      name: "Khar",
      detail:
        "A traditional alkaline dish prepared using raw papaya, pulses or fish, flavoured with the unique ‚kola khar's filtered extract.",
      image: "images/food/assam-khar.jpg"
    },
    {
      name: "Pitha",
      detail:
        "Traditional rice cakes made during Bihu, often stuffed with coconut and jaggery or shaped into crispy fried varieties.",
      image: "images/food/assam-pitha.jpg"
    }
  ],

  // ---------- PLACES TO VISIT----------
  places: [
    {
      name: "Kaziranga National Park",
      place: "Golaghat & Nagaon",
      note:
        "A UNESCO World Heritage Site home to the world's largest population of one-horned rhinoceros, along with diverse birds and wildlife.",
      image: "images/places/assam-kaziranga.jpg"
    },
    {
      name: "Majuli Island",
      place: "Brahmaputra River",
      note:
        "The world's largest river island, known for its Satras (Vaishnavite monasteries), tribal culture, scenic landscapes and pottery villages.",
      image: "images/places/assam-majuli.jpg"
    },
    {
      name: "Kamakhya Temple",
      place: "Guwahati",
      note:
        "One of the 51 Shakti Peethas dedicated to Goddess Kamakhya, located atop Nilachal Hill with panoramic views of Guwahati.",
      image: "images/places/assam-kamakhya.jpg"
    },
    {
      name: "Sivasagar",
      place: "Upper Assam",
      note:
        "A historic town showcasing Ahom-era monuments including Rang Ghar, Talatal Ghar and the iconic Sivasagar Tank.",
      image: "images/places/assam-sivasagar.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE----------
  festivals: [
    {
      name: "Bihu",
      detail:
        "Assam's most important festival, comprising Rongali, Bhogali and Kongali Bihu, celebrated with folk dances, songs, feasts and agricultural rituals.",
      image: "images/festivals/assam-bihu.jpg"
    },
    {
      name: "Ambubachi Mela",
      detail:
        "A major spiritual festival held at the Kamakhya Temple, marking the annual fertility rites of Goddess Kamakhya.",
      image: "images/festivals/assam-ambubachi.jpg"
    },
    {
      name: "Tea Festival",
      detail:
        "Celebrated in Jorhat, this festival highlights Assam's tea culture through garden tours, tea tasting, exhibitions and cultural programs.",
      image: "images/festivals/assam-tea-festival.jpg"
    },
    {
      name: "Sattriya Dance",
      detail:
        "A classical dance form introduced by Vaishnavite saint Srimanta Sankardev, performed with expressive hand movements, storytelling and devotional themes.",
      image: "images/festivals/assam-sattriya.jpg"
    }
  ]
},


// Bihar
"Bihar": {
  Region: "East India",
  Capital: "Patna",
  weatherCity: "Patna",
  bestTime: "October to March – pleasant winter climate for exploring Bodh Gaya, Nalanda and other heritage sites.",
  // Map image for Overview tab
  mapImage: "images/maps/bihar-map.png",

  // ---------- OVERVIEW ----------
  overview:
    "Bihar, located along the fertile plains of the Ganga River, is one of India's oldest cultural regions known for its ancient universities, Buddhist heritage, vibrant festivals and agricultural richness. \
It played a central role in the development of religions like Buddhism and Jainism.",

  // ---------- HISTORY ----------
  history:
    "Historically, Bihar was the heart of major ancient empires such as the Magadha Kingdom, Mauryan Empire and Gupta Empire. \
Nalanda and Vikramshila Universities made it a global learning center. Buddhism spread from Bodh Gaya after the enlightenment of Gautama Buddha. \
Following medieval changes and British rule, modern Bihar emerged after India's independence, with Jharkhand carved out in 2000.",

  // ---------- FOOD  ----------
  food: [
    {
      name: "Litti Chokha",
      detail:
        "A traditional Bihari dish made of roasted wheat balls stuffed with sattu, served with mashed roasted brinjal, tomato or potato chokha.",
      image: "images/food/bihar-litti-chokha.jpg"
    },
    {
      name: " Silao Khaja",
      detail:
        "A layered crispy sweet made from flour and sugar syrup, famously prepared during the Chhath Puja festivities in Bihar.",
      image: "images/food/bihar-khaja.jpg"
    },
    {
      name: "Sattu Paratha",
      detail:
        "A nutritious flatbread stuffed with roasted gram flour, spices and herbs, commonly eaten for breakfast across Bihar.",
      image: "images/food/bihar-sattu-paratha.jpg"
    },
    {
      name: "Dal Pitha",
      detail:
        "Rice flour dumplings stuffed with lentil paste and steamed; a healthy and traditional homemade delicacy.",
      image: "images/food/bihar-dal-pitha.jpg"
    }
  ],

  // ---------- PLACES TO VISIT ----------
  places: [
    {
      name: "Mahabodhi Temple",
      place: "Bodh Gaya",
      note:
        "A UNESCO World Heritage site marking the spot where Gautama Buddha attained enlightenment under the Bodhi Tree.",
      image: "images/places/bihar-mahabodhi.jpg"
    },
    {
      name: "Nalanda University Ruins",
      place: "Nalanda",
      note:
        "The ancient ruins of one of the world's earliest residential universities, once home to thousands of scholars from Asia.",
      image: "images/places/bihar-nalanda.jpg"
    },
    {
      name: "Vikramshila University Ruins",
      place: "Bhagalpur",
      note:
        "Another major ancient Buddhist learning center known for teaching Tantric Buddhism and scholarly research.",
      image: "images/places/bihar-vikramshila.jpg"
    },
    {
      name: "Patna Sahib Gurudwara",
      place: "Patna",
      note:
        "A major Sikh pilgrimage site built at the birthplace of Guru Gobind Singh, the tenth Sikh Guru.",
      image: "images/places/bihar-patna-sahib.jpg"
    }
  ],

  // ---------- FESTIVALS----------
  festivals: [
    {
      name: "Chhath Puja",
      detail:
        "Bihar's most important festival dedicated to Sun God, where devotees offer prayers standing in rivers or ponds during sunrise and sunset.",
      image: "images/festivals/bihar-chhath.jpg"
    },
    {
      name: "Sonepur Mela",
      detail:
        "One of Asia's largest traditional fairs held near the Ganga-Gandak confluence, known for cattle trading, folk performances and cultural exhibits.",
      image: "images/festivals/bihar-sonepur.jpg"
    },
    {
      name: "Buddha Jayanti",
      detail:
        "Celebrated across Bodh Gaya and other Buddhist sites to commemorate the birth, enlightenment and death of Gautama Buddha.",
      image: "images/festivals/bihar-buddha-jayanti.jpg"
    },
    {
      name: "Jat-Jatin Dance",
      detail:
        "A traditional folk dance of Mithila performed during monsoon evenings, depicting love, separation and reunion in rural life.",
      image: "images/festivals/bihar-jat-jatin.jpg"
    }
  ]
},

//Chandigarh

"Chandigarh": {
  Region: "Northern India",
  Capital: "Chandigarh",
  weatherCity:"Chandigarh",
  bestTime: "October to March – mild winters perfect for Sukhna Lake walks, Rock Garden and Rose Garden festivals.",

  // Outline / map image for the Overview tab
  mapImage: "images/maps/chandigarh-map.png",

  overview:
    "Chandigarh is a Union Territory that serves as the shared capital of both Punjab and Haryana. \
Designed by the famous architect Le Corbusier, it is known for its well-planned sectors, green spaces and high quality of life. \
The city blends modern urban architecture with lakes, gardens and a calm lifestyle compared to other metros.",

  history:
    "After India's independence, Chandigarh was conceived as a new modern capital to replace Lahore, \
which went to Pakistan after Partition in 1947. The city's master plan was prepared by Le Corbusier in the 1950s, \
making it one of India's earliest planned cities. Over time, Chandigarh has grown into an important administrative, \
educational and cultural centre for North India, while still retaining its reputation as a clean and organised city.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Chole Bhature",
      detail:
        "A classic North Indian dish of spicy chickpea curry served with deep-fried, fluffy bhature. \
It is a staple at many dhabas and restaurants across Chandigarh and a favourite breakfast or lunch option.",
      image: "images/food/chandigarh-chole-bhature.jpg"
    },
    {
      name: "Paneer Tikka",
      detail:
        "Chunks of paneer marinated in yoghurt and spices, skewered and roasted in a tandoor. \
Chandigarh's many rooftop cafes and food joints serve paneer tikka as a popular evening snack and starter.",
      image: "images/food/chandigarh-paneer-tikka.jpg"
    },
    {
      name: "Lassi",
      detail:
        "A thick, refreshing yoghurt-based drink, often served sweet or mildly salted in tall steel or glass tumblers. \
It is a common accompaniment to meals and a great way to beat the region's summer heat.",
      image: "images/food/chandigarh-lassi.jpg"
    },
    {
      name: "Stuffed Parathas",
      detail:
        "Hot tawa parathas stuffed with fillings like aloo, gobhi or paneer, served with butter, curd and pickle. \
These are a popular breakfast choice at home-style eateries and dhabas in and around Chandigarh.",
      image: "images/food/chandigarh-paratha.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Sukhna Lake",
      place: "Chandigarh",
      note:
        "A man-made lake at the foothills of the Shivalik range, popular for morning walks, boating and sunset views. \
The promenade around the lake is a favourite leisure spot for residents and tourists.",
      image: "images/places/chandigarh-sukhna-lake.jpg"
    },
    {
      name: "Rock Garden",
      place: "Chandigarh",
      note:
        "An iconic sculpture garden created by Nek Chand using recycled materials, broken ceramics and industrial waste. \
It features winding pathways, waterfalls and hundreds of human and animal figures.",
      image: "images/places/chandigarh-rock-garden.jpg"
    },
    {
      name: "Rose Garden (Zakir Hussain Rose Garden)",
      place: "Sector 16, Chandigarh",
      note:
        "One of Asia's largest rose gardens, showcasing hundreds of varieties of roses along with other ornamental plants. \
It is the venue for the annual Rose Festival, attracting visitors from across the region.",
      image: "images/places/chandigarh-rose-garden.jpg"
    },
    {
      name: "Capitol Complex",
      place: "Sector 1, Chandigarh",
      note:
        "A UNESCO World Heritage Site that houses the Secretariat, High Court and Legislative Assembly buildings. \
The complex represents Le Corbusier's modernist architectural vision for the city.",
      image: "images/places/chandigarh-capitol-complex.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Chandigarh Carnival",
      detail:
        "An annual cultural event held at Leisure Valley with tableaux, rides, food stalls and performances by local artists. \
The carnival highlights the creative spirit of the city and attracts families and students.",
      image: "images/festivals/chandigarh-carnival.jpg"
    },
    {
      name: "Rose Festival",
      detail:
        "Celebrated at Zakir Hussain Rose Garden, the festival features flower shows, cultural performances, competitions \
and exhibitions. It showcases the city's love for gardens and its reputation as a green, planned city.",
      image: "images/festivals/chandigarh-rose-festival.jpg"
    },
    {
      name: "Baisakhi Celebrations",
      detail:
        "Though it is a Union Territory, Chandigarh celebrates Baisakhi with great enthusiasm due to its Punjabi influence. \
Gurdwaras are decorated, people visit to offer prayers, and fairs and cultural programmes are organised.",
      image: "images/festivals/chandigarh-baisakhi.jpg"
    },
    {
      name: "Giddha",
      detail:
        "Traditional Punjabi folk dance forms often performed during college fests, cultural programmes and festive occasions in Chandigarh. \
Energetic bhangra steps and graceful giddha routines reflect the lively spirit of the region.",
      image: "images/festivals/chandigarh-bhangra-giddha.jpg"
    }
  ]
},

// Chattisgarh

"Chhattisgarh": {
  Region: "Central India",
  Capital: "Raipur",
  weatherCity: "Raipur",
  bestTime: "October to March – pleasant weather for exploring waterfalls, wildlife sanctuaries and tribal culture.",


  // Map for Overview tab
  mapImage: "images/maps/chhattisgarh-map.png",

  // ---------- OVERVIEW ----------
  overview:
    "Chhattisgarh, located in central India, is known for its dense forests, ancient temples, waterfalls and rich tribal heritage. \
The state is one of India's major mineral hubs and is home to vibrant folk traditions, crafts and natural beauty.",

  // ---------- HISTORY ----------
  history:
    "Historically part of the Dakshin Kosala region, Chhattisgarh was influenced by dynasties such as the Mauryas, Satavahanas, Kalachuris and Nagvanshis. \
It remained a culturally distinct region under Maratha and later British rule. In the year 2000, Chhattisgarh was carved out of Madhya Pradesh to form a separate state with Raipur as its capital.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Chila",
      detail:
        "A popular breakfast dish made from fermented rice and lentil batter, similar to a light dosa and served with chutneys.",
      image: "images/food/chhattisgarh-chila.jpg"
    },
    {
      name: "Faraa",
      detail:
        "Soft steamed rice-flour dumplings that are seasoned or lightly sauteed; a traditional healthy snack of the state.",
      image: "images/food/chhattisgarh-faraa.jpg"
    },
    {
      name: "Bafauri",
      detail:
        "A protein-rich snack made using steamed chana dal mixed with spices, commonly prepared as a healthy alternative to fried foods.",
      image: "images/food/chhattisgarh-bafauri.jpg"
    },
    {
      name: "Aamat",
      detail:
        "A traditional tribal stew made with mixed vegetables, bamboo shoots and spices, slow-cooked for a rich earthy flavour.",
      image: "images/food/chhattisgarh-aamat.jpg"
    }
  ],

  // ---------- PLACES ---------
  places: [
    {
      name: "Chitrakote Waterfall",
      place: "Bastar District",
      note:
        "Often called the 'Niagara of India', this wide horseshoe-shaped waterfall on the Indravati River is one of the state most iconic attractions.",
      image: "images/places/chhattisgarh-chitrakote.jpg"
    },
    {
      name: "Barnawapara Wildlife Sanctuary",
      place: "Mahasamund District",
      note:
        "A biodiverse sanctuary home to leopards, bison, spotted deer and rich birdlife, surrounded by dense forests.",
      image: "images/places/chhattisgarh-barnawapara.jpg"
    },
    {
      name: "Bhoramdeo Temple",
      place: "Kawardha",
      note:
        "A 11th century temple complex known as the 'Khajuraho of Chhattisgarh' for its intricate stone carvings and historical significance.",
      image: "images/places/chhattisgarh-bhoramdeo.jpg"
    },
    {
      name: "Tirathgarh Waterfall",
      place: "Kanger Valley National Park",
      note:
        "A beautiful multi-tiered waterfall surrounded by lush forests, making it a popular spot for nature lovers and trekkers.",
      image: "images/places/chhattisgarh-tirathgarh.jpg"
    }
  ],

  // ---------- FESTIVALS----------
  festivals: [
    {
      name: "Bastar Dussehra",
      detail:
        "A unique 75-day celebration in Bastar, known for tribal rituals, processions and cultural traditions different from mainstream Dussehra.",
      image: "images/festivals/chhattisgarh-bastar-dussehra.jpg"
    },
    {
      name: "Madai Festival",
      detail:
        "A traditional tribal festival featuring processions, folk performances, rituals and vibrant community celebrations across various districts.",
      image: "images/festivals/chhattisgarh-madai.jpg"
    },
    {
      name: "Hareli Festival",
      detail:
        "An agricultural festival where farmers worship nature and tools, marking the onset of the monsoon crop season.",
      image: "images/festivals/chhattisgarh-hareli.jpg"
    },
    {
      name: "Panthi Dance",
      detail:
        "A devotional folk dance performed by the Satnami community, characterized by energetic movements and songs honoring Guru Ghasidas.",
      image: "images/festivals/chhattisgarh-panthidance.jpg"
    }
  ]
},

//Dadra and Nagar Haveli and Daman & Diu

"Dadra and Nagar Haveli and Daman & Diu": {
  Region: "Western India",
  Capital: "Daman",
  weatherCity: "Daman",
  bestTime: "November to February – pleasant coastal weather ideal for beach visits, forts and cultural exploration.",

  // Outline / map image for the Overview tab
  mapImage: "images/maps/dnh-daman-diu-map.png",

  overview:
    "Dadra and Nagar Haveli and Daman & Diu is a coastal Union Territory in Western India known for its serene beaches, Portuguese-era forts, tribal heritage and relaxed lifestyle. \
The region blends Gujarati influences, tribal culture and Indo-Portuguese architecture, offering scenic coastal towns and rich cultural diversity.",

  history:
    "For nearly 450 years, Daman and Diu functioned as important Portuguese colonies used for trade, maritime control and missionary activity along the Arabian Sea. \
Dadra and Nagar Haveli, inhabited largely by tribal communities, was also under Portuguese rule until local freedom fighters liberated it in 1954. \
Daman and Diu joined India in 1961 after military integration. In 2020, both territories were merged to form the single Union Territory now known as Dadra and Nagar Haveli and Daman & Diu.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Chicken Xacuti",
      detail:
        "A flavourful Indo-Portuguese chicken curry made with roasted spices, poppy seeds and coconut. Originating from Goan influence, it is popular across the coastal parts of Daman and Diu.",
      image: "images/food/dnh-chicken-xacuti.jpg"
    },
    {
      name: "Jetty Roll",
      detail:
        "A popular street snack found near coastal jetties, filled with spiced chicken, fish or vegetables wrapped inside soft bread. It is a favourite among locals and tourists.",
      image: "images/food/dnh-jetty-roll.jpg"
    },
    {
      name: "Tami",
      detail:
        "A traditional tribal dish from Dadra and Nagar Haveli, made using bamboo shoots and local forest vegetables, seasoned lightly to preserve natural flavours.",
      image: "images/food/dnh-tami.jpg"
    },
    {
      name: "Bebinca (Layered Dessert)",
      detail:
        "A Portuguese-influenced multi-layered dessert prepared with coconut milk, eggs and caramelized sugar. It is especially popular during festive occasions.",
      image: "images/food/dnh-bebinca.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Diu Fort",
      place: "Diu",
      note:
        "A massive 16th-century fort built by the Portuguese overlooking the Arabian Sea. Known for its bastions, lighthouses and breathtaking ocean views.",
      image: "images/places/dnh-diu-fort.jpg"
    },
    {
      name: "Naida Caves",
      place: "Diu",
      note:
        "A stunning formation of naturally eroded caves and openings where sunlight filters beautifully into the chambers, making it a favourite spot for photography.",
      image: "images/places/dnh-naida-caves.jpg"
    },
    {
      name: "Jampore Beach",
      place: "Daman",
      note:
        "A calm and clean beach with shallow waters, ideal for long walks, camel rides and watching the sunset. Perfect for a peaceful seaside experience.",
      image: "images/places/dnh-jampore-beach.jpg"
    },
    {
      name: "Moti Daman Fort",
      place: "Daman",
      note:
        "A large historical fort showcasing Portuguese military architecture, with old churches, long ramparts and heritage buildings within its walls.",
      image: "images/places/dnh-moti-daman-fort.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Nariyal Poornima",
      detail:
        "A coastal festival where fishermen worship the sea by offering coconuts, praying for safety, prosperity and a good fishing season. Celebrated with songs and community gatherings.",
      image: "images/festivals/dnh-nariyal-poornima.jpg"
    },
    {
      name: "Barash",
      detail:
        "A tribal festival marked by community prayers, cultural performances and traditional rituals that reflect the unity and heritage of the tribal communities in the region.",
      image: "images/festivals/dnh-barash.jpg"
    },
    {
      name: "Bhawada",
      detail:
        "A vibrant post-harvest tribal celebration featuring traditional songs, rituals and group dances symbolizing gratitude and harmony with nature.",
      image: "images/festivals/dnh-bhawada.jpg"
    },
    {
      name: "Tarpa Dance",
      detail:
        "A famous tribal dance form where men and women dance in a circle around a musician playing the Tarpa, a wind instrument. Movements symbolize unity, joy and community life.",
      image: "images/festivals/dnh-tarpa-dance.jpg"
    }
  ]
},


//Delhi

"Delhi": {
  Region: "Northern India",
  Capital: "New Delhi",
  weatherCity: "New Delhi",
  bestTime: "October to March – cool, pleasant weather ideal for sightseeing, heritage walks and cultural explorations.",

  // Map outline image for the Overview tab
  mapImage: "images/maps/delhi-map.png",

  overview:
    "Delhi, officially the National Capital Territory (NCT) of Delhi, is a vibrant Union Territory that combines historic monuments, political significance and modern urban life. \
It is home to ancient forts, bustling markets, diverse food culture and India's central government institutions. Known for its cosmopolitan population, rich heritage and strategic importance, Delhi serves as the heart of the nation.",

  history:
    "Delhi has been inhabited since ancient times and has served as the capital for several powerful kingdoms and empires, including the Delhi Sultanate and the Mughal Empire. \
The city saw major architectural and cultural growth under the Mughals, followed by British rule after 1857. New Delhi was designed by Sir Edwin Lutyens during the early 20th century and replaced Calcutta as India's capital in 1911. \
After independence in 1947, Delhi became the political and administrative hub of India and was granted Union Territory status with special powers in 1991.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Rajma Chawal",
      detail:
        "A comforting Punjabi-origin dish made with red kidney beans cooked in a mildly spiced, aromatic gravy served over steamed rice. It is a staple among Delhi households and a beloved North Indian comfort food.",
      image: "images/food/delhi-rajma-chawal.jpg"
    },
    {
      name: "Paranthe Wali Gali Parathas",
      detail:
        "Stuffed parathas from Delhi's famous Chandni Chowk, filled with potato, paneer, cauliflower or sweet variants. Served with pickles and curd, making it a classic Old Delhi breakfast.",
      image: "images/food/delhi-paratha.jpg"
    },
    {
      name: "Kebabs",
      detail:
        "Tender Mughlai-style kebabs such as seekh, boti and galouti kebabs, widely popular across Old Delhi and modern food hubs. Known for their smoky flavor and soft texture.",
      image: "images/food/delhi-kebabs.jpg"
    },
    {
      name: "Jalebi with Rabri",
      detail:
        "Crispy jalebis paired with thick, creamy rabri. A Delhi favourite enjoyed during festive seasons, street-food nights and family gatherings.",
      image: "images/food/delhi-jalebi-rabri.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Red Fort",
      place: "Old Delhi",
      note:
        "A UNESCO World Heritage Site built by Mughal emperor Shah Jahan. Famous for its massive red sandstone walls and being the venue for Independence Day flag hoisting.",
      image: "images/places/delhi-red-fort.jpg"
    },
    {
      name: "India Gate",
      place: "New Delhi",
      note:
        "A prominent war memorial dedicated to Indian soldiers. Its lawns make it a popular family spot, especially in the evenings.",
      image: "images/places/delhi-india-gate.jpg"
    },
    {
      name: "Qutub Minar",
      place: "Mehrauli",
      note:
        "A 73-metre tall minaret built in the early 13th century, showcasing Indo-Islamic architecture. A major UNESCO Heritage landmark.",
      image: "images/places/delhi-qutub-minar.jpg"
    },
    {
      name: "Lotus Temple",
      place: "Kalkaji",
      note:
        "A stunning marble temple shaped like a lotus flower, symbolizing peace and unity. Known for its serene atmosphere.",
      image: "images/places/delhi-lotus-temple.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [

    {
      name: "Republic Day Parade",
      detail:
        "A grand parade held annually at Kartavya Path featuring cultural tableaux, military strength and performances representing India's diversity.",
      image: "images/festivals/delhi-republic-day.jpg"
    },

    {
      name: "Independence Day Celebrations",
      detail:
        "A national event marked by the Prime Minister's flag hoisting at the Red Fort, parades, cultural programs and patriotic displays across Delhi.",
      image: "images/festivals/delhi-independence-day.jpg"
    },

    {
      name: "Phool Walon Ki Sair",
      detail:
        "A historic Delhi festival symbolizing communal harmony, celebrated through floral offerings, music, dance and cultural gatherings.",
      image: "images/festivals/delhi-phool-walon-ki-sair.jpg"
    },
    {
      name: "Kathak Dance",
      detail:
        "A graceful classical dance form associated with North India. Delhi hosts numerous Kathak performances across cultural centers and festivals.",
      image: "images/festivals/delhi-kathak.jpg"
    }
  ]
},

//Goa

"Goa": {
  Region: "Western India",
  Capital: "Panaji",
  weatherCity: "Panaji",
  bestTime: "November to February – cool, dry season ideal for beach activities, sightseeing and festivals.",

  // Outline / map image
  mapImage: "images/maps/goa-map.png",

  overview:
    "Goa, located along the western coast of India, is a vibrant state famous for its golden beaches, Portuguese-influenced architecture, seafood, and festive culture. \
Known for its laid-back lifestyle, nightlife, heritage churches and tropical landscapes, Goa attracts millions of tourists every year. It is a blend of Indian and European traditions, reflected in its unique culture, cuisine, and architecture.",

  history:
    "Goa has a rich history influenced by various dynasties such as the Kadambas and the Vijayanagara Empire. \
In 1510, the Portuguese conquered Goa, and their 450-year rule left a lasting cultural and architectural imprint. \
Goa became a part of independent India in 1961 after 'Operation Vijay.' It was recognized as a separate state in 1987 and continues to be known for its multicultural identity, historic churches and thriving tourism.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Goan Fish Curry",
      detail:
        "A signature coastal curry made with fresh fish, coconut, kokum and Goan spices. It combines tangy and mildly spicy flavours, forming an essential part of daily Goan meals.",
      image: "images/food/goa-fish-curry.jpg"
    },
    {
      name: "Prawn Balchao",
      detail:
        "A spicy and tangy prawn pickle prepared with vinegar, dried chillies and spices. It reflects Goa's strong Portuguese culinary influence.",
      image: "images/food/goa-prawn-balchao.jpg"
    },
    {
      name: "Khatkhate",
      detail:
        "A traditional Goan mixed-vegetable stew made with coconut, jaggery and kokum. Often served during festivals and weddings, it has a mildly sweet and tangy flavour unique to Goan Saraswat cuisine.",
      image: "images/food/goa-khatkhate.jpg"
    },
    {
      name: "Chicken Cafreal",
      detail:
        "A green-marinated spicy chicken dish made using coriander, green chilies, garlic and spices. Introduced to Goa by African-Portuguese influences.",
      image: "images/food/goa-cafreal.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Basilica of Bom Jesus",
      place: "Old Goa",
      note:
        "A UNESCO World Heritage Site famous for housing the mortal remains of St. Francis Xavier. It reflects classic baroque architecture and is a major pilgrimage landmark.",
      image: "images/places/goa-bom-jesus.jpg"
    },
    {
      name: "Calangute Beach",
      place: "North Goa",
      note:
        "One of Goa's most popular beaches known for water sports, beach shacks and a lively atmosphere, often called the 'Queen of Beaches'.",
      image: "images/places/goa-calangute.jpg"
    },
    {
      name: "Dudhsagar Falls",
      place: "Mollem",
      note:
        "A spectacular four-tiered waterfall located inside the Bhagwan Mahaveer Sanctuary. Known for its milky-white cascade and scenic trekking routes.",
      image: "images/places/goa-dudhsagar.jpg"
    },
    {
      name: "Aguada Fort",
      place: "Sinquerim",
      note:
        "A 17th-century Portuguese fort overlooking the Arabian Sea. Once used as a lighthouse and water storage point, today it offers sweeping coastal views.",
      image: "images/places/goa-aguada-fort.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Goa Carnival",
      detail:
        "A colourful festival featuring parades, music, masks, floats, dances and street celebrations. It reflects Goa's Portuguese heritage and lively festive spirit.",
      image: "images/festivals/goa-carnival.jpg"
    },
    {
      name: "Shigmo Festival",
      detail:
        "A traditional Goan spring festival celebrated with folk dances, colourful processions, music and cultural performances showcasing local traditions.",
      image: "images/festivals/goa-shigmo.jpg"
    },
    {
      name: "Feast of St. Francis Xavier",
      detail:
        "A major Christian festival attended by thousands, marked by holy masses, processions and prayers at the Basilica of Bom Jesus.",
      image: "images/festivals/goa-st-francis-xavier.jpg"
    },
    {
      name: "Fugdi Dance",
      detail:
        "A traditional Goan folk dance performed by women during religious and community celebrations, involving rhythmic clapping and circular formations.",
      image: "images/festivals/goa-fugdi.jpg"
    }
  ]
},

//Gujarat

"Gujarat": {
  Region: "Western India",
  Capital: "Gandhinagar",
  weatherCity:"Gandhinagar",
  bestTime: "October to March – pleasant weather ideal for exploring heritage sites, wildlife sanctuaries and cultural festivals.",

  // Map image for Overview tab
  mapImage: "images/maps/gujarat-map.png",

  overview:
    "Gujarat is a culturally vibrant state located on the western coast of India, known for its rich history, textile heritage, coastal beauty, wildlife sanctuaries and industrial growth. \
It is home to diverse landscapes ranging from the white desert of Kutch to bustling urban cities like Ahmedabad and Surat. Gujarat is also famous for its crafts, vegetarian cuisine and festivals like Navratri.",

  history:
    "Gujarat has been an important region since ancient times, with links to the Indus Valley Civilization at sites like Lothal and Dholavira. \
It was ruled by dynasties such as the Mauryas, Guptas, Solankis and Mughals. Later, Gujarat became a major trading centre under the British. \
The state played a major role in India's freedom struggle as the birthplace of Mahatma Gandhi. Gujarat was reorganized as a separate state from Bombay State in 1960.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Dhokla",
      detail:
        "A soft, steamed snack made from fermented rice and gram flour batter, tempered with mustard seeds and curry leaves. It is a signature Gujarati delicacy enjoyed as breakfast or a light snack.",
      image: "images/food/gujarat-dhokla.jpg"
    },
    {
      name: "Thepla",
      detail:
        "A popular flatbread made with whole wheat flour, fenugreek leaves and mild spices. Light, healthy and travel-friendly, it is a staple in Gujarati households.",
      image: "images/food/gujarat-thepla.jpg"
    },
    {
      name: "Undhiyu",
      detail:
        "A festive mixed vegetable dish slow-cooked with beans, yam, fenugreek dumplings and spices. Traditionally prepared in earthen pots, especially during Uttarayan.",
      image: "images/food/gujarat-undhiyu.jpg"
    },
    {
      name: "Fafda Jalebi",
      detail:
        "A classic Gujarati combination of crispy fafda served with sweet, syrupy jalebi. It is especially enjoyed during Dussehra mornings.",
      image: "images/food/gujarat-fafda-jalebi.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Statue of Unity",
      place: "Kevadia",
      note:
        "The world's tallest statue, dedicated to Sardar Vallabhbhai Patel. It stands at 182 meters and offers viewing galleries, exhibitions and scenic surroundings.",
      image: "images/places/gujarat-statue-of-unity.jpg"
    },
    {
      name: "Somnath Temple",
      place: "Somnath",
      note:
        "One of the twelve Jyotirlinga temples of Lord Shiva, known for its stunning sea-facing location and historical significance through several reconstructions.",
      image: "images/places/gujarat-somnath.jpg"
    },
    {
      name: "Rann of Kutch",
      place: "Kutch",
      note:
        "The vast white salt desert famous for the Rann Utsav, camel rides, cultural performances and breathtaking moonlit nights.",
      image: "images/places/gujarat-rann-of-kutch.jpg"
    },
    {
      name: "Gir National Park",
      place: "Junagadh District",
      note:
        "The only natural habitat of the Asiatic lion. The park also supports rich biodiversity with leopards, deer, birds and unique flora.",
      image: "images/places/gujarat-gir.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Navratri",
      detail:
        "The most iconic festival of Gujarat, celebrated with nine nights of Garba and Dandiya Raas, colourful attire, music and devotional rituals.",
      image: "images/festivals/gujarat-navratri.jpg"
    },
    {
      name: "Uttarayan (Makar Sankranti)",
      detail:
        "A vibrant kite festival where the sky fills with colourful kites and people celebrate with traditional dishes like Undhiyu and Jalebi.",
      image: "images/festivals/gujarat-uttarayan.jpg"
    },
    {
      name: "Rann Utsav",
      detail:
        "A cultural festival celebrated in the White Desert of Kutch, featuring folk music, traditional crafts, camel rides and desert camping.",
      image: "images/festivals/gujarat-rann-utsav.jpg"
    },
    {
      name: "Garba Dance",
      detail:
        "A traditional and energetic Gujarati folk dance performed in circles with rhythmic claps and graceful movements, especially during Navratri.",
      image: "images/festivals/gujarat-garba.jpg"
    }
  ]
},
  
// Haryana

  "Haryana": {
    Region: "North India",
    Capital: "Chandigarh",
    weatherCity:"Chandigarh",
    bestTime: "October to March – cool, pleasant weather ideal for exploring historical sites, rural culture and festivals.",

    // Outline / map image for the Overview tab
    mapImage: "images/maps/haryana-map.png",

    overview:
      "Haryana is a north Indian state surrounding the national capital region and sharing a deep cultural link with Punjab and Delhi. \
It is known for its fertile plains, agrarian economy, historic battlefields like Kurukshetra and vibrant Haryanvi folk traditions. The state also hosts key industrial hubs such as Gurugram and Faridabad, blending rural heritage with rapid urban growth.",

    history:
      "The region of present-day Haryana has been culturally significant since ancient times, associated with the Vedic civilization and the Mahabharata, especially the battle of Kurukshetra. \
Over centuries, it came under the rule of various dynasties including the Mauryas, Guptas, Rajputs, Delhi Sultanate and the Mughals. \
After India's independence, Haryana was carved out of the larger state of Punjab in 1966 as a separate Hindi-speaking state, and has since emerged as an important agricultural and industrial center.",

    // ---------- FOOD ----------
    food: [
      {
        name: "Bajra Khichdi",
        detail:
          "A wholesome dish made from pearl millet (bajra) and lentils, cooked to a soft porridge-like consistency and usually served with ghee, curd or buttermilk. It reflects the simple, hearty food of rural Haryana.",
        image: "images/food/haryana-bajra-khichdi.jpg"
      },
      {
        name: "Kadhi Pakora",
        detail:
          "Gram flour dumplings (pakoras) simmered in a tangy yogurt-based curry. It is a comforting everyday dish in many Haryanvi homes, often enjoyed with steamed rice or roti.",
        image: "images/food/haryana-kadhi-pakora.jpg"
      },
      {
        name: "Hara Choliya Pulao",
        detail:
          "A fragrant rice preparation cooked with fresh green gram (choliya), vegetables and mild spices. This seasonal dish showcases the use of local winter produce in Haryanvi cuisine.",
        image: "images/food/haryana-choliya-pulao.jpg"
      },
      {
        name: "Bathua Raita",
        detail:
          "Curd mixed with blanched and chopped bathua (chenopodium) leaves, lightly seasoned with spices. It is commonly served as a refreshing side dish, especially in winter months.",
        image: "images/food/haryana-bathua-raita.jpg"
      }
    ],

    // ---------- PLACES ----------
    places: [
      {
        name: "Kurukshetra",
        place: "Kurukshetra district",
        note:
          "A major pilgrimage and historical town associated with the epic Mahabharata and the teachings of the Bhagavad Gita, with numerous sacred tanks, temples and the Brahma Sarovar.",
        image: "images/places/haryana-kurukshetra.jpg"
      },
      {
        name: "Sultanpur National Park",
        place: "Near Gurugram",
        note:
          "A famous bird sanctuary that attracts a wide variety of migratory and resident birds, ideal for birdwatching and nature walks, especially during the winter season.",
        image: "images/places/haryana-sultanpur-park.jpg"
      },
      {
        name: "Pinjore Gardens (Yadavindra Gardens)",
        place: "Near Panchkula",
        note:
          "Historic Mughal-style terraced gardens featuring fountains, pavilions and landscaped lawns, offering a pleasant getaway with cultural programs during festivals.",
        image: "images/places/haryana-pinjore-gardens.jpg"
      },
      {
        name: "Morni Hills",
        place: "Panchkula district",
        note:
          "A serene hill area in the Shivalik range, popular for its greenery, lakes and trekking trails, providing a cool retreat from the plains of Haryana.",
        image: "images/places/haryana-morni-hills.jpg"
      }
    ],

    // ---------- FESTIVALS & DANCE ----------
    festivals: [
      {
        name: "Haryana Day",
      detail:
        "Celebrated on November 1st to mark the formation of the state, featuring cultural programs, folk music and traditional performances.",
      image: "images/festivals/haryana-day.jpg"
      },
      {
        name: "Teej",
        detail:
          "A monsoon festival observed by women who dress in bright clothes, apply mehendi, enjoy swings and sing folk songs, expressing devotion and joy at the arrival of rains.",
        image: "images/festivals/haryana-teej.jpg"
      },
      {
        name: "Baisakhi Celebrations",
        detail:
          "Celebrated in many parts of Haryana, Baisakhi marks the harvest season with fairs, fairs, folk music, energetic dances and thanksgiving for a good crop.",
        image: "images/festivals/haryana-baisakhi.jpg"
      },
      {
        name: "Haryanvi Dhamal Dance",
        detail:
          "A lively folk dance form of Haryana, performed mostly by men to the beats of the dhol and nagada. It features vigorous movements and is often seen during festivals and community gatherings.",
        image: "images/festivals/haryana-dhamal-dance.jpg"
      }
    ]
  },

// Himachal Pradesh

"Himachal Pradesh": {
  Region: "North India",
  Capital: "Shimla-Summer,Dharamshala-Winter",
  weatherCity:"Shimla",
  bestTime: "March to June and September to December – pleasant weather ideal for sightseeing, trekking and adventure activities.",

  mapImage: "images/maps/himachal-map.png",

  // ---------- OVERVIEW ----------
  overview:
    "Himachal Pradesh, nestled in the western Himalayas, is known for its snow-clad mountains, hill stations, apple orchards, serene valleys and adventure tourism. \
The state offers a blend of natural beauty, Tibetan-influenced culture and peaceful spiritual destinations, attracting tourists all year round.",

  // ---------- HISTORY ----------
  history:
    "The history of Himachal Pradesh dates back to ancient tribes followed by the rule of Mauryas, Guptas, Rajputs and the Mughals. \
In the 19th century, the British made Shimla their summer capital, which shaped the region's architecture and culture. \
After independence, several hill regions were merged, and Himachal Pradesh became a full-fledged state of India in 1971.",

  // ---------- FOOD (4 ITEMS) ----------
  food: [
    {
      name: "Dhaam",
      detail:
        "A traditional Himachali vegetarian feast served on festivals and weddings, featuring rajma, chana madra, rice and boor ki kadi with pure desi ghee.",
      image: "images/food/hp-dhaam.jpg"
    },
    {
      name: "Siddu",
      detail:
        "A steamed wheat-flour bread stuffed with lentils or nuts, usually eaten with ghee or mutton curry and served hot during winters.",
      image: "images/food/hp-siddu.jpg"
    },
    {
      name: "Chha Gosht",
      detail:
        "A flavorful mutton dish cooked in yogurt and gram flour-based gravy, flavored with cardamom, cloves and coriander.",
      image: "images/food/hp-chha-gosht.jpg"
    },
    {
      name: "Tudkiya Bhath",
      detail:
        "A Himachali-style rice dish slow-cooked with vegetables, curd, lentils, ghee and spices, creating a warm comfort meal especially in mountain regions.",
      image: "images/food/hp-tudkiya-bhath.jpg"
    }
  ],

  // ---------- PLACES (4 ITEMS) ----------
  places: [
    {
      name: "Manali",
      place: "Kullu district",
      note:
        "A major tourism hub famous for snow activities, Hadimba Temple, Solang Valley and Rohtang Pass.",
      image: "images/places/hp-manali.jpg"
    },
    {
      name: "Shimla",
      place: "Capital city",
      note:
        "Known for the Mall Road, Jakhoo Temple and colonial-era architecture from the British summer capital.",
      image: "images/places/hp-shimla.jpg"
    },
    {
      name: "Spiti Valley",
      place: "Lahaul‚Spiti district",
      note:
        "A cold desert valley famous for monasteries, high-altitude lakes and dramatic landscapes ideal for adventure travellers.",
      image: "images/places/hp-spiti.jpg"
    },
    {
      name: "McLeodganj",
      place: "Near Dharamshala",
      note:
        "A Tibetan cultural hub home to the Dalai Lama's residence and the monastery of Tsuglagkhang.",
      image: "images/places/hp-mcleodganj.jpg"
    }
  ],

  // ---------- FESTIVALS (3) + 1 DANCE ----------
  festivals: [
    {
      name: "Kullu Dussehra",
      detail:
        "A week-long fair celebrated after regular Dussehra, marked by grand processions of local deities, folk performances and cultural gatherings.",
      image: "images/festivals/hp-kullu-dussehra.jpg"
    },
    {
      name: "Minjar Festival",
      detail:
        "A traditional harvest festival of Chamba where golden silk tassels (minjars) are offered to the Ravi River with prayers for prosperity.",
      image: "images/festivals/hp-minjar.jpg"
    },
    {
      name: "Halda Festival",
      detail:
        "A New Year festival of the Lahaul region celebrated with bonfires, wood offerings and tribal gatherings to seek blessings for the year.",
      image: "images/festivals/hp-halda.jpg"
    },
    {
      name: "Nati Dance",
      detail:
        "A folk dance of the Kullu Valley known for its rhythmic circular steps and traditional embroidered costumes; recognized as one of the largest folk dance gatherings in the world.",
      image: "images/festivals/hp-nati-dance.jpg"
    }
  ]
},

//Jammu & Kashmir
"Jammu and Kashmir": {
  Region: "Northern India",
  Capital: "Srinagar-Summer, Jammu-Winter",
weatherCity:"Srinagar",
bestTime: "March to October – pleasant weather ideal for sightseeing, trekking and exploring natural beauty.",

  // Outline / map image for Overview tab
  mapImage: "images/maps/jammu-kashmir-map.png",

  overview:
    "Jammu and Kashmir is a northern Himalayan region of India known for its breathtaking snow-clad mountains, serene lakes, valleys, and rich spiritual heritage. The area attracts tourists with its natural beauty, traditional crafts, vibrant culture and distinct Kashmiri cuisine.",

  history:
    "Historically, Jammu and Kashmir has been ruled by Mauryas, Kushans, Mughals, Afghans and the Dogra Dynasty. For centuries it served as a cultural crossroads between Central Asia and the Indian subcontinent. After the accession to India in 1947, the region evolved through administrative reorganizations and became a Union Territory in 2019 with focused development, tourism and cultural revival.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Rogan Josh",
      detail:
        "A fragrant lamb curry cooked with Kashmiri red chillies and aromatic spices, known for its deep red colour and rich flavour.",
      image: "images/food/jk-rogan-josh.jpg"
    },
    {
      name: "Yakhni",
      detail:
        "A yogurt-based lamb curry flavoured with fennel and mild spices, offering a soothing and creamy taste unique to Kashmiri cuisine.",
      image: "images/food/jk-yakhni.jpg"
    },
    {
      name: "Gushtaba",
      detail:
        "Soft minced mutton balls slowly cooked in a creamy yogurt-based gravy, traditionally served in Wazwan, the royal multi-course Kashmiri feast.",
      image: "images/food/jk-gushtaba.jpg"
    },
    {
      name: "Kahwa",
      detail:
        "A traditional Kashmiri green tea infused with saffron, spices and almonds, enjoyed especially during cold winters.",
      image: "images/food/jk-kahwa.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Dal Lake",
      place: "Srinagar",
      note:
        "A famous lake known for its shikara rides, floating markets and scenic views surrounded by the Himalayas.",
      image: "images/places/jk-dal-lake.jpg"
    },
    {
      name: "Gulmarg",
      place: "Baramulla district",
      note:
        "A major skiing and winter sports destination also known for the Gulmarg Gondola's one of the highest cable cars in the world.",
      image: "images/places/jk-gulmarg.jpg"
    },
    {
      name: "Mughal Gardens",
      place: "Srinagar",
      note:
        "A series of terraced gardens built by the Mughal emperors, especially Nishat Bagh and Shalimar Bagh, famous for fountains, flowers and lakeside views.",
      image: "images/places/jk-mughal-gardens.jpg"
    },
    {
      name: "Sonamarg",
      place: "Ganderbal district",
      note:
        "A mountain valley known as the 'Meadow of Gold', surrounded by glaciers, snow peaks and trekking trails.",
      image: "images/places/jk-sonamarg.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Saffron Festival",
      detail:
        "Celebrated during the saffron harvest in Pampore, showcasing cultural performances, Kashmiri cuisine and the region's world-famous saffron.",
      image: "images/festivals/jk-saffron-festival.jpg"
    },
    {
      name: "Eid Celebrations",
      detail:
        "Observed with prayers, community gatherings and traditional feasts highlighting Kashmiri hospitality and cultural unity.",
      image: "images/festivals/jk-eid.jpg"
    },
    {
      name: "Navreh",
      detail:
        "Kashmiri Hindu New Year celebrated with family traditions, symbolic food platters and prayers for prosperity.",
      image: "images/festivals/jk-navreh.jpg"
    },
    {
      name: "Rouf Dance",
      detail:
        "A graceful group dance performed by women, especially during festivals and weddings, marked by rhythmic steps and melodious singing.",
      image: "images/festivals/jk-rouf.jpg"
    }
  ]
},

// Jharkhand
"Jharkhand": {
  Region: "Eastern India",
  Capital: "Ranchi",
  weatherCity: "Ranchi",
  bestTime: "October to March – cool, dry weather ideal for exploring waterfalls, forests and tribal culture.",

  // Outline / map image for Overview tab
  mapImage: "images/maps/jharkhand-map.png",

  overview:
    "Jharkhand is a mineral-rich state in eastern India, carved out of southern Bihar in 2000. It is known for its dense forests, waterfalls, rolling plateaus and tribal heritage. Major cities like Ranchi, Jamshedpur and Dhanbad are important industrial and mining centres.",
  
  history:
    "The region of present-day Jharkhand has long been home to diverse Adivasi communities such as the Santhal, Munda, Ho and Oraon. During the British period it was part of the Bengal Presidency and later Bihar, but it remained culturally distinct due to its tribal movements and forested terrain. A long political struggle for a separate tribal-majority state eventually led to the formation of Jharkhand as a separate state on 15 November 2000.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Dhuska",
      detail:
        "A deep-fried savoury snack made from a fermented batter of rice and lentils, usually served with spicy gram curry. It is a popular traditional breakfast and street food in Jharkhand.",
      image: "images/food/jharkhand-dhuska.jpg"
    },
    {
      name: "Rugra Curry",
      detail:
        "A seasonal delicacy made from rugra (a type of wild mushroom) saut√©ed with spices. This earthy dish is closely associated with tribal households and is especially loved during the monsoon.",
      image: "images/food/jharkhand-rugra-curry.jpg"
    },
    {
      name: "Chilka Roti",
      detail:
        "A soft pancake-like roti prepared from a fermented rice and lentil batter, often eaten with chutney or vegetable curries. It is a simple, home-style food common in rural areas.",
      image: "images/food/jharkhand-chilka-roti.jpg"
    },
    {
      name: "Handia",
      detail:
        "A traditional rice-based fermented drink prepared by tribal communities using herbal starters. It is usually consumed during festivals and community gatherings in Jharkhand's villages.",
      image: "images/food/jharkhand-handia.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Hundru Falls",
      place: "Near Ranchi",
      note:
        "A spectacular waterfall on the Subarnarekha River, surrounded by rocky terrain and greenery, making it one of the most famous picnic spots near Ranchi.",
      image: "images/places/jharkhand-hundru-falls.jpg"
    },
    {
      name: "Netarhat",
      place: "Latehar district",
      note:
        "A hill station known as the 'Queen of Chotanagpur', famous for its cool climate, pine forests and beautiful sunrise and sunset viewpoints.",
      image: "images/places/jharkhand-netarhat.jpg"
    },
    {
      name: "Betla National Park",
      place: "Palamu district",
      note:
        "One of India's earliest tiger reserves, Betla is known for its rich wildlife, sal forests, waterfalls and the ruins of old forts inside the forest area.",
      image: "images/places/jharkhand-betla-national-park.jpg"
    },
    {
      name: "Johna Falls",
      place: "Near Ranchi",
      note:
        "Also called Gautamdhara, this scenic waterfall on the Kanchi River is reached by a long flight of steps and is popular with local tourists and pilgrims.",
      image: "images/places/jharkhand-johna-falls.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Sarhul",
      detail:
        "A major spring festival of the Oraon and other tribal communities, celebrating the new Sal tree flowers and the bond between nature, village deities and the people.",
      image: "images/festivals/jharkhand-sarhul.jpg"
    },
    {
      name: "Karam Festival",
      detail:
        "An important harvest-related festival where villagers worship the Karam tree, singing and dancing through the night to seek blessings for prosperity and a good crop.",
      image: "images/festivals/jharkhand-karam.jpg"
    },
    {
      name: "Sohrai",
      detail:
        "A post-harvest cattle and nature worship festival celebrated in many tribal villages, known for colourful Sohrai mural paintings made on mud walls using natural pigments.",
      image: "images/festivals/jharkhand-sohrai.jpg"
    },
    {
      name: "Chhau Dance (Seraikela)",
      detail:
        "A vigorous martial dance form performed with elaborate masks in the Seraikela region of Jharkhand, depicting episodes from epics and local legends.",
      image: "images/festivals/jharkhand-chhau-dance.jpg"
    }
  ]
},

//Karnataka
"Karnataka": {
  Region: "South India",
  Capital: "Bengaluru",
  weatherCity: "Bangalore",  
  bestTime: "October to February – cool, pleasant weather ideal for sightseeing, outdoor activities and cultural exploration.", 

  // Outline / map image for Overview tab
  mapImage: "images/maps/karnataka-map.png",

  overview:
    "Karnataka is known for its exceptional blend of modern technology hubs and ancient cultural heritage, featuring world-famous monuments, lush Western Ghats, coffee estates, wildlife sanctuaries and coastal beaches. It is a linguistically and culturally rich state where Kannada is the primary language, and traditions thrive alongside rapid urban development.",

  history:
    "Historically, Karnataka has been the heartland of powerful empires including the Badami Chalukyas, Rashtrakutas, Hoysalas and the Vijayanagara Empire, which left behind magnificent temples and architecture. Later, the Wodeyars of Mysuru contributed greatly to arts and culture. After India's independence, the region was reorganised in 1956 and officially renamed Karnataka in 1973.",


  // ---------- FOOD ----------
  food: [
    {
      name: "Bisi Bele Bath",
      detail:
        "A flavourful combination of rice, lentils and vegetables slow-cooked with tamarind and aromatic spices, forming one of Karnataka's most iconic comfort dishes.",
      image: "images/food/karnataka-bisi-bele-bath.jpg"
    },
    {
      name: "Mysore Masala Dosa",
      detail:
        "A crispy dosa spread with spicy red chutney and filled with potato sabzi, originally from Mysuru and now loved across India.",
      image: "images/food/karnataka-mysore-dosa.jpg"
    },
    {
      name: "Ragi Mudde",
      detail:
        "A traditional finger-millet dish especially common in rural Karnataka, eaten with spicy sambar or mutton curry and valued for its nutrition.",
      image: "images/food/karnataka-ragi-mudde.jpg"
    },
    {
      name: "Udupi Sambar",
      detail:
        "A mildly sweet and aromatic sambar originating from Udupi cuisine, prepared with homemade spice blends and served with idli or rice.",
      image: "images/food/karnataka-udupi-sambar.jpg"
    }
  ],


  // ---------- PLACES ----------
  places: [
    {
      name: "Hampi",
      place: "Vijayanagara District",
      note:
        "A UNESCO World Heritage Site filled with ancient temple complexes, royal enclosures and grand stone structures from the Vijayanagara Empire.",
      image: "images/places/karnataka-hampi.jpg"
    },
    {
      name: "Mysore Palace",
      place: "Mysuru",
      note:
        "A magnificent Indo-Saracenic palace known for its golden thrones, colorful stained-glass halls and stunning illumination during Dasara.",
      image: "images/places/karnataka-mysore-palace.jpg"
    },
    {
      name: "Jog Falls",
      place: "Shimoga District",
      note:
        "One of the highest waterfall systems in India, with Sharavathi River cascading down from four breathtaking streams.",
      image: "images/places/karnataka-jog-falls.jpg"
    },
    {
      name: "Coorg (Kodagu)",
      place: "Western Ghats",
      note:
        "A scenic hill station renowned for its coffee plantations, lush valleys and pleasant climate, often called the 'Scotland of India'",
      image: "images/places/karnataka-coorg.jpg"
    }
  ],


  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Mysuru Dasara",
      detail:
        "A famous 10-day royal festival featuring cultural processions, palace illumination, music and traditional performances.",
      image: "images/festivals/karnataka-dasara.jpg"
    },
    {
      name: "Kambala",
      detail:
        "A traditional buffalo racing festival celebrated in coastal Karnataka, highlighting the bond between farmers and agriculture.",
      image: "images/festivals/karnataka-kambala.jpg"
    },
    {
      name: "Karaga Festival",
      detail:
        "One of Bengaluru's oldest festivals, marked by a spectacular night-time procession dedicated to Draupadi and led by the Thigala community.",
      image: "images/festivals/karnataka-karaga.jpg"
    },
    {
      name: "Yakshagana",
      detail:
        "A vibrant dance-drama form combining elaborate costumes, rhythmic music and dramatic storytelling based on mythological themes.",
      image: "images/festivals/karnataka-yakshagana.jpg"
    }
  ]
},

  // Kerala
  
"Kerala": {
  Region: "South India",
  Capital: "Thiruvananthapuram",
  weatherCity: "Thiruvananthapuram",
  bestTime: "September to March – cool, dry weather ideal for exploring backwaters, hill stations and cultural sites.",

  // Outline / map image for Overview tab
  mapImage: "images/maps/kerala-map.png",

  overview:
    "Kerala, located along the southwestern Malabar Coast of India, is known for its lush greenery, backwaters, high literacy rate, Ayurveda traditions and harmonious cultural lifestyle. The state stretches along the Arabian Sea and is popularly called 'God's Own Country' for its natural beauty and tourism identity.",

  history:
    "Kerala's recorded history begins with ancient Chera rule, followed by lively maritime trade with Arabs, Chinese and Greeks. Later, European colonizers such as the Portuguese, Dutch and British influenced the region. Kerala was formed in 1956 by merging Malabar, Travancore and Cochin, and the state has since emerged as a leader in education, healthcare and social development.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Sadya",
      detail:
        "A grand vegetarian feast served on a banana leaf, consisting of multiple dishes like avial, thoran, olan, sambhar and payasam, traditionally prepared during festivals like Onam and Vishu.",
      image: "images/food/kerala-sadya.jpg"
    },
    {
      name: "Karimeen Pollichathu",
      detail:
        "A signature Kerala dish made with pearl spot fish marinated in spices and slow-cooked inside banana leaves, absorbing coastal flavours fully.",
      image: "images/food/kerala-karimeen.jpg"
    },
    {
      name: "Appam with Stew",
      detail:
        "Soft and fluffy fermented rice pancakes paired with mild and creamy vegetable or chicken stew, especially popular for breakfast and dinner.",
      image: "images/food/kerala-appam-stew.jpg"
    },
    {
      name: "Puttu and Kadala Curry",
      detail:
        "Steamed rice cake layered with coconut served with spicy black chickpea curry ‚Äî a rustic home-style favourite across Kerala.",
      image: "images/food/kerala-puttu-kadala.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Alleppey Backwaters",
      place: "Alappuzha",
      note:
        "A unique network of lakes, canals and lagoons famous for houseboat cruises, scenic landscapes and serene village life on water.",
      image: "images/places/kerala-alleppey.jpg"
    },
    {
      name: "Munnar",
      place: "Idukki district",
      note:
        "A breathtaking hill station known for cool climate, sprawling tea plantations, misty valleys and trekking routes.",
      image: "images/places/kerala-munnar.jpg"
    },
    {
      name: "Kovalam Beach",
      place: "Near Thiruvananthapuram",
      note:
        "A crescent-shaped coastline with a lighthouse viewpoint, water sports activities and coastal Ayurvedic spas.",
      image: "images/places/kerala-kovalam.jpg"
    },
    {
      name: "Wayanad",
      place: "Western Ghats",
      note:
        "A green highland region rich in wildlife sanctuaries, waterfalls, Edakkal Caves and tribal heritage.",
      image: "images/places/kerala-wayanad.jpg"
    }
  ],

  // ---------- FESTIVALS + DANCE ----------
  festivals: [
    {
      name: "Onam",
      detail:
        "The biggest cultural festival of Kerala celebrating prosperity and the legendary return of King Mahabali, marked by pookalam floral art, Vallam Kali boat races and Sadya feasts.",
      image: "images/festivals/kerala-onam.jpg"
    },
    {
      name: "Vishu",
      detail:
        "The Malayalam New Year festival symbolizing new beginnings, featuring Vishukkani ritual, fireworks and traditional gifting customs.",
      image: "images/festivals/kerala-vishu.jpg"
    },
    {
      name: "Thrissur Pooram",
      detail:
        "A grand temple festival famous for decorated elephants, traditional percussion ensembles and magnificent fireworks.",
      image: "images/festivals/kerala-pooram.jpg"
    },
    {
      name: "Kathakali Dance",
      detail:
        "Kerala's world-famous classical dance-drama that combines elaborate costumes, eye expressions and storytelling based on epics.",
      image: "images/festivals/kerala-kathakali.jpg"
    }
  ]
},

  //Ladakh
"Ladakh": {
  Region: "Northern India",
  Capital: "Leh",
  weatherCity: "Leh",
  bestTime: "May to September – mild weather ideal for sightseeing, trekking and exploring high-altitude landscapes.",

  // Outline / map image for the Overview tab
  mapImage: "images/maps/ladakh-map.png",

  overview:
   "Ladakh, known as the 'Land of High Passes'is a cold desert region defined by snow-capped peaks, deep valleys, ancient monasteries and unique Himalayan culture. Its Tibetan Buddhist traditions, clear blue lakes and serene landscapes have made it an iconic destination in India.",
  history:
    "Historically influenced by Tibetan and Central Asian cultures, Ladakh was once part of the ancient Silk Route. It later came under the rule of the Namgyal dynasty before being integrated into the princely state of Jammu & Kashmir. In 2019, Ladakh became a separate Union Territory of India with Leh and Kargil as its major districts.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Chhurpi Soup",
      detail:
        "A traditional broth made using hardened yak cheese (chhurpi), vegetables and Himalayan herbs. It is a comforting winter dish popular across Ladakh's cold high-altitude region.",
      image: "images/food/ladakh-chhurpi-soup.jpg"
    },
    {
      name: "Thenthuk",
      detail:
        "A nourishing hand-pulled noodle soup prepared with vegetables or meat, known for its warmth and rich Ladakhi flavours.",
      image: "images/food/ladakh-thenthuk.jpg"
    },
    {
      name: "Skyu",
      detail:
        "A slow-cooked traditional stew prepared using wheat dough pieces, root vegetables and local spices, especially savoured during chilly mountain evenings.",
      image: "images/food/ladakh-skyu.jpg"
    },
    {
      name: "Butter Tea",
      detail:
        "A salty Tibetan-style tea made from tea leaves, butter and milk, served especially at high altitudes for energy and warmth.",
      image: "images/food/ladakh-butter-tea.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Pangong Lake",
      place: "Eastern Ladakh",
      note:
        "A world-famous blue lake stretching across India and Tibet, admired for its striking colour-changing waters.",
      image: "images/places/ladakh-pangong-lake.jpg"
    },
    {
      name: "Khardung La",
      place: "Leh district",
      note:
        "One of the highest motorable passes in the world, known for its breathtaking Himalayan views and adventure trails.",
      image: "images/places/ladakh-khardung-la.jpg"
    },
    {
      name: "Nubra Valley",
      place: "Northern Ladakh",
      note:
        "A scenic valley featuring sand dunes, double-humped camels and striking contrasts of desert and snow-covered mountains.",
      image: "images/places/ladakh-nubra-valley.jpg"
    },
    {
      name: "Hemis Monastery",
      place: "Leh district",
      note:
        "Ladakh's largest and richest monastery, famous for ancient Buddhist art, masked dances and the Hemis festival.",
      image: "images/places/ladakh-hemis-monastery.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Hemis Festival",
      detail:
        "Ladakh's most popular celebration featuring masked cham dances, traditional music and vibrant monastic rituals at Hemis Monastery.",
      image: "images/festivals/ladakh-hemis-festival.jpg"
    },
    {
      name: "Saka Dawa Festival",
      detail:
        "A sacred Buddhist observance honouring the birth, enlightenment and parinirvana of Lord Buddha, regarded as the holiest period in Ladakh.",
      image: "images/festivals/ladakh-saka-dawa.jpg"
    },
    {
      name: "Sindhu Darshan Festival",
      detail:
        "A cultural festival held on the banks of the Indus River to celebrate national unity, Ladakhi traditions and the river's historical importance.",
      image: "images/festivals/ladakh-sindhu-darshan.jpg"
    },
    {
      name: "Cham Dance",
      detail:
        "A sacred masked dance performed by Tibetan Buddhist monks representing mythological and spiritual teachings through rhythmic movements and symbolic costumes.",
      image: "images/festivals/ladakh-cham-dance.jpg"
    }
  ]
},


"Lakshadweep": {
  Region: "South India",
  Capital: "Kavaratti",
  weatherCity: "Kavaratti",
  bestTime: "October to March – pleasant weather ideal for beach activities, water sports and island exploration.",

  // Outline / map image for Overview tab
  mapImage: "images/maps/lakshadweep-map.png",

  overview:
    "Lakshadweep is India’s smallest Union Territory consisting of a group of 36 coral islands in the Arabian Sea. Known for crystal-clear lagoons, coconut palm vegetation and untouched marine biodiversity, the islands offer a tropical paradise ambience ideal for peace seekers and adventure lovers.",

  history:
    "The islands have been inhabited for centuries, with strong influences from Arab traders who arrived around the 7th century. Lakshadweep later came under the rule of various Kerala-based kingdoms before being taken over by the British in the early 1900s. After India’s independence, it became a Union Territory in 1956 and has since preserved its unique culture rooted in maritime traditions and Islam.",

  bestTime:
    "October to March – ideal for beach stays, lagoon cruises and water sports with calm tides and pleasant tropical climate.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Mus Kavaab",
      detail:
        "A spiced and shallow-fried tuna delicacy made using locally caught fish, coconut-based seasoning and mild island spices.",
      image: "images/food/lakshadweep-mus-kavaab.jpg"
    },
    {
      name: "Octopus Fry",
      detail:
        "A coastal speciality where tender octopus pieces are marinated and pan-fried with chilli, turmeric and curry leaves.",
      image: "images/food/lakshadweep-octopus-fry.jpg"
    },
    {
      name: "Breadfruit Curry",
      detail:
        "A creamy coconut curry cooked with breadfruit, a staple ingredient on the islands, known for its smooth texture and mellow flavour.",
      image: "images/food/lakshadweep-breadfruit-curry.jpg"
    },
    {
      name: "Kadalakka Halwa",
      detail:
        "A unique island sweet dish made with Bengal gram, coconut milk and ghee, widely served during celebrations.",
      image: "images/food/lakshadweep-kadalakka-halwa.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Agatti Island",
      place: "Agatti Atoll",
      note:
        "Famous for turquoise lagoons, white-sand beaches and coral reefs. Also the gateway for island-to-island hopping by flight.",
      image: "images/places/lakshadweep-agatti.jpg"
    },
    {
      name: "Bangaram Island",
      place: "Bangaram Atoll",
      note:
        "Uninhabited paradise known for scuba diving, snorkelling and bioluminescent night beaches under the stars.",
      image: "images/places/lakshadweep-bangaram.jpg"
    },
    {
      name: "Kavaratti",
      place: "Capital",
      note:
        "A scenic lagoon town known for marine aquarium, glass-bottom boat rides and calm beaches lined with coconut palms.",
      image: "images/places/lakshadweep-kavaratti.jpg"
    },
    {
      name: "Minicoy Island",
      place: "Southern Lakshadweep",
      note:
        "Famous for its traditional Maldivian-style culture, tall lighthouse, colourful lagoons and the traditional Lava dance.",
      image: "images/places/lakshadweep-minicoy.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Eid-ul-Fitr",
      detail:
        "Celebrated with prayers, family feasts and sharing of traditional Lakshadweep seafood dishes and sweets.",
      image: "images/festivals/lakshadweep-eid.jpg"
    },
    {
      name: "Milad-un-Nabi",
      detail:
        "A major religious festival marked by community gatherings, devotional recitations and cultural harmony.",
      image: "images/festivals/lakshadweep-milad.jpg"
    },
    {
      name: "Muharram",
      detail:
        "Observed with spiritual devotion and community processions in the island settlements.",
      image: "images/festivals/lakshadweep-muharram.jpg"
    },
    {
      name: "Lava Dance",
      detail:
        "A vibrant traditional group dance performed by the Minicoy islanders wearing colourful costumes and rhythmic drums.",
      image: "images/festivals/lakshadweep-lava-dance.jpg"
    }
  ]
},


  // Madhya Pradesh
"Madhya Pradesh": {
  Region: "Central India",
  Capital: "Bhopal",
  weatherCity: "Bhopal",
  bestTime: "October to March – cool and pleasant weather ideal for exploring heritage sites, wildlife sanctuaries and cultural landmarks.",
  Capital: "Bhopal",


  // Outline / map image for Overview tab
  mapImage: "images/maps/madhya-pradesh-map.png",

  overview:
    "Madhya Pradesh, often called the 'Heart of India', is known for its ancient temples, wildlife sanctuaries, UNESCO heritage sites and culturally rich cities like Bhopal, Indore and Gwalior. The state blends architectural grandeur with vibrant tribal traditions and a deep historical legacy.",

  history:
    "Historically ruled by powerful dynasties including the Mauryas, Guptas, Paramaras and the Mughals, Madhya Pradesh also witnessed the rise of the Holkar and Scindia kingdoms. The region played a significant role in the spread of art, sculpture and classical music. After Indian independence, it became a state in 1956 and later reorganized in 2000 when Chhattisgarh was carved out.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Poha",
      detail:
        "A light and flavorful flattened-rice breakfast dish, commonly served with sev, onions and lemon. It is especially popular across Indore and Bhopal.",
      image: "images/food/mp-poha.jpg"
    },
    {
      name: "Dal Bafla",
      detail:
        "A traditional dish consisting of wheat dough balls baked and dipped in ghee, served with spiced lentils — a regional specialty similar to Dal Baati but with its own unique flavors.",
      image: "images/food/mp-dal-bafla.jpg"
    },
    {
      name: "Bhutte Ka Kees",
      detail:
        "A savory mixture of grated corn cooked with milk, spices and ghee — a unique street food of Indore celebrated for its rich corn flavor.",
      image: "images/food/mp-bhutte-ka-kees.jpg"
    },
    {
      name: "Maava Jalebi",
      detail:
        "A sweeter and thicker version of jalebi prepared using maava (khoya) — a dessert specialty of Burhanpur and surrounding regions.",
      image: "images/food/mp-maava-jalebi.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Khajuraho Temples",
      place: "Chhatarpur",
      note:
        "A UNESCO World Heritage Site renowned for ancient architecture and intricate stone carvings depicting culture, spirituality and art.",
      image: "images/places/mp-khajuraho.jpg"
    },
    {
      name: "Sanchi Stupa",
      place: "Near Bhopal",
      note:
        "One of the oldest Buddhist stupas in the world built by Emperor Ashoka, known for its gateways and symbolic carvings.",
      image: "images/places/mp-sanchi-stupa.jpg"
    },
    {
      name: "Bandhavgarh National Park",
      place: "Umaria District",
      note:
        "A major tiger reserve famous for high tiger sightings, dense forests and wildlife safari experiences.",
      image: "images/places/mp-bandhavgarh.jpg"
    },
    {
      name: "Bhedaghat (Marble Rocks & Dhuandhar Falls)",
      place: "Jabalpur",
      note:
        "A spectacular natural gorge along the Narmada River featuring marble cliffs and the widely-known Dhuandhar waterfall.",
      image: "images/places/mp-bhedaghat.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Lokrang Festival",
      detail:
        "A cultural festival celebrating folk traditions, tribal performances, crafts and regional music from across Madhya Pradesh.",
      image: "images/festivals/mp-lokrang.jpg"
    },
    {
      name: "Khajuraho Dance Festival",
      detail:
        "A week-long celebration of classical dance forms performed against the backdrop of the illuminated Khajuraho temples.",
      image: "images/festivals/mp-khajuraho-dance-festival.jpg"
    },
    {
      name: "Tansen Music Festival",
      detail:
        "A prestigious classical music festival held in Gwalior to honor legendary musician Tansen with captivating live performances.",
      image: "images/festivals/mp-tansen-music.jpg"
    },
    {
      name: "Gaur Dance",
      detail:
        "A vigorous tribal dance of the Gond community featuring rhythmic drumming, colorful attire and dramatic animal-inspired movements.",
      image: "images/festivals/mp-gaur-dance.jpg"
    }
  ],

},

// Maharastra

  "Maharashtra": {
  Region: "Western India",
  Capital: "Mumbai",
  weatherCity: "Mumbai",
  bestTime: "November to February – cool, dry weather ideal for sightseeing, cultural exploration and coastal visits.",

  // New: map outline image
  mapImage: "images/maps/maharashtra-map.png",

  // Overview: 
  overview:
    "Maharashtra is a major state in western India with a long Arabian Sea coastline, vibrant cities and diverse cultures. \
It is home to Mumbai, India's financial capital, as well as historic forts, hill stations and coastal towns.",

  // history
  history:
    "Historically, the region was ruled by dynasties such as the Satavahanas and Yadavas, and later by the Marathas under Chhatrapati Shivaji Maharaj in the 17th century. During British rule, Bombay (now Mumbai) developed into a key port and commercial centre, shaping modern Maharashtra.",

  // FOOD TAB
  food: [
    {
      name: "Vada Pav",
      detail: "Spicy potato patty coated in gram-flour batter, deep fried and served in a pav with chutneys. A classic Mumbai street snack.",
      image: "images/food/maharashtra-vadapav.jpg"
    },
    {
      name: "Puran Poli",
      detail: "Sweet flatbread stuffed with a mixture of cooked chana dal and jaggery, flavoured with cardamom. Often prepared for festivals.",
      image: "images/food/maharashtra-puranpoli.jpg"
    },
    { 
      name: "Thalipeeth",
      detail: "A multigrain savoury pancake made from bhajani flour, mixed with onions, spices and herbs, usually served with curd or white butter.",
      image: "images/food/maharashtra-thalipeeth.jpg"

    },
{
      name: "Misal Pav",
      detail:
        "A spicy sprouted-lentil curry topped with farsan and served with pav, widely enjoyed across Maharashtra.",
      image: "images/food/misal-pav.jpg"
    }

  ],

  // PLACES TAB: Gateway of India, Ajanta & Ellora, Lonavala, Mahabaleshwar
  places: [
    {
      name: "Gateway of India",
      place: "Mumbai",
      note: "Iconic waterfront arch monument built during the British era, overlooking the Arabian Sea and a starting point for boat rides.",
      image: "images/places/maharashtra-gatewayofindia.jpg"
    },
    {
      name: "Ajanta & Ellora Caves",
      place: "Near Aurangabad",
      note: "UNESCO World Heritage rock-cut caves famous for Buddhist paintings, sculptures and monumental cave temples.",
      image: "images/places/maharashtra-ajanta-ellora.jpg"
    },
    {
      name: "Lonavala",
      place: "Sahyadri Hills",
      note: "Popular hill station known for lush valleys, waterfalls and viewpoints, especially during the monsoon season.",
      image: "images/places/maharashtra-lonavala.jpg"
    },
    {
      name: "Mahabaleshwar",
      place: "Sahyadri Hills",
      note: "Hill station noted for strawberry farms, viewpoints and pleasant climate, once a summer retreat during colonial times.",
      image: "images/places/maharashtra-mahabaleshwar.jpg"
    }
  ],

  // FESTIVALS & DANCE TAB: Lavani, Ganesh Chaturthi, Gudi Padwa
  festivals: [

    {
      name: "Ganesh Chaturthi",
      detail: "State-wide festival where Lord Ganesha idols are installed at homes and public pandals, followed by immersion processions.",
      image: "images/festivals/maharashtra-ganeshchaturthi.jpg"
    },

    {
      name: "Gudi Padwa",
      detail: "Maharashtrian New Year, marked by raising decorative gudis, special dishes like puran poli and traditional house decorations.",
      image: "images/festivals/maharashtra-gudipadwa.jpg"
    },

{
      name: "Bail Pola",
      detail:
        "A unique farmers’ festival where decorated bulls are worshipped in gratitude for their contribution to agriculture.",
      image: "images/festivals/maha-bailpola.jpg"
    },

    {
      name: "Lavani",
      detail: "Energetic folk dance form performed to dholki beats, known for expressive storytelling and traditional sarees.",
      image: "images/festivals/maharashtra-lavani.jpg"
    }
  ]
},

// Manipur

"Manipur": {
  Region: "North-East India",
  Capital: "Imphal",
  weatherCity: "Imphal",
  bestTime: "October to April — pleasant weather, clear skies and ideal time for sightseeing, cultural festivals and visiting Loktak Lake.",
  // Outline / map image for Overview tab
  mapImage: "images/maps/manipur-map.png",


  overview:
    "Manipur is known as the 'Jewel of India' for its scenic valleys, hills and rich cultural heritage. It is home to ancient traditions, indigenous sports, classical dance and beautiful handloom and handicrafts.",

  history:
    "The Kingdom of Manipur has existed since 33 CE under the Ningthouja dynasty. It became a princely state under British India in 1891, merged into the Indian Union in 1949 and became a full-fledged state in 1972. Manipur has played a vital role in classical arts, polo and tribal cultural heritage.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Eromba",
      detail: "A traditional dish made with boiled vegetables mixed with fermented fish and chillies — a staple delicacy in Manipuri households.",
      image: "images/food/manipur-eromba.jpg"
    },
    {
      name: "Chamthong (Vegetable Stew)",
      detail: "A healthy stew made with seasonal vegetables and herbs, usually eaten with rice for everyday meals.",
      image: "images/food/manipur-chamthong.jpg"
    },
    {
      name: "Nga Atoiba Thongba",
      detail: "A mildly spiced fish curry with herbs and potatoes, popular across the Meitei community.",
      image: "images/food/manipur-nga-atoiba.jpg"
    },
    {
      name: "Morok Metpa",
      detail: "A spicy chutney made with fresh chillies and fermented ingredients, served as a side with every traditional Manipuri meal.",
      image: "images/food/manipur-morok-metpa.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Loktak Lake",
      place: "Near Moirang",
      note: "The largest freshwater lake in Northeast India, famous for floating biomass islands known as 'phumdis' and the Keibul Lamjao National Park.",
      image: "images/places/manipur-loktak.jpg"
    },
    {
      name: "Ima Keithel (Mother’s Market)",
      place: "Imphal",
      note: "The world's only all-women operated market, known for handloom, handicrafts and local produce.",
      image: "images/places/manipur-ima-keithel.jpg"
    },
    {
      name: "Kangla Fort",
      place: "Imphal",
      note: "The ancient seat of the Meitei kingdom, showcasing heritage structures, temples and historical relics.",
      image: "images/places/manipur-kangla.jpg"
    },
    {
      name: "Shirui Hills",
      place: "Ukhrul district",
      note: "Famous for the rare Shirui Lily, breathtaking hiking trails and the rich Tangkhul Naga heritage.",
      image: "images/places/manipur-shirui.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Yaoshang",
      detail: "The biggest festival of Manipur, celebrated for 5 days with devotional gatherings, cultural performances and the traditional ‘Thabal Chongba’ night dances.",
      image: "images/festivals/manipur-yaoshang.jpg"
    },
    {
      name: "Ningol Chakouba",
      detail: "A family reunion festival where married daughters are invited to their maternal homes for a grand feast and blessings.",
      image: "images/festivals/manipur-ningol-chakouba.jpg"
    },
    {
      name: "Lai Haraoba",
      detail: "A traditional festival to honor sacred deities through music, rituals and ancient storytelling ceremonies.",
      image: "images/festivals/manipur-lai-haraoba.jpg"
    },
    {
      name: "Ras Leela Dance",
      detail: "Manipur’s world-famous classical dance form based on Radha-Krishna devotion, known for graceful circular movements and elegant costumes.",
      image: "images/festivals/manipur-ras-leela.jpg"
    }
  ],
},


//Meghalaya

"Meghalaya": {
  Region: "North-East India",
  Capital: "Shillong",
  weatherCity: "Shillong",
   bestTime:
    "October to May – cool pleasant weather, waterfalls at full beauty and outdoor travel remains comfortable.",

  // Map image (Overview tab)
  mapImage: "images/maps/meghalaya-map.png",

  overview:
    "Meghalaya, meaning 'Abode of Clouds', is known for its high rainfall, mist-covered hills, living root bridges, caves and lush green landscapes. Shillong, often called the 'Scotland of the East', is the cultural and educational hub of the state.",

  history:
    "Meghalaya was originally part of the Khasi, Jaintia and Garo kingdoms, each with its own distinct tribal administration. Later it came under British control as part of Assam. On 21 January 1972, Meghalaya became a separate Indian state. The state continues to preserve its matrilineal traditions and vibrant indigenous heritage.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Jadoh",
      detail:
        "A popular Khasi dish made with rice and meat, traditionally slow-cooked with aromatic spices and garnished with herbs.",
      image: "images/food/meghalaya-jadoh.jpg"
    },
    {
      name: "Dohneiiong",
      detail:
        "Pork cooked with black sesame paste and mild spices, giving it a rich smoky flavour distinct to Meghalaya.",
      image: "images/food/meghalaya-dohneiiong.jpg"
    },
    {
      name: "Tungrymbai",
      detail:
        "Fermented soybean stir-fried with spices and meat or vegetables, loved for its deep earthy taste.",
      image: "images/food/meghalaya-tungrymbai.jpg"
    },
    {
      name: "Nakham Bitchi",
      detail:
        "A warm Garo-style soup made from cured fish and pepper, usually served before meals or during winter.",
      image: "images/food/meghalaya-nakham-bitchi.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Cherrapunji (Sohra)",
      place: "East Khasi Hills",
      note:
        "A world-famous high-rainfall region with scenic valleys, waterfalls and misty plateaus.",
      image: "images/places/meghalaya-cherrapunji.jpg"
    },
    {
      name: "Living Root Bridges",
      place: "Nongriat and nearby villages",
      note:
        "Unique bio-engineered bridges made from live tree roots, including the famous double-decker bridge.",
      image: "images/places/meghalaya-root-bridge.jpg"
    },
    {
      name: "Umngot River",
      place: "Dawki",
      note:
        "A crystal-clear emerald river where boats appear to float on air — a popular travel attraction.",
      image: "images/places/meghalaya-umngot.jpg"
    },
    {
      name: "Shillong Peak & Viewpoint",
      place: "Shillong",
      note:
        "The highest viewpoint in Shillong, offering panoramic skyline and hill views.",
      image: "images/places/meghalaya-shillong-peak.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Shad Suk Mynsiem",
      detail:
        "A spring thanksgiving festival of the Khasi tribe symbolising joy, purity and the connection between nature and people.",
      image: "images/festivals/meghalaya-shad-suk-mynsiem.jpg"
    },
    {
      name: "Wangala Festival",
      detail:
        "The grand 'Festival of 100 Drums' of the Garo community celebrating the harvest season with rhythmic drum performances.",
      image: "images/festivals/meghalaya-wangala.jpg"
    },
    {
      name: "Behdeinkhlam",
      detail:
        "A major Jaintia festival marked by ritual dances and colourful processions to drive away misfortune and welcome prosperity.",
      image: "images/festivals/meghalaya-behdeinkhlam.jpg"
    },
    {
      name: "Nongkrem Dance",
      detail:
        "A traditional Khasi dance performed to seek blessings of good harvest and community wellbeing.",
      image: "images/festivals/meghalaya-nongkrem-dance.jpg"
    }
  ]
},


//Mizoram

"Mizoram": {
  Region: "North-East India",
  Capital: "Aizawl",
  weatherCity: "Aizawl",

  // Outline / map image for the Overview tab
  mapImage: "images/maps/mizoram-map.png",

  // Best time to visit (for your travel info feature)
  bestTime:
    "October to March – cool, pleasant weather with clear hill views and a great time to experience festivals like Chapchar Kut.",

  // ---------- OVERVIEW ----------
  overview:
    "Mizoram is a picturesque hill state in Northeast India, covered with rolling green hills, bamboo forests and misty valleys. \
It is home to the Mizo community, known for their warm hospitality, vibrant festivals, church choirs and close-knit community life. The capital Aizawl sits atop the hills, overlooking deep valleys and rivers.",

  // ---------- HISTORY ----------
  history:
    "Before colonial rule, the region was inhabited by various Mizo tribes who lived in independent chieftain-based villages. \
The British gradually brought the area under their control in the late 19th century, referring to it as the Lushai Hills. After independence, it became part of Assam and later a Union Territory called Mizoram in 1972. \
Following the Mizoram Peace Accord of 1986, the region achieved full statehood in 1987, becoming one of India’s most peaceful and literate states.",

  // ---------- FOOD (4 ITEMS) ----------
  food: [
    {
      name: "Bai",
      detail:
        "A light, healthy stew made by boiling local vegetables, bamboo shoot and sometimes pork with minimal oil and spices, reflecting the simple and earthy flavours of Mizo cuisine.",
      image: "images/food/mizoram-bai.jpg"
    },
    {
      name: "Vawksa Rep",
      detail:
        "Smoked pork cooked with local herbs, chilies and vegetables. The use of smoked meat is very popular in Mizoram and gives the dish a deep, rustic flavour.",
      image: "images/food/mizoram-vawksa-rep.jpg"
    },
    {
      name: "Sawhchiar",
      detail:
        "A comforting rice-based dish cooked with meat (often chicken or pork) and mild spices, similar to a one-pot porridge or pulao eaten on ordinary days as well as special occasions.",
      image: "images/food/mizoram-sawhchiar.jpg"
    },
    {
      name: "Sanpiau",
      detail:
        "A popular street-style snack made from soft rice, topped with chutneys, herbs and crushed spices, often compared to a Mizo version of savoury rice porridge.",
      image: "images/food/mizoram-sanpiau.jpg"
    }
  ],

  // ---------- PLACES (4 ITEMS) ----------
  places: [
    {
      name: "Aizawl",
      place: "Capital city",
      note:
        "A hilltop city offering panoramic views, churches, local markets and the Mizoram State Museum that showcases Mizo culture, textiles and traditional life.",
      image: "images/places/mizoram-aizawl.jpg"
    },
    {
      name: "Reiek",
      place: "Near Aizawl",
      note:
        "A scenic hill and tourist village known for its viewpoints, traditional Mizo huts and trekking trails offering sweeping views of the surrounding hills.",
      image: "images/places/mizoram-reiek.jpg"
    },
    {
      name: "Phawngpui (Blue Mountain)",
      place: "Lushai Hills",
      note:
        "The highest peak in Mizoram, famous for its blue haze, orchids, rare flora and as a peaceful trekking destination with spectacular cliff views.",
      image: "images/places/mizoram-phawngpui.jpg"
    },
    {
      name: "Vantawng Falls",
      place: "Near Thenzawl",
      note:
        "One of the tallest waterfalls in Mizoram, cascading through dense forests. It is viewed from a designated point and is a major nature attraction.",
      image: "images/places/mizoram-vantawng-falls.jpg"
    }
  ],

  // ---------- FESTIVALS (3) + 1 DANCE ----------
  festivals: [
    {
      name: "Chapchar Kut",
      detail:
        "The most popular spring festival of Mizoram, celebrated after the completion of jhum (shifting) cultivation work, with traditional dances, music, colourful attire and community feasts.",
      image: "images/festivals/mizoram-chapchar-kut.jpg"
    },
    {
      name: "Mim Kut",
      detail:
        "A harvest festival held to offer prayers for a good maize crop and to remember departed souls, observed with rituals, folk songs and community gatherings.",
      image: "images/festivals/mizoram-mim-kut.jpg"
    },
    {
      name: "Pawl Kut",
      detail:
        "Another important harvest festival marking the end of the year, celebrated with feasting, family reunions and thanksgiving for abundance.",
      image: "images/festivals/mizoram-pawl-kut.jpg"
    },
    {
      name: "Cheraw Dance (Bamboo Dance)",
      detail:
        "Mizoram’s iconic bamboo dance where women perform graceful steps between clapping bamboo poles handled by men, often showcased during major festivals like Chapchar Kut.",
      image: "images/festivals/mizoram-cheraw-dance.jpg"
    }
  ]
},


//Nagaland

"Nagaland": {
  Region: "Northeast India",
  Capital: "Kohima",
 weatherCity: "Kohima",
  bestTime: "November to April – ideal cool weather for sightseeing and cultural festivals, especially the Hornbill Festival.",

  // Outline / map image for Overview tab
  mapImage: "images/maps/nagaland-map.png",

  overview:
    "Nagaland is a vibrant hilly state in Northeast India known for its tribal cultures, traditional crafts, captivating landscapes and warm hospitality. The state is home to 16 major tribes, each with its own customs, festivals, attire and heritage, giving Nagaland a rich cultural identity.",
  
  history:
    "Nagaland’s history is deeply rooted in tribal traditions that date back centuries. During the British era, the region witnessed resistance movements by Naga freedom fighters seeking self-determination. After India’s independence, Nagaland officially became the 16th state of India in 1963. The people of Nagaland take pride in preserving their unique cultural identity, folklore and warrior heritage.",
  
  // ---------- FOOD ----------
  food: [
    {
      name: "Smoked Pork with Bamboo Shoot",
      detail:
        "A signature Naga delicacy prepared with tender smoked pork and fermented bamboo shoots, offering rich umami flavour and mild spice.",
      image: "images/food/nagaland-smoked-pork.jpg"
    },
    {
      name: "Axone (Fermented Soybean) Curry",
      detail:
        "A popular curry made from fermented soybeans, often paired with meat or vegetables, known for its bold flavour and strong aroma.",
      image: "images/food/nagaland-axone.jpg"
    },
    {
      name: "Galho",
      detail:
        "A comfort dish similar to khichdi, made with rice, vegetables or meat and Naga herbs, cooked slowly for a soothing earthy flavour.",
      image: "images/food/nagaland-galho.jpg"
    },
    {
      name: "Chicken with Raja Mircha",
      detail:
        "A fiery curry cooked using the famous world-hot chilli ‘Bhut Jolokia’ (Raja Mircha), known for its intense heat and smoky flavour.",
      image: "images/food/nagaland-raja-mircha-chicken.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Dzukou Valley",
      place: "Border of Nagaland & Manipur (near Kohima)",
      note:
        "A picturesque valley famous for lush green landscapes, seasonal flowers and trekking trails, known as the ‘Valley of Flowers of the East’.",
      image: "images/places/nagaland-dzukou.jpg"
    },
    {
      name: "Kisama Heritage Village",
      place: "Near Kohima",
      note:
        "Hosts the iconic Hornbill Festival showcasing tribal culture, traditional huts, dances, music, crafts and food from all Naga tribes.",
      image: "images/places/nagaland-kisama.jpg"
    },
    {
      name: "Kohima War Cemetery",
      place: "Kohima",
      note:
        "A memorial dedicated to soldiers who fought in the 1944 Battle of Kohima during World War II — beautifully maintained and serene.",
      image: "images/places/nagaland-war-cemetery.jpg"
    },
    {
      name: "Tuophema Tourist Village",
      place: "Touphema",
      note:
        "A cultural village where visitors can experience Naga cuisine, folk traditions, handlooms, handicrafts and homestays.",
      image: "images/places/nagaland-tuophema.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Hornbill Festival",
      detail:
        "The grandest cultural festival of Nagaland held in December, celebrating tribal heritage with traditional dances, music, food and handicrafts.",
      image: "images/festivals/nagaland-hornbill.jpg"
    },
    {
      name: "Aoling Festival",
      detail:
        "Celebrated by the Konyak tribe in April to mark the arrival of spring and successful harvest, featuring colourful dances and rituals.",
      image: "images/festivals/nagaland-aoling.jpg"
    },
    {
      name: "Moatsu Festival",
      detail:
        "A harvest festival celebrated by the Ao tribe with community feasts, storytelling, singing and traditional sports.",
      image: "images/festivals/nagaland-moatsu.jpg"
    },
    {
      name: "Chang Lo Dance",
      detail:
        "A famous traditional warrior dance performed by the Chang tribe during festivals to depict courage, unity and cultural pride.",
      image: "images/festivals/nagaland-chang-lo-dance.jpg"
    }
  ],

},


//Orissa

"Orissa": {
  Region: "Eastern India",
  Capital: "Bhubaneswar",
   weatherCity: "Bhubaneswar",
bestTime: "November to February – cool and pleasant climate ideal for temple visits, beaches and wildlife exploration.",


  mapImage: "images/maps/orissa-map.png",

  overview:
    "Orissa is known for its ancient temples, classical art forms, serene beaches and tribal culture. It is home to the famous Jagannath Temple, vibrant handicrafts and the coastal beauty of Puri and Chilika Lake.",

  history:
    "The history of Orissa traces back to ancient Kalinga, known for its maritime trade and cultural exchange. The Kalinga War under Emperor Ashoka marked a major turning point in Indian history. The region later flourished under dynasties such as the Ganga and Gajapati rulers before becoming part of modern India.",

  food: [
    {
      name: "Dahi Bara Aloo Dum",
      detail:
        "A popular street delicacy from Cuttack, featuring soft dahi-soaked lentil vadas served with spicy aloo dum curry.",
      image: "images/food/orissa-dahi-bara-aloo-dum.jpg"
    },
    {
      name: "Pakhala Bhata",
      detail:
        "Fermented rice served with fried or roasted accompaniments, refreshing during summers and celebrated on Pakhala Dibasa.",
      image: "images/food/orissa-pakhala.jpg"
    },
    {
      name: "Chhena Poda",
      detail:
        "A baked sweet dish made of caramelized cottage cheese, often called the 'Indian cheesecake' of Orissa.",
      image: "images/food/orissa-chhena-poda.jpg"
    },
    {
      name: "Macha Besara",
      detail:
        "A mustard-based fish curry reflecting the coastal food heritage of Orissa.",
      image: "images/food/orissa-macha-besara.jpg"
    }
  ],

  places: [
    {
      name: "Jagannath Temple",
      place: "Puri",
      note:
        "A major Hindu pilgrimage site and part of the Char Dham, renowned for Rath Yatra and its deep cultural significance.",
      image: "images/places/orissa-jagannath.jpg"
    },
    {
      name: "Konark Sun Temple",
      place: "Konark",
      note:
        "A UNESCO World Heritage monument designed as a colossal chariot of the Sun God with detailed stone carvings.",
      image: "images/places/orissa-konark-sun-temple.jpg"
    },
    {
      name: "Chilika Lake",
      place: "Coastal Orissa",
      note:
        "Asia's largest brackish water lagoon, popular for bird watching, islands and Irrawaddy dolphin sightings.",
      image: "images/places/orissa-chilika.jpg"
    },
    {
      name: "Dhauli Shanti Stupa",
      place: "Near Bhubaneswar",
      note:
        "A peace pagoda built at the historic site of the Kalinga War symbolizing Emperor Ashoka’s transformation toward peace.",
      image: "images/places/orissa-dhauli.jpg"
    }
  ],

  festivals: [
    {
      name: "Nuakhai",
      detail:
        "A major harvest festival of Western Orissa marking the first rice of the season, celebrated with family feasts, prayers and cultural performances.",
      image: "images/festivals/orissa-nuakhai.jpg"
    },
    {
      name: "Rath Yatra",
      detail:
        "One of the grandest chariot festivals in India where Lord Jagannath, Balabhadra and Subhadra are carried in huge wooden chariots.",
      image: "images/festivals/orissa-rathyatra.jpg"
    },
    {
      name: "Konark Dance Festival",
      detail:
        "A cultural festival showcasing classical dance such as Odissi with Konark Sun Temple as the backdrop.",
      image: "images/festivals/orissa-konark-dance.jpg"
    },
    {
      name: "Odissi Dance",
      detail:
        "One of India’s eight classical dance forms, known for graceful movements, expressions and sculpturesque postures.",
      image: "images/festivals/orissa-odissi-dance.jpg"
    }
  ],
 
},


//Puducherry

// Puducherry

"Puducherry": {
  Region: "Southern India",
  Capital: "Puducherry",
  weatherCity: "Puducherry",

  // Outline / map image for the Overview tab
  mapImage: "images/maps/puducherry-map.png",

  // Best time to visit
  bestTime:
    "October to March – cooler, less humid coastal weather ideal for beaches, promenades and heritage walks.",

  // ---------- OVERVIEW ----------
  overview:
    "Puducherry (formerly Pondicherry) is a coastal Union Territory on the southeastern Coromandel Coast, known for its French-style boulevards, colourful colonial buildings, seaside promenades and calm lifestyle. The town blends Tamil traditions with a strong French cultural imprint, reflected in its architecture, food and everyday life.",

  // ---------- HISTORY ----------
  history:
    "Puducherry’s recorded history includes rule by the Cholas, Pandyas and Vijayanagara Empire before it became an important trading centre for European powers. The French East India Company established its settlement here in the 17th century, and Puducherry remained the headquarters of French India for nearly 300 years. It officially became part of the Indian Union in 1962 through a treaty of cession, but still retains a distinct French–Tamil cultural identity.",

  // ---------- FOOD (4 ITEMS) ----------
  food: [
    {
      name: "Pondicherry Seafood Curry",
      detail:
        "A coastal-style curry made with fresh fish or prawns, coconut milk, tamarind and a mix of South Indian and French-influenced spices, popular in beachside cafés and home kitchens.",
      image: "images/food/puducherry-seafood-curry.jpg"
    },
    {
      name: "Poulet Roti (Pondystyle Chicken)",
      detail:
        "A mild, herb-marinated roast chicken inspired by French cuisine but adapted with local spices and served with sautéed vegetables or bread.",
      image: "images/food/puducherry-roast-chicken.jpg"
    },
    {
      name: "Masala Baguette Sandwich",
      detail:
        "Crispy French baguette stuffed with spiced potatoes, chutneys or grilled meats, symbolising the fusion of French bread culture with Tamil street flavours.",
      image: "images/food/puducherry-masala-baguette.jpg"
    },
    {
      name: "Karaikudi-style Prawn Fry",
      detail:
        "Spicy, shallow-fried prawns marinated with chilli, pepper and coastal masalas, often served as a side dish with rice or as a café starter.",
      image: "images/food/puducherry-prawn-fry.jpg"
    }
  ],

  // ---------- PLACES (4 ITEMS) ----------
  places: [
    {
      name: "Promenade Beach",
      place: "Puducherry town",
      note:
        "A long sea-facing promenade lined with colonial buildings, statues and cafés, ideal for morning walks, evening strolls and watching the waves.",
      image: "images/places/puducherry-promenade-beach.jpg"
    },
    {
      name: "Sri Aurobindo Ashram",
      place: "Puducherry town",
      note:
        "A spiritual centre founded by Sri Aurobindo and The Mother, known for its peaceful atmosphere, meditation spaces and influence on the town’s quiet, reflective lifestyle.",
      image: "images/places/puducherry-aurobindo-ashram.jpg"
    },
    {
      name: "Auroville & Matrimandir",
      place: "Near Puducherry",
      note:
        "An experimental international township dedicated to human unity, with the golden Matrimandir at its centre serving as a meditation space amidst landscaped gardens.",
      image: "images/places/puducherry-auroville-matrimandir.jpg"
    },
    {
      name: "French Quarters (White Town)",
      place: "Puducherry town",
      note:
        "A heritage area with mustard-yellow villas, bougainvillea-draped balconies, street cafés and churches that showcase French colonial architecture.",
      image: "images/places/puducherry-white-town.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE (3 FESTIVALS + 1 DANCE) ----------
  festivals: [
    {
      name: "Bastille Day Parade",
      detail:
        "Celebrated on 14 July with parades, cultural programmes and flag-hoisting ceremonies reflecting Puducherry’s historic connection with France.",
      image: "images/festivals/puducherry-bastille-day.jpg"
    },
    {
      name: "Puducherry Heritage Festival",
      detail:
        "An annual celebration highlighting the town’s architecture, crafts, food and music through heritage walks, exhibitions and performances.",
      image: "images/festivals/puducherry-heritage-festival.jpg"
    },
    {
      name: "Masi Magam",
      detail:
        "A major Tamil festival during which temple deities are taken in a grand procession to the seashore for ritual baths and prayers, drawing large local crowds.",
      image: "images/festivals/puducherry-masi-magam.jpg"
    },
    {
      name: "Garadi Dance",
      detail:
        "A traditional folk dance performed in Puducherry and nearby regions during temple festivals, featuring energetic drum beats, masks and mythological storytelling.",
      image: "images/festivals/puducherry-garadi-dance.jpg"
    }
  ]
},

//Punjab

"Punjab": {
  Region: "North India",
  Capital: "Chandigarh",

  mapImage: "images/maps/punjab-map.png",

  overview:
    "Punjab, known as the Land of Five Rivers, is famous for its fertile agricultural lands, energetic culture, vibrant music and warm hospitality. The state reflects a rich history of Sikh traditions, rural lifestyle and colourful festivals.",
  
  history:
    "Punjab has a glorious past shaped by ancient Indus Valley civilisation, followed by Mauryan, Gupta and Mughal rule. The rise of the Sikh Empire under Maharaja Ranjit Singh brought cultural and military prominence. After India’s independence, Punjab played a crucial role in the Green Revolution that transformed the nation’s agriculture.",

  weatherCity: "Chandigarh",

  bestTime: "October to March – pleasant climate and best time to explore heritage sites and farms.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Butter Chicken",
      detail:
        "A rich and creamy tomato-based chicken curry famous for its buttery texture and mildly spiced flavour, enjoyed worldwide as a Punjabi classic.",
      image: "images/food/punjab-butter-chicken.jpg"
    },
    {
      name: "Makki di Roti & Sarson da Saag",
      detail:
        "A hearty winter special made from mustard leaves served with corn flour roti, topped with white butter and jaggery.",
      image: "images/food/punjab-saag-makki.jpg"
    },
    {
      name: "Pinni",
      detail:
        "A traditional sweet made using wheat flour, ghee and dry fruits, especially prepared during winters for energy and warmth.",
      image: "images/food/punjab-pinni.jpg"
    },
    {
      name: "Panjiri",
      detail:
        "A nutritious sweet dish made of ghee-roasted whole wheat flour, gond, nuts and seeds, known for its health benefits and rich taste.",
      image: "images/food/punjab-panjiri.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Golden Temple",
      place: "Amritsar",
      note:
        "The holiest Sikh shrine known for its breathtaking golden architecture, spiritual atmosphere and langar community kitchen.",
      image: "images/places/punjab-golden-temple.jpg"
    },
    {
      name: "Wagah Border",
      place: "Amritsar–Lahore Road",
      note:
        "Famous for the ceremonial Beating Retreat parade performed daily by Indian and Pakistani soldiers, attracting thousands of visitors.",
      image: "images/places/punjab-wagah-border.jpg"
    },
    {
      name: "Jallianwala Bagh",
      place: "Amritsar",
      note:
        "A memorial dedicated to hundreds of innocent Indians who lost their lives in the 1919 massacre during the freedom struggle.",
      image: "images/places/punjab-jallianwala.jpg"
    },
    {
      name: "Anandpur Sahib",
      place: "Rupnagar district",
      note:
        "A major Sikh pilgrimage site associated with Guru Gobind Singh and the birthplace of the Khalsa Panth.",
      image: "images/places/punjab-anandpur-sahib.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Baisakhi",
      detail:
        "The harvest festival celebrated with energetic bhangra performances, fairs and traditional farm feasts to mark the Punjabi New Year.",
      image: "images/festivals/punjab-baisakhi.jpg"
    },
    {
      name: "Lohri",
      detail:
        "A winter bonfire festival symbolising the end of peak winter, celebrated through folk songs, dance, groundnuts and jaggery sweets.",
      image: "images/festivals/punjab-lohri.jpg"
    },
    {
      name: "Gurpurab",
      detail:
        "Sacred Sikh festival celebrating the birth anniversaries of Sikh Gurus, featuring kirtan, langar and processions.",
      image: "images/festivals/punjab-gurpurab.jpg"
    },
    {
      name: "Bhangra Dance",
      detail:
        "An energetic folk dance form known worldwide for vibrant movements, dhol beats and colourful costumes.",
      image: "images/festivals/punjab-bhangra.jpg"
    }
  ]
},


// Rajasthan

  // Rajasthan

"Rajasthan": {
  Region: "Western India",
  Capital: "Jaipur",
  weatherCity: "Jaipur",

  // Map image for Overview tab
  mapImage: "images/maps/rajasthan-map.png",

  // Best time to visit
  bestTime:
    "October to March – cooler desert weather ideal for exploring forts, deserts and colourful festivals.",

  // ---------- OVERVIEW ----------
  overview:
    "Rajasthan, often called the ‘Land of Kings’, is India’s largest state by area, known for its golden deserts, grand forts, palaces, colourful bazaars and royal Rajput heritage. \
The landscape ranges from the Thar Desert and Aravalli hills to historic cities like Jaipur, Jodhpur and Udaipur, each with its own distinct character and architecture.",

  // ---------- HISTORY ----------
  history:
    "Historically, Rajasthan was home to several Rajput kingdoms such as Mewar, Marwar, Amber and Bikaner, who built magnificent forts and palaces and played a major role in resisting invasions. \
The region saw alliances and battles with the Delhi Sultanate and Mughal Empire, while retaining a strong warrior and chivalric culture. \
Under British rule, the princely states of Rajputana continued with internal autonomy until they were integrated into the Indian Union after independence, forming the modern state of Rajasthan in 1956.",

  // ---------- FOOD (4 ITEMS) ----------
  food: [
    {
      name: "Dal Baati Churma",
      detail:
        "A signature Rajasthani dish of baked wheat baati served with spicy dal and sweet churma made from crushed baati, ghee and jaggery or sugar.",
      image: "images/food/rajasthan-dal-baati-churma.jpg"
    },
    {
      name: "Laal Maas",
      detail:
        "A fiery mutton curry cooked with Mathania red chillies, yogurt and spices, traditionally enjoyed with bajra roti or steamed rice.",
      image: "images/food/rajasthan-laal-maas.jpg"
    },
    {
      name: "Ker Sangri",
      detail:
        "A unique desert speciality made using dried ker berries and sangri beans sautéed with spices and ghee, often served with roti during festive meals.",
      image: "images/food/rajasthan-ker-sangri.jpg"
    },
    {
      name: "Ghevar",
      detail:
        "A disc-shaped, honeycomb-textured sweet made from flour and ghee, soaked in sugar syrup and topped with rabri or nuts, especially popular during Teej and Raksha Bandhan.",
      image: "images/food/rajasthan-ghevar.jpg"
    }
  ],

  // ---------- PLACES (4 ITEMS) ----------
  places: [
    {
      name: "Jaipur City Palace & Hawa Mahal",
      place: "Jaipur",
      note:
        "The City Palace complex showcases royal courtyards, museums and architecture, while the nearby Hawa Mahal’s iconic jharokhas overlook the old city streets.",
      image: "images/places/rajasthan-jaipur-citypalace-hawamahal.jpg"
    },
    {
      name: "Jaisalmer Fort & Sam Sand Dunes",
      place: "Jaisalmer",
      note:
        "The golden sandstone ‘Living Fort’ of Jaisalmer rises above the desert, and nearby Sam Sand Dunes offer camel safaris and sunset views over the Thar.",
      image: "images/places/rajasthan-jaisalmer-sam-dunes.jpg"
    },
    {
      name: "Udaipur City Palace & Lake Pichola",
      place: "Udaipur",
      note:
        "A lakeside palace complex with ornate balconies and courtyards, facing the serene waters of Lake Pichola dotted with island palaces and ghats.",
      image: "images/places/rajasthan-udaipur-citypalace-pichola.jpg"
    },
    {
      name: "Ranthambore National Park",
      place: "Sawai Madhopur",
      note:
        "A famous tiger reserve combining wildlife safaris with the dramatic backdrop of Ranthambore Fort and ancient ruins engulfed by the forest.",
      image: "images/places/rajasthan-ranthambore.jpg"
    }
  ],

  // ---------- FESTIVALS (3) + 1 DANCE ----------
  festivals: [
    {
      name: "Jaisalmer Desert Festival",
      detail:
        "A colourful annual festival in the Thar Desert featuring camel races, turban-tying competitions, folk performances and cultural shows under the open desert sky.",
      image: "images/festivals/rajasthan-desert-festival.jpg"
    },
    {
      name: "Pushkar Camel Fair",
      detail:
        "An iconic fair where thousands of camels, horses and livestock are traded alongside religious rituals at Pushkar Lake, with folk music, competitions and handicraft stalls.",
      image: "images/festivals/rajasthan-pushkar-fair.jpg"
    },
    {
      name: "Gangaur Festival",
      detail:
        "A major festival dedicated to Goddess Gauri, celebrated by women with beautifully decorated idols, processions, traditional attire and songs praying for prosperity and marital happiness.",
      image: "images/festivals/rajasthan-gangaur.jpg"
    },
    {
      name: "Ghoomar Dance",
      detail:
        "A graceful folk dance performed by women in swirling ghagras, characterized by circular movements and traditional songs, often seen during weddings and festivals.",
      image: "images/festivals/rajasthan-ghoomar.jpg"
    }
  ]
},

//Sikkim
"Sikkim": {
  Region: "Northeast India",
  Capital: "Gangtok",
  weatherCity: "Gangtok",
  bestTime: "March to June and September to December — ideal clear skies and pleasant temperatures to enjoy mountains, monasteries and trekking.",

  // Map outline for overview tab
  mapImage: "images/maps/sikkim-map.png",

  overview:
    "Sikkim is a serene Himalayan state known for its snow-capped peaks, Buddhist monasteries, organic farming and breathtaking valleys. Surrounded by the world’s third-highest mountain, Kanchenjunga, Sikkim is one of India’s cleanest, calmest and most environmentally conscious states.",

  history:
    "Historically ruled by the Namgyal dynasty from the 17th century, Sikkim remained an independent Himalayan kingdom until the 1970s. In 1975, it officially became the 22nd state of India through a democratic referendum. Tibetan Buddhist traditions, Lepcha culture and Himalayan influences continue to shape its heritage.",



  // ---------- FOOD ----------
  food: [
    {
      name: "Phagshapa",
      detail:
        "A traditional Sikkimese dish prepared with pork fat stewed along with radish and dry chilies, offering a mildly spicy smoky flavour.",
      image: "images/food/sikkim-phagshapa.jpg"
    },
    {
      name: "Gundruk Soup",
      detail:
        "A fermented leafy-green soup rich in probiotics and flavours, usually eaten during winters with rice or millet bread.",
      image: "images/food/sikkim-gundruk.jpg"
    },
    {
      name: "Kinema Curry",
      detail:
        "A protein-rich dish made from fermented soybeans cooked with tomatoes, onions and spices — loved in rural Himalayan regions.",
      image: "images/food/sikkim-kinema.jpg"
    },
    {
      name: "Sha Phaley",
      detail:
        "A crispy semicircular pastry stuffed with seasoned minced meat and cabbage, deep-fried to perfection.",
      image: "images/food/sikkim-shaphaley.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Tsomgo Lake",
      place: "Near Gangtok",
      note:
        "A high-altitude glacial lake known for its changing colours each season and sacred importance to local communities.",
      image: "images/places/sikkim-tsomgo-lake.jpg"
    },
    {
      name: "Yumthang Valley",
      place: "North Sikkim",
      note:
        "Also called the ‘Valley of Flowers’, this scenic valley blooms with rhododendrons and primulas during spring.",
      image: "images/places/sikkim-yumthang.jpg"
    },
    {
      name: "Nathula Pass",
      place: "Indo-China Border",
      note:
        "A historic silk-route mountain pass located at 14,140 ft, open to tourists on select days of the week.",
      image: "images/places/sikkim-nathula.jpg"
    },
    {
      name: "Rumtek Monastery",
      place: "Gangtok",
      note:
        "One of the most significant monasteries of Tibetan Buddhism, known for its golden stupa, murals and peaceful ambience.",
      image: "images/places/sikkim-rumtek.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Saga Dawa",
      detail:
        "A sacred Buddhist festival commemorating the birth, enlightenment and nirvana of Lord Buddha, celebrated with chants and lamp lighting.",
      image: "images/festivals/sikkim-saga-dawa.jpg"
    },
    {
      name: "Pang Lhabsol",
      detail:
        "A unique festival honouring Mount Kanchenjunga as the guardian deity of Sikkim, marked with warrior dances and masked rituals.",
      image: "images/festivals/sikkim-pang-lhabsol.jpg"
    },
    {
      name: "Maghe Sankranti",
      detail:
        "A winter festival celebrated by Nepalese communities with feasts, rituals and traditional sweets like sel roti and gheu-cheeni.",
      image: "images/festivals/sikkim-maghe-sankranti.jpg"
    },
    {
      name: "Maruni Dance",
      detail:
        "A colourful folk dance performed during major festivals, characterized by ornamental attire, rhythmic steps and storytelling movements.",
      image: "images/festivals/sikkim-maruni-dance.jpg"
    }
  ],

},

//Tamil Nadu

  "Tamil Nadu": {
  Region: "South India",
  Capital: "Chennai",
  weatherCity: "Chennai",
  bestTime: "November to February — pleasant winter climate ideal for temples, beaches and hill stations.",

  // Map outline for the overview tab
  mapImage: "images/maps/tamil-nadu-map.png",

  overview:
    "Tamil Nadu is known for its ancient Dravidian heritage, classical arts, rich temple architecture, long coastline and thriving metropolitan cities like Chennai and Coimbatore. The state reflects a perfect blend of history, culture and technological growth.",

  history:
    "Tamil Nadu has been the homeland of powerful dynasties including the Cholas, Cheras and Pandyas, who pioneered temple architecture, literature and maritime trade. The Chola Empire’s influence extended to Southeast Asia. During the colonial era, Tamil Nadu was under the British Madras Presidency. After independence, the region became an essential cultural and industrial hub of India.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Idli & Sambar",
      detail:
        "Soft steamed rice-lentil cakes served with vegetable sambar and coconut chutney — a staple South Indian breakfast loved worldwide.",
      image: "images/food/tn-idli-sambar.jpg"
    },
    {
      name: "Chettinad Chicken",
      detail:
        "A fiery and aromatic chicken curry from the Chettinad region, packed with freshly ground spices and signature smoky flavors.",
      image: "images/food/tn-chettinad-chicken.jpg"
    },
    {
      name: "Kothu Parotta",
      detail:
        "Shredded parotta tossed on a hot tawa with eggs or meat and spices, known for its rhythmic preparation style and street-side popularity.",
      image: "images/food/tn-kothu-parotta.jpg"
    },
    {
      name: "Ven Pongal",
      detail:
        "A ghee-rich rice and lentil dish tempered with pepper, cumin and cashews — commonly eaten for breakfast and festivals.",
      image: "images/food/tn-ven-pongal.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Meenakshi Amman Temple",
      place: "Madurai",
      note:
        "A world-famous Dravidian architectural marvel with towering gopurams, intricate sculptures and vibrant temple festivals.",
      image: "images/places/tn-meenakshi-temple.jpg"
    },
    {
      name: "Marina Beach",
      place: "Chennai",
      note:
        "One of the longest urban beaches in the world, known for sunrise views, promenades and vibrant local street life.",
      image: "images/places/tn-marina-beach.jpg"
    },
    {
      name: "Kodaikanal",
      place: "Dindigul district",
      note:
        "A scenic hill station known for cool climate, lakes, pine forests and misty viewpoints, popularly called the 'Princess of Hill Stations'.",
      image: "images/places/tn-kodaikanal.jpg"
    },
    {
      name: "Mahabalipuram",
      place: "Chengalpattu district",
      note:
        "A UNESCO World Heritage site famous for rock-cut temples, monolithic structures and ancient shore temple built by the Pallavas.",
      image: "images/places/tn-mahabalipuram.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Pongal Festival",
      detail:
        "The grand harvest celebration lasting four days (Bhogi, Pongal, Mattu Pongal & Kaanum), marked by traditional rituals, kolams and festive dishes.",
      image: "images/festivals/tn-pongal.jpg"
    },
    {
      name: "Karthigai Deepam",
      detail:
        "A festival of lights celebrated across Tamil Nadu, especially at Arunachala Temple in Tiruvannamalai, symbolizing divine radiance and purity.",
      image: "images/festivals/tn-karthigai-deepam.jpg"
    },
    {
      name: "Tamil New Year (Puthandu)",
      detail:
        "Observed on the first day of the Tamil month Chithirai, celebrated with special feasts, house decorations and temple visits.",
      image: "images/festivals/tn-puthandu.jpg"
    },
    {
      name: "Bharatanatyam Dance",
      detail:
        "Tamil Nadu’s world-renowned classical dance form known for graceful expressions, intricate footwork and devotional storytelling.",
      image: "images/festivals/tn-bharatanatyam.jpg"
    }
  ],

},

  //Telangana
"Telangana": {
  Region: "South India",
  Capital: "Hyderabad",
  weatherCity: "Hyderabad",
  bestTime: "October to February – pleasant winter climate ideal for exploring forts, lakes and Hyderabad city tourism.",
  
  // Outline / map image for Overview tab
  mapImage: "images/maps/telangana-map.png",

  overview:
    "Telangana is a culturally rich state in South India known for its architectural marvels, vibrant Deccan legacy, pearl markets and spicy cuisine. Home to the historic city of Hyderabad, the state reflects a perfect blend of ancient Nawabi heritage and fast-growing IT urban lifestyle.",

  history:
    "Telangana’s heritage traces back to the Satavahanas, Kakatiyas and Qutb Shahi dynasties, shaping the region through temple architecture, forts and Indo-Persian influences. Later it became part of the Hyderabad State under the Nizams. The Telangana state movement led to its formation as India’s 29th state on 2 June 2014 after separation from Andhra Pradesh.",

  bestTime: "October to February – pleasant winter climate ideal for exploring forts, lakes and Hyderabad city tourism.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Hyderabadi Biryani",
      detail:
        "A world-famous layered rice dish cooked with aromatic spices, basmati rice and marinated meat, traditionally slow-cooked using the dum technique.",
      image: "images/food/telangana-biryani.jpg"
    },
    {
      name: "Sarva Pindi",
      detail:
        "A crispy savoury rice-flour pancake seasoned with peanuts, sesame and green chillies, representing traditional Telangana home cuisine.",
      image: "images/food/telangana-sarva-pindi.jpg"
    },
    {
      name: "Bagara Baingan",
      detail:
        "A rich curry of eggplants simmered in a creamy peanut-sesame-coconut masala base, served commonly with biryani or rice.",
      image: "images/food/telangana-bagara-baingan.jpg"
    },
    {
      name: "Jowar Roti & Natu Kodi Curry",
      detail:
        "A rural staple meal where soft millet rotis are paired with traditional country-chicken curry known for its earthy and spicy flavours.",
      image: "images/food/telangana-jowar-roti.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Charminar",
      place: "Hyderabad",
      note:
        "Iconic four-minaret monument of the Qutb Shahi era, surrounded by vibrant Laad Bazaar famous for pearls and bangles.",
      image: "images/places/telangana-charminar.jpg"
    },
    {
      name: "Golconda Fort",
      place: "Hyderabad",
      note:
        "Historic fortress known for its unique acoustics, royal palaces and panoramic views of Hyderabad.",
      image: "images/places/telangana-golconda.jpg"
    },
    {
      name: "Ramappa Temple",
      place: "Mulugu",
      note:
        "UNESCO World Heritage temple constructed by the Kakatiya dynasty, known for detailed sandstone sculptures and floating bricks architecture.",
      image: "images/places/telangana-ramappa-temple.jpg"
    },
    {
      name: "Hussain Sagar & Buddha Statue",
      place: "Hyderabad",
      note:
        "A huge artificial lake featuring an illuminated monolithic Buddha statue at the center, popular for evening boat rides.",
      image: "images/places/telangana-hussain-sagar.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Bonalu",
      detail:
        "A major folk festival worshipping Goddess Mahakali, celebrated with colourful processions, decorated pots and traditional performances.",
      image: "images/festivals/telangana-bonalu.jpg"
    },
    {
      name: "Bathukamma",
      detail:
        "A floral festival where women arrange flower stacks and dance around them to celebrate femininity, nature and prosperity.",
      image: "images/festivals/telangana-bathukamma.jpg"
    },
    {
      name: "Sammakka Saralamma Jatara",
      detail:
        "A tribal festival held every two years in Medaram, attracting millions of devotees to honour tribal warrior goddesses Sammakka and Saralamma.",
      image: "images/festivals/telangana-medaram.jpg"
    },
    {
      name: "Perini Shiva Tandavam",
      detail:
        "A revived ancient warrior dance of the Kakatiya era, performed with powerful rhythmic movements symbolising devotion and strength.",
      image: "images/festivals/telangana-perini.jpg"
    }
  ]
},


//Tripura

"Tripura": {
  Region: "North-Eastern India",
  Capital: "Agartala",
  weatherCity: "Agartala",
  bestTime: "October to March – cool weather and ideal for exploring palaces, lakes and cultural festivals.",

  // Outline / map image for Overview tab
  mapImage: "images/maps/tripura-map.png",


  overview:
    "Tripura is a picturesque North-Eastern state known for its lush green hills, royal heritage, serene lakes and rich tribal culture. Located along the Bangladesh border, the state blends ancient traditions with modern city life centred around Agartala.",

  history:
    "Tripura was ruled for centuries by the Manikya dynasty, whose influence is reflected in its palaces and temples. The region later became a princely state under British India and formally merged with the Indian Union in 1949. Tripura’s cultural identity remains strongly connected to both tribal communities and royal heritage.",

  // ---------- FOOD ----------
  food: [
    {
      name: "Mui Borok",
      detail:
        "A traditional Tripuri dish usually prepared without oil and made using a fermented fish ingredient called berma along with vegetables.",
      image: "images/food/tripura-mui-borok.jpg"
    },
    {
      name: "Wahan Mosdeng",
      detail:
        "Spicy shredded pork dish mixed with onions, chillies and herbs, popular in tribal households.",
      image: "images/food/tripura-wahan-mosdeng.jpg"
    },
    {
      name: "Chak-Hao Kheer",
      detail:
        "A sweet pudding made from aromatic black rice, giving a unique flavour and purple colour.",
      image: "images/food/tripura-chak-hao-kheer.jpg"
    },
    {
      name: "Kosoi Bwtwi",
      detail:
        "A healthy boiled dish made with beans, bamboo shoots and berma, reflecting Tripuri tribal cuisine.",
      image: "images/food/tripura-kosoi-bwtwi.jpg"
    }
  ],

  // ---------- PLACES ----------
  places: [
    {
      name: "Ujjayanta Palace",
      place: "Agartala",
      note:
        "A majestic royal palace with Mughal-style gardens, ponds and a museum showcasing Tripura’s history.",
      image: "images/places/tripura-ujjayanta-palace.jpg"
    },
    {
      name: "Neermahal",
      place: "Melaghar",
      note:
        "A beautiful water palace built in the middle of Rudrasagar Lake, known as the ‘Lake Palace of the East’.",
      image: "images/places/tripura-neermahal.jpg"
    },
    {
      name: "Unakoti",
      place: "Kailashahar",
      note:
        "A rock-cut archaeological site featuring huge stone carvings of Hindu deities dating back many centuries.",
      image: "images/places/tripura-unakoti.jpg"
    },
    {
      name: "Sepahijala Wildlife Sanctuary",
      place: "Near Agartala",
      note:
        "A natural habitat with rare species including spectacled monkey and migratory birds, ideal for nature lovers.",
      image: "images/places/tripura-sepahijala.jpg"
    }
  ],

  // ---------- FESTIVALS & DANCE ----------
  festivals: [
    {
      name: "Kharchi Puja",
      detail:
        "A major festival celebrated with rituals dedicated to 14 deities, accompanied by fairs, cultural events and traditional music.",
      image: "images/festivals/tripura-kharchi.jpg"
    },
    {
      name: "Garia Puja",
      detail:
        "A tribal spring festival invoking the deity Garia for prosperity, celebrated with dance, music and bamboo festivities.",
      image: "images/festivals/tripura-garia.jpg"
    },
    {
      name: "Durga Puja (Tripura Style)",
      detail:
        "One of the grandest celebrations in the state with artistic pandals, cultural programs and festive decorations across Agartala.",
      image: "images/festivals/tripura-durga.jpg"
    },
    {
      name: "Hojagiri Dance",
      detail:
        "A graceful and impressive folk dance performed by the Reang community, known for balancing acts on pitchers and plates.",
      image: "images/festivals/tripura-hojagiri.jpg"
    }
  ]
},



//Uttar Pradesh
"Uttar Pradesh": {
  Region: "North India",
  Capital: "Lucknow",
  weatherCity: "Lucknow",

  // Map image for Overview tab
  mapImage: "images/maps/uttar-pradesh-map.png",

  // Best time to visit
  bestTime:
    "October to March – pleasant winter weather ideal for sightseeing, wildlife tourism, cultural exploration and pilgrimage tourism.",

  // ---------- OVERVIEW ----------
  overview:
    "Uttar Pradesh, often called the 'Heartland of India', is the country’s most populous state and a major centre of culture, religion and history. Home to the Taj Mahal, the Ganga river, the sacred cities of Varanasi and Ayodhya, and the temple city of Mathura–Vrindavan, the state reflects India’s deep spiritual legacy. From Mughal architecture and Nawabi heritage to vibrant cuisine and festivals, Uttar Pradesh offers a rich and diverse travel experience.",

  // ---------- HISTORY ----------
  history:
    "Uttar Pradesh has been a cradle of Indian civilisation since ancient times, forming part of notable kingdoms such as Kosala and Kashi and later becoming a centre of the Maurya and Gupta empires. The region was a major hub of the Mughal Empire with Agra and Fatehpur Sikri as important capitals. During the British Raj it formed part of the United Provinces, later renamed Uttar Pradesh in 1950 after independence. It has played a prominent role in India’s freedom struggle and continues to hold political and cultural significance.",

  // ---------- FOOD (4 ITEMS) ----------
  food: [
    {
      name: "Tunday Kababi",
      detail:
        "A legendary melt-in-the-mouth minced meat kebab flavoured with a secret blend of aromatic spices, originating from the city of Lucknow and famous worldwide.",
      image: "images/food/uttar-pradesh-tunday-kababi.jpg"
    },
    {
      name: "Banarasi Paan",
      detail:
        "A traditional betel leaf preparation filled with areca nut, sweet condiments and flavourings, used as a mouth freshener and culturally associated with Varanasi.",
      image: "images/food/uttar-pradesh-banarasi-paan.jpg"
    },
    {
      name: "Bedhai & Aloo Sabzi",
      detail:
        "A popular breakfast dish consisting of deep-fried puffy bread served with a spicy potato curry, commonly eaten in cities like Agra and Mathura.",
      image: "images/food/uttar-pradesh-bedhai.jpg"
    },
    {
      name: "Jalebi",
      detail:
        "A crispy, spiral-shaped dessert made with fermented batter fried in ghee and soaked in sugar syrup, widely enjoyed across the state, especially in winter.",
      image: "images/food/uttar-pradesh-jalebi.jpg"
    }
  ],

  // ---------- PLACES (4 ITEMS) ----------
  places: [
    {
      name: "Taj Mahal",
      place: "Agra",
      note:
        "A UNESCO World Heritage monument and one of the Seven Wonders of the World, built by Emperor Shah Jahan in memory of Mumtaz Mahal and admired globally for its Mughal architecture and white marble brilliance.",
      image: "images/places/uttar-pradesh-taj-mahal.jpg"
    },
    {
      name: "Varanasi (Kashi)",
      place: "Varanasi district",
      note:
        "One of the oldest living cities in the world, revered for the ghats of the Ganga, Kashi Vishwanath Temple and the iconic Ganga Aarti, attracting pilgrims and spiritual seekers from across the globe.",
      image: "images/places/uttar-pradesh-varanasi.jpg"
    },
    {
      name: "Ayodhya",
      place: "Ayodhya district",
      note:
        "An important pilgrimage city believed to be the birthplace of Lord Rama, featuring the Ram Janmabhoomi temple complex and vibrant religious traditions along the sacred Saryu river.",
      image: "images/places/uttar-pradesh-ayodhya.jpg"
    },
    {
      name: "Lucknow – The City of Nawabs",
      place: "Lucknow",
      note:
        "A cultural capital known for its elegant Mughal-Nawabi architectural heritage including Bara Imambara, Rumi Darwaza and Chota Imambara, as well as classical music, chikankari embroidery and royal cuisine.",
      image: "images/places/uttar-pradesh-lucknow.jpg"
    }
  ],

  // ---------- FESTIVALS (3) + 1 DANCE ----------
  festivals: [
    {
      name: "Kumbh Mela (Prayagraj)",
      detail:
        "The world’s largest spiritual congregation held periodically at the holy Sangam, where devotees take ritual dips and participate in religious ceremonies and processions.",
      image: "images/festivals/uttar-pradesh-kumbh-mela.jpg"
    },
    {
      name: "Taj Mahotsav",
      detail:
        "A vibrant 10-day cultural festival held annually in Agra celebrating folk arts, classical music, dance, traditional crafts and global cuisine with the Taj Mahal as its backdrop.",
      image: "images/festivals/uttar-pradesh-taj-mahotsav.jpg"
    },
    {
      name: "Dev Deepawali (Varanasi)",
      detail:
        "Celebrated fifteen days after Diwali, the ghats of Varanasi are illuminated with thousands of diyas during a breathtaking ritual along the Ganga accompanied by prayers and cultural performances.",
      image: "images/festivals/uttar-pradesh-dev-deepawali.jpg"
    },
    
     {
  name: "Charkula Dance",
  detail:
    "A traditional folk dance performed primarily in the Braj region (Mathura–Vrindavan), where women dance while balancing a tall multi-tiered wooden pyramid with oil lamps on their heads, symbolising joy and celebration associated with Radha and Krishna.",
  image: "images/festivals/uttar-pradesh-charkula-dance.jpg"
}
    
  ]
},

//Uttarakhand

"Uttarakhand": {
  Region: "North India",
  Capital: "Dehradun",
  weatherCity: "Dehradun",
  bestTime: "March to June and September to November – pleasant weather, clear mountain views and ideal time for temples, trekking and hill stations.",

  // Map image for Overview tab
  mapImage: "images/maps/uttarakhand-map.png",


  // ---------- OVERVIEW ----------
  overview:
    "Uttarakhand, often called the ‘Devbhumi’ or ‘Land of the Gods’, is a Himalayan state known for its snow-clad peaks, sacred rivers, ancient temples and peaceful hill stations. The Ganga and Yamuna rivers originate from its glaciers, and destinations like Nainital, Mussoorie and Rishikesh attract nature lovers, pilgrims and adventure seekers alike.",

  // ---------- HISTORY ----------
  history:
    "Historically, the region of Uttarakhand was part of the Kumaon and Garhwal kingdoms, ruled by various dynasties such as the Katyuris, Chand rulers and the Gurkhas before coming under British control in the 19th century. After independence, it remained part of Uttar Pradesh for several decades. On 9 November 2000, it was carved out as a separate state initially called Uttaranchal, later renamed Uttarakhand in 2007 to reflect its traditional identity.",

  // ---------- FOOD (4 ITEMS) ----------
  food: [
    {
      name: "Kafuli",
      detail:
        "A traditional Garhwali dish made by slow-cooking leafy greens like spinach and fenugreek with spices, thickened using rice or wheat flour and usually served with steamed rice.",
      image: "images/food/uttarakhand-kafuli.jpg"
    },
    {
      name: "Bhatt ki Churkani",
      detail:
        "A hearty curry prepared from black soybeans (bhatt) cooked with spices to create a rich, nutty gravy, commonly eaten with rice in the mountain regions.",
      image: "images/food/uttarakhand-bhatt-churkani.jpg"
    },
    {
      name: "Aloo ke Gutke",
      detail:
        "A simple yet flavourful preparation of boiled potatoes tossed with local spices, mustard oil and coriander, often served with puri or roti during everyday meals and festivals.",
      image: "images/food/uttarakhand-aloo-ke-gutke.jpg"
    },
    {
      name: "Bal Mithai",
      detail:
        "A classic Kumaoni sweet made from roasted khoya coated with tiny sugar balls, originating from Almora and often gifted as a regional speciality.",
      image: "images/food/uttarakhand-bal-mithai.jpg"
    }
  ],

  // ---------- PLACES (4 ITEMS) ----------
  places: [
    {
      name: "Kedarnath",
      place: "Rudraprayag district",
      note:
        "One of the twelve Jyotirlingas dedicated to Lord Shiva, located at high altitude amidst snow-covered peaks and reached by a scenic trek from Gaurikund.",
      image: "images/places/uttarakhand-kedarnath.jpg"
    },
    {
      name: "Badrinath",
      place: "Chamoli district",
      note:
        "A major Vishnu pilgrimage site on the banks of the Alaknanda River, forming part of the Char Dham and Char Dham Yatra circuit.",
      image: "images/places/uttarakhand-badrinath.jpg"
    },
    {
      name: "Nainital",
      place: "Kumaon region",
      note:
        "A picturesque hill station built around the Naini Lake, known for its lakeside promenade, surrounding hills and pleasant climate.",
      image: "images/places/uttarakhand-nainital.jpg"
    },
    {
      name: "Valley of Flowers National Park",
      place: "Chamoli district",
      note:
        "A UNESCO World Heritage alpine valley famous for its seasonal bloom of wildflowers, high-altitude meadows and trekking trails during the monsoon months.",
      image: "images/places/uttarakhand-valley-of-flowers.jpg"
    }
  ],

  // ---------- FESTIVALS (3) + 1 DANCE ----------
  festivals: [
    {
      name: "Kumbh Mela (Haridwar)",
      detail:
        "One of the largest spiritual gatherings in the world, held periodically in Haridwar where millions of devotees take holy dips in the Ganga and participate in religious ceremonies.",
      image: "images/festivals/uttarakhand-kumbh-mela.jpg"
    },
    {
      name: "Harela Festival",
      detail:
        "A traditional Kumaoni and Garhwali festival marking the onset of the monsoon and sowing season, celebrated with green sapling offerings, folk songs and community feasts.",
      image: "images/festivals/uttarakhand-harela.jpg"
    },
    {
      name: "Phool Dei",
      detail:
        "A springtime festival where children decorate doorsteps with fresh flowers and rice, symbolising prosperity and a warm welcome to the new season.",
      image: "images/festivals/uttarakhand-phool-dei.jpg"
    },
    {
      name: "Chholiya Dance",
      detail:
        "A traditional sword-and-shield dance of the Kumaon region, often performed during weddings and festivals with energetic movements and live folk music.",
      image: "images/festivals/uttarakhand-chholiya-dance.jpg"
    }
  ]
},


  //West Bengal
"West Bengal": {
  Region: "East India",
  Capital: "Kolkata",
  weatherCity: "Kolkata",
  bestTime: "October to March – cool and pleasant climate, ideal for sightseeing, wildlife tourism, beaches and cultural festivals.",

  // Map image for Overview tab
  mapImage: "images/maps/west-bengal-map.png",

 


  // ---------- OVERVIEW ----------
  overview:
    "West Bengal is a culturally rich and geographically diverse state known for its literary heritage, classical arts, colonial architecture, scenic hill stations and coastal beauty. From the tea gardens of Darjeeling and the mangrove forests of the Sundarbans to the bustling heritage city of Kolkata, the state offers a vibrant mix of nature, history and tradition. It is also celebrated globally for its artistic festivals, delicious cuisine and contributions to poetry, cinema and music.",

  // ---------- HISTORY ----------
  history:
    "Historically, West Bengal was home to ancient kingdoms such as Vanga and Gauda. It became a major centre of power under the Mauryas, Guptas and Pala dynasties and later an important trade and administrative hub during Mughal rule. Under the British Empire, Kolkata served as the capital of British India until 1911, turning the state into a focal point of the Bengal Renaissance and India’s independence movement. After independence in 1947, Bengal was partitioned into West Bengal (India) and East Pakistan (now Bangladesh).",

  // ---------- FOOD (4 ITEMS) ----------
  food: [
    {
      name: "Rasgulla",
      detail:
        "A classic Bengali sweet made from cottage cheese (chhena) balls cooked in light sugar syrup, known for its soft texture and melt-in-the-mouth taste.",
      image: "images/food/west-bengal-rasgulla.jpg"
    },
    {
      name: "Macher Jhol",
      detail:
        "A traditional fish curry made with freshwater fish like Rohu, cooked in a mildly spiced broth with turmeric, tomatoes and mustard oil, forming a staple of Bengali meals.",
      image: "images/food/west-bengal-macher-jhol.jpg"
    },
    {
      name: "Kolkata Biryani",
      detail:
        "A flavorful biryani inspired by Awadhi cuisine, marked by subtle spices, cooked meat and long-grain rice, uniquely served with potatoes and boiled eggs.",
      image: "images/food/west-bengal-kolkata-biryani.jpg"
    },
    {
      name: "Sandesh",
      detail:
        "A soft, fragrant sweet prepared from fresh chhena and flavored with cardamom, saffron or jaggery, often styled into decorative shapes.",
      image: "images/food/west-bengal-sandesh.jpg"
    }
  ],

  // ---------- PLACES (4 ITEMS) ----------
  places: [
    {
      name: "Darjeeling",
      place: "Darjeeling district",
      note:
        "A hill station famous for the Himalayas, tea gardens, panoramic views of Kanchenjunga and the UNESCO-listed Darjeeling Himalayan Railway (Toy Train).",
      image: "images/places/west-bengal-darjeeling.jpg"
    },
    {
      name: "Sundarbans National Park",
      place: "South 24 Parganas district",
      note:
        "A UNESCO World Heritage mangrove forest and home to the Royal Bengal Tiger, known for dense waterways, wildlife safaris and unique delta landscapes.",
      image: "images/places/west-bengal-sundarbans.jpg"
    },
    {
      name: "Victoria Memorial",
      place: "Kolkata",
      note:
        "A grand marble monument dedicated to Queen Victoria, surrounded by gardens and housing a museum that showcases colonial-era art and history.",
      image: "images/places/west-bengal-victoria-memorial.jpg"
    },
    {
      name: "Digha Beach",
      place: "Purba Medinipur district",
      note:
        "A popular seaside destination known for its shallow waves, golden sands and scenic sunrise and sunset views along the Bay of Bengal.",
      image: "images/places/west-bengal-digha.jpg"
    }
  ],

  // ---------- FESTIVALS (3) + 1 DANCE ----------
  festivals: [
    {
      name: "Durga Puja",
      detail:
        "The biggest festival of West Bengal, celebrated with grand pandals, artistic idols, cultural performances and community feasts, symbolising the victory of good over evil.",
      image: "images/festivals/west-bengal-durga-puja.jpg"
    },
    {
      name: "Poila Boishakh",
      detail:
        "The Bengali New Year festival observed with traditional attire, cultural events, decorated marketplaces and special festive foods.",
      image: "images/festivals/west-bengal-poila-boishakh.jpg"
    },
    {
      name: "Poush Mela (Shantiniketan)",
      detail:
        "A cultural festival inspired by Rabindranath Tagore, featuring folk music, Baul songs, traditional crafts and rural fairs in a vibrant artistic atmosphere.",
      image: "images/festivals/west-bengal-poush-mela.jpg"
    },
    {
  name: "Gambhira Dance",
  detail:
    "A devotional folk dance practised mainly in the Malda region, performed to spread social awareness and moral teachings. Dancers wear expressive wooden masks and act out dramatic conversations — traditionally between a man and his grandfather — combining humour, storytelling and cultural wisdom.",
  image: "images/festivals/west-bengal-gambhira-dance.jpg"
}

  ]
}

};

const categories = {
  overview: "Overview",
  food: "Food",
  places: "Famous Places",
  festivals: "Festivals & Dances"
};





// ---------- DOM Elements ----------
const stateSelect = document.getElementById("stateSelect");
const pillButtons = document.querySelectorAll(".pill");
const contentSection = document.getElementById("content");
const stateSearch = document.getElementById("stateSearch");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const themeToggle = document.getElementById("themeToggle");
const downloadPdfBtn = document.getElementById("downloadPdfBtn");
const randomStateBtn = document.getElementById("randomStateBtn");
const scrollTopBtn = document.getElementById("scrollTopBtn");





let currentStateKey = null;
let currentCategory = "overview";

// ---------- Initialization ----------
function init() {
  // Populate dropdown options from stateData keys
  const stateNames = Object.keys(stateData);
  stateNames.forEach((stateName) => {
    const option = document.createElement("option");
    option.value = stateName;
    option.textContent = stateName;
    stateSelect.appendChild(option);
  });



  // Default to the first state
  currentStateKey = stateNames[0];
  stateSelect.value = currentStateKey;

    // Search filter for states / UTs
  stateSearch.addEventListener("input", () => {
    const term = stateSearch.value.toLowerCase();

    // Clear current options
    stateSelect.innerHTML = "";

    // Re-add only matching states
    Object.keys(stateData)
      .filter((name) => name.toLowerCase().includes(term))
      .forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        stateSelect.appendChild(option);
      });

    // Automatically select first visible state
    const first = stateSelect.options[0];
    if (first) {
      currentStateKey = first.value;
      stateSelect.value = currentStateKey;
      renderContent();
      
    }

    else {
      // no match, clear card
      contentSection.innerHTML = "<p class='empty-message'>No state found.</p>";
    }
  });

  // Clear search button listener
  clearSearchBtn.addEventListener("click", () => {
    stateSearch.value = "";
    stateSearch.focus();
    
    // Rebuild full dropdown list
    stateSelect.innerHTML = "";
    Object.keys(stateData).forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      stateSelect.appendChild(option);
    });
    
    // Select first state
    currentStateKey = Object.keys(stateData)[0];
    stateSelect.value = currentStateKey;
    renderContent();
  });

  // Clear search button keyboard accessibility
  clearSearchBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      clearSearchBtn.click();
    }
  });

  // Event listeners
  stateSelect.addEventListener("change", (e) => {
    currentStateKey = e.target.value;
    renderContent();
  });

  pillButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      pillButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderContent();
    });
  });

    if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light mode";
      } else {
        themeToggle.textContent = "Dark mode";
      }
    });
  }
  
    if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener("click", () => {
      generateStatePdf();
    });
  }

    // Show / hide scroll-to-top button based on scroll position
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }



  // Random State button
  if (randomStateBtn) {
    randomStateBtn.addEventListener("click", () => {
      const allStates = Object.keys(stateData);
      if (!allStates.length) return;

      // Optional: clear search so all states show in the dropdown
      stateSearch.value = "";

      // Repopulate dropdown with all states (in case search had filtered them)
      stateSelect.innerHTML = "";
      allStates.forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        stateSelect.appendChild(option);
      });

      // Pick a random state different from current one (if possible)
      let randomKey = currentStateKey;
      if (allStates.length === 1) {
        randomKey = allStates[0];
      } else {
        while (randomKey === currentStateKey) {
          const idx = Math.floor(Math.random() * allStates.length);
          randomKey = allStates[idx];
        }
      }

      // Update current state + dropdown selection
      currentStateKey = randomKey;
      stateSelect.value = randomKey;

      // Always jump back to Overview tab when random state is chosen
      currentCategory = "overview";
      pillButtons.forEach((b) => {
        b.classList.remove("active");
        if (b.getAttribute("data-category") === "overview") {
          b.classList.add("active");
        }
      });

      // Re-render the card
      renderContent();
    });
  }




  // Initial render
  renderContent();
}


// ---------- Render Functions ----------

function renderContent() {
  const state = stateData[currentStateKey];
  if (!state) return;

  const title = currentStateKey;
  const categoryTitle = categories[currentCategory];

  // ---------- CARD HEADER ----------
  let innerHTML = `
  <div class="card-header">
    <div class="card-header-main">
      <h2>
        ${title}
        <button class="speak-btn" onclick="speakStateName()" title="Pronounce name">
          🔊
        </button>
      </h2>

      <div class="chip-row">
        <span class="chip"><strong>Region:</strong> ${state.Region}</span>
        <span class="chip"><strong>Capital:</strong> ${state.Capital}</span>
        <span class="chip"><strong>Category:</strong> ${categoryTitle}</span>
        <span class="chip weather-chip" id="weatherChip">
          Current Weather: --
        </span>
      </div>

      ${
        state.bestTime
          ? `
        <div class="travel-tip">
          <span class="travel-label">Best time to visit:</span>
          <span class="travel-text">${state.bestTime}</span>
        </div>
      `
          : ""
      }
    </div>
  </div>
`;

  // ---------- BODY: BY TAB ----------
if (currentCategory === "overview") {
    innerHTML += `
      <div class="overview-layout">
        <div class="overview-text">
          <h3 class="section-title">About the Region</h3>
          <p>${state.overview || "Information will be added soon."}</p>

          ${state.history ? `
            <h3 class="section-title">Brief History</h3>
            <p>${state.history}</p>
          ` : ""}

          <p class="empty-message">
            Tip: Use the tabs above to explore food, famous places and major festivals of ${title}.
          </p>
        </div>

        ${state.mapImage ? `
          <div class="overview-map">
            <div class="state-image-wrapper">
              <img src="${state.mapImage}" alt="${title} map outline" class="state-image" />
            </div>
          </div>
        ` : ""}
      </div>
    `;
        }


  else if (currentCategory === "food") {
    innerHTML += `
      <h3 class="section-title">Famous Dishes</h3>
      ${renderList(state.food, "food")}
    `;
  } else if (currentCategory === "places") {
    innerHTML += `
      <h3 class="section-title">Famous Places & Landmarks</h3>
      ${renderList(state.places, "places")}
    `;
  } else if (currentCategory === "festivals") {
    innerHTML += `
      <h3 class="section-title festivals-glow">Festivals & Performing Arts</h3>
      ${renderList(state.festivals, "festivals")}
    `;
  }



  // Apply slide animation
  contentSection.classList.remove("tab-slide-in");
  contentSection.innerHTML = innerHTML;
  void contentSection.offsetWidth;   // restart animation
  contentSection.classList.add("tab-slide-in");

  // After DOM exists, update weather
  updateWeatherForCurrentState(state);
}



function renderList(items, type) {
  if (!items || items.length === 0) {
    return `<p class="empty-message">Information will be added soon.</p>`;
  }

  // For festivals, food, and places: use reusable grid layout
  if (type === "festivals" || type === "food" || type === "places") {
    let gridHTML = '<div class="info-card-grid">';
    items.forEach((item) => {
      let cardTitle = "";
      let cardDescription = "";

      if (type === "festivals") {
        cardTitle = item.name;
        cardDescription = item.detail;
      } else if (type === "food") {
        cardTitle = item.name;
        cardDescription = item.detail;
      } else if (type === "places") {
        cardTitle = item.name;
        cardDescription = `<strong>${item.place}</strong> – ${item.note}`;
      }

      gridHTML += `
        <div class="info-card">
          ${item.image ? `<img src="${item.image}" alt="${item.name}" class="info-card-image" />` : ''}
          <div class="info-card-content">
            <div class="info-card-title">${cardTitle}</div>
            <div class="info-card-description">${cardDescription}</div>
          </div>
        </div>
      `;
    });
    gridHTML += '</div>';
    return gridHTML;
  }

  // Fallback for other types (if any)
  return `<p class="empty-message">Information will be added soon.</p>`;
}

// ---------- WEATHER HELPER ----------
  function updateWeatherForCurrentState(state) {
  const weatherChip = document.getElementById("weatherChip");
  if (!weatherChip) return; // safety

  // If API key is missing
  if (!OPENWEATHER_API_KEY) {
    weatherChip.textContent = "Current Weather: (API key not set)";
    return;
  }

  // Show loading text
  weatherChip.textContent = "Current Weather: loading...";

  // Prefer weatherCity if present, else fall back to Capital
  let cityName = state.weatherCity || state.Capital;

  // Avoid doubling ",IN"
  let cityQuery = cityName.includes(",") ? cityName : `${cityName},IN`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    cityQuery
  )}&units=metric&appid=${OPENWEATHER_API_KEY}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather fetch failed");
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.main && typeof data.main.temp === "number") {
        const temp = Math.round(data.main.temp);
        weatherChip.textContent = `Current Weather: ${temp}°C in ${cityName}`;
      } else {
        weatherChip.textContent = "Current Weather: not available";
      }
    })
    .catch((err) => {
      console.error("Weather error:", err);
      weatherChip.textContent = "Current Weather: not available";
    });
}


function speakStateName() {
  // Check if browser supports speech
  if (!("speechSynthesis" in window)) {
    alert("Sorry, your browser does not support speech.");
    return;
  }

  // Cancel any speech already in progress
  window.speechSynthesis.cancel();

  // Get the current state / UT name
  const nameToSpeak = currentStateKey; // you already use this variable

  // Create utterance
  const utterance = new SpeechSynthesisUtterance(nameToSpeak);
  utterance.lang = "en-IN";       // Indian English accent
  utterance.rate = 1;           // speed (0.1 to 10, 1 is normal)
  utterance.pitch = 1.2;          // voice pitch (0 to 2) - slightly higher for clarity

  // Add event listeners for debugging
  utterance.onerror = (event) => {
    console.error("Speech synthesis error:", event.error);
  };

  utterance.onend = () => {
    console.log("Speech synthesis ended");
  };

  // Small delay to ensure cancel completes before speak
  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 100);
}

// ---------- PDF GENERATION ----------

// Helper: render items in a 2-column grid (image + title + description)
async function renderGridSection(pdf, {
  title,
  items,
  pageWidth,
  pageHeight,
  margin,
  contentWidth,
  getCardTitle,
  getCardDescription
}) {
  pdf.addPage();
  let yPos = margin;

  // Section title
  pdf.setFontSize(18);
  pdf.setTextColor(10, 42, 67);
  pdf.setFont("helvetica", "bold");
  pdf.text(title, margin, yPos);
  yPos += 10;

  const colGap = 8;
  const colWidth = (contentWidth - colGap) / 2;
  const cardImageSize = 28;   // mm
  const cardPadding = 3;
  const cardHeight = 45;      // approximate height per card

  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    // start a new row when index is even
    const isLeftCol = index % 2 === 0;
    let x = isLeftCol ? margin : margin + colWidth + colGap;

    // go to next page if we overflow vertically
    if (!isLeftCol && yPos + cardHeight > pageHeight - margin) {
      pdf.addPage();
      yPos = margin + 10; // keep a small top gap on new pages
    }

    // Card background
    pdf.setFillColor(248, 248, 248);
    pdf.roundedRect(x, yPos, colWidth, cardHeight, 3, 3, "F");

    let textX = x + cardPadding;
    let textY = yPos + cardPadding + 5;

    // Image, if present
    if (item.image) {
      try {
        const imgData = await loadImageAsBase64(item.image);
        pdf.addImage(
          imgData,
          "PNG",
          textX,
          textY - 4,
          cardImageSize,
          cardImageSize
        );
        textX += cardImageSize + 3;
      } catch (err) {
        console.warn("Grid image load failed:", err);
      }
    }

    // Title
    const cardTitle = getCardTitle(item);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.setTextColor(10, 42, 67);
    pdf.text(cardTitle, textX, textY);
    textY += 6;

    // Description
    const desc = getCardDescription(item);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(74, 87, 100);
    const descLines = pdf.splitTextToSize(desc, colWidth - (textX - x) - cardPadding);
    pdf.text(descLines, textX, textY);

    // move down only when we finished the right column card
    if (!isLeftCol) {
      yPos += cardHeight + 5;
    }
  }
}



async function generateStatePdf() {
  if (!currentStateKey || !stateData[currentStateKey]) {
    alert("Please select a state first.");
    return;
  }

  const state = stateData[currentStateKey];
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 8;
  const contentWidth = pageWidth - 2 * margin;


// ---------- PAGE 1: Overview + Chips + About + History + Image ----------
let yPos = margin;

// Title (State Name)
pdf.setFontSize(26);
pdf.setTextColor(10, 42, 67);
pdf.setFont("times", "bold");
pdf.text(currentStateKey, margin, yPos);
yPos += 12;

// --- Chips row on a single line (wrap when needed) ---
const chips = [
  `Region: ${state.Region}`,
  `Capital: ${state.Capital}`,
  `Category: Overview`,
  state.bestTime ? `Best time: ${state.bestTime}` : ""
].filter(Boolean);

const chipPaddingX = 4;
const chipPaddingY = 2;
const chipHeight = 8;
let chipX = margin;
let chipY = yPos;

pdf.setFontSize(9);
pdf.setFont("helvetica", "normal");

chips.forEach((chipText) => {
  const textWidth = pdf.getTextWidth(chipText);
  const chipWidth = textWidth + chipPaddingX * 2;

  // wrap to next line if chip would overflow
  if (chipX + chipWidth > margin + contentWidth) {
    chipX = margin;
    chipY += chipHeight + 3;
  }

  // chip background
  pdf.setFillColor(210, 103, 90); // warm red
  pdf.roundedRect(chipX, chipY - chipHeight + 2, chipWidth, chipHeight, 2, 2, "F");

  // chip text
  pdf.setTextColor(248, 246, 242);
  pdf.text(chipText, chipX + chipPaddingX, chipY);

  chipX += chipWidth + 3;
});

// move yPos below the chips row
yPos = chipY + 14;

// --- Two–column layout: left = text, right = state image ---
const leftColX = margin;
const leftColWidth = contentWidth * 0.55;
const rightColX = margin + leftColWidth + 10;
const rightColWidth = contentWidth - leftColWidth - 10;

// About the Region
pdf.setTextColor(10, 42, 67);
pdf.setFontSize(12);
pdf.setFont("times", "bold");
pdf.text("About the Region", leftColX, yPos);
yPos += 6;

pdf.setFont("helvetica", "normal");
pdf.setFontSize(11);
pdf.setTextColor(74, 87, 100);
const aboutLines = pdf.splitTextToSize(
  state.overview || "Information will be added soon.",
  leftColWidth
);
pdf.text(aboutLines, leftColX, yPos);
yPos += aboutLines.length * 4 + 6;

// Brief History
if (state.history) {
  pdf.setFont("times", "bold");
  pdf.setFontSize(12);
  pdf.setTextColor(10, 42, 67);
  pdf.text("Brief History", leftColX, yPos);
  yPos += 6;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.setTextColor(74, 87, 100);
  const historyLines = pdf.splitTextToSize(state.history, leftColWidth);
  pdf.text(historyLines, leftColX, yPos);
}

// State map image on the right
if (state.mapImage) {
  try {
    const imgData = await loadImageAsBase64(state.mapImage);
    const imgWidth = rightColWidth;
    const imgHeight = imgWidth * 0.8; // keep aspect reasonable

   // start the map a little lower so it doesn't touch the chips
    const imgY = chipY + 18;  // try 18; adjust to 16 / 20 if you want more or less gap

pdf.addImage(imgData, "PNG", rightColX, imgY, imgWidth, imgHeight);

  } catch (err) {
    console.warn("Could not load map image:", err);
  }
}


  // ---------- PAGE 2: Food & Cuisine ----------
if (state.food && state.food.length > 0) {
  await renderGridSection(pdf, {
    title: "Famous Dishes",
    items: state.food,
    pageWidth,
    pageHeight,
    margin,
    contentWidth,
    getCardTitle: (item) => item.name,
    getCardDescription: (item) => item.detail
  });
}

  // ---------- PAGE 3: Famous Places ----------
if (state.places && state.places.length > 0) {
  await renderGridSection(pdf, {
    title: "Famous Places & Landmarks",
    items: state.places,
    pageWidth,
    pageHeight,
    margin,
    contentWidth,
    getCardTitle: (item) => item.name,
    getCardDescription: (item) =>
      item.place ? `${item.place} – ${item.note}` : item.note || ""
  });
}


 // ---------- PAGE 4: Festivals & Dances ----------
if (state.festivals && state.festivals.length > 0) {
  await renderGridSection(pdf, {
    title: "Festivals & Performing Arts",
    items: state.festivals,
    pageWidth,
    pageHeight,
    margin,
    contentWidth,
    getCardTitle: (item) => item.name,
    getCardDescription: (item) => item.detail
  });
}

  // Download the PDF
  const filename = `${currentStateKey}-culture-guide.pdf`;
  pdf.save(filename);
}

// Helper function to load image as Base64

function loadImageAsBase64(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // If you ever host images on a different domain, uncomment this:
    // img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      // Export as PNG data URL (works fine even if original is JPG)
      const dataUrl = canvas.toDataURL("image/png");
      resolve(dataUrl);
    };

    img.onerror = () => {
      reject(new Error("Failed to load image element: " + url));
    };

    img.src = url;
  });
}


// Start the app
init();

