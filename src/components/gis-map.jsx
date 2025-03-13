"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons in Next.js
const iconRetinaUrl = "/images/marker-icon-2x.png";
const iconUrl = "/images/marker-icon.png";
const shadowUrl = "/images/marker-shadow.png";

export default function GisMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Fix Leaflet icon issues
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });
  }, []);

  // Data for the cassettes' geographical distribution
  const distributionData = [
    {
      city: "Hail",
      coordinates: [27.5114, 41.7208],
      popularity: 90, // 0-100 scale of popularity
      description:
        "Birthplace of Abu Maluh cassettes and primary production location",
    },
    {
      city: "Buraydah (Qassim)",
      coordinates: [26.3292, 43.9691],
      popularity: 75,
      description: "Strong following, especially along highway route to Hail",
    },
    {
      city: "Riyadh",
      coordinates: [24.7136, 46.6753],
      popularity: 60,
      description: "Popular among Hail & Qassim natives living in the capital",
    },
    {
      city: "Unayzah",
      coordinates: [26.0843, 43.9979],
      popularity: 70,
      description: "Popular among long-distance travelers and commuters",
    },
    {
      city: "Dammam",
      coordinates: [26.4344, 50.1033],
      popularity: 45,
      description:
        "Popular on the long highway route between Eastern Province and Hail",
    },
  ];

  if (!isMounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>Loading map...</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] flex items-center justify-center">
          <div>Loading interactive map...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Geographic Distribution of Abu Maluh Cassettes</CardTitle>
        <CardDescription>
          Regional popularity and distribution patterns across Saudi Arabia
          (2007-2010)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] rounded-md overflow-hidden">
          <MapContainer
            center={[25.6, 45.0]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {distributionData.map((location, index) => (
              <div key={index}>
                <Circle
                  center={location.coordinates}
                  radius={location.popularity * 2000}
                  pathOptions={{
                    fillColor: "#4f46e5",
                    fillOpacity: 0.2,
                    color: "#4f46e5",
                    weight: 1,
                  }}
                />
                <Marker position={location.coordinates}>
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold">{location.city}</h3>
                      <p className="text-sm">{location.description}</p>
                      <p className="text-xs mt-1">
                        Popularity: {location.popularity}%
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </div>
            ))}

            {/* Major highways that connected these regions */}
            {/* Would implement polylines for highways */}
          </MapContainer>
        </div>

        <div className="prose max-w-none mt-6">
          <h3>Geographic Significance</h3>
          <p>
            The map above illustrates the geographic distribution and relative
            popularity of Abu Maluh cassettes across Saudi Arabia during their
            peak period (2007-2010). Several key patterns emerge:
          </p>
          <ul>
            <li>
              <strong>Origin and Highest Popularity:</strong> Hail region shows
              the highest concentration, as it was both the production center
              and the region whose dialect and cultural references were featured
              in the cassettes.
            </li>
            <li>
              <strong>Highway Corridor Distribution:</strong> Popularity spreads
              along major highway routes, particularly the Riyadh-Qassim-Hail
              corridor, reflecting how these cassettes were primarily consumed
              during long road trips.
            </li>
            <li>
              <strong>Urban Transplant Communities:</strong> Secondary
              popularity centers in major cities like Riyadh correspond to
              communities of Hail natives who had relocated but maintained their
              cultural connections.
            </li>
          </ul>
          <p>
            This geographic pattern demonstrates how the cassettes served as
            cultural preservation tools not only temporally (preserving
            traditional linguistic features during modernization) but also
            spatially (maintaining regional identity for displaced communities).
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
