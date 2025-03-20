"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GisMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Load Google Trends script
    const script = document.createElement("script");
    script.src =
      "https://ssl.gstatic.com/trends_nrtr/4031_RC01/embed_loader.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Once the script is loaded, render the trends widget
      if (window.trends) {
        window.trends.embed.renderExploreWidget(
          "GEO_MAP",
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

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  if (!isMounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>Loading trends data...</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] flex items-center justify-center">
          <div>Loading Google Trends data...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Geographic Distribution of Abu Maluh Interest</CardTitle>
        <CardDescription>
          Regional interest patterns across Saudi Arabia based on Google Trends
          data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="h-[500px] rounded-md overflow-hidden"
          id="trends-widget-container"
        >
          {/* Google Trends widget will be rendered here */}
        </div>

        <div className="prose max-w-none mt-6">
          <h3>Geographic Significance</h3>
          <p>
            The map above illustrates the geographic distribution of interest in
            Abu Maluh across Saudi Arabia based on Google Trends data. This
            provides real-time insights into regional patterns of interest and
            cultural impact.
          </p>
          <p>
            The data shows search interest patterns across different regions of
            Saudi Arabia, helping visualize where Abu Maluh has had the most
            significant cultural impact and following.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
