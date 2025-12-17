import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Users, Lightbulb, UserPlus, FileText } from "lucide-react";
import turtleImage from "@/assets/turtle.jpg";
interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}
const Services = () => {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());
  const services: ServiceCategory[] = [{
    id: "handledning",
    title: "Handledning",
    icon: <Users className="h-6 w-6" />,
    description: "Professionellt stöd för pedagoger och ledningsgrupper",
    details: ["Lärare", "Speciallärare", "Specialpedagoger", "Särskild undervisningsgrupp"]
  }, {
    id: "radgivning",
    title: "Rådgivning",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Strategiskt stöd för skolorganisationen",
    details: ["Konsulterande insatser", "Organisatoriskt stöd", "Ledningsstöd", "Bollplank för EHT"]
  }, {
    id: "bemanning",
    title: "Bemanning",
    icon: <UserPlus className="h-6 w-6" />,
    description: "Flexibla vikariatslösningar för komplexa situationer",
    details: ["Vikariat (max 4 veckor)", "Åtgärder för resurskrävande ärenden", "Stöd vid kluriga situationer", "Exempel: Klasser med utåtagerande elever, gängproblematik, NPF"]
  }, {
    id: "dokumentation",
    title: "Dokumentation",
    icon: <FileText className="h-6 w-6" />,
    description: "Effektiv dokumentation och uppföljning",
    details: ["Pedagogiska kartläggningar", "Matematik-screening", "Åtgärdsprogram", "Skapa mallar"]
  }];
  const toggleService = (serviceId: string) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };
  return <section id="services" className="py-20 px-4 bg-background relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tjänster</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Fyra huvudkategorier av typer på tjänster, alltid med en självklar utgångspunkt i lokal kontext, skräddarsytt utifrån just era behov. </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(service => {
          const isExpanded = expandedServices.has(service.id);
          return <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <Button variant="ghost" onClick={() => toggleService(service.id)} className="w-full justify-between text-primary hover:text-primary">
                    {isExpanded ? "Dölj detaljer" : "Visa detaljer"}
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>

                  {isExpanded && <div className="mt-4 pt-4 border-t border-border animate-in slide-in-from-top-2">
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => <li key={index} className="text-foreground/80 text-sm pl-4 border-l-2 border-primary/30">
                            {detail}
                          </li>)}
                      </ul>
                    </div>}
                </div>
              </Card>;
        })}
        </div>

        {/* Turtle section with quote - fullscreen background with text overlay */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img src={turtleImage} alt="Havssköldpadda - andas ut" className="w-full h-80 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end justify-center p-8">
            <p className="font-handwritten text-2xl text-white leading-relaxed italic text-center max-w-3xl drop-shadow-lg md:text-2xl">Dags att ta luft och andas ut lite – tillåt dig själv att delegera en bit ansvar till en annan kompetent människa. Det finns gott om ansvar kvar ändå.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;