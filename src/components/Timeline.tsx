import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const timelines = [
  { item: "1 carrossel", time: "36 horas" },
  { item: "2 carrosséis", time: "3 dias" },
  { item: "Vídeo", time: "3 dias após captação" },
  { item: "Entregas semanais", time: "2 carrosséis + 1 vídeo" },
  { item: "Ajustes", time: "1 rodada inclusa por peça" },
];

const Timeline = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Prazos de Entrega
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparência e previsibilidade para o seu planejamento
          </p>
        </div>
        
        <Card className="p-8 shadow-elegant bg-card border-border/50">
          <div className="space-y-6">
            {timelines.map((timeline, index) => (
              <div 
                key={index}
                className="flex items-center justify-between py-4 border-b border-border/30 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-medium text-foreground">
                    {timeline.item}
                  </span>
                </div>
                <span className="text-muted-foreground font-light">
                  {timeline.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Timeline;
