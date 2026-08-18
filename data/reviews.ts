export interface Review {
  text: string;
  author: string;
  location: string;
}

export const REVIEWS: Review[] = [
  {
    text: "My torsion spring broke at 7am on a Monday. Called One Stop and a real technician answered immediately. They were at my house in Valley Stream by 10am and had it fixed before noon. Incredible response time and very fair price.",
    author: "Michael R.",
    location: "Valley Stream, NY 11580",
  },
  {
    text: "We live in Woodmere close to the water and our cables kept rusting out. One Stop recommended stainless steel cables for the salt air — haven't had a problem since. These guys know the Five Towns environment.",
    author: "Sarah L.",
    location: "Woodmere, NY 11598",
  },
  {
    text: "New LiftMaster belt drive installed in Cedarhurst. The technician explained everything, set up MyQ on my phone, and tested the battery backup. Professional from start to finish. Will definitely call One Stop again.",
    author: "David K.",
    location: "Cedarhurst, NY 11516",
  },
  {
    text: "Door came completely off the track on a Friday night. One Stop had someone out within 3 hours. Fixed the off-track issue, replaced two worn rollers, and realigned the track. Written warranty on everything. Highly recommend!",
    author: "Jennifer M.",
    location: "Lawrence, NY 11559",
  },
];
