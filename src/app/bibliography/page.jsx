import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function BibliographyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Annotated Bibliography</h1>
        <p className="text-muted-foreground">
          Key scholarly and cultural sources supporting this research on Abu
          Maluh CDs
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Sources</CardTitle>
          <CardDescription>
            Academic and cultural references examining Saudi cultural
            preservation, regional identities, and media development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Peer-reviewed sources */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Peer-Reviewed Sources</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-1">
                <p className="text-sm italic">Peer-reviewed journal article</p>
                <p className="font-medium">
                  Maisel, Sebastian. "The Transformation of 'Unayza: Where is
                  the 'Paris of Najd' today?" <em>Chroniques Yéménites</em>{" "}
                  (2013): n. pag.
                </p>
              </div>

              <div className="prose max-w-none text-left">
                <p>
                  This article argues that while 'Unayza lost much of its
                  autonomy through centralization, it preserved elements of its
                  distinct identity through cultural spaces and practices.
                  Maisel draws on government statistics, fieldwork between
                  1998-2012, newspaper coverage, and analysis of online
                  discussion forums as evidence. This research is valuable for
                  showing how increased state control led to both modernization
                  benefits and loss of local autonomy. For my thesis, this
                  demonstrates how cultural forms like Abu Maluh cassettes
                  emerged as ways to maintain regional identity during a period
                  of increasing centralization and standardization.
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-1">
                <p className="text-sm italic">Peer-reviewed journal article</p>
                <p className="font-medium">
                  Ingham, Bruce. "The Salfah as a Narrative Genre."{" "}
                  <em>Asian Folklore Studies</em> 52 (1993): 5-32.
                </p>
              </div>

              <div className="prose max-w-none text-left">
                <p>
                  This study examines how the salfah (oral historical narrative)
                  functions as a distinct genre for preserving cultural memory
                  in Arabian society. The author conducts detailed textual
                  analysis of recorded narratives, examining their linguistic
                  features, storytelling techniques, and performance contexts.
                  This research is important for understanding how oral and
                  recorded narratives serve vital cultural functions in Saudi
                  society. For my thesis, this source helps establish the
                  broader tradition of oral narrative forms in which Abu Maluh
                  cassettes emerged, supporting my argument about their role in
                  cultural preservation.
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-1">
                <p className="text-sm italic">
                  Academic book from university press
                </p>
                <p className="font-medium">
                  Yamani, Mai.{" "}
                  <em>
                    Cradle of Islam: The Hijaz and the Quest for an Arabian
                    Identity
                  </em>
                  . London: I.B. Tauris, 2004.
                </p>
              </div>

              <div className="prose max-w-none text-left">
                <p>
                  This book argues that despite centralization attempts by the
                  Saudi state, distinct regional identities persist through
                  cultural practices and social traditions. Yamani supports her
                  argument through ethnographic research, oral histories, and
                  analysis of cultural practices in the Hijaz region. This
                  research is significant as it demonstrates how local
                  identities can survive alongside imposed national identities
                  in Saudi Arabia. For my thesis, this work provides a
                  theoretical framework for understanding how regional cultural
                  forms like Abu Maluh cassettes could maintain their
                  distinctiveness while operating within the larger Saudi
                  national context.
                </p>
              </div>
            </div>
          </div>

          {/* Additional sources */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Additional Sources</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-1">
                <p className="text-sm italic">Doctoral dissertation</p>
                <p className="font-medium">
                  Al-Garni, A. D. A. "Broadcasting in Saudi Arabia in the Era of
                  Globalization: A Study of Local Constraints on Television
                  Development." Doctoral dissertation, University of Stirling,
                  2000.
                </p>
              </div>

              <div className="prose max-w-none text-left">
                <p>
                  This dissertation argues that Saudi media's dependency on
                  foreign productions stems primarily from local constraints and
                  regulatory functions rather than external factors of global
                  media dominance. The author bases his analysis on content
                  analysis of two weeks of Saudi TV programming and interviews
                  with media officials, policymakers, and local producers. This
                  research provides important insights into how internal
                  political, professional and economic factors shape Saudi media
                  development beyond traditional dependency theory. For my
                  thesis, this source helps explain why locally-produced media
                  like Abu Maluh cassettes emerged as a culturally-specific
                  alternative to standardized foreign content, while
                  demonstrating how such productions had to navigate Saudi
                  cultural and political constraints.
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-1">
                <p className="text-sm italic">Academic history book</p>
                <p className="font-medium">
                  Al-Rasheed, Madawi. <em>A History of Saudi Arabia</em>.
                  Cambridge: Cambridge University Press, 2010.
                </p>
              </div>

              <div className="prose max-w-none text-left">
                <p>
                  In this comprehensive history, Al-Rasheed examines the
                  formation and evolution of Saudi Arabia, emphasizing the
                  interplay between state-building and cultural identity. She
                  utilizes archival research, oral histories, and analysis of
                  political developments to explore how the Saudi state's
                  centralization efforts have influenced regional identities and
                  cultural expressions. This work is significant for
                  understanding the historical context in which local cultural
                  forms, such as the Abu Maluh CD's, emerged as mediums for
                  preserving regional identities amidst national unification and
                  modernization. For my thesis, Al-Rasheed's analysis provides a
                  historical backdrop to the cultural transformations in Saudi
                  Arabia, highlighting the tensions between central authority
                  and regional cultural preservation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-medium">Research Methodology Notes</h3>
            <p className="text-left">
              This bibliography includes five key sources that inform my
              analysis of Abu Maluh CDs as cultural preservation artifacts. The
              three peer-reviewed sources (Maisel, Ingham, and Yamani) provide
              theoretical frameworks for understanding regional identity
              preservation in Saudi Arabia. The additional sources (Al-Garni and
              Al-Rasheed) offer crucial historical and media contexts. Together,
              these sources support my argument that Abu Maluh CDs served as an
              unintentional but effective form of cultural preservation during
              Saudi Arabia's period of rapid modernization and centralization.
            </p>
            <p className="text-left">
              All sources are cited in MLA format, with full bibliographic
              information and explanations of their significance to this
              project. The annotations highlight each source's main arguments,
              methodologies, and specific relevance to understanding the
              cultural significance of Abu Maluh CDs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
