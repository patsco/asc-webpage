import presentationImage from "@/assets/presentation.jpg";
import robinWilliamsImage from "@/assets/robin-williams.jpg";
const QuoteSection = () => {
  return <section id="om-mig" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Med enorm hänsyn, respekt och omsorg
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              bemöter jag samtliga inom skolans värld. Det relationella arbetet är min stora styrka 
              och en förutsättning för att kunna göra skillnad.
            </p>
            
            <div className="bg-card rounded-xl p-6 shadow-md">
              <p className="text-muted-foreground text-sm mb-2">Som Robin Williams så klokt sa:</p>
              <blockquote className="font-handwritten text-xl md:text-2xl text-foreground/90 italic leading-relaxed">
                "Everybody you meet is fighting a battle you know nothing about. Be kind. Always."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <img src={robinWilliamsImage} alt="Robin Williams" className="w-12 h-12 rounded-full object-cover" />
                
              </div>
            </div>
          </div>

          {/* Image - rotated 90 degrees to correct orientation */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={presentationImage} alt="Abiir Scott Rossi presenterar" className="w-full h-auto object-cover [transform:rotate(90deg)] origin-center" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default QuoteSection;