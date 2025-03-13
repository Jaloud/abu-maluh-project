CDs"use client";

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
          Analyzing audio characteristics of Abu Maluh cassettes
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
                alt="Full waveform of Abu Maluh cassette"
                fill
                className="object-contain"
              />
            </div>
            <div className="prose max-w-none">
              <h3>Full Cassette Waveform Analysis</h3>
              <p>
                The waveform above represents a 45-minute side of an Abu Maluh
                cassette. Several distinctive patterns emerge when analyzing the
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
                  entertainment, these cassettes contain no musical interludes
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

          <TabsContent value="dialogue" className="space-y-4">
            <div className="relative h-[300px] w-full">
              <Image
                src="/images/waveform-dialogue.png"
                alt="Dialogue waveform analysis"
                fill
                className="object-contain"
              />
            </div>
            <div className="prose max-w-none">
              <h3>Character Dialogue Patterns</h3>
              <p>
                This section highlights a 3-minute dialogue exchange between the
                main characters, Abu Maluh and Umm Maluh. Several distinctive
                vocal features are evident:
              </p>
              <ul>
                <li>
                  <strong>Character vocal distinction:</strong> The male
                  character (Abu Maluh) shows consistently lower frequency
                  patterns with occasional amplitude spikes during comedic
                  punchlines.
                </li>
                <li>
                  <strong>Regional dialect markers:</strong> The elongated vowel
                  sounds characteristic of the Hail regional dialect create
                  distinctive waveform patterns, particularly in the 1:30-2:15
                  segment.
                </li>
                <li>
                  <strong>Call-and-response pattern:</strong> The conversational
                  structure follows traditional storytelling patterns found in
                  Hail regional oral traditions.
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="comparative" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-[200px]">
                <Image
                  src="/images/waveform-abu-maluh.png"
                  alt="Abu Maluh cassette waveform"
                  fill
                  className="object-contain"
                />
                <p className="text-sm text-center mt-2">
                  Abu Maluh cassette (2007)
                </p>
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/waveform-national-radio.png"
                  alt="National Saudi radio waveform"
                  fill
                  className="object-contain"
                />
                <p className="text-sm text-center mt-2">
                  National Saudi radio drama (2005)
                </p>
              </div>
            </div>
            <div className="prose max-w-none">
              <h3>Comparative Analysis</h3>
              <p>
                Comparing Abu Maluh cassettes with contemporary national Saudi
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
                These differences highlight how Abu Maluh cassettes preserved
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
