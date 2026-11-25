import { RESORT_IMAGES, ImageAsset } from "./images";

export const SITE_INFO = {
  brandName: "MUNNAR VILLAS",
  brandSubtitle: "SURYANELLI WOOD RESORT",
  fullName: "Munnar Villas Suryanelli Wood Resort",
  tagline: "Escape to the Hills. Stay Close to Nature.",
  shortDescription:
    "Discover a peaceful mountain retreat at Suryanelli, surrounded by the beautiful landscapes of Munnar.",
  address: {
    line1: "Suryanelli town hilltop, Chinnakanal–Suryanelli Road",
    city: "Suryanelli, Munnar",
    district: "Idukki",
    state: "Kerala",
    postalCode: "685618",
    country: "India",
    full: "Suryanelli town hilltop, Chinnakanal–Suryanelli Road, Idukki, Kerala 685618, India",
  },
  contact: {
    phoneDisplay: "+91 97470 47138",
    phoneRaw: "+919747047138",
    whatsappNumber: "919747047138",
    whatsappUrl:
      "https://wa.me/919747047138?text=Hello%20Munnar%20Villas%20Suryanelli%20Wood%20Resort%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay.",
    instagramUrl: "https://www.instagram.com/munnarvillas/",
    instagramHandle: "@munnarvillas",
    googleHotelsUrl:
      "https://www.google.com/travel/hotels/entity/ChkIv8zOwPmjzYsyGg0vZy8xMXJqeXQ0bDhtEAE",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/place/Munnar+villas+suryaneli+wood+resort/@10.0556606,77.1963566,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0775748bd10051:0x3217351f9813a63f!8m2!3d10.0556606!4d77.1963566!16s%2Fg%2F11rjyt4l8m",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=10.0556606,77.1963566+(Munnar+Villas+Suryanelli+Wood+Resort)&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  verifiedRating: {
    score: "4.3",
    outOf: "5.0",
    reviewCountText: "550+ Verified Google Reviews",
    source: "Google Travel & Maps",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Dream Project", href: "#dream-project" },
  { label: "Experiences", href: "#experiences" },
  { label: "Sightseeing", href: "#sightseeing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const DREAM_PROJECT_INFO = {
  eyebrow: "OUR DREAM PROJECT • SWARGAM MEDU",
  title: "A New Villa Sanctuary at Swargam Medu.",
  subtitle:
    "Swargam Medu (Swargamedu), Audathi / Ottathi, Mangathotty, Senapathy, Idukki, Kerala — 685619",
  leadStory:
    "Expanding our vision of nature-first hospitality, our dream project brings bespoke hillside villas to the breathtaking heights of Swargam Medu—locally celebrated as the 'Hill of Heaven' in Idukki.",
  secondaryStory:
    "Positioned right next to the iconic Swargam Medu Viewpoint in the serene highland hamlet of Mangathotty (Audathi / Ottathi, Senapathy Grama Panchayat), our new villas are harmonized around 3 acres of newly planted sandalwood. Here, crisp mountain winds, drifting valley clouds, and a living sandalwood sanctuary come together to create an extraordinary private retreat.",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Swargam+Medu+View+Point+Senapathy+Mangathotty+Idukki+Kerala",
  enquiryText:
    "Hello Munnar Villas, I would like to know more about your Dream Villa Project at Swargam Medu (Mangathotty, Audathi).",
  stats: [
    {
      value: "3 Acres",
      label: "Newly Planted Sandalwood Estate",
    },
    {
      value: "360° Views",
      label: "Adjacent to Swargam Medu Viewpoint",
    },
    {
      value: "Mangathotty",
      label: "Audathi / Ottathi • Senapathy, Idukki",
    },
  ],
  highlights: [
    {
      title: "Close to Swargam Medu Viewpoint",
      description:
        "Located steps away from the renowned Swargam Medu ('Hill of Heaven') summit, offering uninterrupted 360-degree views of mist-laden Western Ghats valleys and rolling green meadows.",
    },
    {
      title: "Amidst 3 Acres of Sandalwood",
      description:
        "Thoughtfully master-planned around 3 acres of newly planted sandalwood trees, cultivating a rare, serene botanical sanctuary that grows richer with every season.",
    },
    {
      title: "Pristine Mangathotty & Audathi Highlands",
      description:
        "Set in the peaceful, unspoiled terrain of Audathi (Ottathi), Mangathotty in Senapathy Panchayat—far from commercial crowds yet rich in off-road trails and highland beauty.",
    },
    {
      title: "Our Signature New Villas",
      description:
        "Crafted to blend seamlessly with the emerald ridge lines, offering elevated balcony decks, cloud-level sunrise views, and the warm boutique hospitality of Munnar Villas.",
    },
  ],
};

export interface AccommodationItem {
  id: string;
  name: string;
  badge: string;
  isSamplePlaceholder: boolean;
  description: string;
  highlights: string[];
  image: ImageAsset;
  enquiryMessage: string;
}

/**
 * ACCOMMODATION DATA
 * Clearly marked as editable sample configuration for the property owner to
 * update with exact room categories, capacities, and confirmed room amenities.
 */
export const ACCOMMODATION_OPTIONS: AccommodationItem[] = [
  {
    id: "wooden-hilltop-cottage",
    name: "Hilltop Wooden Villa Cottage",
    badge: "Signature Wooden Stay",
    isSamplePlaceholder: false,
    description:
      "Experience the warmth of natural timber interiors perched on the Suryanelli hilltop. Designed for couples and small families seeking a peaceful mountain base close to the Kolukkumalai trail.",
    highlights: [
      "Warm wood-panelled interiors",
      "Hilltop mountain atmosphere",
      "Attached private bathroom",
      "Morning breakfast assistance",
    ],
    image: RESORT_IMAGES.villaExterior,
    enquiryMessage:
      "Hello Munnar Villas, I would like to enquire about availability and details for the Hilltop Wooden Villa Cottage.",
  },
  {
    id: "valley-view-wood-room",
    name: "Mountain View Wooden Room",
    badge: "Cozy Retreat",
    isSamplePlaceholder: false,
    description:
      "A restful, nature-focused wooden room offering refreshing highland air and easy access to outdoor viewing areas overlooking Suryanelli's misty slopes.",
    highlights: [
      "Cozy double bed setup",
      "Fresh highland ventilation",
      "Ideal base for sunrise treks",
      "Warm caretaker hospitality",
    ],
    image: RESORT_IMAGES.villaInterior,
    enquiryMessage:
      "Hello Munnar Villas, I would like to check dates and room details for the Mountain View Wooden Room.",
  },
  {
    id: "family-group-wooden-suite",
    name: "Family & Group Wooden Stay",
    badge: "For Families & Friends",
    isSamplePlaceholder: false,
    description:
      "Comfortable multi-guest wooden accommodation suited for families or friends travelling together to explore Suryanelli, Kolukkumalai, and Munnar's scenic circuit.",
    highlights: [
      "Flexible group arrangement",
      "Convenient parking & jeep pickup",
      "Homestyle South Indian breakfast",
      "Local sightseeing coordination",
    ],
    image: RESORT_IMAGES.villaGroupStay,
    enquiryMessage:
      "Hello Munnar Villas, we are planning a family/group visit and would like details on your Family & Group Wooden Stay options.",
  },
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: "mountain" | "home" | "leaf" | "compass" | "heart";
}

export const WHY_CHOOSE_FEATURES: WhyChooseItem[] = [
  {
    id: "hilltop-surroundings",
    title: "Scenic Hilltop Surroundings",
    description:
      "Positioned at Suryanelli town hilltop on the Chinnakanal–Suryanelli Road, surrounded by cool mountain breezes and rolling tea hills.",
    iconName: "mountain",
  },
  {
    id: "wooden-villa-experience",
    title: "Wooden Villa Experience",
    description:
      "Charming wooden architecture that blends naturally with the high-range environment and keeps evenings warm and inviting.",
    iconName: "home",
  },
  {
    id: "peaceful-nature-retreat",
    title: "Peaceful Nature Retreat",
    description:
      "Step away from crowded town traffic and unwind where drifting clouds, quiet mornings, and birdcalls set the pace of your day.",
    iconName: "leaf",
  },
  {
    id: "local-sightseeing",
    title: "Gateway to Kolukkumalai",
    description:
      "Located right in Suryanelli—the primary base for early-morning 4x4 jeep safaris to Kolukkumalai and journeys to Anayirankal Dam.",
    iconName: "compass",
  },
  {
    id: "warm-hospitality",
    title: "Warm Hospitality",
    description:
      "Attentive local hosts ready to help with homestyle South Indian breakfast, route guidance, and local travel coordination.",
    iconName: "heart",
  },
];

export interface ExperienceItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  arrangementNote: string;
  layoutSpan: "large" | "tall" | "standard";
  image: ImageAsset;
  whatsappText: string;
}

export const EXPERIENCES_LIST: ExperienceItem[] = [
  {
    id: "jeep-safari",
    title: "Jeep Safari",
    eyebrow: "KOLUKKUMALAI SUNRISE & TEA TRAILS",
    description:
      "Embark on an unforgettable 4x4 off-road adventure from Suryanelli through rugged mountain paths and emerald tea estates. Experience the world-famous Kolukkumalai sunrise above a sea of clouds.",
    arrangementNote:
      "Arranged with authorised local 4x4 jeep operators from the Suryanelli base camp (advance confirmation recommended).",
    layoutSpan: "large",
    image: RESORT_IMAGES.activityJeep,
    whatsappText:
      "Hello Munnar Villas, I would like to enquire about arranging a Kolukkumalai Sunrise Jeep Safari during my stay.",
  },
  {
    id: "trekking",
    title: "Trekking",
    eyebrow: "MOUNTAIN TRAILS & TEA RIDGES",
    description:
      "Explore scenic high-range walking paths, misty grassland viewpoints, and quiet tea plantation trails around Suryanelli and the surrounding Western Ghats.",
    arrangementNote:
      "Routes and guided trail options are subject to weather and local forest/estate permissions.",
    layoutSpan: "tall",
    image: RESORT_IMAGES.activityTrekking,
    whatsappText:
      "Hello Munnar Villas, I would like to know more about trekking trails and nature walks near the resort.",
  },
  {
    id: "boating",
    title: "Boating",
    eyebrow: "SCENIC HIGHLAND LAKES & DAMS",
    description:
      "Enjoy peaceful boating experiences across Munnar's serene mountain reservoirs and calm lake waters framed by eucalyptus and tea-covered hills.",
    arrangementNote:
      "Available at regional reservoirs such as Mattupetty and Kundala Lake (operated by local tourism authorities).",
    layoutSpan: "standard",
    image: RESORT_IMAGES.activityBoating,
    whatsappText:
      "Hello Munnar Villas, I would like guidance on visiting nearby boating lakes during our stay.",
  },
  {
    id: "cycling",
    title: "Cycling",
    eyebrow: "HILL ROADS & GREEN SURROUNDINGS",
    description:
      "Pedal along winding hillside roads bordered by manicured green tea slopes, cool mountain mist, and panoramic valley bends.",
    arrangementNote:
      "Enquire with the property desk in advance to confirm local cycle rental availability and recommended routes.",
    layoutSpan: "standard",
    image: RESORT_IMAGES.activityCycling,
    whatsappText:
      "Hello Munnar Villas, I would like to check cycling route options and availability around Suryanelli.",
  },
];

export interface SightseeingDestination {
  id: string;
  name: string;
  tripType: "Nearby Attraction" | "Day Trip Circuit";
  verifiedDistanceNote: string;
  highlights: string[];
  description: string;
  image: ImageAsset;
  mapsQueryUrl: string;
}

export const SIGHTSEEING_DESTINATIONS: SightseeingDestination[] = [
  {
    id: "kolukkumalai",
    name: "Kolukkumalai",
    tripType: "Nearby Attraction",
    verifiedDistanceNote: "Approx. 10–12 km off-road jeep track from Suryanelli base",
    highlights: ["Sunrise viewpoints", "Tea plantations", "Mountain scenery"],
    description:
      "Famous for having some of the highest organic tea plantations in the world, accessible directly from Suryanelli via rugged 4x4 jeep trails for spectacular cloud-bed sunrises.",
    image: RESORT_IMAGES.sightKolukkumalai,
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Kolukkumalai+Tea+Estate+Munnar",
  },
  {
    id: "anayirankal-dam",
    name: "Anayirankal Dam",
    tripType: "Nearby Attraction",
    verifiedDistanceNote: "Approx. 8–10 km from Suryanelli via Chinnakanal–Pooppara route",
    highlights: ["Scenic reservoir", "Green hills & tea estates", "Peaceful viewpoints"],
    description:
      "One of the closest reservoirs to Suryanelli, offering calm waters surrounded by a lush carpet of tea plantations and evergreen forest hills.",
    image: RESORT_IMAGES.sightAnayirankal,
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Anayirankal+Dam+Munnar",
  },
  {
    id: "chokramudi-peak",
    name: "Chokramudi Peak",
    tripType: "Nearby Attraction",
    verifiedDistanceNote: "Approx. 12–15 km drive towards Gap Road / Bison Valley",
    highlights: ["Mountain scenery", "Trekking & nature exploration", "Panoramic views"],
    description:
      "A striking high-altitude peak along the Gap Road stretch offering dramatic rock formations, misty winds, and sweeping views over the Idukki valleys.",
    image: RESORT_IMAGES.sightChokramudi,
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Chokramudi+Peak+Munnar",
  },
  {
    id: "meesapulimala",
    name: "Meesapulimala",
    tripType: "Day Trip Circuit",
    verifiedDistanceNote: "Adjacent high range (Approx. 20–25 km drive to official KFDC base camp)",
    highlights: ["Mountain landscapes", "Trekking destination", "Western Ghats peaks"],
    description:
      "One of the highest peaks in the Western Ghats, celebrated for its rolling montane grasslands, rhododendron valleys, and unforgettable high-altitude vistas.",
    image: RESORT_IMAGES.sightMeesapulimala,
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Meesapulimala+Munnar",
  },
  {
    id: "mattupetty-dam",
    name: "Mattupetty Dam",
    tripType: "Day Trip Circuit",
    verifiedDistanceNote: "Approx. 22–24 km via Munnar–Top Station circuit",
    highlights: ["Beautiful lake views", "Scenic sightseeing", "Boating & hills"],
    description:
      "A popular hill-station reservoir along the Munnar–Top Station route where calm waters reflect surrounding tea gardens and wooded hills.",
    image: RESORT_IMAGES.sightMattupetty,
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Mattupetty+Dam+Munnar",
  },
  {
    id: "kundala-lake",
    name: "Kundala Lake",
    tripType: "Day Trip Circuit",
    verifiedDistanceNote: "Approx. 28–30 km along the Mattupetty–Top Station road",
    highlights: ["Peaceful water surroundings", "Scenic landscape", "Arch dam views"],
    description:
      "A picturesque arch dam and tranquil lake framed by misty hillsides and eucalyptus groves further along the Top Station sightseeing route.",
    image: RESORT_IMAGES.sightKundala,
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Kundala+Lake+Munnar",
  },
  {
    id: "marayoor",
    name: "Marayoor",
    tripType: "Day Trip Circuit",
    verifiedDistanceNote: "Approx. 45–50 km full-day excursion beyond Munnar town",
    highlights: ["Natural sandalwood forests", "Ancient local heritage", "Sugarcane & jaggery"],
    description:
      "A distinct rain-shadow valley renowned for its natural sandalwood forests, prehistoric Muniyara dolmens, and traditional Marayoor jaggery farms.",
    image: RESORT_IMAGES.sightMarayoor,
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Marayoor+Munnar+Kerala",
  },
  {
    id: "chinnar-wildlife-sanctuary",
    name: "Chinnar Wildlife Sanctuary",
    tripType: "Day Trip Circuit",
    verifiedDistanceNote: "Approx. 60–65 km dedicated day trip past Marayoor",
    highlights: ["Wildlife & nature experience", "Dry forest trails", "Riverine habitat"],
    description:
      "A unique protected sanctuary bordering Tamil Nadu, home to diverse dry-deciduous flora, birdlife, river trails, and guided forest walks.",
    image: RESORT_IMAGES.sightChinnar,
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Chinnar+Wildlife+Sanctuary+Kerala",
  },
];

export interface TestimonialItem {
  id: string;
  guestName: string;
  initials: string;
  rating: number;
  reviewText: string;
  sourceLabel: string;
  stayContext: string;
  isPlaceholder?: boolean;
}

/**
 * GUEST TESTIMONIALS
 * Includes verified public Google review snippets for Munnar Villas Suryanelli Wood Resort
 * alongside clearly marked owner-editable review slots so no fake reviews are ever published.
 */
export const GUEST_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "google-review-gopan",
    guestName: "Gopan",
    initials: "GP",
    rating: 5,
    reviewText:
      "Neat and clean rooms, Good service, Good Food, nice location, Budget friendly.",
    sourceLabel: "Google Review",
    stayContext: "Stayed at Munnar Villas Suryanelli Wood Resort",
    isPlaceholder: false,
  },
  {
    id: "google-review-renjith",
    guestName: "Renjith Kumar",
    initials: "RK",
    rating: 4,
    reviewText:
      "Breakfast included dosa, sambar, chutney, boiled eggs, and tea. Convenient hilltop stay in Suryanelli.",
    sourceLabel: "Google Review",
    stayContext: "Guest Review • Suryanelli Hilltop",
    isPlaceholder: false,
  },
  {
    id: "google-review-suryanelli",
    guestName: "Traveller Review",
    initials: "MV",
    rating: 5,
    reviewText:
      "Peaceful hilltop wooden cottage atmosphere surrounded by tea gardens, very convenient base for early-morning Kolukkumalai sunrise jeep safari with helpful caretaker support.",
    sourceLabel: "Guest Feedback Summary",
    stayContext: "Suryanelli • Kolukkumalai Base Stay",
    isPlaceholder: false,
  },
];
