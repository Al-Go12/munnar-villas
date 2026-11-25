/**
 * CENTRAL IMAGE CONFIGURATION
 * ---------------------------------------------------------------------------
 * All visual assets for Munnar Villas Suryanelli Wood Resort are managed in
 * this single file and served in optimized full-resolution WebP format.
 */

export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  title: string;
  category:
    | "Resort Views"
    | "Wooden Villas"
    | "Rooms & Interiors"
    | "Nature & Mountains"
    | "Activities"
    | "Sightseeing";
  aspect?: "wide" | "tall" | "square" | "featured";
  isOwnerReplaceable?: boolean;
  caption?: string;
}

export const BRAND_LOGO = {
  src: "/images/logo.webp",
  alt: "Munnar Villas Suryanelli Wood Resort Logo",
  width: 720,
  height: 389,
};

export const RESORT_IMAGES: Record<string, ImageAsset> = {
  heroHillsideResort: {
    id: "hero-hillside-resort",
    src: "/images/hero-hillside-resort.webp",
    alt: "Munnar Villas Suryanelli Wood Resort nestled amid lush green tea plantations and forested mountain slopes",
    title: "Hillside Resort Amid Lush Greenery",
    category: "Resort Views",
    aspect: "featured",
    caption:
      "Munnar Villas Suryanelli Wood Resort surrounded by emerald tea slopes and mountain forest.",
  },
  heroHillsideResortMobile: {
    id: "hero-hillside-resort-mobile",
    src: "/images/hero-slide-1-mobile.webp",
    alt: "Vertical portrait view of Munnar Villas Suryanelli Wood Resort nestled between mountain forest and terraced green tea plantations",
    title: "Hillside Resort Amid Lush Greenery (Mobile)",
    category: "Resort Views",
    aspect: "tall",
  },
  heroDesktop: {
    id: "hero-desktop",
    src: "/images/hero-mobile.webp",
    alt: "Golden morning sunlight over the misty mountain ridges and tea plantations of Suryanelli and Kolukkumalai in Munnar",
    title: "Suryanelli & Kolukkumalai Dawn Horizon",
    category: "Nature & Mountains",
    aspect: "wide",
    caption:
      "Misty dawn views over the Suryanelli–Kolukkumalai high range in Munnar.",
  },
  heroDawnMobile: {
    id: "hero-dawn-mobile",
    src: "/images/hero-slide-2-mobile.webp",
    alt: "Vertical portrait view of golden sunrise over the misty mountain peaks of Suryanelli and Kolukkumalai in Munnar",
    title: "Suryanelli & Kolukkumalai Dawn Horizon (Mobile)",
    category: "Nature & Mountains",
    aspect: "tall",
  },
  heroMobile: {
    id: "hero-mobile",
    src: "/images/hero-munnar.webp",
    alt: "Misty mountain sunrise over Suryanelli and Kolukkumalai hills in Munnar",
    title: "Suryanelli Hilltop Morning",
    category: "Nature & Mountains",
    aspect: "tall",
    caption: "First light over the high ranges surrounding Suryanelli.",
  },
  resortExterior: {
    id: "resort-exterior",
    src: "/images/gmaps-photo-1.webp",
    alt: "Munnar Villas Suryanelli Wood Resort exterior showing warm illuminated wooden villas perched above green tea plantations at dusk",
    title: "Munnar Villas Suryanelli Wood Resort Exterior",
    category: "Resort Views",
    aspect: "featured",
    isOwnerReplaceable: false,
    caption:
      "Munnar Villas Suryanelli Wood Resort illuminated at dusk against the Suryanelli tea hills.",
  },
  resortSurroundings: {
    id: "resort-surroundings",
    src: "/images/resort-surroundings.webp",
    alt: "Rolling green tea plantations and misty hills around Suryanelli, Munnar",
    title: "Suryanelli Tea Hills & Valley",
    category: "Resort Views",
    aspect: "square",
    caption:
      "Emerald tea slopes and mountain breeze around Suryanelli town hilltop.",
  },
  villaExterior: {
    id: "villa-exterior",
    src: "/images/gmaps-photo-1.webp",
    alt: "Authentic wooden villa cottages at Munnar Villas Suryanelli Wood Resort with wrap-around wooden balconies and tea garden views",
    title: "Hilltop Wooden Villas & Verandas",
    category: "Wooden Villas",
    aspect: "wide",
    isOwnerReplaceable: false,
    caption:
      "Multi-level wooden villa architecture overlooking the Suryanelli tea slopes.",
  },
  villaInterior: {
    id: "villa-interior",
    src: "/images/gmaps-photo-2.webp",
    alt: "Authentic pine-wood panelled bedroom interior at Munnar Villas Suryanelli Wood Resort with double bed, wooden wardrobe, and vanity desk",
    title: "Wood-Panelled Villa Bedroom Interior",
    category: "Rooms & Interiors",
    aspect: "wide",
    isOwnerReplaceable: false,
    caption:
      "Authentic floor-to-ceiling natural wood-panelled bedroom interior at Munnar Villas.",
  },
  villaGroupStay: {
    id: "villa-group-stay",
    src: "/images/gmaps-photo-3.webp",
    alt: "Daytime view of Munnar Villas Suryanelli Wood Resort multi-level wooden villas, spiral wooden staircase, and connected veranda balconies",
    title: "Multi-Level Wooden Villas & Verandas",
    category: "Wooden Villas",
    aspect: "wide",
    isOwnerReplaceable: false,
    caption:
      "Spacious interconnected two-storey wooden villas with wrap-around balconies and courtyard steps.",
  },
  villaBalcony: {
    id: "villa-balcony",
    src: "/images/villa-balcony.webp",
    alt: "Panoramic misty valley and mountain view from the Suryanelli hillside",
    title: "Misty Valley Outlook",
    category: "Resort Views",
    aspect: "tall",
    caption: "Wake up to drifting clouds and sweeping high-range panoramas.",
  },
  outdoorSeating: {
    id: "outdoor-seating",
    src: "/images/outdoor-seating.webp",
    alt: "Peaceful outdoor green garden and tea plantation viewing spot in Munnar",
    title: "Outdoor Nature Sit-Out",
    category: "Resort Views",
    aspect: "square",
    caption: "Quiet outdoor spaces to sip hot Munnar tea in the fresh hill air.",
  },
  diningKerala: {
    id: "dining-kerala",
    src: "/images/dining-kerala.webp",
    alt: "Traditional South Indian breakfast served fresh with warm hospitality",
    title: "Homestyle Kerala Breakfast",
    category: "Rooms & Interiors",
    aspect: "square",
    caption:
      "Warm, comforting South Indian breakfast options enjoyed by our guests.",
  },
  activityJeep: {
    id: "activity-jeep",
    src: "/images/activity-jeep-safari.webp",
    alt: "4x4 off-road jeep safari ascending rugged mountain and tea estate trails towards Kolukkumalai",
    title: "Kolukkumalai 4x4 Jeep Safari",
    category: "Activities",
    aspect: "featured",
    caption:
      "Thrilling 4x4 jeep trails departing from Suryanelli to Kolukkumalai sunrise viewpoints.",
  },
  activityTrekking: {
    id: "activity-trekking",
    src: "/images/activity-trekking-hike.webp",
    alt: "Sunrise hike above the clouds along the mountain ridges and tea hills of Munnar",
    title: "Sunrise Hike Above the Clouds",
    category: "Activities",
    aspect: "tall",
    caption:
      "Guided and scenic sunrise mountain trails above the clouds and misty tea ridges.",
  },
  activityBoating: {
    id: "activity-boating",
    src: "/images/activity-boating-lake.webp",
    alt: "Speedboat cruising across a serene green hills lake surrounded by forested slopes in Munnar",
    title: "Speedboat Across the Green Hills Lake",
    category: "Activities",
    aspect: "wide",
    caption:
      "Enjoy scenic lake and reservoir boating surrounded by Munnar's emerald hills.",
  },
  activityCycling: {
    id: "activity-cycling",
    src: "/images/activity-cycling-hills.webp",
    alt: "Cycling through misty tea hills and winding green plantation roads in Munnar",
    title: "Cycling Through Misty Tea Hills",
    category: "Activities",
    aspect: "wide",
    caption:
      "Cycle through manicured misty tea plantation lanes and crisp mountain bends.",
  },
  sightKolukkumalai: {
    id: "sight-kolukkumalai",
    src: "/images/sight-kolukkumalai.webp",
    alt: "Kolukkumalai high-altitude tea plantations and dramatic sunrise mountain ridges",
    title: "Kolukkumalai Tea Estate & Sunrise Viewpoint",
    category: "Sightseeing",
    aspect: "featured",
    caption:
      "World-renowned high-altitude tea gardens and breathtaking cloud-bed sunrises.",
  },
  sightAnayirankal: {
    id: "sight-anayirankal",
    src: "/images/sight-anayirankal.webp",
    alt: "Anayirankal Dam reservoir bordered by vibrant green tea plantations and hills",
    title: "Anayirankal Dam & Reservoir",
    category: "Sightseeing",
    aspect: "wide",
    caption:
      "A tranquil reservoir wrapped in lush tea estates just down the road from Suryanelli.",
  },
  sightMattupetty: {
    id: "sight-mattupetty",
    src: "/images/sight-mattupetty.webp",
    alt: "Mattupetty Dam and calm mountain lake waters reflecting the Munnar hills",
    title: "Mattupetty Dam & Lake",
    category: "Sightseeing",
    aspect: "wide",
    caption:
      "Iconic masonry dam and calm waters surrounded by rolling shola forests.",
  },
  sightKundala: {
    id: "sight-kundala",
    src: "/images/sight-kundala.webp",
    alt: "Peaceful waters and mountain backdrop at Kundala Lake in Munnar",
    title: "Kundala Arch Dam & Lake",
    category: "Sightseeing",
    aspect: "square",
    caption: "Serene lakeside promenade along the scenic Top Station highway.",
  },
  sightChokramudi: {
    id: "sight-chokramudi",
    src: "/images/sight-chokramudi.webp",
    alt: "Rocky mountain summit of Chokramudi Peak rising above the Munnar clouds",
    title: "Chokramudi Peak",
    category: "Sightseeing",
    aspect: "tall",
    caption:
      "Dramatic high-altitude rocky peak overlooking Bison Valley and Gap Road.",
  },
  sightMeesapulimala: {
    id: "sight-meesapulimala",
    src: "/images/sight-meesapulimala.webp",
    alt: "Sweeping high-altitude grassland ridges and mist at Meesapulimala in the Western Ghats",
    title: "Meesapulimala Peak",
    category: "Sightseeing",
    aspect: "featured",
    caption:
      "Towering Western Ghats grasslands and cloud-kissed trekking vistas.",
  },
  sightMarayoor: {
    id: "sight-marayoor",
    src: "/images/sight-marayoor.webp",
    alt: "Ancient heritage dolmens and natural sandalwood forest landscape of Marayoor",
    title: "Marayoor Heritage & Sandalwood Valley",
    category: "Sightseeing",
    aspect: "square",
    caption:
      "Natural sandalwood forests, ancient Muniyara dolmens, and traditional jaggery farms.",
  },
  sightChinnar: {
    id: "sight-chinnar",
    src: "/images/sight-chinnar.webp",
    alt: "Forested river valley and wildlife habitat inside Chinnar Wildlife Sanctuary",
    title: "Chinnar Wildlife Sanctuary",
    category: "Sightseeing",
    aspect: "wide",
    caption:
      "Rain-shadow forest sanctuary rich in native flora, birds, and trekking trails.",
  },
  ctaMountains: {
    id: "cta-mountains",
    src: "/images/cta-mountains.webp",
    alt: "Golden evening light across the layered mountain valleys of Munnar",
    title: "Munnar Evening Horizons",
    category: "Nature & Mountains",
    aspect: "wide",
    caption: "Peaceful twilight over the hills of Suryanelli and Munnar.",
  },
  swargamViewpoint: {
    id: "swargam-viewpoint",
    src: "/images/swargam-medu-viewpoint.webp",
    alt: "Panoramic 360-degree green hilltop meadows and misty Western Ghats ridges at Swargam Medu Viewpoint, Idukki",
    title: "Swargam Medu Viewpoint — The Hill of Heaven",
    category: "Nature & Mountains",
    aspect: "featured",
    caption:
      "Breathtaking high-altitude meadows and cloud-kissed ridges right beside Swargam Medu Viewpoint.",
  },
  swargamSandalwood: {
    id: "swargam-sandalwood",
    src: "/images/swargam-medu-sandalwood.webp",
    alt: "Lush sandalwood trees and green estate foliage across our 3-acre sandalwood plantation at Swargam Medu",
    title: "3-Acre Newly Planted Sandalwood Sanctuary",
    category: "Resort Views",
    aspect: "wide",
    caption:
      "Our new villas are set amidst 3 acres of newly planted sandalwood trees at Mangathotty, Ottathi.",
  },
  swargamHills: {
    id: "swargam-hills",
    src: "/images/swargam-medu-hills.webp",
    alt: "Golden mountain horizon and drifting clouds over the high ranges of Swargam Medu and Senapathy in Idukki",
    title: "Mangathotty & Swargam Medu Highland Horizon",
    category: "Nature & Mountains",
    aspect: "wide",
    caption:
      "Sweeping 360-degree sunrise and sunset views from our Swargam Medu villa estate.",
  },
};

export const GALLERY_ITEMS: ImageAsset[] = [
  RESORT_IMAGES.heroHillsideResort,
  RESORT_IMAGES.resortExterior,
  RESORT_IMAGES.villaInterior,
  RESORT_IMAGES.villaGroupStay,
  RESORT_IMAGES.heroDesktop,
  RESORT_IMAGES.sightKolukkumalai,
  RESORT_IMAGES.activityJeep,
  RESORT_IMAGES.resortSurroundings,
  RESORT_IMAGES.sightAnayirankal,
  RESORT_IMAGES.activityTrekking,
  RESORT_IMAGES.villaBalcony,
  RESORT_IMAGES.sightMeesapulimala,
  RESORT_IMAGES.activityBoating,
  RESORT_IMAGES.sightMattupetty,
  RESORT_IMAGES.activityCycling,
  RESORT_IMAGES.sightChokramudi,
  RESORT_IMAGES.outdoorSeating,
  RESORT_IMAGES.sightKundala,
  RESORT_IMAGES.sightMarayoor,
  RESORT_IMAGES.sightChinnar,
];

export const GALLERY_CATEGORIES = [
  "All",
  "Resort Views",
  "Wooden Villas",
  "Rooms & Interiors",
  "Nature & Mountains",
  "Activities",
  "Sightseeing",
] as const;
