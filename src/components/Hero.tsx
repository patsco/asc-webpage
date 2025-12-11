import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import snailImage from "@/assets/snail.jpg";
import puzzleHeader from "@/assets/puzzle-header.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-[85vh] flex flex-col bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Puzzle header image */}
      <div className="w-full h-32 md:h-48 overflow-hidden">
        <img src={puzzleHeader} alt="Pusselbit - flexibla lösningar" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              ABIIR SCOTT ROSSI - UTBILDNINGSINGENJÖR
            </p>
            <h1 className="text-4xl mb-4 leading-tight md:text-6xl font-normal text-orange-800">
              Flexibla och kortsiktiga lösningar för en hållbar och långsiktig skola
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Ibland behövs punktinsatser på enskilda skolor eller skolområden. 
            Kortare stödåtgärder för att släcka branden här och nu och således ge tid för att bygga långsiktigt hållbara lösningar.
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Utan långsiktig ekonomisk bindning, med flexibla och skräddarsydda uppdrag, hjälper jag er hålla budget samtidigt som målen nås i en resursknapp, politiskt styrd verksamhet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => scrollToSection("contact")} className="group">
              Kontakta mig
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
              Se tjänster
            </Button>
          </div>
        </div>
      </div>

      {/* Snail section with handwritten quote */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <img src={snailImage} alt="Snigel - att skynda långsamt" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <p className="font-handwritten text-2xl text-foreground/80 leading-relaxed italic md:text-2xl">Att skynda långsamt blir ofta en för stor utmaning inom ramen för budget- och läsår i skolans värld. Att beställa specifika uppdrag kan köpa er den dyrbara tid som krävs för att kunna skynda långsamt. Därmed för att nå till det hållbara och långsiktiga arbetet.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;