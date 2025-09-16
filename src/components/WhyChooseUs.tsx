import { AlertTriangle, DollarSign, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Você paga impostos que não deveria",
      description: "Muitas empresas pagam tributos desnecessários por falta de planejamento adequado. Nossa análise identifica onde você está perdendo dinheiro e como otimizar sua carga tributária legalmente.",
      highlight: "Reduza sua carga tributária legalmente",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: TrendingUp,
      title: "Deixa de recuperar créditos que são seus por direito",
      description: "Créditos tributários não aproveitados podem representar milhões em recursos presos. Identificamos e recuperamos valores que pertencem à sua empresa, melhorando seu fluxo de caixa.",
      highlight: "Recupere créditos tributários",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Corre risco de multas pesadas por falhas que nem sabia que existiam",
      description: "A legislação tributária muda constantemente. Mantemos sua empresa sempre em conformidade, evitando multas que podem chegar a milhões e protegendo sua reputação no mercado.",
      highlight: "Blindagem total contra multas",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Por Que Nos Escolher?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sua empresa pode estar enfrentando esses problemas críticos sem perceber. 
            Nós identificamos e solucionamos cada um deles.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="card-corporate group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Alert Badge */}
                <div className="absolute top-4 right-4">
                  <AlertTriangle className="w-6 h-6 text-orange-500 animate-pulse" />
                </div>

                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${problem.bgColor}`}>
                    <IconComponent className={`w-8 h-8 ${problem.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {problem.description}
                  </p>

                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${problem.bgColor} ${problem.color}`}>
                    {problem.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            A Solução: <span className="text-gradient-primary">Unni Contabilidade</span>
          </h3>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Com 12 anos de experiência e mais de 400 empresas atendidas, oferecemos uma abordagem 
            completa que vai além da contabilidade tradicional. Somos seus parceiros estratégicos 
            para maximizar resultados e minimizar riscos.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-muted-foreground">Redução Média de Impostos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">R$ 50M+</div>
              <div className="text-muted-foreground">Créditos Já Recuperados</div>
            </div>
          </div>

          <Button 
            className="btn-hero text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Quero uma Análise Gratuita da Minha Empresa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;