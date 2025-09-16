import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <AlertCircle className="w-24 h-24 text-primary mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground leading-relaxed">
            A página que você está procurando não existe ou foi movida para outro local.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            className="btn-hero"
            onClick={() => window.location.href = "/"}
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar para o início
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Ou entre em contato conosco se você acredita que isso é um erro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
