import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    school: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const subject = encodeURIComponent(`Kontakt från ${formData.name} - ${formData.school}`);
    const body = encodeURIComponent(`Namn: ${formData.name}\nBefattning: ${formData.position}\nSkola: ${formData.school}\n\nMeddelande:\n${formData.message}`);
    const mailtoLink = `mailto:abiir@scottrossi.org?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    toast({
      title: "Öppnar din e-postklient",
      description: "Tack för ditt intresse! Din e-postklient öppnas nu."
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground">Välkommen att höra av dig för att diskutera ert unika behov!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Namn</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Ditt namn" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Befattning</Label>
                <Input id="position" name="position" value={formData.position} onChange={handleChange} required placeholder="T.ex. Rektor" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school">Skola</Label>
                <Input id="school" name="school" value={formData.school} onChange={handleChange} required placeholder="Skolans namn" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Meddelande</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Jag önskar kontakt för ett uppstartsmöte." />
              </div>

              <Button type="submit" className="w-full group">
                Skicka meddelande
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">E-post</h3>
                  <a href="mailto:abiir@scottrossi.org" className="text-primary hover:underline">
                    abiir@scottrossi.org
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                  <a href="tel:0735309125" className="text-primary hover:underline">
                    073-530 91 25
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <h3 className="font-semibold text-foreground mb-3">Snabb respons</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Jag strävar efter att återkomma inom 24 timmar. För brådskande ärenden, 
                vänligen ange detta tydligt i ditt meddelande.
              </p>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">Flexibla lösningar</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Alla uppdrag skräddarsys efter era specifika behov och förutsättningar. 
                Inga långsiktiga bindningar – vi hittar en lösning som passar er.
              </p>
            </Card>
          </div>
        </div>

      </div>
    </section>;
};
export default Contact;