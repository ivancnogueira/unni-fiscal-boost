import { ArrowRight, Clock, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const urgencyPoints = [
    {
      icon: Clock,
      title: "Tempo é dinheiro",
      description: "A cada dia que passa, você pode estar perdendo oportunidades de economia fiscal"
    },
    {
      icon: Shield,
      title: "Conformidade urgente", 
      description: "A Reforma Fiscal está chegando. Prepare sua empresa antes que seja tarde"
    },
    {
      icon: TrendingUp,
      title: "Créditos esperando",
      description: "Milhões em créditos tributários podem estar parados, esperando para voltar ao seu caixa"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="final-cta" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-95"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Pare de Perder Dinheiro com Impostos Desnecessários
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Sua empresa merece pagar apenas o que deve. Nada mais, nada menos. 
            <strong> Comece sua transformação fiscal hoje mesmo.</strong>
          </p>

          {/* Urgency Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {urgencyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                  <p className="text-white/80 text-sm">{point.description}</p>
                </div>
              );
            })}
          </div>

          {/* Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              O que você ganha com nossa consultoria:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <strong>Auditoria fiscal completa e gratuita</strong> - Identificamos todos os pontos de economia
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <strong>Recuperação de créditos tributários</strong> - Dinheiro que já é seu voltando para o caixa
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <strong>Planejamento fiscal estratégico</strong> - Redução legal e permanente de impostos
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <strong>Conformidade total garantida</strong> - Tranquilidade para focar no crescimento
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-12 py-6 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              Quero Minha Análise Fiscal Gratuita Agora
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-white/80 text-sm">
              ✅ Sem compromisso • ✅ Análise 100% gratuita • ✅ Resultados em até 48h
            </p>
          </div>

          {/* Guarantee */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 border border-white/30">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Garantia de 100% de conformidade ou seu dinheiro de volta
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;