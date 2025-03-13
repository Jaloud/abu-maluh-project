import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AudioPlayer from "@/components/audio-player";
import WaveformAnalysis from "@/components/waveform-analysis";
import TranscriptionAnalysis from "@/components/transcription-analysis";

export default function AudioAnalysisPage() {
  // You would replace these with actual audio files in your project
  const audioSamples = [
    {
      id: "segment1",
      title: "Abu Maluh: Family Travel Segment",
      description:
        "A 3-minute excerpt featuring Abu Maluh discussing travel between Saudi cities",
      audioUrl: "/audio/cd1.mp3",
    },
    {
      id: "segment2",
      title: "Wedding Preparations Sketch",
      description:
        "Comedy sketch about traditional wedding preparations in Hail region",
      audioUrl: "/audio/abu-maluh-wedding-preparations.mp3",
    },
    {
      id: "segment3",
      title: "Market Day Conversation",
      description:
        "Exchange between characters at a traditional market in Hail",
      audioUrl: "/audio/abu-maluh-market-day.mp3",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Audio Analysis</h1>
        <p className="text-muted-foreground">
          Examining the audio characteristics and transcription of Abu Maluh
          cassettes
        </p>
      </div>

      <Tabs defaultValue="listen">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="listen">Listen to Excerpts</TabsTrigger>
          <TabsTrigger value="waveform">Waveform Analysis</TabsTrigger>
          <TabsTrigger value="transcription">
            Transcription Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="listen" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cassette Audio Samples</CardTitle>
              <CardDescription>
                Listen to selected excerpts from Abu Maluh cassettes that
                demonstrate regional dialect, storytelling patterns, and
                cultural references
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {audioSamples.map((sample) => (
                <AudioPlayer
                  key={sample.id}
                  audioUrl={sample.audioUrl}
                  title={sample.title}
                  description={sample.description}
                />
              ))}

              <div className="prose max-w-none mt-6">
                <h3>About These Recordings</h3>
                <p>
                  These audio segments were digitized from original Abu Maluh
                  cassette tapes produced between 2007-2010. The recordings
                  feature the comedic sketches that made these cassettes popular
                  throughout the Hail, Al Qassim, and Riyadh regions of Saudi
                  Arabia.
                </p>
                <p>
                  The dialogue is performed in the distinctive Hail regional
                  dialect, which differs significantly from the standardized
                  Arabic taught in schools and used in national media. Listen
                  for:
                </p>
                <ul>
                  <li>
                    Distinctive pronunciation of consonants (especially the "g"
                    and "ch" sounds)
                  </li>
                  <li>
                    Unique regional vocabulary words not found in Standard
                    Arabic
                  </li>
                  <li>
                    Regional idioms and expressions referencing local cultural
                    practices
                  </li>
                  <li>
                    Rhythmic speech patterns characteristic of Hail storytelling
                    traditions
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="waveform">
          <WaveformAnalysis />
        </TabsContent>

        <TabsContent value="transcription">
          <TranscriptionAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
}
