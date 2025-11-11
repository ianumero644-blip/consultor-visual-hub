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
    <section className="py-24 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Organização & Responsabilidades
          </h2>
          <p className="text-lg text-muted-foreground">
            Como garantir entregas ágeis e eficientes
          </p>
        </div>
        
        <div className="space-y-4">
          {responsibilities.map((item, index) => {
            const Icon = item.type === "requirement" ? AlertCircle : CheckCircle2;
            const iconColor = item.type === "requirement" ? "text-accent" : "text-accent/70";
            
            return (
              <Card 
                key={index}
                className="p-6 flex items-start gap-4 shadow-soft bg-card border-border/50 hover:border-accent/30 transition-smooth"
              >
                <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                <p className="text-foreground/90 leading-relaxed">
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
