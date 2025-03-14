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
          Examining Quiet &amp; Loud Segments in the First Abu Maluh CD
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="dialogue">Key Scenes</TabsTrigger>
          </TabsList>

          {/* --- OVERVIEW TAB --- */}
          <TabsContent value="overview" className="space-y-6 text-left">
            <div className="relative h-[280px] w-full">
              <Image
                src="/images/full_wave.png"
                alt="Full waveform of a comedic radio drama"
                fill
                className="object-contain"
              />
            </div>

            <div className="prose max-w-none space-y-4 p-4 rounded-lg bg-muted/30">
              <h3 className="text-xl font-semibold tracking-tight mb-4">
                Analysis Overview
              </h3>
              <p className="leading-relaxed">
                This waveform represents the first <strong>Abu Maluh CD</strong>,
                a comedic radio drama that runs <em>1 hour, 6 minutes, and 49 seconds</em>.
                The CD's structure is primarily vocal, consisting of
                <strong> three main audio elements</strong>: 
                <em>character vocal performances, sound effects, and nasheed interludes</em>.
                The production excludes instrumental music, reflecting
                religious considerations and focusing the listener’s attention
                on dialogue and comedic timing.
              </p>

              <p className="leading-relaxed">
                Nasheeds—<em>Islamic vocal compositions</em>—act as transitions between
                scenes. Their sustained vocal lines typically show a smoother
                envelope (slower <strong>Attack</strong> and longer <strong>Sustain</strong>)
                compared to the short, punchy <strong>Attack/Decay</strong> in spoken
                dialogue or sudden sound effects. The track’s minimalistic approach
                (no background music) means amplitude shifts—like abrupt spikes in
                arguments or quiet lulls—are especially prominent.  
              </p>

              <p className="leading-relaxed">
                By analyzing these loud and soft moments, we can see how
                <strong> comedic tension</strong> is created through contrasting volumes.
                Silences set up punchlines, while sudden peaks in amplitude underscore
                moments of conflict—key features of classic radio comedy in a
                <em> religiously appropriate</em> entertainment format.
              </p>
            </div>
          </TabsContent>

          {/* --- KEY SCENES TAB --- */}
          <TabsContent value="dialogue" className="space-y-6 text-left">
            {/* Silence Waveform */}
            <div>
              <h3 className="mb-2 font-semibold">
                Silence Transition (2:23–2:27)
              </h3>
              <div className="relative h-[280px] w-full mb-2">
                <Image
                  src="/images/waveform1_silence.png"
                  alt="Waveform highlighting a short silence between 2:23–2:27"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="prose max-w-none">
                Around the <strong>2:23–2:27</strong> mark, the waveform dips
                to near silence. This four-second pause acts as a comedic beat,
                transitioning from light banter into the next major sketch.
                By dropping the audio amplitude to almost -∞ dB, the production
                creates anticipation—listeners subconsciously prepare for
                an upcoming punchline or conflict.
              </p>
            </div>

            {/* Loud Argument Waveform */}
            <div>
              <h3 className="mb-2 font-semibold">
                Loud Argument Over the Raffle Prize (3:30–3:45)
              </h3>
              <div className="relative h-[280px] w-full mb-2">
                <Image
                  src="/images/waveform2_loud.png"
                  alt="Waveform highlighting a loud argument segment"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="prose max-w-none">
                Between <strong>3:30 and 3:45</strong>, amplitude spikes to
                near 0 dB—significantly louder than the usual -10 to -15 dB range
                of normal conversation. During this scene, two characters— 
                <strong>Abu Maluh</strong> and <strong>Abu Shuridah</strong>—
                clash over a winning <em>raffle ticket</em> for a car giveaway.
                They each claim to be the station’s most loyal customer, exchanging
                ever-more exaggerated tales.
              </p>
              <p className="prose max-w-none">
                This abrupt jump in volume underlines the comedic tension.
                Once the manager threatens to redo the entire contest,
                both men drop in volume, reflecting their sudden anxiety
                about losing the prize. Ultimately, the manager
                sarcastically suggests they “split the car,” with one
                driving and the other shifting gears—an agreement they
                (comically) accept. This loud-quiet-loud pattern, mirrored
                in the waveform, highlights how amplitude changes drive
                comedic pacing and conflict resolution.
              </p>
            </div>

            {/* Comparison Paragraph */}
            <div className="prose max-w-none p-4 rounded-lg bg-muted/30 space-y-2">
              <h3 className="font-semibold text-lg">Comparing Quiet vs. Loud</h3>
              <p className="leading-relaxed">
                In comparing the <strong>silence transition</strong> at 2:23–2:27
                to the <strong>loud argument</strong> at 3:30–3:45, we see a
                deliberate strategy of contrasting amplitudes. The sudden drop
                to silence heightens the audience’s attention just before
                the comedic conflict, and the subsequent spike intensifies
                the humor. This interplay of quiet and loud segments—absent
                any background music—serves as a core comedic device throughout
                the CD.
              </p>
              <p className="leading-relaxed">
                The minimalist sound design ensures each amplitude change is
                noticeable. Loud arguments stand out because there is no
                constant background track masking them, and the silences become
                dramatic pauses that <em>anticipate laughter</em> or
                <em>imminent chaos</em>. In doing so, the production
                exemplifies classic radio drama’s reliance on vocal dynamics
                and timing to engage listeners.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
