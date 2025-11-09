import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Languages } from "lucide-react";

const About = () => {
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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Kompetens</h3>
            </div>
            <ul className="space-y-2 text-foreground/80">
              <li>• Master i pedagogik</li>
              <li>• Dyskalkyli-diplom</li>
              <li>• Erfarenhet med NPF och SU-grupper</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Roller</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Lärare</Badge>
              <Badge variant="secondary">Speciallärare</Badge>
              <Badge variant="secondary">Specialpedagog</Badge>
              <Badge variant="secondary">Bitr. rektor</Badge>
              <Badge variant="secondary">Föreläsare</Badge>
              <Badge variant="secondary">Utvecklingsledare</Badge>
              <Badge variant="secondary">Handledare</Badge>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Languages className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Språk</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Svenska</Badge>
              <Badge>Engelska</Badge>
              <Badge>Franska</Badge>
              <Badge>Arabiska</Badge>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-accent/5 border-accent/20">
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
