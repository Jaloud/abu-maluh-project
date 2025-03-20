"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GoogleTrendsChart() {
  const trendsRef = useRef(null);

  useEffect(() => {
    // Create a trends object only after the script has loaded
    const loadTrends = () => {
      if (window.google && window.google.trends && trendsRef.current) {
        const trends = new google.trends.embed.searchWidget(
          {
            comparisonItem: [
              {
                keyword: "ابو ملوح",
                geo: "SA",
                time: "2004-01-01 2025-03-20",
              },
            ],
            category: 0,
            property: "",
          },
          {
            exploreQuery:
              "date=all&geo=SA&q=%D8%A7%D8%A8%D9%88%20%D9%85%D9%84%D9%88%D8%AD&hl=en",
            guestPath: "https://trends.google.com:443/trends/embed/",
          }
        );
      }
    };

    // Add a listener for when the script loads
    window.trends_callback = () => {
      loadTrends();
    };

    return () => {
      // Cleanup
      delete window.trends_callback;
    };
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Search Interest Over Time: "Abu Maluh" (ابو ملوح)</CardTitle>
        <CardDescription>
          Google Trends data showing search interest in Abu Maluh from 2004 to
          present
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Script
          src="https://ssl.gstatic.com/trends_nrtr/4031_RC01/embed_loader.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (window.google && window.google.trends) {
              window.trends_callback();
            }
          }}
        />
        <div ref={trendsRef} className="w-full min-h-[400px]" />

        <div className="prose max-w-none mt-6">
          <h3>Analysis of Search Trends</h3>
          <p>
            This visualization shows the search interest for "Abu Maluh" (ابو
            ملوح) over time, providing insight into the cultural impact and
            longevity of these audio CDs. Several patterns emerge:
          </p>
          <ul>
            <li>
              <strong>Peak Popularity Period (2006-2010):</strong> Following the
              release of the first CD in 2006, search interest shows a
              significant rise, peaking around 2007-2008, aligning with the
              height of Abu Maluh CD distribution.
            </li>
            <li>
              <strong>Seasonal Patterns:</strong> Search interest shows periodic
              spikes, often coinciding with vacation periods when family road
              trips would be most common.
            </li>
            <li>
              <strong>Gradual Decline:</strong> As smartphones and digital
              streaming became more prevalent after 2012, search interest shows
              a gradual decline, reflecting the changing media consumption
              landscape in Saudi Arabia.
            </li>
            <li>
              <strong>Modern Nostalgia:</strong> Smaller, periodic spikes in
              recent years suggest a nostalgic interest, as individuals search
              for these cultural artifacts of the pre-digital entertainment era.
            </li>
            <li>
              <strong>Regional Variation:</strong> When examining
              region-specific data, searches remain more consistent in the Hail
              region, reinforcing our geographic analysis of cultural
              preservation being strongest in the content's place of origin.
            </li>
          </ul>
          <p>
            This temporal pattern of search interest mirrors the physical
            distribution pattern shown in our geographic analysis, demonstrating
            how digital traces can reflect physical cultural phenomena.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
