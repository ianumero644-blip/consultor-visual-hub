import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Pricing = () => {
  const handleContact = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <section id="investimento" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Investimento
          </h2>
          <p className="text-lg text-muted-foreground">
            Valor fixo mensal, sem surpresas
          </p>
        </div>
        
        <Card className="relative overflow-hidden shadow-elegant bg-gradient-to-br from-card to-accent/5 border-accent/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="relative p-12 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Pacote Completo</span>
            </div>
            
            <div className="space-y-2">
              <div className="text-6xl md:text-7xl font-display font-bold text-foreground">
                R$ 600
              </div>
              <div className="text-xl text-muted-foreground font-light">
                por mês
              </div>
            </div>
            
            <div className="max-w-md mx-auto space-y-3 text-muted-foreground">
              <p>✓ 8 carrosséis profissionais</p>
              <p>✓ 4 vídeos editados</p>
              <p>✓ Alinhamento visual completo</p>
              <p>✓ 1 rodada de ajustes por peça</p>
            </div>
            
            <Button 
              size="lg"
              onClick={handleContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-smooth text-lg px-10 py-6 rounded-full mt-6"
            >
              Quero Iniciar Meu Projeto
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
