"use client";
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GisMap = dynamic(() => import('@/components/gis-map'), { ssr: false });
const Timeline = dynamic(() => import('@/components/timeline'), { ssr: false });
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Separator } from "@/components/ui/separator";

export default function VisualizationsPage() {
  // Metadata for CD volumes
  const CDMetadata = [
    {
      volume: "Volume 1",
      year: 2006,
      runningTime: 45,
      sketchCount: 8,
      estimatedSales: 35000,
      mainThemes: "Family relations, travel between cities",
    },
    {
      volume: "Volume 2",
      year: 2007,
      runningTime: 50,
      sketchCount: 9,
      estimatedSales: 42000,
      mainThemes: "Wedding preparations, shopping excursions",
    },
    {
      volume: "Volume 3",
      year: 2007,
      runningTime: 48,
      sketchCount: 8,
      estimatedSales: 40000,
      mainThemes: "Family disputes, traditional customs",
    },
    {
      volume: "Volume 4",
      year: 2008,
      runningTime: 52,
      sketchCount: 10,
      estimatedSales: 55000,
      mainThemes: "School life, teacher interactions",
    },
    {
      volume: "Volume 5",
      year: 2008,
      runningTime: 55,
      sketchCount: 11,
      estimatedSales: 60000,
      mainThemes: "Market interactions, business transactions",
    },
    {
      volume: "Volume 6",
      year: 2009,
      runningTime: 50,
      sketchCount: 9,
      estimatedSales: 65000,
      mainThemes: "Modern technology, traditional values",
    },
    {
      volume: "Volume 7",
      year: 2009,
      runningTime: 52,
      sketchCount: 10,
      estimatedSales: 58000,
      mainThemes: "Hospital visits, healthcare experiences",
    },
    {
      volume: "Volume 8",
      year: 2010,
      runningTime: 50,
      sketchCount: 9,
      estimatedSales: 50000,
      mainThemes: "Government offices, bureaucracy",
    },
    {
      volume: "Volume 9",
      year: 2010,
      runningTime: 48,
      sketchCount: 9,
      estimatedSales: 45000,
      mainThemes: "Traditional festivals, celebrations",
    },
    {
      volume: "Volume 10",
      year: 2011,
      runningTime: 50,
      sketchCount: 10,
      estimatedSales: 40000,
      mainThemes: "Generational differences, modern challenges",
    },
  ];

  // Data for sales by region chart
  const salesByRegion = [
    {
      region: "Hail",
      sales: 160000,
      percentage: 32,
    },
    {
      region: "Qassim",
      sales: 120000,
      percentage: 24,
    },
    {
      region: "Riyadh",
      sales: 100000,
      percentage: 20,
    },
    {
      region: "Eastern Province",
      sales: 75000,
      percentage: 15,
    },
    {
      region: "Other Regions",
      sales: 45000,
      percentage: 9,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Data Visualizations</h1>
        <p className="text-muted-foreground">
          Exploring the geographic distribution, historical context, and
          metadata of Abu Maluh CDs
        </p>
      </div>

      <Tabs defaultValue="geographic">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="geographic">Geographic Distribution</TabsTrigger>
          <TabsTrigger value="timeline">Historical Timeline</TabsTrigger>
          <TabsTrigger value="metadata">CD Metadata</TabsTrigger>
        </TabsList>

        <TabsContent value="geographic" className="mt-6">
          <GisMap />
        </TabsContent>

        <TabsContent value="timeline" className="mt-6 space-y-8">
          <Timeline />
        </TabsContent>

   
      </Tabs>
    </div>
  );
}
