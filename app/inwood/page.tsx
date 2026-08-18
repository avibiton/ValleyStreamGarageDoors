import type { Metadata } from "next";
import { LOCATIONS } from "@/data/locations";
import { LocationPage } from "@/components/location/LocationPage";

const location = LOCATIONS.find((l) => l.slug === "inwood")!;

export const metadata: Metadata = {
  title: location.title,
  description: location.metaDescription,
  alternates: { canonical: location.canonical },
};

export default function InwoodPage() {
  return <LocationPage location={location} />;
}
