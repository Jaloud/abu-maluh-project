"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WaveformAnalysis() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Waveform Analysis</CardTitle>
        <CardDescription>
          Analyzing audio characteristics of Abu Maluh CDs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="dialogue">Dialogue Patterns</TabsTrigger>
            <TabsTrigger value="comparative">Comparative Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="relative h-[300px] w-full">
              <Image
                src="/images/waveform-full.png"
                alt="Full waveform of Abu Maluh CD"
                fill
                className="object-contain"
              />
            </div>
            <div className="prose max-w-none">
              <h3>Full CD Waveform Analysis</h3>
              <p>
                The waveform above represents a 45-minute side of an Abu Maluh
                CD. Several distinctive patterns emerge when analyzing the
                audio characteristics:
              </p>
              <ul>
                <li>
                  <strong>Dialogue-heavy format:</strong> The predominant
                  pattern shows conversation between multiple characters, with
                  clear speech amplitude patterns.
                </li>
                <li>
                  <strong>No musical elements:</strong> Unlike contemporary
                  entertainment, these CDs contain no musical interludes
                  or background scoring, reflecting their positioning as
                  permissible entertainment for religious families avoiding
                  music.
                </li>
                <li>
                  <strong>Consistent volume levels:</strong> The professional
                  production maintained consistent dialogue levels throughout,
                  unusual for regional productions of this era.
                </li>
                <li>
                  <strong>Episodic structure:</strong> Notice the brief silences
                  at regular intervals, indicating a sketch-based format with
                  multiple vignettes featuring recurring characters.
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="comparative" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
            </div>
            <div className="prose max-w-none">
              <h3>Comparative Analysis</h3>
              <p>
                Comparing Abu Maluh CDs with contemporary national Saudi
                radio programming reveals significant differences:
              </p>
              <ul>
                <li>
                  <strong>Regional vs. Standardized Arabic:</strong> The Abu
                  Maluh recordings demonstrate more varied intonation patterns
                  characteristic of regional dialects, while national
                  programming shows more uniform patterns of Modern Standard
                  Arabic.
                </li>
                <li>
                  <strong>Production techniques:</strong> National productions
                  show more sophisticated audio engineering, with cleaner
                  separation between dialogue and background elements.
                </li>
                <li>
                  <strong>Cultural references:</strong> The Abu Maluh recordings
                  contain more pauses for audience laughter following
                  culturally-specific references, creating distinctive rhythm
                  patterns not present in national broadcasts.
                </li>
              </ul>
              <p>
                These differences highlight how Abu Maluh CDs preserved
                regional linguistic and cultural elements during a period when
                Saudi media was becoming increasingly standardized.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
