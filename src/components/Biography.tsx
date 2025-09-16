import { GraduationCap, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Biography = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Contador e Tributarista graduado em Direito pela Universidade Salgado de Oliveira, especializando em Controladoria e Finanças"
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "12 anos de atuação empresarial, ajudando diversas empresas a multiplicar seu faturamento e reduzir custos operacionais"
    },
    {
      icon: Award,
      title: "Especialização",
      description: "Especialista em reestruturação empresarial, planejamento tributário e conformidade fiscal para empresas do Lucro Real"
    },
    {
      icon: TrendingUp,
      title: "Resultados Mensuráveis",
      description: "Responsável pela recuperação de mais de R$ 50 milhões em créditos tributários para empresas clientes"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conheça Carlos Murilo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O especialista por trás da Unni Contabilidade, com mais de uma década 
              de experiência em otimização fiscal e recuperação de créditos tributários
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://res.cloudinary.com/dp66w1zpy/image/upload/v1757980443/Carlos/Imagem_do_WhatsApp_de_2025-09-15_%C3%A0_s_20.52.39_131580c1_dgkb4k.jpg"
                    alt="Carlos Murilo - Contador e Tributarista da Unni Contabilidade"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
                
                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-4 -right-4 bg-card rounded-lg shadow-lg p-4 animate-scale-in">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">12+</div>
                    <div className="text-xs text-muted-foreground">Anos de Experiência</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Formação e Experiência Profissional
                </h3>
                
                <div className="prose prose-lg text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    <strong className="text-primary">Carlos Murilo</strong> é contador e tributarista 
                    com sólida formação acadêmica, graduando em Direito pela Universidade Salgado de Oliveira, 
                    pós-graduado em Direito Tributário e Processo Tributário e atualmente especializando-se em Controladoria e Finanças.
                  </p>
                  
                  <p className="mb-4">
                    Com <strong>12 anos de experiência empresarial</strong>, Carlos já ajudou centenas de 
                    empresas a multiplicar seu faturamento e reduzir custos através de estratégias fiscais 
                    inteligentes e conformidade regulatória.
                  </p>
                  
                  <p>
                    Especialista reconhecido em <strong className="text-primary">reestruturação empresarial</strong> e 
                    <strong className="text-primary"> planejamento tributário</strong>, Carlos combina conhecimento 
                    técnico profundo com visão estratégica de negócios, garantindo que cada cliente obtenha 
                    o máximo de economia fiscal dentro da legalidade.
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 border-l-4 border-primary">
                  <div className="text-2xl font-bold text-primary">R$ 50M+</div>
                  <div className="text-sm text-muted-foreground">Em créditos recuperados</div>
                </div>
                <div className="bg-card rounded-lg p-4 border-l-4 border-secondary">
                  <div className="text-2xl font-bold text-secondary">400+</div>
                  <div className="text-sm text-muted-foreground">Empresas assessoradas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <div 
                  key={index}
                  className="card-corporate text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2 text-foreground">
                    {credential.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {credential.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Transforme sua gestão fiscal com a expertise do Carlos
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agende uma conversa exclusiva e descubra como podemos otimizar 
              a tributação da sua empresa de forma segura e eficiente.
            </p>
            <Button 
              className="btn-hero text-lg px-8 py-4"
              onClick={scrollToContact}
            >
              Quero Falar com Carlos Murilo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;