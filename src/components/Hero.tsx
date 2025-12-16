import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Flame, ShieldCheck, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero hero-pattern overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-in">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Certificados SEC | Región Metropolitana
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Instalaciones{" "}
            <span className="text-gradient-gold">Eléctricas</span> y{" "}
            <span className="text-gradient">Gas</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Soluciones integrales para proyectos residenciales, comerciales e industriales. 
            Garantizamos calidad, seguridad y cumplimiento normativo.
          </p>

          {/* Service Pills */}
          <div className="flex flex-wrap gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {[
              "Diseño de Proyectos",
              "Certificaciones TE1/TE4",
              "Mantenimiento",
              "Auditorías",
              "Redes de Gas",
              "Regularizaciones SEC",
            ].map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground/90"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 h-14 group">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 h-14">
                Ver Servicios
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-primary-foreground">+20</p>
              <p className="text-sm text-primary-foreground/60">Años de Experiencia</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary-foreground">100%</p>
              <p className="text-sm text-primary-foreground/60">Certificados SEC</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-6 w-6 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-primary-foreground">500+</p>
              <p className="text-sm text-primary-foreground/60">Proyectos Realizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
