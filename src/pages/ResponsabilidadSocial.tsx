import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Heart, Users, Leaf, GraduationCap, Recycle, Briefcase } from "lucide-react";
import heroRse from "@/assets/hero-rse.png";
import rseCompromiso from "@/assets/trabajo-clima.jpg";

const initiatives = [
  {
    icon: Heart,
    title: "Apoyo a la Comunidad",
    description: "Participamos activamente en proyectos sociales de nuestra comunidad, brindando servicios y asesoría técnica.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: GraduationCap,
    title: "Educación y Capacitación",
    description: "Realizamos talleres gratuitos sobre seguridad eléctrica y uso responsable del gas para la comunidad.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad Ambiental",
    description: "Promovemos el uso de tecnologías eficientes y materiales sustentables en todos nuestros proyectos.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Heart,
    title: "Trabajo Voluntario",
    description: "Nuestro equipo dedica horas de trabajo voluntario a instituciones sin fines de lucro.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Recycle,
    title: "Gestión de Residuos",
    description: "Implementamos sistemas de reciclaje y disposición responsable de materiales en todas nuestras obras.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Users,
    title: "Desarrollo de Nuestro Equipo",
    description: "Invertimos en la capacitación continua y bienestar de nuestros colaboradores.",
    color: "bg-gray-50 text-gray-900",
  },
];

const impactStats = [
  { value: "50+", label: "Talleres Comunitarios" },
  { value: "100+", label: "Horas de Voluntariado" },
  { value: "30%", label: "Reducción de Residuos" },
  { value: "25+", label: "Familias Beneficiadas" },
];

const ResponsabilidadSocial = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-12 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroRse})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in mb-2">
            Responsabilidad Social Empresarial
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-hero mb-6 animate-slide-up">
            Comprometidos con <span className="text-secondary">Nuestro Entorno</span>
          </h1>
          <p className="text-xl text-hero-muted max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Más allá de la ingeniería, trabajamos por un futuro más sustentable y una comunidad más segura.
          </p>
        </div>
      </section>

      {/* Compromiso Section */}
      <section className="py-16 bg-mesh-light relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestro Propósito</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Ingeniería con Sentido Social
              </h2>
              <div className="space-y-8 text-lg text-foreground leading-relaxed font-medium max-w-lg">
                <p className="text-xl">
                  En Ingeniería Beiza y Beiza, entendemos que nuestro éxito empresarial está intrínsecamente
                  ligado al bienestar de nuestra comunidad y el cuidado del medio ambiente.
                </p>
                <p>
                  Nuestra política de RSE se basa en acciones concretas que generan un impacto positivo,
                  desde la educación en seguridad energética hasta prácticas sostenibles en cada instalación.
                </p>
                <p>
                  Creemos en el valor de compartir nuestro conocimiento técnico para prevenir accidentes
                  y mejorar la calidad de vida de las personas.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={0.2} className="relative h-full min-h-[500px]">
              <div className="overflow-hidden shadow-2xl relative h-full w-full group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={rseCompromiso}
                  alt="Compromiso Social"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6">
                    <p className="text-white text-lg font-medium italic">
                      "La seguridad no es solo nuestro trabajo, es nuestro aporte a la comunidad."
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pilares de Nuestra Gestión
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestras acciones se centran en áreas clave donde podemos generar el mayor valor social y ambiental.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 0.1}>
                <div className="bg-card p-8 h-full border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-14 h-14 ${item.color.split(" ")[0]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-7 w-7 ${item.color.split(" ")[1]}`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="block text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
                  <span className="text-sm md:text-base font-medium text-white/90">{stat.label}</span>
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

export default ResponsabilidadSocial;
