
export interface NavItem {
  name: string;
  link: string;
  subItems?: NavItem[];
}

export interface TourStep {
  time: string;
  event: string;
  day?: string;
  detail?: string;
}

export interface BoatSpec {
  length: string;
  width: string;
  height: string;
  engines: string;
  generators: string;
  speed: string;
}

export interface CabinCategory {
  name: string;
  count?: number;
  size: string;
  decks: string[];
  amenities: string[];
}

export interface CruiseBoat {
  name: string;
  specs: BoatSpec;
  cabins: CabinCategory[];
  facilities: string[];
  usp: string;
}

export interface TourPrice {
  label: string;
  price: string;
}

export interface Tour {
  id: number;
  title: string;
  images: string[];
  highlights: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: TourStep[];
  prices: TourPrice[];
  childPolicy?: string;
  note?: string;
  boatDetails?: CruiseBoat;
}

export interface DestinationContent {
  id: string;
  title: string;
  quote: string;
  tours: Tour[];
}

export const HERO_IMAGES = [
  { 
    url: 'https://images.unsplash.com/photo-1539186607619-df476afe1ff1?auto=format&fit=crop&q=80&w=2000', 
    title: 'Discover Egypt your way',
    subtitle: 'crafting unforgettable Egyptian adventure from heart of Egypt to the world'
  },
  { 
    url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=2000', 
    title: 'The Great Pyramids',
    subtitle: 'Step back in time and witness the wonders of the ancient world'
  },
  { 
    url: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=2000', 
    title: 'Nile River Cruises',
    subtitle: 'Sail through history on the world\'s longest river'
  }
];

export const TOURS: NavItem[] = [
  { 
    name: 'Historical wonders', 
    link: '/tours/historical-wonders',
    subItems: [
      { name: '6 Nights / 7 Days – Cairo, Aswan & Luxor (Including a Nile Cruise)', link: '/tours/historical-wonders#tour-1' },
      { name: '9 Nights / 10 Days – Cairo, Aswan, Luxor & Hurghada (Including a Nile Cruise)', link: '/tours/historical-wonders#tour-2' },
      { name: '11 Nights / 12 Days – Cairo, Aswan, Luxor & Alexandria (Including a Nile Cruise)', link: '/tours/historical-wonders#tour-3' },
      { name: '14 Nights / 15 Days – Cairo, Oasis & White Desert, Aswan, Luxor & Hurghada (Including a Nile Cruise)', link: '/tours/historical-wonders#tour-4' },
    ]
  },
  { 
    name: 'Aswan Tours', 
    link: '/tours/aswan',
    subItems: [
      { name: 'Philae Temple, High Dam, and Unfinished Obelisk', link: '/tours/aswan#tour-1' },
      { name: 'Philae Temple with High Dam or Unfinished Obelisk', link: '/tours/aswan#tour-2' },
      { name: 'Sound & Light Show at Philae Temple', link: '/tours/aswan#tour-3' },
      { name: 'Kalabsha Temple', link: '/tours/aswan#tour-4' },
      { name: 'Nubian Village (Gharb Sehel) by Motor Boat', link: '/tours/aswan#tour-5' },
      { name: 'Nubian Tour by Felucca with Exotic Lunch', link: '/tours/aswan#tour-6' },
      { name: 'Elephantine and Kitchener\'s Islands by Felucca', link: '/tours/aswan#tour-7' },
      { name: 'Sunset by Felucca', link: '/tours/aswan#tour-8' },
      { name: 'Transfer from Aswan to Luxor via Kom Ombo and Edfu Temples', link: '/tours/aswan#tour-9' },
    ]
  },
  { 
    name: 'Luxor Tours', 
    link: '/tours/luxor',
    subItems: [
      { name: 'East Bank of Luxor', link: '/tours/luxor#tour-1' },
      { name: 'West Bank of Luxor', link: '/tours/luxor#tour-2' },
      { name: 'Valley of the Queens & Habu Temple', link: '/tours/luxor#tour-3' },
      { name: 'Hot Air Balloon Ride Over Luxor', link: '/tours/luxor#tour-4' },
      { name: 'Dendera Temple Experience', link: '/tours/luxor#tour-5' },
      { name: 'Dendera and Abydos Temples Experience.', link: '/tours/luxor#tour-6' },
      { name: 'Transfer From Luxor to Aswan Via Kom Ombo And Edfu Temples', link: '/tours/luxor#tour-7' },
      { name: 'Sound & Light Show at Karnak Temple', link: '/tours/luxor#tour-8' },
    ]
  },
  { 
    name: 'Cairo Tours', 
    link: '/tours/cairo',
    subItems: [
      { name: 'Great Pyramids, Sphinx & Grand Egyptian Museum Tour', link: '/tours/cairo#tour-1' },
      { name: 'Great Pyramids, Sphinx, Memphis & Sakkara Tour', link: '/tours/cairo#tour-2' },
      { name: 'Saladin\'s Citadel, Old Cairo & Khan El-Khalili', link: '/tours/cairo#tour-3' },
      { name: 'Egyptian Museum & National Museum of Egyptian Civilization', link: '/tours/cairo#tour-4' },
      { name: 'Sound & Light Show at the Giza Pyramids', link: '/tours/cairo#tour-5' },
      { name: 'Nile Cruise Dinner', link: '/tours/cairo#tour-6' },
      { name: 'Day Tour to Alexandria from Cairo', link: '/tours/cairo#tour-7' },
    ]
  },
  { 
    name: 'Abu Simbel Tours', 
    link: '/tours/abu-simbel',
    subItems: [
      { name: 'Abu Simbel by Land', link: '/tours/abu-simbel#tour-1' },
      { name: 'Abu Simbel Overnight Tour with Sound & Light Show', link: '/tours/abu-simbel#tour-2' },
      { name: 'Abu Simbel by Flight', link: '/tours/abu-simbel#tour-3' },
    ]
  },
];

export const NILE_CRUISE: NavItem[] = [
  { name: 'All Nile Cruises', link: '/nile-cruise' },
  { name: 'River Nile Cruises', link: '/nile-cruise#river-nile' },
  { name: 'Felucca Adventures', link: '/nile-cruise#felucca' },
  { name: 'Dahabiya Nile Cruise', link: '/nile-cruise#dahabiya' },
  { name: 'Lake Nasser Cruise', link: '/nile-cruise#lake-nasser' },
];

export const POLICIES: NavItem[] = [
  { name: 'Privacy Policy', link: '/policies#privacy' },
  { name: 'Terms & Conditions', link: '/policies#terms' },
  { name: 'Cancellation & Refund Policy', link: '/policies#cancellation' },
];

export const DESTINATIONS: Record<string, DestinationContent> = {
  aswan: {
    id: "aswan",
    title: "Aswan Tours",
    quote: "Aswan is where the magic of the Nile truly comes to life! With its stunning river views, colorful Nubian villages, and incredible temples, this city is the perfect mix of history and relaxation. Sail on a traditional felucca, explore the beautiful Philae Temple, or visit the famous Aswan High Dam. Whether you want adventure or a peaceful escape, Aswan will steal your heart!",
    tours: [
      {
        id: 1,
        title: "Philae Temple, High Dam, and Unfinished Obelisk",
        images: ["https://images.unsplash.com/photo-1633033254409-bd538e785f51?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        highlights: "Discover the majestic Philae Temple, one of Egypt’s most revered ancient sites, dedicated to the goddess Isis. This impressive complex, with its grand pylons and intricate carvings, was meticulously relocated to its current island location. Explore the awe-inspiring Unfinished Obelisk, an enormous 42-meter-long monument weighing nearly 1,100 tons.",
        inclusions: ["Duration: 5 hours", "Private air-conditioned transport", "Entrance fees", "English-speaking tour guide", "Motorboat to and from Philae Temple"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:00", event: "Pickup from your hotel, cruise, or train station" },
          { time: "Morning", event: "Guided tour of Philae Temple, High Dam, and Unfinished Obelisk" },
          { time: "13:00", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$90" },
          { label: "2 People", price: "$65" },
          { label: "3-5 People", price: "$55" },
          { label: "6-10 People", price: "$50" },
          { label: "11-15 People", price: "$45" }
        ],
        childPolicy: "Ages 6-11: $30",
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 2,
        title: "Philae Temple with High Dam or Unfinished Obelisk",
        images: ["https://images.unsplash.com/photo-1738580426867-03fa8c8b5288?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        highlights: "Visit Philae Temple and either the High Dam or the Unfinished Obelisk.",
        inclusions: ["Duration: 3-4 hours", "Private air-conditioned transport", "Entrance fees", "English-speaking tour guide", "Motorboat to Philae Temple"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:00", event: "Pickup from your hotel, cruise, or train station" },
          { time: "Morning", event: "Guided tour of Philae Temple and your chosen site" },
          { time: "11:00-12:00", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$85" },
          { label: "2 People", price: "$60" },
          { label: "3-5 People", price: "$50" },
          { label: "6-10 People", price: "$45" },
          { label: "11-15 People", price: "$40" }
        ],
        childPolicy: "Ages 6-11: $28",
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 3,
        title: "Sound & Light Show at Philae Temple",
        images: ["https://plus.unsplash.com/premium_photo-1697729731390-0b5f42cb9f44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGhpbGFlJTIwVGVtcGxlfGVufDB8fDB8fHww"],
        highlights: "Mesmerizing Sound & Light Show at Philae Temple.",
        inclusions: ["Duration: 2.5 hours", "Private air-conditioned transfer", "Motorboat to Philae Temple", "Entrance fees to the show"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "18:00", event: "Pickup from hotel or cruise ship" },
          { time: "Evening", event: "Attend the Sound & Light Show" },
          { time: "20:30", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$55" },
          { label: "2-3 People", price: "$50" },
          { label: "4-15 People", price: "$45" }
        ],
        childPolicy: "Ages 6-11: $30",
        note: "Show schedule varies by season; check official website for details"
      },
      {
        id: 4,
        title: "Kalabsha Temple",
        images: ["https://images.unsplash.com/photo-1662655558673-4e628102f545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWd5cHRpYW4lMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D"],
        highlights: "Visit the impressive Kalabsha Temple, dedicated to the god Mandulis. Originally located 50 km south of Aswan, the temple was dismantled and relocated to save it from the rising waters of Lake Nasser.",
        inclusions: ["Duration: 3-4 hours", "Private air-conditioned transport", "Entrance fees", "English-speaking tour guide", "Motorboat to and from Kalabsha Temple"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "09:00", event: "Pickup from your hotel, cruise, or train station" },
          { time: "Morning", event: "Guided tour of Kalabsha Temple" },
          { time: "12:30", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$135" },
          { label: "2-3 People", price: "$70" },
          { label: "4-15 People", price: "$50" }
        ],
        childPolicy: "Ages 6-11: $30",
        note: "Advance booking required (3 days prior) for necessary permissions"
      },
      {
        id: 5,
        title: "Nubian Village (Gharb Sehel) by Motor Boat",
        images: ["https://images.unsplash.com/photo-1655163394362-97de2d3c5c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TnViaWFuJTIwVmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D"],
        highlights: "Discover the vibrant Nubian culture on the west bank of the Nile. Meet local families, explore their colorful homes, and immerse yourself in their traditions and simple lifestyle.",
        inclusions: ["Duration: 3 hours", "Private motorboat", "Nubian house visit fees", "English-speaking tour guide"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "14:30", event: "Pickup from your hotel, cruise, or train station" },
          { time: "Afternoon", event: "Visit Nubian Village (Gharb Sehel)" },
          { time: "17:30", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$60" },
          { label: "2-3 People", price: "$50" },
          { label: "4-9 People", price: "$40" },
          { label: "10-15 People", price: "$30" }
        ],
        childPolicy: "Ages 6-11: $10",
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 6,
        title: "Nubian Tour by Felucca with Exotic Lunch",
        images: ["https://images.unsplash.com/photo-1644517270263-4112379d97ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXN3YW58ZW58MHx8MHx8fDA%3D"],
        highlights: "Sail through the serene Nile archipelago on Arabesque felucca. Explore archaeological sites, enjoy an exotic lunch prepared on board, and relax with traditional drinks like Karkadeh.",
        inclusions: ["Tour Duration: 3-4 hours", "Private air-conditioned transport to and from the felucca", "English-speaking tour guide", "Felucca ride", "Nubian lunch and soft drinks", "Karkadeh and water"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "11:00", event: "Pickup from your hotel, cruise, or train station" },
          { time: "Morning", event: "Embark on felucca and sailing in the archipelago" },
          { time: "Noon", event: "Lunch on board", detail: "Karkadeh, cakes, and fruits served" },
          { time: "14:00", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$85" },
          { label: "2-4 People", price: "$50" },
          { label: "5-9 People", price: "$40" },
          { label: "10-15 People", price: "$30" }
        ],
        childPolicy: "Ages 6-11: $10",
        note: "Optional: Visit Elephantine, Kitchener's Island, St. Simeon Monastery, Nobles Tombs, or West Bank Nubian village"
      },
      {
        id: 7,
        title: "Elephantine and Kitchener’s Islands by Felucca",
        images: ["https://images.unsplash.com/photo-1609254009350-e8802119df6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXN3YW58ZW58MHx8MHx8fDA%3D"],
        highlights: "Enjoy a scenic felucca ride through the Nile archipelago, visiting the historical Elephantine Island and the lush Botanical Garden on Kitchener’s Island.",
        inclusions: ["Tour Duration: 4 hours", "Felucca ride", "English-speaking tour guide", "Entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "09:00", event: "Pickup from your hotel, cruise, or train station" },
          { time: "Morning", event: "Visit Elephantine Island and Felucca sailing" },
          { time: "Morning", event: "Visit Kitchener’s Island (Botanical Garden) and Felucca sailing" },
          { time: "13:00", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$80" },
          { label: "2-4 People", price: "$45" },
          { label: "5-9 People", price: "$30" },
          { label: "10-15 People", price: "$25" }
        ],
        childPolicy: "Ages 6-11: $10",
        note: "Private tour with flexible timing"
      },
      {
        id: 8,
        title: "Sunset by Felucca",
        images: ["https://images.unsplash.com/photo-1684100096410-fd39cdff91a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzd2FufGVufDB8fDB8fHww"],
        highlights: "Experience total relaxation as you sail the Nile by felucca at sunset, enjoying traditional Karkadeh tea, coffee, cakes, and fruits.",
        inclusions: ["Tour Duration: 2 hours", "Felucca ride", "Karkadeh, tea, coffee with cakes and fruits"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "16:30", event: "Pickup from your hotel, cruise, or train station" },
          { time: "Evening", event: "Felucca sailing at sunset" },
          { time: "18:30", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$70" },
          { label: "2-4 People", price: "$40" },
          { label: "5-9 People", price: "$30" },
          { label: "10-15 People", price: "$20" }
        ],
        childPolicy: "Ages 6-11: $5",
        note: "Private tour with flexible timing"
      },
      {
        id: 9,
        title: "Transfer from Aswan to Luxor via Kom Ombo and Edfu Temples",
        images: ["https://plus.unsplash.com/premium_photo-1661963854938-e69a4e65c1e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4b3IlMjB0ZW1wbGV8ZW58MHwwfDB8fHww"],
        highlights: "Embark on a scenic journey from Aswan to Luxor. Marvel at the unique double temple of Kom Ombo, dedicated to Sobek and Horus, and admire the incredibly well-preserved Edfu Temple.",
        inclusions: ["Duration: 8 hours", "Private air-conditioned car/minivan", "Tour guide", "Entrance fees", "Road permission"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:00 AM", event: "Pickup from your hotel, cruise, or train station" },
          { time: "Morning", event: "Transfer to Kom Ombo and Guided visit to Kom Ombo Temple" },
          { time: "Noon", event: "Transfer to Edfu and Guided visit to Edfu Temple" },
          { time: "04:00 PM", event: "Transfer to Luxor and Drop-off at destination" }
        ],
        prices: [
          { label: "Single", price: "$250" },
          { label: "2 People", price: "$130" },
          { label: "3 People", price: "$100" },
          { label: "4 People", price: "$80" },
          { label: "5 People", price: "$70" },
          { label: "6 People", price: "$60" }
        ],
        note: "Private tour with flexible timing"
      }
    ]
  },
  luxor: {
    id: "luxor",
    title: "Luxor Tours",
    quote: "Luxor is a dream destination for history lovers! Home to the world’s most breathtaking temples and tombs, it’s like walking through an ancient wonderland. Explore the mighty Karnak Temple, step inside the grand Luxor Temple, and discover the secrets of pharaohs in the Valley of the Kings. Every corner of Luxor tells a story—you don’t just visit Luxor, you experience it!",
    tours: [
      {
        id: 1,
        title: "East Bank of Luxor",
        images: ["https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2025/11/9/2025_11_9_17_18_56_856.jpeg"],
        highlights: "Discover the grandeur of Luxor’s East Bank, home to two of Egypt’s most famous temples—Karnak and Luxor. Marvel at their massive pylons, towering columns, and intricate hieroglyphics. Karnak Temple is the largest religious complex ever built, while Luxor Temple stands as a masterpiece of Egyptian architecture.",
        inclusions: ["Duration: 3 hours", "Private air-conditioned transport", "English-speaking tour guide", "Entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "14:30", event: "Pickup from hotel, cruise ship, or train station" },
          { time: "Afternoon", event: "Guided tour of Karnak Temple" },
          { time: "Afternoon", event: "Guided tour of Luxor Temple" },
          { time: "17:30", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$85" },
          { label: "2 Persons", price: "$65" },
          { label: "3 Persons", price: "$55" },
          { label: "4 Persons", price: "$50" },
          { label: "5 Persons", price: "$47" },
          { label: "6 Persons", price: "$45" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 2,
        title: "West Bank of Luxor",
        images: ["https://plus.unsplash.com/premium_photo-1661962355663-2a435ccf844d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVneXB0fGVufDB8fDB8fHww"],
        highlights: "Experience the wonders of Luxor’s West Bank, where the Valley of the Kings, Hatshepsut Temple, and the Colossi of Memnon await. Walk through ancient tombs adorned with vivid paintings and visit the mortuary temple of Egypt’s first female pharaoh.",
        inclusions: ["Duration: 5-6 hours", "Private air-conditioned transport", "English-speaking tour guide", "Entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:00", event: "Pickup from hotel, cruise ship, or train station" },
          { time: "Morning", event: "Visit to Valley of the Kings" },
          { time: "Morning", event: "Visit to Hatshepsut Temple" },
          { time: "Morning", event: "Visit to Colossi of Memnon" },
          { time: "13:00-14:00", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$140" },
          { label: "2 Persons", price: "$105" },
          { label: "3 Persons", price: "$90" },
          { label: "4 Persons", price: "$85" },
          { label: "5 Persons", price: "$80" },
          { label: "6 Persons", price: "$75" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 3,
        title: "Valley of the Queens & Habu Temple",
        images: ["https://images.unsplash.com/photo-1632944284335-1f80d44244ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGx1eG9yfGVufDB8fDB8fHww"],
        highlights: "Explore the tombs of royal women and the well-preserved carvings of Medinet Habu (mortuary temple of Ramses III). This tour provides a deeper look into the daily life and artistic achievements of ancient Egypt.",
        inclusions: ["Duration: 4-5 hours", "Private air-conditioned transport", "English speaking tour guide", "Entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:00", event: "Pickup from hotel, cruise ship, or train station" },
          { time: "Morning", event: "Visit to Valley of the Queens" },
          { time: "Morning", event: "Visit to Habu Temple" },
          { time: "12:00-13:00", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$125" },
          { label: "2 Persons", price: "$90" },
          { label: "3 Persons", price: "$75" },
          { label: "4 Persons", price: "$70" },
          { label: "5 Persons", price: "$65" },
          { label: "6 Persons", price: "$60" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 4,
        title: "Hot Air Balloon Ride Over Luxor",
        images: ["https://images.unsplash.com/photo-1685616075808-04bb9db4ea1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eG9yfGVufDB8fDB8fHww"],
        highlights: "Experience Luxor from above with a breathtaking sunrise hot air balloon ride. Float over the Nile, temples, and ancient ruins for a unique perspective.",
        inclusions: ["Duration: 3 hours", "Private air-conditioned transport", "45 minutes hot air balloon ride", "Flight certificate", "Service charges and taxes"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "05:00", event: "Pickup from hotel, cruise ship, or train station" },
          { time: "Morning", event: "Transfer to balloon site and Sunrise balloon ride" },
          { time: "07:30", event: "Return transfer and drop-off" }
        ],
        prices: [{ label: "Per Person", price: "$90" }],
        note: "Hot air balloon rides are currently suspended until further notice"
      },
      {
        id: 5,
        title: "Dendera Temple Experience",
        images: ["https://images.unsplash.com/photo-1632944398987-494eebe663be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4b3J8ZW58MHx8MHx8fDA%3D"],
        highlights: "Embark on a captivating journey to the Temple of Dendera, located 60 kilometers north of Luxor. Discover the ancient wonders of this sacred site with an experienced guide.",
        inclusions: ["Duration: 4 hours of exploration", "Private transport in an air-conditioned car/minivan", "Experienced tour guide", "All entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:00 AM", event: "Pickup from your hotel, cruise ship, or train station" },
          { time: "Morning", event: "Scenic drive to Dendera and Temple exploration" },
          { time: "12:00 PM", event: "Return transfer to destination" }
        ],
        prices: [
          { label: "1 Person", price: "$140" },
          { label: "2 Persons", price: "$95" },
          { label: "3 Persons", price: "$80" },
          { label: "4 Persons", price: "$75" },
          { label: "5 Persons", price: "$70" },
          { label: "6 Persons", price: "$65" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 6,
        title: "Dendera and Abydos Temples Experience",
        images: ["https://images.unsplash.com/photo-1663601896596-ee0f9daac04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FybmFrfGVufDB8fDB8fHww"],
        highlights: "Immerse yourself in the ancient wonders of the Dendera and Abydos Temples. This private tour offers an enriching journey through history with an expert guide.",
        inclusions: ["Duration: 10-12 hours of discovery", "Private air-conditioned transport", "Expert tour guide", "All entrance fees included"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "06:00 AM", event: "Pick up from your hotel, cruise ship, or train station" },
          { time: "Morning", event: "Drive to and explore Abydos Temple" },
          { time: "Afternoon", event: "Travel to and explore Dendera Temple" },
          { time: "16:00-18:00 PM", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "1 Person", price: "$260" },
          { label: "2 Persons", price: "$140" },
          { label: "3 Persons", price: "$100" },
          { label: "4 Persons", price: "$80" },
          { label: "5 Persons", price: "$70" },
          { label: "6 Persons", price: "$60" }
        ],
        note: "Private tour with flexible timing"
      },
      {
        id: 7,
        title: "Transfer From Luxor to Aswan Via Kom Ombo And Edfu Temples",
        images: ["https://plus.unsplash.com/premium_photo-1661963854938-e69a4e65c1e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4b3IlMjB0ZW1wbGV8ZW58MHwwfDB8fHww"],
        highlights: "Experience a smooth transfer from Luxor to Aswan while exploring the magnificent Edfu and Kom Ombo Temples on the way. This private tour ensures comfort and flexibility.",
        inclusions: ["Duration: 8 hours of travel and discovery", "Private transport in air-conditioned car/minivan", "Knowledgeable tour guide", "All entrance fees included", "Road permit"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:00 AM", event: "Pickup from destination" },
          { time: "Morning", event: "Transport to and visit Edfu Temple" },
          { time: "Noon", event: "Transport to and visit Kom Ombo Temple" },
          { time: "04:00 PM", event: "Head to Aswan and final drop-off" }
        ],
        prices: [
          { label: "1 Person", price: "$250" },
          { label: "2 Persons", price: "$130" },
          { label: "3 Persons", price: "$100" },
          { label: "4 Persons", price: "$80" },
          { label: "5 Persons", price: "$70" },
          { label: "6 Persons", price: "$60" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 8,
        title: "Sound & Light Show at Karnak Temple",
        images: ["https://images.unsplash.com/photo-1662655558673-4e628102f545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2FybmFrfGVufDB8fDB8fHww"],
        highlights: "Witness the spectacular Sound & Light Show at Karnak Temple, where history comes to life through an immersive audio-visual experience.",
        inclusions: ["Duration: 2.5 hours", "Private transport in air-conditioned car/minivan", "Entrance fees to the show", "Friendly representative"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "6:00 PM", event: "Pickup from location" },
          { time: "Evening", event: "Enjoy the Mesmerizing Sound & Light Show at Karnak Temple" },
          { time: "8:30 PM", event: "Transfer back and drop-off" }
        ],
        prices: [
          { label: "1 Person", price: "$65" },
          { label: "2 Persons", price: "$50" },
          { label: "3 Persons", price: "$45" },
          { label: "4 Persons", price: "$40" },
          { label: "5 Persons", price: "$35" },
          { label: "6 Persons", price: "$34" }
        ]
      }
    ]
  },
  cairo: {
    id: "cairo",
    title: "Cairo Tours",
    quote: "Cairo, the vibrant capital of Egypt, is the largest city in both Africa and the Arab world. As the country's cultural and historical heart, it boasts one of the world’s most populous metropolitan areas. Renowned for its rich artistic heritage, Cairo is home to the Arab world's oldest and most influential film and music industries, earning it the title of the \"Hollywood of the East.\"",
    tours: [
      {
        id: 1,
        title: "Great Pyramids, Sphinx & Grand Egyptian Museum Tour",
        images: ["https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fpcm98ZW58MHx8MHx8fDA%3D"],
        highlights: "Experience the wonders of ancient Egypt in one unforgettable day. Visit the Great Pyramids of Giza, see the famous Sphinx up close, and explore the Grand Egyptian Museum. Enjoy a private tour with expert guidance and hassle-free transport.",
        inclusions: ["Tour Duration: 8 hours", "Private air-conditioned transport", "English-speaking tour guide", "Entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:30", event: "Pickup from hotel" },
          { time: "09:00", event: "Transfer to the Great Pyramids of Giza" },
          { time: "Morning", event: "Explore the Pyramids with a guided tour", detail: "Optional: Camel ride or entry inside the Khufu Pyramid" },
          { time: "Morning", event: "Visit the Sphinx" },
          { time: "12:30", event: "Lunch at your own expense" },
          { time: "01:30", event: "Transfer to the Grand Egyptian Museum" },
          { time: "Afternoon", event: "Discover ancient artifacts of the Grand Egyptian Museum" },
          { time: "16:30", event: "Transfer back and drop-off at hotel" }
        ],
        prices: [
          { label: "Single", price: "$209" },
          { label: "2 Persons", price: "$129" },
          { label: "3 Persons", price: "$119" },
          { label: "4 Persons", price: "$109" },
          { label: "5 Persons", price: "$99" },
          { label: "6 Persons", price: "$89" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 2,
        title: "Great Pyramids, Sphinx, Memphis & Sakkara Tour",
        images: ["https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhaXJvfGVufDB8fDB8fHww"],
        highlights: "Step back in time and explore Egypt’s most legendary sites. Marvel at the Great Pyramids of Giza, stand before the enigmatic Sphinx, visit the ancient capital of Memphis, and uncover the secrets of Sakkara’s Step Pyramid, the world’s first stone pyramid.",
        inclusions: ["Tour Duration: 7 hours", "Private air-conditioned transportation", "English-speaking tour guide", "Entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "09:00", event: "Pickup from hotel" },
          { time: "09:30", event: "Transfer to the Great Pyramids area" },
          { time: "Morning", event: "Visit the Pyramids", detail: "optional camel ride & entry to Khufu Pyramid" },
          { time: "Morning", event: "Visit the Sphinx" },
          { time: "01:00 PM", event: "Lunch at your own expense" },
          { time: "02:00 PM", event: "Visit Memphis, the ancient capital of Egypt" },
          { time: "03:00 PM", event: "Visit Sakkara and the Step Pyramid of Djoser" },
          { time: "04:00 PM", event: "Transfer back and drop-off at hotel" }
        ],
        prices: [
          { label: "Single", price: "$225" },
          { label: "2 Persons", price: "$140" },
          { label: "3 Persons", price: "$130" },
          { label: "4 Persons", price: "$120" },
          { label: "5 Persons", price: "$115" },
          { label: "6 Persons", price: "$105" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 3,
        title: "Saladin’s Citadel, Old Cairo & Khan El-Khalili",
        images: ["https://plus.unsplash.com/premium_photo-1694475081350-ec8e3419b2ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2FsYWRpbiVFMiU4MCU5OXMlMjBDaXRhZGVsfGVufDB8fDB8fHww"],
        highlights: "Step into Cairo’s rich history as you explore Saladin’s Citadel, stroll through the ancient streets of Old Cairo, and lose yourself in the vibrant markets of Khan El-Khalili. This tour offers a fascinating journey through Cairo's medieval history and its bustling bazaars.",
        inclusions: ["Tour Duration: 7 hours", "Private air-conditioned transportation", "English-speaking tour guide", "Entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "09:00", event: "Pickup from hotel" },
          { time: "Morning", event: "Visit Saladin’s Citadel", detail: "with panoramic views of Cairo" },
          { time: "Morning", event: "Visit Old Cairo", detail: "The Hanging Church and Abu Serga Church" },
          { time: "Afternoon", event: "Explore the lively Khan El-Khalili market" },
          { time: "04:00 PM", event: "Transfer back and drop-off at hotel or train station" }
        ],
        prices: [
          { label: "Single", price: "$190" },
          { label: "2 Persons", price: "$110" },
          { label: "3 Persons", price: "$100" },
          { label: "4 Persons", price: "$90" },
          { label: "5 Persons", price: "$80" },
          { label: "6 Persons", price: "$70" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 4,
        title: "Egyptian Museum & National Museum of Egyptian Civilization",
        images: ["https://images.unsplash.com/photo-1631713215053-cc2df30dc6e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWd5cHRpYW4lMjBNdXNldW18ZW58MHx8MHx8fDA%3D"],
        highlights: "Dive into Egypt’s ancient treasures at the Egyptian Museum and the National Museum of Egyptian Civilization. Discover mummies, rare artifacts, and the rich history that shaped the world’s earliest civilizations.",
        inclusions: ["Tour Duration: 6 hours", "Private air-conditioned transportation", "English-speaking tour guide", "Entrance fees"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "09:00", event: "Pickup from hotel" },
          { time: "Morning", event: "Visit the Egyptian Museum", detail: "explore its extensive collection of ancient artifacts" },
          { time: "Afternoon", event: "National Museum of Egyptian Civilization", detail: "see more fascinating relics, including the royal mummies" },
          { time: "03:00 PM", event: "Transfer back and drop-off at hotel" }
        ],
        prices: [
          { label: "Single", price: "$190" },
          { label: "2 Persons", price: "$130" },
          { label: "3 Persons", price: "$120" },
          { label: "4 Persons", price: "$115" },
          { label: "5 Persons", price: "$110" },
          { label: "6 Persons", price: "$105" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 5,
        title: "Sound & Light Show at the Giza Pyramids",
        images: ["https://images.unsplash.com/photo-1623674587543-9c7564de99d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdpemElMjBQeXJhbWlkc3xlbnwwfDB8MHx8fDA%3D"],
        highlights: "Experience the magic of ancient Egypt with the Sound & Light Show at the iconic Giza Pyramids. Marvel at the stunning light displays as the pyramids come to life with captivating stories of Egypt’s glorious past.",
        inclusions: ["Tour Duration: 3 hours", "Private air-conditioned transportation", "Entrance fees to the Sound & Light Show", "On-site representative assistance"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "18:00", event: "Pickup from hotel and transfer to the Giza Pyramids" },
          { time: "Evening", event: "Enjoy the spectacular Sound & Light Show at the pyramids" },
          { time: "21:00", event: "Transfer back and drop-off at hotel" }
        ],
        prices: [
          { label: "Single", price: "$120" },
          { label: "2 Persons", price: "$75" },
          { label: "3 Persons", price: "$70" },
          { label: "4 Persons", price: "$65" },
          { label: "5 Persons", price: "$60" },
          { label: "6 Persons", price: "$55" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 6,
        title: "Nile Cruise Dinner",
        images: ["https://plus.unsplash.com/premium_photo-1678131188332-693a503680ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmlsZSUyMENydWlzZXxlbnwwfHwwfHx8MA%3D%3D"],
        highlights: "Savor a delightful dinner on the Nile while enjoying live entertainment, including captivating belly dancing and swirling dervish performances. An unforgettable evening on Egypt’s legendary river.",
        inclusions: ["Tour Duration: 4 hours", "Private air-conditioned transportation", "Dinner and show during the boat cruise"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "18:00", event: "Pickup from hotel and transfer to the cruise" },
          { time: "Evening", event: "Enjoy a delicious dinner and live entertainment during the cruise" },
          { time: "22:00", event: "Transfer back and drop-off at hotel" }
        ],
        prices: [
          { label: "Single", price: "$120" },
          { label: "2 Persons", price: "$75" },
          { label: "3 Persons", price: "$70" },
          { label: "4 Persons", price: "$65" },
          { label: "5 Persons", price: "$60" },
          { label: "6 Persons", price: "$55" }
        ]
      },
      {
        id: 7,
        title: "Day Tour to Alexandria from Cairo",
        images: ["https://images.unsplash.com/photo-1697546889969-27f7b5be8664?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxleGFuZHJpYXxlbnwwfHwwfHx8MA%3D%3D"],
        highlights: "Uncover the rich history of Alexandria, Egypt's vibrant second-largest city and a key Mediterranean port. Explore the ancient Catacombs, Roman Amphitheatre, Pompey’s Pillars, and the iconic Bibliotheca Alexandrina.",
        inclusions: ["Tour Duration: 11 hours", "Private air-conditioned transport to and from Alexandria", "Entrance fees", "English-speaking tour guide"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "08:00", event: "Pickup from hotel in Cairo, transfer to Alexandria" },
          { time: "11:00", event: "Arrival in Alexandria, and visit to key sites" },
          { time: "01:00 PM", event: "Lunch at your own expense" },
          { time: "04:00 PM", event: "Departure from Alexandria, return to Cairo" },
          { time: "07:00 PM", event: "Drop-off at your hotel in Cairo" }
        ],
        prices: [
          { label: "Single", price: "$270" },
          { label: "2 Persons", price: "$150" },
          { label: "3 Persons", price: "$140" },
          { label: "4 Persons", price: "$135" },
          { label: "5 Persons", price: "$125" },
          { label: "6 Persons", price: "$120" }
        ]
      }
    ]
  },
  "abu-simbel": {
    id: "abu-simbel",
    title: "Abu Simbel Tours",
    quote: "Abu Simbel is a must-see wonder that will leave you speechless! The massive statues of Ramses II stand tall, guarding one of the most incredible temples ever built. Carved into the rock thousands of years ago, this masterpiece was saved from the rising waters of the Nile and still amazes visitors today. If you want to witness something truly unforgettable, Abu Simbel is the place to be!",
    tours: [
      {
        id: 1,
        title: "Abu Simbel by Land",
        images: ["https://images.unsplash.com/photo-1702909171830-2c4dca2ac090?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJ1JTIwc2ltYmVsfGVufDB8fDB8fHww"],
        highlights: "Enjoy a full-day excursion to the iconic Abu Simbel site, home to the magnificent temples of Ramses II and Queen Nefertari. Marvel at the colossal statues and intricate carvings, a UNESCO World Heritage Site that was carefully relocated to protect it from the rising waters of Lake Nasser.",
        inclusions: ["Duration: 9 hours", "Private air-conditioned transport to and from Abu Simbel", "English-speaking tour guide", "Entrance fees to Abu Simbel Temple"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "04:15", event: "Pickup from hotel, cruise ship, or train station" },
          { time: "08:00", event: "Visit to Abu Simbel site" },
          { time: "10:00", event: "Transfer back to Aswan" },
          { time: "13:00", event: "Drop-off your hotel, cruise, felucca or train station" }
        ],
        prices: [
          { label: "Single", price: "$200" },
          { label: "2 Persons", price: "$150" },
          { label: "3 Persons", price: "$130" },
          { label: "4 Persons", price: "$120" },
          { label: "5 Persons", price: "$110" },
          { label: "6 Persons", price: "$100" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 2,
        title: "Abu Simbel Overnight Tour with Sound & Light Show",
        images: ["https://images.unsplash.com/photo-1748292951610-1ed2f59c9c20?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFidSUyMHNpbWJlbHxlbnwwfHwwfHx8MA%3D%3D"],
        highlights: "Extend your Abu Simbel experience with an overnight stay, allowing you to explore the temples at a relaxed pace. Witness the captivating Sound & Light Show, which brings the history of Ramses II and Queen Nefertari to life with dazzling lights and immersive narration.",
        inclusions: ["Duration: 2 days / 1 night", "Private air-conditioned transport to and from Abu Simbel", "Entrance fees to Abu Simbel Temple and Sound & Light Show", "Transfers within Abu Simbel (hotel – site – show - return)", "English-speaking tour guide", "Road permit for smooth travel"],
        exclusions: ["Personal expenses", "Gratuities", "Accommodation in Abu Simbel"],
        itinerary: [
          { day: "Day 1", time: "10:30 AM", event: "Pickup from your hotel, cruise, or train station" },
          { day: "Day 1", time: "01:30 PM", event: "Check-in and Rest", detail: "Check-in at your accommodation and enjoy some rest" },
          { day: "Day 1", time: "03:00 PM", event: "Guided visit to the Abu Simbel site" },
          { day: "Day 1", time: "07:00 PM", event: "Attend the Sound & Light Show at Abu Simbel" },
          { day: "Day 1", time: "08:00 PM", event: "Transfer back to your accommodation", detail: "Evening at leisure" },
          { day: "Day 2", time: "08:00 AM", event: "Transfer back to Aswan" },
          { day: "Day 2", time: "11:30 AM", event: "Drop-off at your hotel, cruise, or train station" }
        ],
        prices: [
          { label: "Single", price: "$300" },
          { label: "2 Persons", price: "$225" },
          { label: "3 Persons", price: "$195" },
          { label: "4 Persons", price: "$180" },
          { label: "5 Persons", price: "$165" },
          { label: "6 Persons", price: "$150" }
        ],
        note: "Private tour with flexible timing and duration"
      },
      {
        id: 3,
        title: "Abu Simbel by Flight",
        images: ["https://images.unsplash.com/photo-1761560879601-f44463a523dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFidSUyMHNpbWJlbHxlbnwwfHwwfHx8MA%3D%3D"],
        highlights: "Skip the long drive and fly directly from Aswan to Abu Simbel for a hassle-free and time-saving experience. This option lets you explore the awe-inspiring temples in the morning before flying back, making the most of your time in Egypt.",
        inclusions: ["Duration: 5-6 hours", "Round-trip flight ticket (Aswan / Abu Simbel / Aswan)", "Pickup and drop-off between Aswan accommodation and airport", "English-speaking Egyptologist guide", "Entrance fees to Abu Simbel Temple", "On-ground assistance"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { time: "18:00", event: "Pickup from hotel or cruise ship" },
          { time: "Evening", event: "Attend the Sound & Light Show" },
          { time: "20:30", event: "Return transfer and drop-off" }
        ],
        prices: [
          { label: "Single", price: "$450" },
          { label: "2 Persons", price: "$425" },
          { label: "3 Persons", price: "$410" },
          { label: "4 Persons", price: "$400" },
          { label: "5 Persons", price: "$385" },
          { label: "6 Persons", price: "$380" }
        ]
      }
    ]
  },
  "historical-wonders": {
    id: "historical-wonders",
    title: "Historical Wonders",
    quote: "Experience the magic of Egypt with our carefully curated historical itineraries. From the pulse of Cairo to the serenity of the Nile, these journeys offer a perfect blend of history, culture, and relaxation.",
    tours: [
      {
        id: 1,
        title: "6 Nights / 7 Days – Cairo, Aswan & Luxor (Including a Nile Cruise)",
        images: ["https://plus.unsplash.com/premium_photo-1728561809541-1620be0f4004?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHQlMjB0ZW1wbGUlMjB3aWRlfGVufDB8fDB8fHww"],
        highlights: "Experience the magic of Egypt with this carefully curated 6-night itinerary that takes you through the wonders of Cairo, Aswan, and Luxor. From exploring ancient pyramids to cruising along the Nile, this journey offers a perfect blend of history, culture, and relaxation.",
        inclusions: ["Three nights at a hotel in Cairo (B&B)", "Three nights/four days on a 5-star Nile cruise (Full Board)", "All sightseeing with Egyptologist guide", "All entrance fees and required permits", "Domestic flights: Cairo/Aswan & Luxor/Cairo"],
        exclusions: ["Optional tours", "Personal expenses", "Gratuities"],
        itinerary: [
          { day: "Day 1", time: "Arrival", event: "Meet & greet at Cairo airport, private transfer to hotel" },
          { day: "Day 2", time: "Giza", event: "Visit Pyramids of Giza, the Sphinx, and the Egyptian Museum" },
          { day: "Day 3", time: "Aswan", event: "Fly to Aswan, embark on cruise, visit High Dam and Philae Temple" },
          { day: "Day 4", time: "Kom Ombo", event: "Optional Abu Simbel, sail to Kom Ombo, visit Kom Ombo Temple, continue to Edfu" },
          { day: "Day 5", time: "Luxor", event: "Visit Edfu Temple, sail through Esna Lock to Luxor" },
          { day: "Day 6", time: "Luxor", event: "Disembark, West Bank visit (Valley of Kings, Hatshepsut, Memnon), East Bank visit (Karnak, Luxor), fly to Cairo" },
          { day: "Day 7", time: "Departure", event: "Breakfast and check-out, transfer to Cairo airport" }
        ],
        prices: [
          { label: "Basic (Double/Triple)", price: "$1,250" },
          { label: "Basic (Single)", price: "$1,700" },
          { label: "Premium (Double/Triple)", price: "$1,975" },
          { label: "Premium (Single)", price: "$2,450" },
          { label: "Luxury (Double/Triple)", price: "$2,450" },
          { label: "Luxury (Single)", price: "$3,405" },
          { label: "Elite (Double/Triple)", price: "$4,630" },
          { label: "Elite (Single)", price: "$6,920" }
        ]
      },
      {
        id: 2,
        title: "9 Nights / 10 Days – Cairo, Aswan, Luxor & Hurghada (Including a Nile Cruise)",
        images: ["https://images.unsplash.com/photo-1553913861-c46db5573ced?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVneXB0JTIwdGVtcGxlJTIwd2lkZXxlbnwwfHwwfHx8MA%3D%3D"],
        highlights: "Combine history and relaxation. Explore Cairo and the Nile before unwinding on the beautiful beaches of Hurghada.",
        inclusions: ["3 nights in Cairo (B&B)", "3 nights on 5-star Nile cruise (Full Board)", "3 nights in Hurghada (All-inclusive)", "Domestic flights: Cairo/Aswan & Hurghada/Cairo"],
        exclusions: ["Optional tours", "Meals during sightseeing (unless specified)", "Gratuities"],
        itinerary: [
          { day: "Day 1", time: "Arrival", event: "Arrival in Cairo, transfer to hotel" },
          { day: "Day 2", time: "Giza", event: "Pyramids, Sphinx, and GEM" },
          { day: "Day 3", time: "Cruising", event: "Fly to Aswan, visit High Dam/Philae, embark cruise" },
          { day: "Day 4", time: "Temples", event: "Optional Abu Simbel, Kom Ombo temple" },
          { day: "Day 5", time: "Edfu", event: "Edfu temple, sail to Luxor" },
          { day: "Day 6", time: "Transfer", event: "Luxor West/East Bank tour, transfer to Hurghada" },
          { day: "Day 7", time: "Red Sea", event: "Relaxation or optional sea trip" },
          { day: "Day 8", time: "Safari", event: "Relaxation or optional desert safari" },
          { day: "Day 9", time: "Cairo", event: "Fly to Cairo, optional Old Cairo tour" },
          { day: "Day 10", time: "Departure", event: "Departure from Cairo" }
        ],
        prices: [
          { label: "Basic", price: "$1,725" },
          { label: "Premium", price: "$2,525" },
          { label: "Luxury", price: "$3,075" },
          { label: "Elite", price: "$5,455" }
        ]
      },
      {
        id: 3,
        title: "11 Nights / 12 Days – Cairo, Aswan, Luxor & Alexandria (Including a Nile Cruise)",
        images: ["https://images.unsplash.com/photo-1628503218283-6ddeac69dfea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWd5cHQlMjB0ZW1wbGUlMjB3aWRlfGVufDB8fDB8fHww"],
        highlights: "The ultimate cultural circuit. Visit Alexandria, the Mediterranean pearl, alongside Cairo, Luxor, and Aswan.",
        inclusions: ["6 nights in Cairo (B&B)", "4 nights on 5-star Nile cruise (Full Board)", "1 night in Aswan (B&B)", "Domestic flights: Cairo/Luxor & Aswan/Cairo"],
        exclusions: ["Optional tours", "Meals during sightseeing", "Gratuities"],
        itinerary: [
          { day: "Day 1", time: "Arrival", event: "Arrival in Cairo" },
          { day: "Day 2", time: "Giza", event: "Pyramids, Sphinx and GEM" },
          { day: "Day 3", time: "Ancient Sites", event: "Sakkara, Memphis and Dahshur" },
          { day: "Day 4", time: "Alexandria", event: "Catacombs, Amphitheatre, Pompey's Pillars, Library" },
          { day: "Day 5", time: "Old Cairo", event: "Citadel, NMEC, Old Cairo & Khan El Khalili" },
          { day: "Day 6", time: "Luxor", event: "Fly to Luxor, East Bank (Karnak/Luxor temples)" },
          { day: "Day 7", time: "Luxor", event: "West Bank (Valley of Kings, Hatshepsut), sail to Edfu" },
          { day: "Day 8", time: "Cruising", event: "Edfu & Kom Ombo temples" },
          { day: "Day 9", time: "Aswan", event: "High Dam & Philae Temple" },
          { day: "Day 10", time: "Nubian", event: "Disembark, Nubian Museum, Felucca sailing, Nubian village" },
          { day: "Day 11", time: "Return", event: "Optional Abu Simbel, fly to Cairo" },
          { day: "Day 12", time: "Departure", event: "Departure from Cairo" }
        ],
        prices: [
          { label: "Basic", price: "$2,365" },
          { label: "Premium", price: "$3,825" },
          { label: "Luxury", price: "$4,375" },
          { label: "Elite", price: "$7,760" }
        ]
      },
      {
        id: 4,
        title: "14 Nights / 15 Days – Cairo, Oasis & White Desert, Aswan, Luxor & Hurghada (Including a Nile Cruise)",
        images: ["https://images.unsplash.com/photo-1594311526185-cdd502eb5d04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGVneXB0fGVufDB8fDB8fHww"],
        highlights: "An expansive 15-day journey covering the desert, the Nile, and the Red Sea. Experience the stunning White Desert camping.",
        inclusions: ["5 nights in Cairo (B&B)", "1 night camping (Full Board)", "1 night in Aswan (B&B)", "3 nights on Nile cruise (Full Board)", "1 night in Luxor (B&B)", "3 nights in Hurghada (All-inclusive)"],
        exclusions: ["Optional tours", "Personal expenses", "Gratuities"],
        itinerary: [
          { day: "Day 1", time: "Arrival", event: "Arrival in Cairo" },
          { day: "Day 2", time: "Giza", event: "Pyramids, Sphinx and GEM" },
          { day: "Day 3", time: "Old Cairo", event: "Citadel, Old Cairo, Khan El Khalili" },
          { day: "Day 4", time: "Desert", event: "Bahariya Oasis, 4x4 Safari, White Desert camping" },
          { day: "Day 5", time: "Return", event: "Return to Cairo" },
          { day: "Day 6", time: "Aswan", event: "Fly to Aswan, Nubian Day Tour" },
          { day: "Day 7", time: "Cruising", event: "High Dam/Philae, embark cruise" },
          { day: "Day 8", time: "Temples", event: "Optional Abu Simbel, Kom Ombo temple" },
          { day: "Day 9", time: "Edfu", event: "Edfu temple, sail to Luxor" },
          { day: "Day 10", time: "Luxor", event: "West Bank tour, East Bank tour" },
          { day: "Day 11", time: "Hurghada", event: "Transfer to Hurghada" },
          { day: "Day 12", time: "Sea", event: "Relaxation or optional sea trip" },
          { day: "Day 13", time: "Safari", event: "Relaxation or optional desert safari" },
          { day: "Day 14", time: "Cairo", event: "Fly back to Cairo" },
          { day: "Day 15", time: "Departure", event: "Departure from Cairo" }
        ],
        prices: [
          { label: "Basic", price: "$2,725" },
          { label: "Premium", price: "$3,825" },
          { label: "Luxury", price: "$4,800" },
          { label: "Elite", price: "$8,300" }
        ]
      }
    ]
  },
  "luxor-aswan-cruise": {
    id: "luxor-aswan-cruise",
    title: "Luxor & Aswan Nile Cruises",
    quote: "Sail through the heart of history. Our Luxor and Aswan cruises offer a unique perspective of Egypt's ancient wonders from the comfort of a 5-star floating hotel.",
    tours: [
      {
        id: 1,
        title: "Mövenpick MS Sunray - 4 Nights / 5 Days (Luxor to Aswan)",
        images: [
          "https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1200"
        ],
        highlights: "Experience 5-star elegance on the Nile with Mövenpick MS Sunray. Enjoy 43-inch Smart TVs, private espresso machines, and a curated itinerary featuring the best of Luxor and Aswan.",
        inclusions: ["All transfers (airport/train/hotel)", "Accommodation on 5-star cruise (full board)", "Egyptologist guide", "Entrance fees for all mentioned sites", "Free internet Wi-Fi", "Espresso machine in all units"],
        exclusions: ["Optional tours (Abu Simbel, Hot Air Balloon, etc.)", "Personal expenses", "Gratuities"],
        boatDetails: {
          name: "Mövenpick MS Sunray",
          usp: "Where ancient history meets smart-home tech. Indulge in automated lighting and curtains, MiFi devices for non-stop streaming on the Nile, and daily gourmet delights.",
          specs: {
            length: "72m",
            width: "15m",
            height: "11.50m",
            engines: "03 Engines 495 hp each",
            generators: "03 Generators 318 kw each",
            speed: "15 m/h (with current), 14 m/h (against current)"
          },
          facilities: ["Main Restaurant", "Lounge Bar", "Sun Deck with Bar", "Mini Gym", "Swimming Pool (150cm depth)", "Reading & Playroom"],
          cabins: [
            { name: "Standard Cabin", size: "20 sqm", decks: ["Main", "Lower"], amenities: ["Smart TV", "Mini Bar", "Espresso Machine"] },
            { name: "Superior Cabin", size: "20 sqm", decks: ["Upper"], amenities: ["Panoramic View", "Smart TV", "Espresso Machine"] },
            { name: "Executive Suite", size: "39 sqm", decks: ["Top"], amenities: ["Automated lighting/curtains", "Premium MiFi", "Espresso Machine", "Daily delights"] }
          ]
        },
        itinerary: [
          { day: "Thursday", time: "12:00 PM", event: "Check-In & Lunch", detail: "Embarkation in Luxor followed by a sumptuous buffet lunch on board." },
          { day: "Thursday", time: "02:30 PM", event: "East Bank Tour", detail: "Visit the grand Karnak and Luxor Temples. Overnight in Luxor." },
          { day: "Friday", time: "07:30 AM", event: "West Bank Exploration", detail: "Discover the Valley of the Kings, Valley of the Queens, and Temple of Hatshepsut. Sail to Edfu via Esna Lock." },
          { day: "Saturday", time: "07:30 AM", event: "Edfu Temple", detail: "Visit Edfu Temple by horse-drawn carriage. Sail to Kom Ombo." },
          { day: "Saturday", time: "04:00 PM", event: "Kom Ombo Temple", detail: "Visit the unique double temple of Sobek & Haroeris. Sail to Aswan." },
          { day: "Saturday", time: "09:00 PM", event: "Egyptian Galabeya Night", detail: "Festive celebration on board. Overnight in Aswan." },
          { day: "Sunday", time: "07:30 AM", event: "Aswan Historic Sites", detail: "Visit the High Dam, Philae Temple, and the Unfinished Obelisk." },
          { day: "Sunday", time: "03:30 PM", event: "Felucca Sailing", detail: "Traditional sailing around Kitchener Island. Belly dance show in the evening." },
          { day: "Monday", time: "08:00 AM", event: "Check-out", detail: "Disembarkation after breakfast." }
        ],
        prices: [
          { label: "Standard DBL (Low Season)", price: "$210" },
          { label: "Superior DBL (Low Season)", price: "$242" },
          { label: "Executive Suite (Low Season)", price: "$1,365" },
          { label: "Standard DBL (Winter Season)", price: "$430" }
        ],
        note: "Focus on 2026/2027 sailing dates for up-to-date pricing."
      },
      {
        id: 2,
        title: "Mövenpick MS Hamees - 3 Nights / 4 Days (Aswan to Luxor)",
        images: [
          "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=1200"
        ],
        highlights: "Discover one of the largest and best-appointed Nile crafts. Mövenpick MS Hamees offers contemporary design, French windows, and world-class dining experiences.",
        inclusions: ["All transfers", "Accommodation on 5-star cruise (full board)", "Egyptologist guide", "Entrance fees", "French windows in cabins", "Smart TVs"],
        exclusions: ["Optional tours", "Personal extras", "Gratuities"],
        boatDetails: {
          name: "Mövenpick MS Hamees",
          usp: "A comfortable and contemporary sanctuary on the Nile, featuring soft cream colors for relaxation and panoramic windows for optimal river views.",
          specs: {
            length: "72m",
            width: "14.80m",
            height: "11.50m",
            engines: "03 Engines 495 hp each",
            generators: "03 Generators 318 kw each",
            speed: "15 m/h (with current), 14 m/h (against current)"
          },
          facilities: ["Main Restaurant", "Elegantly Appointed Lounge Bar", "Sun Deck with snacks", "Mini Gym", "Swimming Pool", "Playroom"],
          cabins: [
            { name: "Standard Cabin", size: "21.70 sqm", decks: ["Lower", "Main"], amenities: ["French windows", "Smart TV", "Free Wi-Fi"] },
            { name: "Superior Cabin", size: "21.70 sqm", decks: ["Upper", "Top"], amenities: ["Higher floor views", "French windows", "Smart TV"] },
            { name: "Deluxe Suite", size: "37.70 sqm", decks: ["Upper"], amenities: ["Automated curtains", "Premium MiFi", "Espresso Machine"] }
          ]
        },
        itinerary: [
          { day: "Friday", time: "12:00 PM", event: "Check-In", detail: "Embarkation in Aswan followed by lunch on board." },
          { day: "Friday", time: "01:30 PM", event: "High Dam & Philae", detail: "Visit the High Dam and the beautiful temple of Philae. Welcome reception cocktail." },
          { day: "Saturday", time: "06:00 AM", event: "Sail to Kom Ombo", detail: "Visit Kom Ombo Temple. Sail to Edfu." },
          { day: "Saturday", time: "01:00 PM", event: "Edfu Temple", detail: "Visit Edfu Temple. Sail to Luxor via Esna Lock." },
          { day: "Saturday", time: "09:00 PM", event: "Galabeya Night", detail: "Enjoy a traditional celebration while sailing towards Luxor." },
          { day: "Sunday", time: "07:00 AM", event: "West Bank", detail: "Visit the Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon." },
          { day: "Sunday", time: "02:30 PM", event: "East Bank", detail: "Visit Karnak and Luxor Temples. Belly dance show in the evening." },
          { day: "Monday", time: "08:00 AM", event: "Check-out", detail: "Disembarkation after breakfast." }
        ],
        prices: [
          { label: "Standard DBL (Low Season)", price: "$200" },
          { label: "Superior DBL (Low Season)", price: "$230" },
          { label: "Deluxe Suite (Low Season)", price: "$1,100" }
        ],
        note: "Excellent choice for those seeking contemporary comfort on the Nile."
      }
    ]
  },
  "felucca-cruise": {
    id: "felucca-cruise",
    title: "Super Deluxe Felucca Cruises",
    quote: "Sail along the Nile in style aboard an exclusive felucca, offering a blend of tradition and comfort. Relax as you glide through the river enjoying Nubian hospitality.",
    tours: [
      {
        id: 1,
        title: "Aswan to Daraw – 1 Night/1 Day",
        images: ["https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800"],
        highlights: "Experience a magical night under the stars with traditional Nubian music and authentic local cuisine.",
        inclusions: ["Private transfer to/from felucca", "Three meals per day", "Mineral water"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { day: "Day 1", time: "Aswan", event: "Morning departure (10:00), sail downstream, meals onshore/onboard" },
          { day: "Day 2", time: "Daraw", event: "Arrival in Daraw, transfer back to Aswan or continue to Luxor" }
        ],
        prices: [
          { label: "1 Person", price: "$190" },
          { label: "2-4 Persons (Group)", price: "$260" },
          { label: "Extra Person", price: "+$60" }
        ]
      },
      {
        id: 2,
        title: "Aswan to Kom Ombo – 2 Nights/2 Days",
        images: ["https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=800"],
        highlights: "A two-day adventure sailing downstream with Nubian music, storytelling, and campfire evenings.",
        inclusions: ["Private transfers", "Full board meals", "Mineral water"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { day: "Day 1", time: "Sailing", event: "Depart Aswan, sailing, Nubian music and dinner under the stars" },
          { day: "Day 2", time: "Sailing", event: "Leisurely sailing, stopping for meals, campfire evening" },
          { day: "Day 3", time: "Kom Ombo", event: "Arrival at Kom Ombo, transfer to next destination" }
        ],
        prices: [
          { label: "1 Person", price: "$350" },
          { label: "2-4 Persons (Group)", price: "$480" },
          { label: "Extra Person", price: "+$100" }
        ]
      },
      {
        id: 3,
        title: "Aswan to Edfu – 3 Nights/3-4 Days",
        images: ["https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800"],
        highlights: "The ultimate slow-travel experience. Fully dependent on the wind, exploring the Nile at its most peaceful pace.",
        inclusions: ["Private transfers", "Full board meals", "Mineral water"],
        exclusions: ["Personal expenses", "Gratuities"],
        itinerary: [
          { day: "Days 1-3", time: "Sailing", event: "Voyage from Aswan, daily sailing, swimming, and stops for exploration" },
          { day: "Day 4", time: "Edfu", event: "Final breakfast, disembark at Edfu, return transfer" }
        ],
        prices: [
          { label: "1 Person", price: "$350" },
          { label: "2-4 Persons (Group)", price: "$640" },
          { label: "Extra Person", price: "+$135" }
        ]
      }
    ]
  },
  "dahabiya-cruise": {
    id: "dahabiya-cruise",
    title: "Dahabiya Nile Cruise Boat",
    quote: "A Dahabiya is the most exclusive way to see the Nile. These elegant sailing boats offer a boutique experience far removed from the larger cruise ships.",
    tours: [
      {
        id: 1,
        title: "4 Night Dahabiya Cruise (Esna to Aswan) – Departs Every Monday",
        images: ["https://images.unsplash.com/photo-1568322422676-9d713bcc136b?auto=format&fit=crop&q=80&w=800"],
        highlights: "Includes Luxor West/East Bank sightseeing before embarking on your private sailing journey south.",
        inclusions: ["Full board accommodation", "Meet & assist", "Sightseeing with expert guide", "Entrance fees"],
        exclusions: ["Optional tours", "Gratuities", "Personal expenses"],
        itinerary: [
          { day: "Day 1", time: "Luxor/Esna", event: "Valley of Kings, Hatshepsut, Karnak, transfer to Esna for embarkation" },
          { day: "Day 2", time: "Edfu", event: "Sail to Edfu, Horus Temple visit, Bassaw Village cultural experience" },
          { day: "Day 3", time: "Selsila", event: "Selsila Temple, sail to Kom Ombo Temple, continue to Aswan" },
          { day: "Day 4", time: "Aswan", event: "Philae Temple, Aswan Souq, optional Nubian Village/Felucca" },
          { day: "Day 5", time: "Departure", event: "Final breakfast, transfer to airport/hotel" }
        ],
        prices: [
          { label: "Double (3 nights)", price: "$1200" },
          { label: "Single (3 nights)", price: "$1980" },
          { label: "Double (4 nights)", price: "$1600" },
          { label: "Single (4 nights)", price: "$2640" }
        ],
        note: "Cruises on: Amoura, Queen Anat, Princess Donia, Nebyt, Orient"
      },
      {
        id: 2,
        title: "3 Night Dahabiya Cruise (Aswan to Esna) – Departs Every Friday",
        images: ["https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=800"],
        highlights: "Explore Aswan's highlights before sailing north towards Luxor on an intimate Dahabiya.",
        inclusions: ["Full board accommodation", "Meet & assist", "Expert guide", "Entrance fees"],
        exclusions: ["Optional tours", "Gratuities", "Personal expenses"],
        itinerary: [
          { day: "Day 1", time: "Aswan", event: "Visit Philae Temple, Souq, embark, sail toward Kom Ombo, visit temple" },
          { day: "Day 2", time: "Selsila", event: "Selsila Temple, Bassaw Village interaction, folklore night" },
          { day: "Day 3", time: "Edfu", event: "Visit Horus Temple at Edfu, sail to Esna" },
          { day: "Day 4", time: "Luxor", event: "Disembark, transfer to Luxor, sightseeing tour, departure" }
        ],
        prices: [
          { label: "Double (3 nights)", price: "$1200" },
          { label: "Single (3 nights)", price: "$1980" },
          { label: "Double (4 nights)", price: "$1600" },
          { label: "Single (4 nights)", price: "$2640" }
        ]
      }
    ]
  },
  "lake-nasser-cruise": {
    id: "lake-nasser-cruise",
    title: "Lake Nasser Cruise",
    quote: "Experience the timeless beauty of Lake Nasser on a luxury cruise. Sail between Aswan and Abu Simbel, visiting remote monuments rarely seen by others.",
    tours: [
      {
        id: 1,
        title: "4 Nights / 5 Days Cruise (Aswan to Abu Simbel)",
        images: ["https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800"],
        highlights: "A one-of-a-kind route visiting Kalabsha, Wadi El Seboua, Amada, and finishing with a sunrise over Abu Simbel.",
        inclusions: ["Meet & assist", "Full board accommodation", "Entrance fees", "Egyptologist guide"],
        exclusions: ["Personal expenses", "Optional tours (Sound & Light)", "Gratuities"],
        itinerary: [
          { day: "Day 1", time: "Aswan", event: "Arrival transfer, check-in, lunch on board, free time" },
          { day: "Day 2", time: "Kalabsha", event: "Visit Kalabsha Temples, sail to Wadi El Seboua, cocktail party" },
          { day: "Day 3", time: "Amada", event: "Visit Wadi El Seboua, sail to Amada, visit temples, Nubian Show" },
          { day: "Day 4", time: "Abu Simbel", event: "Sail to Abu Simbel, panorama stop, visit temple, optional Sound & Light" },
          { day: "Day 5", time: "Departure", event: "Check-out, private transfer back to Aswan" }
        ],
        prices: [
          { label: "Single Room", price: "$2300" },
          { label: "Double Room", price: "$1400" },
          { label: "Triple Room", price: "$1375" }
        ],
        note: "Vessels: M/S Steigenberger Omar El Khayam or M/S Prince Abbas"
      },
      {
        id: 2,
        title: "3 Nights / 4 Days Cruise (Abu Simbel to Aswan)",
        images: ["https://images.unsplash.com/photo-1628178651610-d9d1be6a32d1?auto=format&fit=crop&q=80&w=800"],
        highlights: "Start your journey at the majestic Abu Simbel and sail north towards Aswan, visiting the hidden gems of Lake Nasser.",
        inclusions: ["Transfers", "Full board stay", "Entrance fees", "Taxes & service charges"],
        exclusions: ["Personal extras", "Gratuities"],
        itinerary: [
          { day: "Day 1", time: "Abu Simbel", event: "Transfer from Aswan, embarkation, visit Abu Simbel Temple" },
          { day: "Day 2", time: "Amada", event: "Sail to Kasr Ibrim (photo stop), visit Amada temples, sail to Wadi El Seboua" },
          { day: "Day 3", time: "Aswan", event: "Visit Wadi El Seboua Temples, sail to Aswan" },
          { day: "Day 4", time: "Departure", event: "Visit Kalabsha Temples, check-out, final transfer" }
        ],
        prices: [
          { label: "Single Room", price: "$1755" },
          { label: "Double Room", price: "$1080" },
          { label: "Triple Room", price: "$1050" }
        ]
      }
    ]
  }
};

export const POLICIES_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    content: `At Egypt Holiday Aswan, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.

1. Information We Collect
We may collect the following types of information:
- Personal Information: Name, email address, phone number, billing details, and any other information you provide when booking a service.
- Payment Information: When making a purchase, we may collect payment details, but transactions are processed securely through third-party payment gateways.
- Technical Data: IP address, browser type, device information, and usage data collected through cookies and analytics tools.

2. How We Use Your Information
We use the information we collect to:
- Process bookings and transactions.
- Improve our website, services, and customer experience.
- Communicate with you regarding inquiries, confirmations, or updates.
- Comply with legal and regulatory requirements.

3. Sharing Your Information
We do not sell or rent your personal information. However, we may share it with:
- Service Providers: Third-party vendors, such as hotels, airlines, or tour operators, to fulfill your booking.
- Legal Authorities: If required by law or to protect our rights and security.

4. Data Security
We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We encourage you to take precautions when sharing personal data online.

5. Cookies and Tracking Technologies
We use cookies and analytics tools to enhance your browsing experience. You can control cookie settings through your browser.

6. Your Rights
You have the right to:
- Access, update, or delete your personal information.
- Opt-out of marketing communications.
- Request information on how your data is used.

7. Third-Party Links
Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.

8. Updates to This Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page.

9. Contact Us
If you have any questions or concerns about this Privacy Policy, please contact us at Reservation@egyptholidayaswan.com.`
  },
  terms: {
    title: "Terms & Conditions",
    content: `Welcome to Egypt Holiday Aswan. By booking with us, you agree to the following terms and conditions. Please read them carefully before making a reservation.

Booking & Payment
- A deposit is required at the time of booking to confirm your reservation.
- The remaining balance must be paid before departure according to the specific tour terms.
- Failure to complete payment by the due date may result in cancellation of your booking without a refund.
- Prices are subject to change based on availability and supplier adjustments.

Travel Documents & Requirements
- It is the traveler’s responsibility to ensure they have valid passports, visas, and any required health documentation.
- We are not responsible for denied entry due to incomplete or incorrect documentation.

Itinerary & Changes
- Our itineraries are subject to change due to unforeseen circumstances such as weather, government regulations, or operational requirements.
- We will make every effort to provide suitable alternatives without additional costs to the customer where possible.

Children Policy
- Pricing for children varies based on the specific services included in the package, such as accommodations, transportation, and tours.
- Discounts may be available depending on the supplier's policies.
- Infants (typically under 2 years old) may travel free of charge or at a minimal fee.
- Children under a certain age may receive a discounted rate when sharing accommodations with adults.
- Exact pricing for children will be provided at the time of booking, based on the applicable supplier terms.

Liability & Responsibility
- We act as an intermediary between travelers and service providers (airlines, hotels, cruise operators, etc.).
- We are not responsible for delays, losses, accidents, or damage caused by third-party service providers.
- We highly recommend purchasing travel insurance to cover unexpected situations.

Health & Safety
- Travelers must disclose any medical conditions that may affect their participation in activities.
- We are not liable for any health-related issues that arise during the trip.

Complaints & Disputes
- Any complaints must be reported during the trip for immediate resolution.
- Disputes will be settled according to the laws of Canada.`
  },
  cancellation: {
    title: "Cancellation & Refund Policy",
    content: `At Egypt Holiday Aswan, we strive to provide flexibility while ensuring fairness for all parties involved. Our cancellation policy varies based on the type of service booked, as each supplier (flights, Nile cruises, hotels, tours, etc.) may have different cancellation terms.

1. General Cancellation Guidelines
- Cancellation requests must be submitted in writing via email to Reservation@egyptholidayaswan.com.
- Refund eligibility depends on the supplier's terms and the cancellation timeline.
- Any applicable bank or transaction fees will be deducted from the refunded amount.
- No-shows and last-minute cancellations may result in full charges with no refund.

2. Flight Cancellations
- Airline tickets are subject to the airline’s cancellation and refund policies.
- Some fares are non-refundable, while others may allow changes or cancellations with penalties.
- We recommend purchasing travel insurance to cover unexpected cancellations.

3. Nile Cruise Cancellations
Due to high demand and limited availability, Nile cruises typically have strict cancellation policies. Below is a general guideline, but actual cancellation fees may vary by cruise provider:
- More than 90 days before departure: 25% of the total cost will be charged.
- 60-89 days before departure: 50% of the total cost will be charged.
- 30-59 days before departure: 75% of the total cost will be charged.
- Less than 30 days before departure: No refund will be issued.

4. Hotel Cancellations
- Hotels follow their own cancellation policies, which vary by season and room type.
- Some hotels allow free cancellation up to a certain period, while others impose penalties.
- We will inform you of your hotel's specific cancellation terms at the time of booking.

5. Tour & Excursion Cancellations
- Tours and excursions are generally more flexible.
- Free cancellation is often available if made at least 48 hours before the scheduled tour.
- Last-minute cancellations may be subject to a penalty, depending on the supplier.

6. Force Majeure & Unforeseen Circumstances
- In cases of force majeure (e.g., natural disasters, pandemics, political unrest), we will work with suppliers to offer rescheduling options or partial refunds when possible.
- However, we are not responsible for losses due to circumstances beyond our control.

7. Refund Process
- Approved refunds will be processed within 7-14 business days after confirmation.
- Refunds will be issued using the original payment method.
- Some suppliers may take longer to process refunds, which is beyond our control.`
  }
};
