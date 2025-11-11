import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const carouselDetails = [
  "8 carrosséis por mês",
  "Layout limpo e profissional",
  "1 carrossel entregue em até 36 horas após envio do material",
  "2 carrosséis entregues em até 3 dias",
];

const videoDetails = [
  "4 vídeos por mês",
  "Edição vertical otimizada para redes sociais",
  "Legendas dinâmicas com animações",
  "Correção profissional de cor",
  "Entrega em 3 dias após a captação",
];

const DeliveryDetails = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Detalhes das Entregas
          </h2>
          <p className="text-lg text-muted-foreground">
            Qualidade e agilidade em cada entrega
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-6 shadow-soft bg-card border-border/50">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-2">
                Carrosséis
              </h3>
              <p className="text-muted-foreground">
                Design impecável para suas postagens
              </p>
            </div>
            
            <ul className="space-y-4">
              {carouselDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{detail}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-8 space-y-6 shadow-soft bg-card border-border/50">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-2">
                Vídeos
              </h3>
              <p className="text-muted-foreground">
                Edição profissional que engaja
              </p>
            </div>
            
            <ul className="space-y-4">
              {videoDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{detail}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliveryDetails;
