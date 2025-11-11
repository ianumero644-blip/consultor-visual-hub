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
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Pacote Mensal Completo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para elevar sua comunicação digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-elegant transition-smooth border-border/50 bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
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
