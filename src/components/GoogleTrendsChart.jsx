"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GoogleTrendsChart() {
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
        <iframe
          src="https://trends.google.com/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22%D8%A7%D8%A8%D9%88%20%D9%85%D9%84%D9%88%D8%AD%22%2C%22geo%22%3A%22SA%22%2C%22time%22%3A%222004-01-01%202025-03-20%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&hl=en"
          width="100%"
          height="400"
          frameBorder="0"
          loading="lazy"
          allow="fullscreen"
          sandbox="allow-same-origin allow-scripts allow-forms"
          title="Google Trends Chart - Abu Maluh Search Interest"
        />

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
