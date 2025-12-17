import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { Users, Target, Award, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import fotoDiego from "@/assets/foto-diego.jpg";
import fotoEnrique from "@/assets/foto-enrique.jpg";
import fotoVicente from "@/assets/foto-vicente.jpg";
import heroBgNosotros from "@/assets/hero-bg-nosotros.jpg";

const team = [
  {
    name: "Enrique Beiza Huencho",
    role: "Técnico Superior en Gas",
    description: "Especialista en proyectos de media y baja presión en gas natural y GLP. Experto en mediciones de monóxido, tramitación de sellos verdes y certificaciones TC6 ante la SEC. Más de 20 años de experiencia ejecutando redes de gas con soldadura plata según Decreto 66/2007.",
    email: "ebeizah@beizaybeiza.cl",
    linkedin: "https://linkedin.com/in/enrique-beiza-17b1786a",
    image: fotoEnrique,
  },
  {
    name: "Diego Beiza Silva",
    role: "Eléctrico SEC A | Despachador de Carga",
    description: "Profesional técnico-práctico especializado en supervisión y mantenimiento de sistemas eléctricos de media y alta tensión. Experiencia en sectores minero, energético y construcción. Coordinación operativa en tiempo real mediante SCADA, gestión de proyectos electromecánicos.",
    email: "diegobeizas@beizaybeiza.cl",
    linkedin: "https://linkedin.com/in/diego-beiza-008b27183",
    image: fotoDiego,
  },
  {
    name: "Vicente Beiza Silva",
    role: "Soporte Técnico y Marketing Digital",
    description: "Estudiante de Ingeniería Civil Telemática en UTFSM. Apoyo en operaciones técnicas y desarrollo digital de la empresa. Experiencia en Python, JavaScript, SQL y sistemas de comunicación. Responsable de la presencia digital y marketing de Beiza y Beiza.",
    email: "vicentebeizas@beizaybeiza.cl",
    linkedin: "https://linkedin.com/in/vicentebeizas",
    image: fotoVicente,
  },
];

const values = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description: "Brindar soluciones integrales en instalaciones eléctricas y de gas, garantizando seguridad, calidad y cumplimiento normativo en cada proyecto que realizamos.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Nuestra Visión",
    description: "Ser reconocidos como líderes en servicios eléctricos y de gas en Chile, destacando por nuestra excelencia técnica, compromiso con la seguridad y atención personalizada.",
    color: "secondary",
  },
  {
    icon: Award,
    title: "Nuestros Valores",
    description: "Responsabilidad, honestidad, compromiso con la calidad y seguridad. Trabajamos con la filosofía de \"hacerlo bien a la primera\" en cada proyecto que emprendemos.",
    color: "primary",
  },
];

const SobreNosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgNosotros})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">Sobre Nosotros</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero mt-2 mb-6 animate-slide-up">
              Una Empresa Familiar con Valores Sólidos
            </h1>
            <p className="text-xl text-hero-muted animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Beiza y Beiza nace de la unión de experiencia, conocimiento técnico y 
              compromiso familiar. Somos especialistas en instalaciones eléctricas y de gas 
              con más de 20 años sirviendo a la Región Metropolitana.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 0.15} duration={0.5}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 h-full group">
                  <div className={`w-14 h-14 rounded-xl ${item.color === 'secondary' ? 'bg-secondary/20' : 'bg-primary/10'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-7 w-7 ${item.color === 'secondary' ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestro Equipo</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Los Profesionales Detrás de Beiza y Beiza
            </h2>
            <p className="text-muted-foreground text-lg">
              Un equipo familiar comprometido con la excelencia y la satisfacción del cliente.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} animation="scale" delay={index * 0.15} duration={0.5}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-hover transition-all duration-500 hover:-translate-y-2 group h-full">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto border-2 border-primary/20 group-hover:border-primary group-hover:scale-105 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground text-center mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-primary text-sm text-center font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6">{member.description}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
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

export default SobreNosotros;
