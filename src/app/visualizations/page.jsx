"use client";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GisMap = dynamic(() => import("@/components/gis-map"), { ssr: false });
const SimpleIframe = dynamic(() => import("@/components/SimpleIframe"), {
  ssr: false,
});

export default function VisualizationsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Google Trends Analysis: Abu Maluh (ابو ملوح)
        </h1>
        <p className="text-xl text-muted-foreground">
          Search Interest Analysis 2004-2024
        </p>
      </div>

      {/* Introduction */}
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed">
          The following visualization from Google Trends displays search
          interest for "Abu Maluh" (ابو ملوح) over a twenty-year period. The
          data reveals several key patterns that correspond with the historical
          development and cultural significance of Abu Maluh CDs.
        </p>
      </div>

      {/* Chart Section */}
      <div className="my-8">
        <SimpleIframe />
      </div>

      {/* Analysis Sections */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Phase 1 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Introduction Phase (2006-2007)
          </h3>
          <p className="text-muted-foreground">
            The data shows search interest beginning shortly after the first Abu
            Maluh CD was released in 2006, it didn't show up on Google Trends
            until 2007 likely due to the limited distribution of the CDs and
            lack of adoption of search engines in Saudi Arabia at the time.
          </p>
        </div>

        {/* Phase 2 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Growth and Establishment (2007-2009)
          </h3>
          <p className="text-muted-foreground">
            A clear pattern of increasing search frequency emerges during this
            period, corresponding with volumes 2-5 of the CD series. The peaks
            likely represent releases of new content and seasonal surges during
            holiday travel periods when long car trips were common.
          </p>
        </div>

        {/* Phase 3 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Mainstream Popularity (2009-2014)
          </h3>
          <p className="text-muted-foreground">
            This period shows the highest interest with multiple peaks, this
            represents the height of Abu Maluh's cultural penetration when
            volumes 6-10 were released. The consistent search interest indicates
            Abu Maluh had become an established piece of media at that point.
          </p>
        </div>

        {/* Phase 4 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Media Adaptation Spike (2014)
          </h3>
          <p className="text-muted-foreground">
            The highest search peak occurs in 2014, coinciding with the
            television cartoon adaptation of Abu Maluh. This dramatic surge
            demonstrates how an adaptation to visual media significantly
            amplified awarness of the material way beyond the original audio
            format.
          </p>
        </div>

        {/* Phase 5 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Cultural Memory Phase (2015-Present)
          </h3>
          <p className="text-muted-foreground">
            While showing an overall decline, odd spikes (particularly the
            notable 2018 peak) suggest some continued cultural relevance and
            reference. The persistent low-level interest in recent years
            indicates Abu Maluh has transitioned from current entertainment to
            cultural memory.
          </p>
        </div>
      </div>
    </div>
  );
}
