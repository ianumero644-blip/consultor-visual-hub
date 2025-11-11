import { Card } from "@/components/ui/card";
import { Image, Video, Palette, Calendar } from "lucide-react";

const features = [
  {
    icon: Image,
    title: "8 Carrosséis",
    description: "Design elegante, textos estratégicos, estética refinada",
  },
  {
    icon: Video,
    title: "4 Vídeos",
    description: "Edição vertical, ritmo dinâmico, legendas animadas",
  },
  {
    icon: Palette,
    title: "Alinhamento Visual",
    description: "Perfeita harmonia com a identidade do consultor",
  },
  {
    icon: Calendar,
    title: "Consistência Mensal",
    description: "Planejamento estratégico para presença contínua",
  },
];

const PackageDescription = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold px-2">
            Pacote Mensal Completo
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Tudo que você precisa para elevar sua comunicação digital
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 sm:p-8 hover:shadow-elegant transition-smooth border-border/50 bg-card"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-display font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackageDescription;
