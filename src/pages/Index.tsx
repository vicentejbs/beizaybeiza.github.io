import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactCTA } from "@/components/ContactCTA";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  Zap, 
  Flame, 
  ShieldCheck, 
  Wrench, 
  FileCheck, 
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Instalaciones Eléctricas",
    description: "Diseño, instalación y mantenimiento de sistemas eléctricos para todo tipo de proyectos.",
    items: ["Residencial y comercial", "Industrial y minería", "Subestaciones"],
  },
  {
    icon: Flame,
    title: "Proyectos de Gas",
    description: "Instalaciones de gas natural y GLP según normativa vigente.",
    items: ["Redes de gas", "Mediciones de monóxido", "Sellos verdes"],
  },
  {
    icon: FileCheck,
    title: "Certificaciones SEC",
    description: "Tramitación completa de certificados ante la Superintendencia.",
    items: ["Certificados TE1/TE4", "Ingreso de TC6", "Regularizaciones"],
  },
  {
    icon: ShieldCheck,
    title: "Auditorías Técnicas",
    description: "Evaluación completa de instalaciones existentes y detección de fallas.",
    items: ["Diagnóstico de fallas", "Informes técnicos", "Recomendaciones"],
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Servicios de mantenimiento preventivo y correctivo para sistemas eléctricos y de gas.",
    items: ["Preventivo programado", "Correctivo urgente", "Puesta a tierra"],
  },
  {
    icon: Users,
    title: "Supervisión de Obras",
    description: "Coordinación y supervisión técnica de proyectos electromecánicos.",
    items: ["Control de calidad", "Gestión de equipos", "Cumplimiento normativo"],
  },
];

const whyUsItems = [
  { number: "01", title: "Experiencia", desc: "Más de 20 años en el rubro eléctrico y de gas" },
  { number: "02", title: "Garantía", desc: "Garantizamos todas nuestras instalaciones" },
  { number: "03", title: "Seguridad", desc: "Cumplimiento estricto de normativas SEC" },
  { number: "04", title: "Servicio", desc: "Atención personalizada y post venta ágil" },
];

const features = [
  "Técnicos certificados por la SEC",
  "Garantía en todas nuestras instalaciones",
  "Atención personalizada y presupuestos sin compromiso",
  "Cobertura en toda la Región Metropolitana",
];

const Index = () => {
  return (
    <Layout>
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left" duration={0.7}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nosotros</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Expertos en Instalaciones Eléctricas y Gas
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                En <strong className="text-foreground">Beiza y Beiza</strong>, somos una empresa familiar 
                con más de 20 años de experiencia en el sector. Fundada por Enrique Beiza Huencho 
                y Diego Beiza Silva, ofrecemos soluciones integrales para proyectos residenciales, 
                comerciales e industriales.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((item, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={0.1 * index} duration={0.4}>
                    <li className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
              <Link to="/sobre-nosotros">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group hover-glow transition-all duration-300">
                  Conocer Más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <AnimatedSection animation="scale" delay={0.1}>
                  <div className="p-6 rounded-2xl bg-primary text-primary-foreground card-interactive hover-glow">
                    <Zap className="h-10 w-10 mb-4 animate-pulse-soft" />
                    <h3 className="font-heading font-bold text-lg mb-2">Electricidad</h3>
                    <p className="text-sm text-primary-foreground/80">Media y alta tensión, subestaciones, sistemas de potencia</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={0.3}>
                  <div className="p-6 rounded-2xl bg-muted card-interactive">
                    <ShieldCheck className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">Certificaciones</h3>
                    <p className="text-sm text-muted-foreground">TE1, TE4, TC6 y tramitaciones SEC</p>
                  </div>
                </AnimatedSection>
              </div>
              <div className="space-y-6 mt-12">
                <AnimatedSection animation="scale" delay={0.2}>
                  <div className="p-6 rounded-2xl bg-secondary card-interactive">
                    <Flame className="h-10 w-10 mb-4 text-secondary-foreground animate-pulse-soft" />
                    <h3 className="font-heading font-bold text-lg mb-2 text-secondary-foreground">Gas</h3>
                    <p className="text-sm text-secondary-foreground/80">Proyectos GLP y gas natural, mediciones y sellos verdes</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={0.4}>
                  <div className="p-6 rounded-2xl bg-muted card-interactive">
                    <Wrench className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">Mantenimiento</h3>
                    <p className="text-sm text-muted-foreground">Preventivo y correctivo, respuesta rápida</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Soluciones Integrales
            </h2>
            <p className="text-muted-foreground text-lg">
              Ofrecemos una amplia gama de servicios para satisfacer todas sus necesidades 
              en instalaciones eléctricas y de gas.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 0.1} duration={0.5}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  items={service.items}
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={0.6} className="text-center mt-12">
            <Link to="/servicios">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group hover-glow transition-all duration-300">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">¿Por qué elegirnos?</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Lo Hacemos Bien a la Primera
            </h2>
            <p className="text-muted-foreground text-lg">
              Nuestra filosofía de trabajo garantiza calidad, seguridad y cumplimiento normativo en cada proyecto.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsItems.map((item, index) => (
              <AnimatedSection key={item.number} animation="scale" delay={index * 0.15} duration={0.5}>
                <div className="text-center p-6 group cursor-default">
                  <span className="font-heading text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery />

      <ContactCTA />
    </Layout>
  );
};

export default Index;
