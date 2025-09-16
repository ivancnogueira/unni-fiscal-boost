import { useState, useEffect } from "react";
import { CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const targetCount = 400;

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        current = targetCount;
        clearInterval(timer);
      }
      setCurrentCount(Math.floor(current));
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold animate-pulse">
                + de {currentCount} empresas atendidas
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Sua empresa pode estar pagando{" "}
              <span className="text-gradient-primary">até 30% a mais</span>{" "}
              de imposto sem perceber.
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Nós mostramos onde está o dinheiro escondido e blindamos você contra prejuízos fiscais. 
              <strong className="text-primary"> Unni Contabilidade</strong> – Especialista em empresas do Lucro Real 
              e em recuperação de créditos tributários.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Auditoria Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Conformidade Total</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Resultados Garantidos</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-hero text-lg px-8 py-6"
                onClick={scrollToContact}
              >
                Quero revisar meus impostos agora
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span className="text-sm">
                Usado por 400+ empresas que já recuperaram milhões em créditos
              </span>
            </div>
          </div>

          {/* Visual - 40% */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://unnicontabilidade.com.br/wp-content/uploads/2025/09/Slider_img-1-1.jpeg"
                  alt="Profissional de contabilidade analisando relatórios fiscais"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-card rounded-lg shadow-lg p-4 animate-fade-in-up">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Economia Média</div>
                      <div className="font-bold text-primary">R$ 150.000</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-card rounded-lg shadow-lg p-4 animate-slide-in-right">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Conformidade</div>
                      <div className="font-bold text-secondary">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;