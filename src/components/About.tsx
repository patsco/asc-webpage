import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const sections = [
    {
      icon: GraduationCap,
      title: "Utbildning",
      items: [
        "Master i pedagogik med specialisering i matematikdidaktik",
        "Vidareutbildning i dyslexi och dyskalkyli",
        "Specialpedagogisk examen med fokus på NPF",
        "Fortbildning i ABA och TEACCH-metoder",
        "Certifiering i Functional Behavior Assessment",
        "Vidareutbildning i traumamedveten pedagogik",
        "Kurs i systematiskt kvalitetsarbete inom skolväsendet",
        "Fortbildning i formativ bedömning och feedback",
        "Utbildning i konflikhantering och krisinterventioner",
        "Forskningsmetodik och evidensbaserad praktik"
      ]
    },
    {
      icon: Briefcase,
      title: "Erfarenheter",
      items: [
        "15+ års erfarenhet som lärare i grundskolan",
        "Speciallärare med fokus på matematiksvårigheter",
        "Specialpedagog för elever med NPF-diagnoser",
        "Biträdande rektor med ansvar för pedagogisk utveckling",
        "Föreläsare på lärarutbildningar och kompetensutvecklingsdagar",
        "Utvecklingsledare för skolövergripande förbättringsarbete",
        "Handledare för lärare och pedagogisk personal",
        "Konsult för skolhuvudmän i organisationsutveckling",
        "Projektledare för implementering av digitala läromedel",
        "Mentor för nyanställda lärare och studenter"
      ]
    },
    {
      icon: Award,
      title: "Utmärkelser",
      items: [
        "Utmärkelse för innovativt pedagogiskt arbete 2022",
        "Nominerad till Årets specialpedagog 2021",
        "Pris för framgångsrikt inkluderingsarbete",
        "Erkännande för implementering av forskningsbaserade metoder",
        "Diplom för excellent handledning av pedagogisk personal",
        "Utmärkelse för framstående insatser inom matematikundervisning",
        "Hedersomnämnande för arbete med utsatta elevgrupper",
        "Kommunalt pris för skolutveckling och kvalitetsarbete",
        "Erkännande för mångkulturell pedagogisk kompetens",
        "Certifiering som Qualified Educational Consultant"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vem är jag?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utbildningsingenjör med systematik och vetenskapliga arbetssätt stöttar jag dagens skola.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleSections.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  
                  {/* Placeholder for future image */}
                  <div className="mb-6 h-48 rounded-lg bg-muted/30 flex items-center justify-center text-muted-foreground/50 text-sm">
                    Bildyta för {section.title}
                  </div>

                  <ul className="grid md:grid-cols-2 gap-3">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-foreground/80"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            );
          })}
        </div>

        <Card className="p-8 bg-accent/5 border-accent/20 mt-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Skolingenjör – Vetenskaplig grund för hållbart stöd
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Som skolingenjör kombinerar jag systematiska arbetssätt med vetenskapliga metoder 
            för att ge skolor det stöd de behöver. Genom flexibla uppdrag och kortare insatser 
            kan jag hjälpa er att hantera akuta utmaningar samtidigt som vi bygger grund för 
            långsiktiga, hållbara lösningar i er organisation.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;