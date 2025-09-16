import { CheckCircle, FileCheck, Calculator, TrendingUp } from "lucide-react";

const CredibilityBar = () => {
  const trustIndicators = [
    {
      icon: CheckCircle,
      title: "Revisamos sua apuração de tributos de forma minuciosa",
      description: "Análise detalhada de todos os processos fiscais"
    },
    {
      icon: TrendingUp,
      title: "Identificamos valores pagos a mais e recuperamos para o seu caixa",
      description: "Recuperação de créditos tributários não utilizados"
    },
    {
      icon: Calculator,
      title: "Planejamos sua gestão contábil e tributária de olho na Reforma Fiscal",
      description: "Você já entra preparado para as mudanças"
    },
    {
      icon: FileCheck,
      title: "Garantimos conformidade total para que você cresça sem medo da Receita",
      description: "Tranquilidade e segurança jurídica completa"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresas que confiam em nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso compromisso é entregar resultados mensuráveis e conformidade total
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div 
                key={index}
                className="card-corporate text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 text-foreground leading-tight">
                  {indicator.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              400+
            </div>
            <div className="text-muted-foreground">Empresas Atendidas</div>
          </div>
          
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              R$ 50M+
            </div>
            <div className="text-muted-foreground">Créditos Recuperados</div>
          </div>
          
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              12 anos
            </div>
            <div className="text-muted-foreground">De Experiência</div>
          </div>
          
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-muted-foreground">Conformidade</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;