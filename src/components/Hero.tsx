import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Flame, ShieldCheck, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  "Diseño de Proyectos",
  "Certificaciones TE1/TE4",
  "Mantenimiento",
  "Auditorías",
  "Redes de Gas",
  "Regularizaciones SEC",
];

export const Hero = () => {
  const [counts, setCounts] = useState({ years: 0, percent: 0, projects: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        years: Math.round(20 * easeOut),
        percent: Math.round(100 * easeOut),
        projects: Math.round(500 * easeOut),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(220, 20%, 12%) 0%, hsl(220, 18%, 18%) 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "0.75s" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 border border-primary/50 mb-8 animate-fade-in hover:bg-primary/40 transition-colors cursor-default">
            <ShieldCheck className="h-4 w-4 text-secondary animate-pulse-soft" />
            <span className="text-sm font-medium text-hero">
              Certificados SEC | Región Metropolitana
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-hero mb-6 animate-slide-up">
            Instalaciones{" "}
            <span className="text-gradient-gold">Eléctricas</span> y{" "}
            <span className="text-gradient">Gas</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-hero-muted mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Soluciones integrales para proyectos residenciales, comerciales e industriales. 
            Garantizamos calidad, seguridad y cumplimiento normativo.
          </p>

          {/* Service Pills */}
          <div className="flex flex-wrap gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {services.map((service, index) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-hero-muted hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 h-14 group hover-glow transition-all duration-300">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="border-white/40 text-hero bg-white/10 hover:bg-white/20 hover:border-white/60 font-semibold text-lg px-8 h-14 transition-all duration-300">
                Ver Servicios
              </Button>
            </Link>
          </div>

          {/* Stats with counter animation */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-3xl font-bold text-hero counter-animate">+{counts.years}</p>
              <p className="text-sm text-hero-muted group-hover:text-hero transition-colors duration-300">Años de Experiencia</p>
            </div>
            <div className="group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-3xl font-bold text-hero counter-animate">{counts.percent}%</p>
              <p className="text-sm text-hero-muted group-hover:text-hero transition-colors duration-300">Certificados SEC</p>
            </div>
            <div className="group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-3xl font-bold text-hero counter-animate">{counts.projects}+</p>
              <p className="text-sm text-hero-muted group-hover:text-hero transition-colors duration-300">Proyectos Realizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
