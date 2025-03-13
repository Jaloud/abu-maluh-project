"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DetailedTimeline() {
  const [activeEvent, setActiveEvent] = useState(null);

  const timelineEvents = [
    {
      id: 1,
      startYear: 1961,
      startMonth: 11,
      startDay: 1,
      endYear: 1961,
      endMonth: 12,
      endDay: 31,
      displayDate: "1961",
      headline: "First major highway connects Dammam to Riyadh",
      text: "The first paved highway in Saudi Arabia connected the Eastern Province to the capital, beginning the modernization of Saudi transportation infrastructure.",
      media: "/images/timeline/dammam-riyadh-highway.jpg",
      mediaCredit: "Saudi Ministry of Transport Archives",
      mediaCaption: "First highway connecting Dammam to Riyadh",
      type: "event",
      group: "Infrastructure",
      background: "#F8F8F8",
    },
    {
      id: 2,
      startYear: 1970,
      startMonth: 1,
      startDay: 1,
      endYear: 1970,
      endMonth: 12,
      endDay: 31,
      displayDate: "1970",
      headline: "First Five-Year Road Programme launched",
      text: "The Saudi Ministry of Transport began its first Five-Year Road Programme, marking a strategic approach to national road development.",
      media: "/images/timeline/five-year-plan.jpg",
      mediaCredit: "Saudi National Archives",
      mediaCaption: "Planning documents for road development",
      type: "event",
      group: "Infrastructure",
      background: "#F8F8F8",
    },
    {
      id: 3,
      startYear: 1980,
      startMonth: 1,
      startDay: 1,
      endYear: 1985,
      endMonth: 12,
      endDay: 31,
      displayDate: "1980-1985",
      headline: "Modernization of major highways",
      text: "During the Third Development Plan, the Riyadh-Dammam highway and Kharj-Qassim portions were significantly modernized and expanded.",
      media: "/images/timeline/highway-modernization.jpg",
      mediaCredit: "Saudi Ministry of Transport",
      mediaCaption:
        "Highway modernization projects of the Third Development Plan",
      type: "event",
      group: "Infrastructure",
      background: "#F8F8F8",
    },
    {
      id: 4,
      startYear: 1986,
      startMonth: 6,
      startDay: 15,
      endYear: 1986,
      endMonth: 6,
      endDay: 15,
      displayDate: "June 15, 1986",
      headline: "Completion of the Hail-Qassim Highway",
      text: "The completion of this critical highway reduced travel time between these two major regions from over 8 hours to approximately 3 hours, facilitating increased travel and cultural exchange.",
      media: "/images/timeline/hail-qassim-highway.jpg",
      mediaCredit: "Ministry of Transport Archives",
      mediaCaption: "Opening ceremony of the Hail-Qassim Highway",
      type: "event",
      group: "Infrastructure",
      background: "#F8F8F8",
    },
    {
      id: 5,
      startYear: 1990,
      startMonth: 3,
      startDay: 1,
      endYear: 1993,
      endMonth: 12,
      endDay: 31,
      displayDate: "1990-1993",
      headline: "Highway Rest Area Development Program",
      text: "The government initiated a program to develop rest areas (istirahat) along major highways, creating formal spaces for travelers to rest, pray, and eat during long journeys. These became important distribution points for CD tapes.",
      media: "/images/timeline/highway-rest-areas.jpg",
      mediaCredit: "Saudi Tourism Authority",
      mediaCaption: "Highway rest area with prayer facilities and restaurants",
      type: "event",
      group: "Infrastructure",
      background: "#F8F8F8",
    },
    {
      id: 6,
      startYear: 1995,
      startMonth: 1,
      startDay: 1,
      endYear: 1999,
      endMonth: 12,
      endDay: 31,
      displayDate: "1995-1999",
      headline: "Highway Network Expansion to Rural Areas",
      text: "Secondary highways connected smaller cities and rural communities to the main transportation network, making travel between regions more accessible to the general population.",
      media: "/images/timeline/rural-highway-network.jpg",
      mediaCredit: "Ministry of Transport",
      mediaCaption: "Secondary highway connecting rural communities",
      type: "event",
      group: "Infrastructure",
      background: "#F8F8F8",
    },
    {
      id: 7,
      startYear: 2000,
      startMonth: 5,
      startDay: 10,
      endYear: 2000,
      endMonth: 5,
      endDay: 10,
      displayDate: "May 10, 2000",
      headline: "Completion of the Highway Linking Hail to Eastern Province",
      text: "This critical infrastructure project reduced travel time between Hail and Dammam from more than 20 hours to approximately 11 hours, creating the exact conditions for extended car journeys that would later fuel demand for Abu Maluh CDs.",
      media: "/images/timeline/hail-eastern-province-highway.jpg",
      mediaCredit: "Royal Commission for Jubail and Yanbu",
      mediaCaption: "Highway connecting Hail region to Eastern Province",
      type: "event",
      group: "Infrastructure",
      background: "#F8F8F8",
    },
    {
      id: 8,
      startYear: 2005,
      startMonth: 9,
      startDay: 15,
      endYear: 2005,
      endMonth: 9,
      endDay: 15,
      displayDate: "September 15, 2005",
      headline: "Introduction of Electronic Traffic Management System",
      text: "The new traffic management system facilitated safer long-distance travel and introduced speed cameras on major highways, changing driving behaviors and increasing the average journey time spent in vehicles.",
      media: "/images/timeline/traffic-management-system.jpg",
      mediaCredit: "Saudi Traffic Safety Authority",
      mediaCaption: "Electronic traffic monitoring center",
      type: "event",
      group: "Infrastructure",
      background: "#F8F8F8",
    },
    {
      id: 9,
      startYear: 2006,
      startMonth: 4,
      startDay: 20,
      endYear: 2006,
      endMonth: 4,
      endDay: 20,
      displayDate: "April 20, 2006",
      headline: "First Abu Maluh CD Released",
      text: "As the road network reached maturity, the first Abu Maluh CD was released, marketed specifically for long car journeys between major Saudi cities.",
      media: "/images/timeline/first-abu-maluh-CD.jpg",
      mediaCredit: "Private Collection",
      mediaCaption: "Original Abu Maluh CD, Volume 1",
      type: "event",
      group: "Abu Maluh",
      background: "#E6F7FF",
    },
    {
      id: 10,
      startYear: 2007,
      startMonth: 1,
      startDay: 1,
      endYear: 2010,
      endMonth: 12,
      endDay: 31,
      displayDate: "2007-2010",
      headline: "Peak Popularity of Abu Maluh CDs",
      text: "As highway infrastructure matured and intercity travel became routine for many Saudis, Abu Maluh CDs reached peak popularity, with distribution networks following the major highway corridors.",
      media: "/images/timeline/abu-maluh-popularity.jpg",
      mediaCredit: "Cultural Heritage Foundation",
      mediaCaption:
        "CD shop at a highway rest area displaying Abu Maluh collection",
      type: "event",
      group: "Abu Maluh",
      background: "#E6F7FF",
    },
    {
      id: 11,
      startYear: 2012,
      startMonth: 6,
      startDay: 1,
      endYear: 2012,
      endMonth: 6,
      endDay: 1,
      displayDate: "June 2012",
      headline: "Smartphone Navigation Apps Transform Travel",
      text: "The widespread adoption of smartphone navigation apps changed how Saudis experienced road trips, coinciding with the beginning of the decline in CD media consumption.",
      media: "/images/timeline/smartphone-navigation.jpg",
      mediaCredit: "Technology Review Arabia",
      mediaCaption: "Navigation app showing route from Riyadh to Hail",
      type: "event",
      group: "Technology",
      background: "#F0F0F0",
    },
    {
      id: 12,
      startYear: 2015,
      startMonth: 3,
      startDay: 15,
      endYear: 2015,
      endMonth: 3,
      endDay: 15,
      displayDate: "March 15, 2015",
      headline: "High-Speed Fiber Optic Network Along Highways",
      text: "The completion of fiber optic networks along major highways enabled high-speed internet access during travel, transforming entertainment options and contributing to the digitization of content like Abu Maluh.",
      media: "/images/timeline/fiber-optic-network.jpg",
      mediaCredit: "Saudi Telecom Company",
      mediaCaption: "Fiber optic cable installation along highway route",
      type: "event",
      group: "Technology",
      background: "#F0F0F0",
    },
  ];

  // Function to handle clicking on a timeline event
  const handleEventClick = (event) => {
    setActiveEvent(event);
  };

  // Get years range for our timeline
  const startYear = Math.min(...timelineEvents.map((event) => event.startYear));
  const endYear = Math.max(...timelineEvents.map((event) => event.endYear));
  const yearRange = endYear - startYear + 1;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Road Networks of Saudi Arabia</CardTitle>
        <CardDescription>
          This timeline explores the development of major highways in Saudi
          Arabia that facilitated long road trips and the spread of Abu Maluh
          CDs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="visual">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="visual">Visual Timeline</TabsTrigger>
            <TabsTrigger value="analysis">Historical Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="visual" className="mt-6">
            {/* Timeline visualization */}
            <div className="relative overflow-x-auto pb-10">
              {/* Timeline scale */}
              <div className="flex border-t border-gray-200 pt-2 mb-6 min-w-[2000px]">
                {Array.from({ length: yearRange }).map((_, i) => (
                  <div
                    key={i}
                    className="text-center text-xs font-medium text-gray-500"
                    style={{ width: `${100 / yearRange}%` }}
                  >
                    {startYear + i}
                  </div>
                ))}
              </div>

              {/* Timeline groups */}
              <div className="space-y-12 min-w-[2000px]">
                {["Infrastructure", "Abu Maluh", "Technology"].map((group) => (
                  <div key={group} className="relative">
                    <div className="sticky left-0 bg-white z-10 p-2 font-medium">
                      {group}
                    </div>
                    <div className="relative h-10 bg-gray-100 rounded-lg">
                      {timelineEvents
                        .filter((event) => event.group === group)
                        .map((event) => {
                          // Calculate position and width
                          const startPosition =
                            ((event.startYear -
                              startYear +
                              (event.startMonth - 1) / 12) /
                              yearRange) *
                            100;
                          const endPosition =
                            ((event.endYear -
                              startYear +
                              (event.endMonth - 1) / 12 +
                              event.endDay / 30 / 12) /
                              yearRange) *
                            100;
                          const width = endPosition - startPosition;

                          return (
                            <div
                              key={event.id}
                              className="absolute h-8 top-1 rounded cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center text-xs font-medium overflow-hidden"
                              style={{
                                left: `${startPosition}%`,
                                width: `${width || 2}%`,
                                backgroundColor: event.background || "#E0E0E0",
                                borderLeft: "2px solid #333",
                              }}
                              onClick={() => handleEventClick(event)}
                            >
                              {width > 10 &&
                                event.headline
                                  .split(" ")
                                  .slice(0, 3)
                                  .join(" ") + "..."}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected event details */}
            {activeEvent && (
              <div className="mt-6 border rounded-lg p-4 bg-white">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      {activeEvent.headline}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {activeEvent.displayDate}
                    </p>
                    <p className="mt-2">{activeEvent.text}</p>
                  </div>
                  <div className="w-1/3 relative h-40 bg-gray-100 rounded overflow-hidden">
                    {/* In a real app, you'd have actual images here */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      [Image: {activeEvent.mediaCaption}]
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

        </Tabs>
      </CardContent>
    </Card>
  );
}
