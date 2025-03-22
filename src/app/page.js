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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              Exploring how Abu Maluh CDs functioned as cultural preservation
              during Saudi Arabia's period of rapid modernization and
              centralization.
            </p>
          </div>
          <div className="mx-auto mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="#narrative">
              <Button size="lg">Read Full Narrative</Button>
            </Link>
            <Link href="/audio-analysis">
              <Button size="lg" variant="outline">
                Explore Audio Analysis
              </Button>
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
                Abu Maluh CDs emerged in the late 2000s as a series of comedic
                audio sketches featuring recurring characters speaking in the
                distinct dialect of the Hail region. Created as an alternative
                to music (which many families avoided for religious reasons),
                these tapes became immensely popular during long road trips
                across Saudi Arabia.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Audio Analysis",
              description: "Waveform analysis and transcription of CD content",
              link: "/audio-analysis",
            },
            {
              title: "Data Visualizations",
              description:
                "Timeline and geographic distribution of the phenomenon",
              link: "/visualizations",
            },
            {
              title: "Bibliography",
              description: "Annotated sources on Saudi cultural preservation",
              link: "/bibliography",
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

      <Separator className="my-10" />

      <section id="narrative" className="container my-12">
        <Card>
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
              Preserving Regional Identity in the Age of Standardization
            </CardTitle>
            <CardDescription className="text-lg">
              A 1000-word narrative exploring how Abu Maluh CDs helped preserve
              Saudi cultural heritage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="full" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8 w-[400px] mx-auto">
                <TabsTrigger value="full">Full Narrative</TabsTrigger>
                <TabsTrigger value="sections">Quick Overview</TabsTrigger>
              </TabsList>

              <TabsContent value="full">
                <div className="prose prose-lg max-w-4xl mx-auto text-left space-y-8">
                  <p className="text-xl leading-relaxed">
                    In the early 2000s, as Saudi Arabia underwent unprecedented
                    modernization and cultural standardization, an unexpected
                    form of cultural preservation emerged along the nation's
                    expanding highway system. Abu Maluh CDs, a series of comedic
                    audio sketches featuring characters speaking in the
                    distinctive dialect of the Hail region, became enormously
                    popular among travelers undertaking long journeys across the
                    Kingdom. While seemingly created for mere entertainment,
                    these recordings unintentionally served a profound cultural
                    function: preserving regional linguistic patterns,
                    storytelling traditions, and cultural references that were
                    rapidly disappearing under the homogenizing forces of
                    modernization. This project offers a window into that
                    transformative period, examining how Abu Maluh CDs served as
                    crucial vehicles for cultural preservation during a time of
                    accelerated centralization and standardization. Through
                    these recordings, we can see through the lens of everyday
                    entertainment media how cultural preservation can be
                    achieved, even when preservation wasn't their explicit
                    intent.
                  </p>

                  <h3 className="text-2xl font-bold mt-12 mb-6">
                    The Context of Rapid Modernization
                  </h3>
                  <p>
                    To understand the cultural significance of Abu Maluh CDs, I
                    want to first recognize the transforamtive environment in
                    which they emerged. Between 1980 and 2010, Saudi Arabia
                    experienced extraordinary modernization driven by oil
                    wealth, wealth, with the government implementing ambitious
                    infrastructure programs that fundamentally altered the
                    traditional way of life. As Madawi Al-Rasheed documents in{" "}
                    <em>A History of Saudi Arabia</em>, this period saw the
                    centralization of administrative power, standardization of
                    education, and expansion of national media that increasingly
                    emphasized a homogenized Saudi identity over regional
                    distinctiveness. The completion of major highway systems
                    connecting formerly isolated regions—particularly the
                    highways linking Hail to Qassim (1986) and Eastern Province
                    (2000)—facilitated unprecedented movement between regions
                    that allowed for migration to become common place while
                    simultaneously exposing local cultures to standardizing
                    influences.
                  </p>

                  <p>
                    This modernization brought undeniable benefits but also
                    pushed towards more homoenngity, as the melting pot requires
                    all to melt, so must the regional culters be assimilated.
                    Sebastian Maisel's research on the transformation of 'Unayza
                    demonstrates how increased centralization led to the erosion
                    of local autonomy and cultural practices. Similarly, Mai
                    Yamani documents how the imposition of standardized national
                    identities challenged regional distinctiveness in the Hijaz
                    region. The experience of Hail was unique as it was more
                    aligned with the intended national identity, but the
                    standardized education, and increased mobility introduced
                    increasing influences. More specifically the distinctive
                    regional linguistic features, oral traditions, and cultural
                    references faced potential obsolescence.
                  </p>

                  <h3 className="text-2xl font-bold mt-12 mb-6">
                    Abu Maluh CDs as Linguistic Preservation
                  </h3>
                  <p>
                    The analysis of Abu Maluh recordings reveals a production
                    that prioritizes voice over music and effects, the voice
                    being the most important element of the production. The
                    transcription analysis demonstrates the significant
                    deviation of this dialect from Modern Standard Arabic and
                    even from the "white" arabic, in saudi we use the term white
                    arabic to refer to the arabic that is used in the media and
                    education it is the dialect that is used in the media and
                    education, with a Word Error Rate of 54.8% when
                    auto-transcribed through openAI whisper. This high error
                    rate quantifiably demonstrates the linguistic uniqueness
                    preserved in these recordings. Key features that were
                    mis-transcribed include regional vocabulary, distinctive
                    feminine word endings, pronunciation variations, and
                    emphasis markers that would otherwise be lost in
                    standardized media.
                  </p>

                  <p>
                    Linguistic analysis reveals that Abu Maluh CDs preserved
                    multiple elements of the Hail dialect that were rapidly
                    disappearing from public discourse, particularly among
                    younger generations educated in standardized Arabic. These
                    include the characteristic "ch" pronunciation of the
                    feminine second-person address, regional question words like
                    "lesh" instead of "limatha," and unique vocabulary items
                    specific to the region. Through the popularity of these
                    recordings, these linguistic features gained continued
                    exposure and cultural value, especially among younger
                    listeners who might otherwise have abandoned regional speech
                    patterns in favor of more standardized forms.
                  </p>

                  <h3 className="text-2xl font-bold mt-12 mb-6">
                    Cultural Storytelling and Social Commentary
                  </h3>
                  <p>
                    Beyond preserving dialect, Abu Maluh CDs maintained
                    traditional storytelling structures and cultural reference
                    points specific to the Hail region at that time. As Bruce
                    Ingham documents in his research on the <i>salfah</i> as a
                    narrative genre, oral historical narratives serve vital
                    cultural functions in Arabian society. These CDs integrated
                    elements of this storytelling tradition, particularly in
                    their style and structure, use of cliff hangers in
                    storytelling and "بهارات" a term used to describe
                    emblishements when telling a story in order to keep the
                    audience engaged, and incorporation of regionally
                    significant settings and situations. The car raffle sketch
                    from the first CD exemplifies this preservation, featuring
                    not only regional dialect but also distinctly local
                    conceptions of status, competition, and conflict resolution
                    through a lose-lose scenario.
                  </p>

                  <p>
                    In my view Abu Maluh CDs provided a platform for social
                    commentary that addressed the tensions between modernization
                    and tradition from a distinctly regional perspective. While
                    national media increasingly focused on homogenized cultural
                    narratives aligned with centralized authorities, these CDs
                    offered satirical perspectives and highlighted the changing
                    social dynamics from a Hail-specific viewpoint. A piont of
                    view that hit home with many of the listeners. The dialogues
                    frequently juxtapose traditional values with modern
                    innovations, often using humor to navigate the
                    contradictions that arose during this period of rapid
                    change. This culturally-specific commentary preserved not
                    just linguistic features but also perspectives on
                    modernization itself.
                  </p>

                  <h3 className="text-2xl font-bold mt-12 mb-6">
                    Distribution Networks and Cultural Geography
                  </h3>
                  <p>
                    The geographic distribution of Abu Maluh CDs, visualized in
                    our GIS mapping, reveals how the very highway infrastructure
                    that could have accelerated homogenization instead created
                    distribution networks for regional cultural preservation.
                    Initial popularity centered in Hail extended along major
                    transportation corridors, particularly the highways
                    connecting to Qassim, Riyadh, and the Eastern Province.
                    Highway rest stops became primary distribution points, with
                    the highest concentration in areas with significant Hail
                    expatriate communities. This distribution pattern
                    demonstrates how modern infrastructure created new
                    opportunities for regional cultural expressions to travel
                    beyond their traditional geographic boundaries.
                  </p>

                  <p>
                    The Google Trends data further confirms the cultural impact
                    and distribution patterns of Abu Maluh CDs. Search interest
                    peaked between 2007-2010, coinciding with the height of CD
                    distribution, and shows ongoing periodic spikes that suggest
                    continued cultural relevance. Notably, search patterns align
                    closely with our identified geographic distribution, with
                    the highest sustained interest in the Hail region and along
                    major highway corridors where the CDs were most popular.
                  </p>

                  <h3 className="text-2xl font-bold mt-12 mb-6">
                    Unintentional Preservation in Everyday Media
                  </h3>
                  <p>
                    What makes Abu Maluh CDs particularly significant as
                    cultural preservation is that they were never explicitly
                    created for this purpose. Unlike formal preservation efforts
                    initiated by cultural institutions, these recordings emerged
                    as commercial entertainment products responding to specific
                    market conditions—namely, the need for family-appropriate
                    entertainment during increasingly common long road trips.
                    Their culturally preservative function was largely
                    unintentional but nonetheless profound.
                  </p>

                  <p>
                    This unintentional preservation through everyday media
                    offers important insights for understanding how cultural
                    identity persists during periods of rapid change. While
                    formal preservation efforts are valuable, these CDs
                    demonstrate how cultural expressions embedded in popular
                    media can sometimes be more effective in maintaining living
                    cultural practices. By integrating regional dialect,
                    storytelling patterns, and cultural references into
                    entertaining content consumed during everyday activities,
                    Abu Maluh CDs naturalized cultural preservation rather than
                    museumifying it, allowing regional distinctiveness to remain
                    vital and relevant.
                  </p>

                  <h3 className="text-2xl font-bold mt-12 mb-6">Conclusion</h3>
                  <p>
                    As our analysis demonstrates, Abu Maluh CDs served as
                    crucial mechanisms for cultural preservation during Saudi
                    Arabia's period of rapid modernization and standardization.
                    Through preserving distinctive linguistic features,
                    traditional storytelling patterns, and regionally-specific
                    cultural references, these recordings maintained elements of
                    Hail's cultural identity that might otherwise have
                    disappeared under homogenizing influences. The significance
                    of these CDs extends beyond mere entertainment, revealing
                    how everyday media can function as repositories of cultural
                    distinctiveness even—and perhaps especially—during periods
                    of transformative change. In understanding the cultural
                    impact of Abu Maluh CDs, we gain valuable insights into how
                    regional identities persist through modern media forms,
                    adapting to and utilizing the very infrastructure of
                    modernization that might otherwise threaten local
                    distinctiveness.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="sections">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary">
                        Introduction
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-left leading-relaxed">
                        In the early 2000s, as Saudi Arabia underwent
                        unprecedented modernization and cultural
                        standardization, an unexpected form of cultural
                        preservation emerged: Abu Maluh CDs. These comedic audio
                        sketches preserved regional linguistic patterns,
                        storytelling traditions, and cultural references that
                        were rapidly disappearing under homogenizing forces.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary">
                        The Context of Rapid Modernization
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-left leading-relaxed">
                        Between 1980 and 2010, Saudi Arabia experienced
                        extraordinary modernization driven by oil wealth. This
                        period saw the centralization of administrative power,
                        standardization of education, and expansion of national
                        media that emphasized a homogenized Saudi identity over
                        regional distinctiveness.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary">
                        Linguistic Preservation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-left leading-relaxed">
                        The waveform and transcription analyses reveal how these
                        recordings preserved the Hail dialect with its
                        distinctive features (Word Error Rate of 54.8% in
                        standard Arabic speech recognition). Key preserved
                        features include regional vocabulary, feminine word
                        endings, and unique pronunciation patterns.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary">
                        Cultural Storytelling
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-left leading-relaxed">
                        Abu Maluh CDs maintained traditional storytelling
                        structures specific to the Hail region, integrating
                        elements of the salfah narrative tradition. They
                        provided regional perspectives on modernization through
                        humor and satire, preserving attitudes toward social
                        change.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary">
                        Distribution Networks
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-left leading-relaxed">
                        Geographic analysis shows how highway infrastructure
                        created distribution networks for regional cultural
                        preservation. Highway rest stops became primary
                        distribution points, with highest concentrations in
                        areas with significant Hail expatriate communities.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary">
                        Unintentional Preservation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-left leading-relaxed">
                        What makes Abu Maluh CDs significant is that they were
                        never explicitly created for preservation. They emerged
                        as commercial entertainment but demonstrate how cultural
                        expressions embedded in popular media can effectively
                        maintain living cultural practices.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <Link href="#narrative">
                    <Button
                      variant="outline"
                      className="w-full max-w-md mx-auto py-6 text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Read Full Narrative
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
