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
  CheckCircle2,
  ChevronRight
} from "lucide-react";

import trabajoTablero from "@/assets/trabajo-tablero.jpg";
import trabajoMedidor from "@/assets/trabajo-medidor.jpg";
import trabajoTecnico from "@/assets/trabajo-tecnico.jpg";
import trabajoClima from "@/assets/trabajo-clima.jpg";
import auditoriaImg from "@/assets/trabajo-tecnico.jpg";
import trabajoTransformador from "@/assets/trabajo-transformador.jpg";
import trabajoPoste from "@/assets/trabajo-poste.jpg";

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
    items: ["Certificados TE1/TE4", "Ingreso de TC5/TC6", "Regularizaciones"],
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
      <section className="py-12 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection animation="slide-left" duration={0.7}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nosotros</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Expertos en Instalaciones Eléctricas y Gas
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                En <strong className="text-foreground">Ingeniería Beiza y Beiza</strong>, somos una empresa familiar
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
                  <div className="p-6 bg-primary text-primary-foreground card-interactive hover-glow">
                    <Zap className="h-10 w-10 mb-4 animate-pulse-soft" />
                    <h3 className="font-heading font-bold text-lg mb-2">Electricidad</h3>
                    <p className="text-sm text-primary-foreground/80">Media y alta tensión, subestaciones, sistemas de potencia</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={0.3}>
                  <div className="p-6 bg-muted card-interactive">
                    <ShieldCheck className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">Certificaciones</h3>
                    <p className="text-sm text-muted-foreground">TE1, TE4, TC5/TC6 y tramitaciones SEC</p>
                  </div>
                </AnimatedSection>
              </div>
              <div className="space-y-6 mt-12">
                <AnimatedSection animation="scale" delay={0.2}>
                  <div className="p-6 bg-secondary card-interactive">
                    <Flame className="h-10 w-10 mb-4 text-secondary-foreground animate-pulse-soft" />
                    <h3 className="font-heading font-bold text-lg mb-2 text-secondary-foreground">Gas</h3>
                    <p className="text-sm text-secondary-foreground/80">Proyectos GLP y gas natural, mediciones y sellos verdes</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={0.4}>
                  <div className="p-6 bg-muted card-interactive">
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
      <section className="py-16 bg-mesh-light relative overflow-hidden">
        {/* Background Decorative Title */}
        <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
          <span className="text-[15rem] font-bold font-heading whitespace-nowrap leading-none pl-10 text-foreground">
            SERVICIOS
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-24">
            {/* Left Column - Information (60%) */}
            <div className="lg:col-span-7 space-y-16">
              <AnimatedSection animation="fade-up" className="max-w-2xl">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
                  Nuestros Servicios
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Soluciones <span className="text-primary">Integrales</span> y Profesionales
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ofrecemos una amplia gama de servicios especializados para satisfacer todas sus necesidades en instalaciones eléctricas, de gas y certificaciones.
                </p>
              </AnimatedSection>

              <div className="space-y-12">
                {/* Service Block 1 */}
                <AnimatedSection animation="fade-up" delay={0.1} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Zap className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      Instalaciones Eléctricas
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-lg">
                      Diseño, ejecución y mantenimiento de proyectos eléctricos residenciales, comerciales e industriales bajo normativa SEC vigente.
                    </p>
                    <Link to="/servicios" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                      Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Service Block 2 */}
                <AnimatedSection animation="fade-up" delay={0.2} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                      <Flame className="h-7 w-7 text-secondary-foreground group-hover:text-foreground transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-secondary-foreground transition-colors">
                      Proyectos de Gas
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-lg">
                      Instalaciones seguras de gas natural y GLP, tramitación de sellos verdes y conversiones energéticas eficientes.
                    </p>
                    <Link to="/servicios" className="inline-flex items-center text-sm font-semibold text-secondary-foreground hover:text-secondary-foreground/80 transition-colors">
                      Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Service Block 3 */}
                <AnimatedSection animation="fade-up" delay={0.3} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <ShieldCheck className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      Certificaciones SEC
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-lg">
                      Gestión integral de trámites TE1, TE4, TC5 y TC6. Regularizaciones y declaraciones ante la Superintendencia.
                    </p>
                    <Link to="/servicios" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                      Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Column - Visual (40%) */}
            <div className="lg:col-span-5 hidden lg:flex flex-col gap-6 pt-10">
              <AnimatedSection animation="scale" delay={0.2} className="h-64 overflow-hidden shadow-lg relative group">
                <img
                  src={trabajoTablero}
                  alt="Instalaciones Eléctricas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={0.3} className="h-64 rounded-2xl overflow-hidden shadow-lg relative group translate-x-8">
                <img
                  src={trabajoMedidor}
                  alt="Proyectos de Gas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={0.4} className="h-64 rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src={trabajoTecnico}
                  alt="Certificaciones"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </AnimatedSection>
            </div>
          </div>

          {/* Other Services Subsection */}
          <div className="py-16 mt-20 bg-background/40 border border-border/50 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.6]" />
            <div className="relative z-10 px-6">
              <div className="flex flex-col items-center mb-12">
                <span className="bg-muted px-4 py-1 text-xs font-bold text-muted-foreground border border-border uppercase tracking-widest mb-2">
                  Servicios Complementarios
                </span>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Otras Soluciones
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 - Auditorías Técnicas */}
                <AnimatedSection animation="fade-up" delay={0.5} className="group relative h-80 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image Layer */}
                  <div className="absolute inset-0">
                    <img
                      src={auditoriaImg}
                      alt="Auditorías Técnicas"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Default Content (Bottom Label) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-xl text-white">
                        Auditorías Técnicas
                      </h4>
                      <div className="bg-primary/20 backdrop-blur-md p-2 rounded-full border border-primary/50 group-hover:bg-primary transition-colors duration-300">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay (Slide Up) */}
                  <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="mb-4 w-12 h-12 bg-white/10 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-white mb-4">
                      Auditorías Técnicas
                    </h4>
                    <p className="text-white/90 leading-relaxed mb-6">
                      Evaluación exhaustiva de instalaciones para garantizar seguridad, eficiencia y cumplimiento normativo. Diagnóstico preciso para la detección temprana de fallas.
                    </p>
                    <span className="text-white font-semibold text-sm inline-flex items-center">
                      Solicitar inspección <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </AnimatedSection>

                {/* Card 2 - Mantenimiento */}
                <AnimatedSection animation="fade-up" delay={0.6} className="group relative h-80 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image Layer */}
                  <div className="absolute inset-0">
                    <img
                      src={trabajoTransformador}
                      alt="Mantenimiento"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Default Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-xl text-white">
                        Mantenimiento
                      </h4>
                      <div className="bg-primary/20 backdrop-blur-md p-2 border border-primary/50 group-hover:bg-primary transition-colors duration-300">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-secondary/95 backdrop-blur-sm p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="mb-4 w-12 h-12 bg-black/10 flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-secondary-foreground mb-4">
                      Mantenimiento
                    </h4>
                    <p className="text-secondary-foreground/90 leading-relaxed mb-6">
                      Planes preventivos y correctivos personalizados para asegurar la continuidad operativa de sus equipos y sistemas eléctricos y de gas.
                    </p>
                    <span className="text-secondary-foreground font-semibold text-sm inline-flex items-center">
                      Ver planes <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </AnimatedSection>

                {/* Card 3 - Supervisión de Obras */}
                <AnimatedSection animation="fade-up" delay={0.7} className="group relative h-80 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image Layer */}
                  <div className="absolute inset-0">
                    <img
                      src={trabajoPoste}
                      alt="Supervisión de Obras"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Default Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-xl text-white">
                        Supervisión de Obras
                      </h4>
                      <div className="bg-primary/20 backdrop-blur-md p-2 border border-primary/50 group-hover:bg-primary transition-colors duration-300">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="mb-4 w-12 h-12 bg-white/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-white mb-4">
                      Supervisión de Obras
                    </h4>
                    <p className="text-white/90 leading-relaxed mb-6">
                      Control riguroso de calidad, plazos y seguridad en terreno. Gestión técnica experta para garantizar el éxito de sus proyectos electromecánicos.
                    </p>
                    <span className="text-white font-semibold text-sm inline-flex items-center">
                      Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-12">
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
