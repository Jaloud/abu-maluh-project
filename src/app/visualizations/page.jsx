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

        <TabsContent value="metadata" className="mt-6 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>CD Series Metadata Visualization</CardTitle>
              <CardDescription>
                Key metrics across the Abu Maluh CD series (2006-2011)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={CDMetadata}
                    margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="volume"
                      angle={-45}
                      textAnchor="end"
                      height={70}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#82ca9d"
                    />
                    <Tooltip />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="estimatedSales"
                      name="Estimated Sales"
                      fill="#8884d8"
                    />
                    <Bar
                      yAxisId="right"
                      dataKey="runningTime"
                      name="Running Time (min)"
                      fill="#82ca9d"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <Separator className="my-6" />

              <div className="prose max-w-none">
                <h3>Key Observations</h3>
                <ul>
                  <li>
                    <strong>Production Peak:</strong> Volumes 5-7 (2008-2009)
                    represent the peak in both production quality (longer
                    running times) and commercial success (highest sales
                    estimates), coinciding with the maturation of the Abu Maluh
                    format.
                  </li>
                  <li>
                    <strong>Thematic Evolution:</strong> The series began with
                    family-focused topics and gradually expanded to address
                    broader social interactions, finally culminating in themes
                    addressing generational differences and modernization
                    challenges.
                  </li>
                  <li>
                    <strong>Production Cycle:</strong> The consistent release
                    pattern (approximately 2 volumes per year) indicates a
                    deliberate production schedule designed to maintain interest
                    while ensuring quality.
                  </li>
                  <li>
                    <strong>Sales Decline:</strong> The gradual sales decline
                    starting with Volume 8 corresponds with increasing
                    smartphone penetration in Saudi Arabia, suggesting
                    technological displacement of CD media.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regional Distribution Analysis</CardTitle>
              <CardDescription>
                Sales distribution across Saudi regions, highlighting regional
                popularity patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={salesByRegion}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="sales"
                      name="Total Estimated Sales"
                      fill="#8884d8"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="prose max-w-none mt-6">
                <h3>Regional Distribution Patterns</h3>
                <p>
                  The sales distribution data reveals a clear pattern of
                  regional concentration with diffusion outward from the core
                  Hail region. With 32% of sales occurring in the Hail region
                  itself, the CDs demonstrate strong regional attachment,
                  but their appeal across other regions (particularly Qassim and
                  Riyadh) indicates broader cultural resonance beyond their
                  region of origin.
                </p>
                <p>
                  The strong sales in the Eastern Province (15%) correspond with
                  the Hail-Eastern Province travel corridor, suggesting that the
                  CDs' popularity was directly linked to highway
                  infrastructure and travel patterns. These regional data
                  patterns align with the geographic mapping to demonstrate how
                  the CDs' cultural impact followed specific
                  infrastructure networks rather than spreading uniformly across
                  the country.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
