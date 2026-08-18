import type { Metadata } from "next";
import { LOCATIONS } from "@/data/locations";
import { LocationPage } from "@/components/location/LocationPage";

const location = LOCATIONS.find((l) => l.slug === "hewlett")!;

export const metadata: Metadata = {
  title: location.title,
  description: location.metaDescription,
  alternates: { canonical: location.canonical },
};

export default function HewlettPage() {
  return <LocationPage location={location} />;
}
