import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import awardImage from "@/assets/award.jpg";
import landscapeBridgeImage from "@/assets/landscape-bridge.jpg";
import chessImage from "@/assets/chess.jpg";
import portraitSepiaImage from "@/assets/portrait-sepia.jpg";
const About = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(index));
          }
        });
      }, {
        threshold: 0.1
      });
      observer.observe(ref);
      return observer;
    });
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);
  const sections = [{
    icon: GraduationCap,
    title: "Utbildning",
    items: ["Master i pedagogik", "Lärarexamen i kemi- och biologi", "Kognitionsvetenskap och lärande i skolan (fris. kurs)", "Dyskalkyli och matematiksvårigheter (fris. kurs)"]
  }, {
    icon: Briefcase,
    title: "Erfarenhet",
    items: ["Utvecklingsledare", "Föreläsare", "Specialpedagog", "Lärarcoach (Bryssel)", "Speciallärare", "Rektor", "Internationella lärarerfarenheter (Sydafrika, Mexiko, Kanada, Egypten, Frankrike och Belgien)"]
  }, {
    icon: Award,
    title: "",
    items: ['"Årets förebild" i Marks kommun, 2024', '"Excellent Award – Teacher of the Year" i Bryssel, 2018'],
    hasImage: true
  }];
  return <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Akademisk- och yrkesbakgrund</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Text...</p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => {
          const Icon = section.icon;
          return <div key={index} ref={el => sectionRefs.current[index] = el} className={`transition-all duration-700 ${visibleSections.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  {section.title && (
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                  )}
                  
                  {/* Award image for Utmärkelser section */}
                  {section.hasImage && <div className="mb-6 flex justify-center">
                      <div className="rounded-lg overflow-hidden shadow-md max-w-[200px]">
                        <img src={awardImage} alt="Utmärkelse - Årets förebild" className="w-full h-auto object-cover" />
                      </div>
                    </div>}

                  <ul className="grid md:grid-cols-2 gap-3">
                    {section.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </Card>
              </div>;
        })}
        </div>

        {/* Landscape image with text side by side */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={landscapeBridgeImage} alt="Landskapsbild - perspektiv" className="w-full h-auto object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              Ett utifrånperspektiv kan ibland vara nyckeln för att lyckas se bortom gamla mönster och invanda strukturer. 
              Som utbildningsingenjör tillämpar jag forskning, erfarenhet och kompetens för att på ett vetenskapligt och 
              systematiskt angreppssätt ta mig an de utmaningar och uppdrag jag ställs inför.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Skolans värld har inte ett korrekt svar eller en bästa lösning. Då hade vi gjort det för längesen. 
              Men, vi kan begrunda våra praktiker.
            </p>
          </div>
        </div>

        {/* Systematic work section with chess and footsteps */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={chessImage} alt="Schackbräde - systematiskt arbete" className="w-full h-64 object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-handwritten text-xl md:text-2xl text-foreground/80 leading-relaxed italic">
              "Varje steg jag tar görs systematiskt och målinriktat. Noggrant avvägt och baserat på min professionella 
              bedömning av lokal kontext, aktuell forskning och beprövad erfarenhet. Varje steg tas med ett slutmål i sikte: 
              öka elevers kunskaper för en bättre morgondag."
            </p>
          </div>
        </div>


        {/* Portrait with sepia */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img src={portraitSepiaImage} alt="Porträtt" className="w-full h-full object-cover rounded-full shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default About;