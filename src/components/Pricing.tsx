import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Pricing = () => {
  const handleContact = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <section id="investimento" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold px-2">
            Investimento
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Mediante contrato
          </p>
        </div>
        
        <Card className="relative overflow-hidden shadow-elegant bg-gradient-to-br from-card to-accent/5 border-accent/20">
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="relative p-6 sm:p-8 md:p-12 text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 text-accent">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Pacote Completo</span>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground">
                R$ 600
              </div>
              <div className="text-base sm:text-lg md:text-xl text-muted-foreground font-light">
                por mês
              </div>
            </div>
            
            <div className="max-w-md mx-auto space-y-2.5 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>✓ 8 carrosséis profissionais</p>
              <p>✓ 4 vídeos editados</p>
              <p>✓ Alinhamento visual completo</p>
              <p>✓ 1 rodada de ajustes por peça</p>
            </div>
            
            <Button 
              size="lg"
              onClick={handleContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-smooth text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-full mt-4 sm:mt-6 w-full sm:w-auto"
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
