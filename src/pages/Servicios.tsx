import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  Zap, 
  Flame, 
  ShieldCheck, 
  Wrench, 
  FileCheck, 
  Users,
  Lightbulb,
  Settings,
  Battery,
  Sun
} from "lucide-react";

const electricServices = [
  {
    icon: Zap,
    title: "Instalaciones Eléctricas",
    description: "Diseño e instalación de sistemas eléctricos completos para proyectos residenciales, comerciales e industriales.",
    items: ["Tableros eléctricos", "Canalizaciones", "Iluminación", "Enchufes y circuitos"]
  },
  {
    icon: Settings,
    title: "Media y Alta Tensión",
    description: "Supervisión y ejecución de proyectos en sistemas de media y alta tensión.",
    items: ["Subestaciones", "Líneas de transmisión", "Sistemas SCADA", "Control y comando"]
  },
  {
    icon: ShieldCheck,
    title: "Puesta a Tierra",
    description: "Instalación y medición de sistemas de puesta a tierra según normativa.",
    items: ["Diseño de mallas", "Mediciones", "Certificaciones", "Mantención"]
  },
  {
    icon: Sun,
    title: "Energía Solar",
    description: "Instalación de sistemas fotovoltaicos para autoconsumo y reducción de costos energéticos.",
    items: ["Paneles solares", "Inversores", "Baterías", "Net billing"]
  },
];

const gasServices = [
  {
    icon: Flame,
    title: "Proyectos de Gas",
    description: "Diseño y ejecución de redes de gas natural y GLP según Decreto 66/2007.",
    items: ["Gas natural", "GLP", "Soldadura plata", "Pruebas de hermeticidad"]
  },
  {
    icon: Battery,
    title: "Mediciones de Monóxido",
    description: "Mediciones de monóxido corregido en ductos secundarios para garantizar seguridad.",
    items: ["Ductos secundarios", "Informes técnicos", "Correcciones", "Certificaciones"]
  },
  {
    icon: Lightbulb,
    title: "Sellos Verdes",
    description: "Tramitación de sellos verdes en edificios y casas ante la SEC.",
    items: ["Edificios", "Casas", "Certificación SEC", "Documentación"]
  },
];

const certificationServices = [
  {
    icon: FileCheck,
    title: "Certificados TE1/TE4",
    description: "Tramitación completa de certificados de instalación eléctrica ante la SEC.",
    items: ["TE1 domiciliario", "TE4 industrial", "Regularizaciones", "Ampliaciones"]
  },
  {
    icon: Users,
    title: "Ingreso TC6",
    description: "Tramitación de certificados TC6 ante la Superintendencia de Electricidad y Combustibles.",
    items: ["Instalaciones de gas", "Documentación SEC", "Seguimiento", "Aprobación"]
  },
  {
    icon: Wrench,
    title: "Auditorías y Diagnóstico",
    description: "Evaluación técnica de instalaciones existentes y detección de fallas.",
    items: ["Detección de fallas", "Informes técnicos", "Recomendaciones", "Planes de mejora"]
  },
];

const Servicios = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(220, 20%, 12%) 0%, hsl(220, 18%, 18%) 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">Nuestros Servicios</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero mt-2 mb-6 animate-slide-up">
              Soluciones Integrales en Electricidad y Gas
            </h1>
            <p className="text-xl text-hero-muted animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Ofrecemos una amplia gama de servicios técnicos especializados, 
              desde instalaciones residenciales hasta proyectos industriales complejos. 
              Todos certificados y según normativa SEC vigente.
            </p>
          </div>
        </div>
      </section>

      {/* Electric Services */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-left" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Servicios Eléctricos
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Instalaciones eléctricas profesionales con certificación SEC para todo tipo de proyectos.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {electricServices.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 0.1} duration={0.5}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.items.map((item, i) => (
                          <span 
                            key={item} 
                            className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground group-hover:bg-primary/10 group-hover:text-foreground transition-all duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gas Services */}
      <section className="py-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-right" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Flame className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Servicios de Gas
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Proyectos de gas natural y GLP según normativa vigente, con técnicos certificados.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {gasServices.map((service, index) => (
              <AnimatedSection key={service.title} animation="scale" delay={index * 0.15} duration={0.5}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li 
                        key={item} 
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-150 transition-transform duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Services */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-left" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Certificaciones y Auditorías
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Tramitación de certificados SEC y auditorías técnicas profesionales.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {certificationServices.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 0.15} duration={0.5}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li 
                        key={item} 
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Servicios;
