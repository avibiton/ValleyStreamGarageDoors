export const BUSINESS = {
  name: "One Stop Garage Door & Opener",
  phone: "(516) 612-6706",
  phoneHref: "tel:15166126706",
  domain: "valleystreamgaragedoors.com",
  baseUrl: "https://www.valleystreamgaragedoors.com",
  address: {
    street: "W Hawthorne Ave",
    city: "Valley Stream",
    state: "NY",
    zip: "11580",
    full: "W Hawthorne Ave, Valley Stream NY 11580",
  },
  geo: { lat: "40.6637", lng: "-73.7087" },
  hours: "24/7 including evenings & weekends",
  since: "2009",
  rating: "5.0",
  reviewCount: "187",
  googleReviewUrl: "https://g.page/r/one-stop-garage-door-valley-stream/review",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.25!2d-73.7087!3d40.6637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c266f0000000001%3A0x0!2sValley%20Stream%2C%20NY%2011580!5e0!3m2!1sen!2sus!4v1720000000000",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Repair", href: "/repair/" },
  { label: "Openers", href: "/garage-door-opener/" },
  { label: "Installation", href: "/installation/" },
  { label: "FAQ & Coupons", href: "/faq/" },
] as const;

export const SERVICE_AREAS = [
  { city: "Valley Stream", zip: "11580 · 11581", href: "/valley-stream/" },
  { city: "Woodmere", zip: "11598", href: "/woodmere/" },
  { city: "Hewlett", zip: "11557", href: "/hewlett/" },
  { city: "Cedarhurst", zip: "11516", href: "/cedarhurst/" },
  { city: "Lawrence", zip: "11559", href: "/lawrence/" },
  { city: "Inwood", zip: "11096", href: "/inwood/" },
  { city: "East Rockaway", zip: "11518", href: null },
  { city: "Malverne", zip: "11565", href: null },
  { city: "Lynbrook", zip: "11563", href: null },
  { city: "Rockville Centre", zip: "11570", href: null },
] as const;
