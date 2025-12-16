import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
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

const ResponsabilidadSocial = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, hsl(220, 20%, 12%) 0%, hsl(220, 18%, 18%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">RSE</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero mt-2 mb-6">
              Responsabilidad Social Empresarial
            </h1>
            <p className="text-xl text-hero-muted">
              En Beiza y Beiza creemos que el éxito empresarial debe ir de la mano 
              con el compromiso social y ambiental. Trabajamos para generar un impacto 
              positivo en nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro Compromiso
            </h2>
            <p className="text-muted-foreground text-lg">
              Desarrollamos iniciativas que reflejan nuestros valores y contribuyen 
              al bienestar de la comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative) => (
              <div key={initiative.title} className="p-8 rounded-2xl bg-card border border-border hover:shadow-hover transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{initiative.title}</h3>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nuestros Principios RSE
            </h2>
            <div className="space-y-6 text-left">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-heading font-bold text-foreground mb-2">Ética y Transparencia</h3>
                <p className="text-muted-foreground">
                  Actuamos con honestidad y transparencia en todas nuestras operaciones, 
                  manteniendo una comunicación clara con clientes, colaboradores y proveedores.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-heading font-bold text-foreground mb-2">Seguridad ante Todo</h3>
                <p className="text-muted-foreground">
                  La seguridad de nuestros colaboradores y clientes es nuestra prioridad. 
                  Cumplimos estrictamente con las normativas y promovemos prácticas seguras.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-heading font-bold text-foreground mb-2">Desarrollo Local</h3>
                <p className="text-muted-foreground">
                  Priorizamos la contratación local y el trabajo con proveedores de la región, 
                  contribuyendo al desarrollo económico de nuestra comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default ResponsabilidadSocial;
