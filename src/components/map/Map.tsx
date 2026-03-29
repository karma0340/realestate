"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import MapClient to disable SSR (since Leaflet heavily relies on the window object)
const DynamicMapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
      <Loader2 className="w-8 h-8 text-primary animate-spin" />
    </div>
  ),
});

export default function Map() {
  return <DynamicMapClient />;
}
