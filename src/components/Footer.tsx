import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Atendimento em todo Brasil"
    },
    {
      icon: Phone, 
      title: "Telefone",
      content: "(11) 9 9999-9999"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@unnicontabilidade.com.br"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta: 8h às 18h"
    }
  ];

  const quickLinks = [
    { label: "Sobre Nós", href: "#about" },
    { label: "Nossos Serviços", href: "#services" },
    { label: "Por Que Escolher", href: "#why-choose" },
    { label: "Contato", href: "#contact" },
  ];

  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "LGPD", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold">Unni Contabilidade</span>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-6">
              Especialistas em otimização fiscal e recuperação de créditos tributários. 
              Mais de 12 anos transformando a gestão fiscal de empresas em todo o Brasil.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{info.title}</div>
                      <div className="text-background/80 text-sm">{info.content}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="corporate-link text-background/80 hover:text-background block transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <h4 className="text-lg font-bold mt-8 mb-4">Legal</h4>
            <div className="space-y-3">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="corporate-link text-background/80 hover:text-background block transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-background/80 mb-4 text-sm leading-relaxed">
              Receba dicas exclusivas sobre otimização fiscal e atualizações 
              da legislação tributária diretamente no seu email.
            </p>
            
            <div className="space-y-4">
              <Input 
                type="email"
                placeholder="Seu melhor email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="btn-hero w-full">
                Inscrever-se
              </Button>
            </div>

            <p className="text-xs text-background/60 mt-3">
              Ao se inscrever, você concorda com nossa Política de Privacidade 
              e pode cancelar a qualquer momento.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/80 text-sm text-center md:text-left">
              © {currentYear} Unni Contabilidade. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-background/60">
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>•</span>
              <span>CRC: SP-000000/O-0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;