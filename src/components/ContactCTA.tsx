import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

export const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(220, 20%, 12%) 0%, hsl(220, 18%, 18%) 100%)' }}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="scale" className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-hero mb-4">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-xl text-hero-muted mb-8">
            Contáctanos hoy y obtén una cotización personalizada sin compromiso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/56978617592?text=Hola,%20me%20interesa%20solicitar%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-primary-foreground font-semibold text-lg px-8 h-14 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                WhatsApp
              </Button>
            </a>
            <a href="tel:+56978617592" className="group">
              <Button size="lg" variant="outline" className="border-white/40 text-hero bg-white/10 hover:bg-white/20 font-semibold text-lg px-8 h-14 w-full sm:w-auto transition-all duration-300 hover:scale-105">
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                +56 9 7861 7592
              </Button>
            </a>
            <Link to="/contacto" className="group">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 h-14 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover-glow">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
