"use client";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GisMap = dynamic(() => import("@/components/gis-map"), { ssr: false });
const SimpleIframe = dynamic(() => import("@/components/SimpleIframe"), {
  ssr: false,
});

export default function VisualizationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Data Visualizations</h1>
        <p className="text-muted-foreground">
          Exploring the geographic distribution and search trends of Abu Maluh
          CDs
        </p>
      </div>
      <SimpleIframe />

      {/* <Tabs defaultValue="geographic">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="geographic">Geographic Distribution</TabsTrigger>
          <TabsTrigger value="searchtrends">Search Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="geographic" className="mt-6">
          <GisMap />
        </TabsContent>

        <TabsContent value="searchtrends" className="mt-6">
          <SimpleIframe />
        </TabsContent>
      </Tabs> */}
    </div>
  );
}
