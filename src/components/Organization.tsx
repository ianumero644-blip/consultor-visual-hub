import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const responsibilities = [
  {
    type: "requirement",
    text: "Briefing completo deve ser enviado até segunda-feira",
  },
  {
    type: "info",
    text: "Materiais enviados depois entram na fila da semana seguinte",
  },
  {
    type: "info",
    text: "Alterações extensas podem estender prazos",
  },
  {
    type: "tip",
    text: "Respostas rápidas = entregas rápidas",
  },
];

const Organization = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold px-2">
            Organização & Responsabilidades
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Como garantir entregas ágeis e eficientes
          </p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {responsibilities.map((item, index) => {
            const Icon = item.type === "requirement" ? AlertCircle : CheckCircle2;
            const iconColor = item.type === "requirement" ? "text-accent" : "text-accent/70";
            
            return (
              <Card 
                key={index}
                className="p-5 sm:p-6 flex items-start gap-3 sm:gap-4 shadow-soft bg-card border-border/50 hover:border-accent/30 transition-smooth"
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {item.text}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Organization;
