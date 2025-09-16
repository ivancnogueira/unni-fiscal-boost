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
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-16 relative"
      style={{
        backgroundImage: 'url(https://unnicontabilidade.com.br/wp-content/uploads/2025/09/Slider_img-1-1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold animate-pulse">
                + de {currentCount} empresas atendidas
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Sua empresa pode estar pagando{" "}
              <span className="text-gradient-primary">até 70% a mais</span>{" "}
              de imposto sem perceber.
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Nós mostramos onde você está perdendo dinheiro e como otimizar sua carga tributária legalmente. Se você ainda não revisou seus impostos este ano, provavelmente está deixando dinheiro na mesa. E pior: pode estar correndo risco com a Receita sem nem perceber. Nós colocamos seu caixa para respirar e blindamos sua empresa contra prejuízos fiscais.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
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
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span className="text-sm">
                Usado por 400+ empresas que já recuperaram milhões em créditos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;