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
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold px-2">
            Prazos de Entrega
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Transparência e previsibilidade para o seu planejamento
          </p>
        </div>
        
        <Card className="p-5 sm:p-6 md:p-8 shadow-elegant bg-card border-border/50">
          <div className="space-y-4 sm:space-y-6">
            {timelines.map((timeline, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-3 sm:py-4 border-b border-border/30 last:border-0"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base text-foreground">
                    {timeline.item}
                  </span>
                </div>
                <span className="text-sm sm:text-base text-muted-foreground font-light pl-7 sm:pl-0">
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
