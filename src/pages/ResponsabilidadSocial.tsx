import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Heart, Users, Leaf, GraduationCap } from "lucide-react";

const initiatives = [
  {
    icon: Users,
    title: "Comunidad",
    description: "Apoyamos a nuestra comunidad local con servicios técnicos solidarios y asesorías gratuitas para familias de escasos recursos.",
  },
  {
    icon: Leaf,
    title: "Medio Ambiente",
    description: "Promovemos el uso de energías renovables y prácticas sostenibles en todas nuestras instalaciones.",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    description: "Compartimos conocimiento técnico a través de charlas y capacitaciones sobre seguridad eléctrica y de gas.",
  },
  {
    icon: Heart,
    title: "Bienestar",
    description: "Cuidamos el bienestar de nuestro equipo y sus familias, promoviendo un ambiente de trabajo seguro y saludable.",
  },
];

const principles = [
  {
    title: "Ética y Transparencia",
    description: "Actuamos con honestidad y transparencia en todas nuestras operaciones, manteniendo una comunicación clara con clientes, colaboradores y proveedores.",
  },
  {
    title: "Seguridad ante Todo",
    description: "La seguridad de nuestros colaboradores y clientes es nuestra prioridad. Cumplimos estrictamente con las normativas y promovemos prácticas seguras.",
  },
  {
    title: "Desarrollo Local",
    description: "Priorizamos la contratación local y el trabajo con proveedores de la región, contribuyendo al desarrollo económico de nuestra comunidad.",
  },
];

const ResponsabilidadSocial = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(220, 20%, 12%) 0%, hsl(220, 18%, 18%) 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-1/4 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">RSE</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero mt-2 mb-6 animate-slide-up">
              Responsabilidad Social Empresarial
            </h1>
            <p className="text-xl text-hero-muted animate-slide-up" style={{ animationDelay: "0.1s" }}>
              En Beiza y Beiza creemos que el éxito empresarial debe ir de la mano 
              con el compromiso social y ambiental. Trabajamos para generar un impacto 
              positivo en nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro Compromiso
            </h2>
            <p className="text-muted-foreground text-lg">
              Desarrollamos iniciativas que reflejan nuestros valores y contribuyen 
              al bienestar de la comunidad.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <AnimatedSection key={initiative.title} animation="scale" delay={index * 0.15} duration={0.5}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-hover hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <initiative.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{initiative.title}</h3>
                      <p className="text-muted-foreground">{initiative.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nuestros Principios RSE
              </h2>
            </AnimatedSection>
            
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <AnimatedSection key={principle.title} animation={index % 2 === 0 ? "slide-left" : "slide-right"} delay={index * 0.15} duration={0.5}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:shadow-hover hover:border-primary/30 transition-all duration-500 group">
                    <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default ResponsabilidadSocial;
