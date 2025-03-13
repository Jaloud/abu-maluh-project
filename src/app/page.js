import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Abu Maluh: Cultural Preservation in Saudi Arabia
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Exploring how Abu Maluh CDs functioned as cultural
              preservation during Saudi Arabia's period of rapid modernization
              and centralization.
            </p>
          </div>
          <div className="mx-auto mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/audio-analysis">
              <Button size="lg">Explore Audio Analysis</Button>
            </Link>
  
          </div>
        </div>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
          <Image
            src="/images/saudi-desert-road.jpg"
            alt="Desert road in Saudi Arabia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 p-6 z-20">
            <h2 className="text-2xl font-bold text-white">
              11-Hour Road Trips
            </h2>
            <p className="text-white/90 mt-2">
              The soundtrack to long journeys across Northern Saudi Arabia
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What Were Abu Maluh CDs?</CardTitle>
              <CardDescription>
                A cultural phenomenon from Hail region
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Abu Maluh CDs emerged in the late 2000s as a series of
                comedic audio sketches featuring recurring characters speaking
                in the distinct dialect of the Hail region. Created as an
                alternative to music (which many families avoided for religious
                reasons), these tapes became immensely popular during long road
                trips across Saudi Arabia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Preservation During Modernization</CardTitle>
              <CardDescription>
                Maintaining regional identity amid centralization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                As Saudi Arabia underwent rapid modernization and cultural
                standardization, these CDs preserved regional dialects,
                storytelling traditions, and cultural references unique to the
                Hail region. This project examines how this entertainment medium
                served as an unintentional but effective form of cultural
                preservation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mt-12">
        <h2 className="text-2xl font-bold mb-6">Project Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              title: "Audio Analysis",
              description:
                "Waveform analysis and transcription of CD content",
              link: "/audio-analysis",
            },
            {
              title: "Data Visualizations",
              description:
                "Timeline and geographic distribution of the phenomenon",
              link: "/visualizations",
            },
            {
              title: "About",
              description: "Personal connection and project background",
              link: "/about",
            },
          ].map((item, index) => (
            <Link href={item.link} key={index}>
              <Card className="h-full hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
