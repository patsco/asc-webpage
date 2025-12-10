import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">ABIIR SCOTT ROSSI - UTBILDNINGSINGENJÖR</p>
          <h1 className="text-4xl mb-4 leading-tight md:text-6xl font-normal text-orange-800">Flexibla och kortsiktiga lösningar för en hållbar oc</h1>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Ibland behövs punktinsatser på enskilda skolor eller inom ett specifikt skolområde. 
          Kortare stödåtgärder för att släcka branden nu och ge tid att bygga långsiktigt hållbara lösningar.
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Med flexibla och skräddarsydda uppdrag, utan långsiktig ekonomisk bindning, 
          hjälper jag er hålla budget samtidigt som målen nås i en resursknapp, politiskt styrd organisation.
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
    </section>;
};
export default Hero;