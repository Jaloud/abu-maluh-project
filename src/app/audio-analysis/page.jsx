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
      title: "Abu Maluh: Car Raffle Sketch",
      description:
        "A 5-minute section from the CD, featuring the Car raffle sketch from the first CD",
      audioUrl: "/audio/cd1_snippet.mp3",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Audio Analysis</h1>
        <p className="text-muted-foreground">
          Examining the audio characteristics and transcription of Abu Maluh
          CD's
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
              <CardTitle> Audio Samples</CardTitle>
              <CardDescription>
                Listen to selected excerpts from Abu Maluh CD's.
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
              <div className="prose max-w-none space-y-4 p-4 rounded-lg bg-muted/30 text-left">
                <h3 className="text-xl font-semibold tracking-tight mb-4 text-left">
                  About This Recording
                </h3>
                <p className="leading-relaxed text-left">
                  This audio segment is taken from the opening section of <strong>Abu Maluh's
                  first CD</strong>. It introduces several key characters and establishes the
                  major plot lines that run throughout the series. The sketch sets
                  the distinctive comedic tone that made these CDs so popular - 
                  blending <em>sharp social satire</em> with <em>sarcastic commentary</em> on everyday
                  life in Hail.
                </p>
                <p className="leading-relaxed text-left">
                  Through clever wordplay and exaggerated situations, the characters
                  poke fun at local customs and modern life while showcasing the
                  unique Hail dialect. The segment features:
                </p>
                <ul className="text-left list-disc pl-6 space-y-2">
                  <li>
                    Introduction of main recurring characters and their personalities
                  </li>
                  <li>
                    Setup of ongoing storylines about car raffles and local schemes
                  </li>
                  <li>
                    Satirical takes on regional social dynamics and relationships
                  </li>
                  <li>
                    The signature mix of sarcasm, wit and cultural commentary that
                    defined the series
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
