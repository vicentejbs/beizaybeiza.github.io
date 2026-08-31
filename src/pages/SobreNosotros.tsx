import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { Users, Target, Award, Linkedin, Mail, Calendar, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import fotoDiego from "@/assets/foto-diego.jpg";
import fotoEnrique from "@/assets/foto-enrique.jpg";
import fotoVicente from "@/assets/foto-vicente.jpg";
import heroNosotros from "@/assets/hero-nosotros.png";
import secLogo from "@/assets/logo-beiza.jpg";

const team = [
  {
    name: "Enrique Beiza Huencho",
    role: "Autorizado SEC Gas Clase 2 | Electricidad Clase D",
    description: "Técnico Superior en Gas con más de 20 años de experiencia. Autorizado SEC Gas Clase 2 y Electricidad Clase D. Especialista en proyectos de media y baja presión en gas natural y GLP. Experto en mediciones de monóxido, tramitación de sellos verdes y certificaciones TC5/TC6 ante la SEC. Docente capacitador en INACAP y Profesor de Normativa SEC, impartiendo cursos de Técnicas de Gasfitería, Reparación y Mantención, e Instalaciones de Calefacción.",
    email: "ebeizah@beizaybeiza.cl",
    linkedin: "https://linkedin.com/in/enrique-beiza-17b1786a",
    image: fotoEnrique,
  },
  {
    name: "Diego Beiza Silva",
    role: "Ingeniero Eléctrico | Eléctrico SEC A",
    description: "Profesional técnico-práctico especializado en supervisión y mantenimiento de sistemas eléctricos de media y alta tensión. Experiencia en sectores minero, energético y construcción. Coordinación operativa en tiempo real mediante SCADA, gestión de proyectos electromecánicos.",
    email: "diegobeizas@beizaybeiza.cl",
    linkedin: "https://linkedin.com/in/diego-beiza-008b27183",
    image: fotoDiego,
  },
  {
    name: "Vicente Beiza Silva",
    role: "Soporte Técnico y Marketing Digital",
    description: "Estudiante de Ingeniería Civil Telemática en UTFSM. Apoyo en operaciones técnicas y desarrollo digital de la empresa. Experiencia en Python, JavaScript, SQL y sistemas de comunicación. Responsable de la presencia digital y marketing de Ingeniería Beiza y Beiza.",
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

const trajectory = [
  {
    year: "2010",
    title: "Inicio y Compromiso",
    desc: "Enrique Beiza inicia su camino como TÉCNICO NIVEL SUPERIOR EN INSTALACIONES DE GAS, marcando el comienzo de un compromiso familiar por buscar el bienestar y seguridad de nuestros clientes."
  },
  {
    year: "2019",
    title: "Consolidación Profesional",
    desc: "Diego Beiza se titula y comienza a ejercer su carrera. Es en este momento cuando la empresa se consolida con dos profesionales capaces, uniendo experiencia técnica e ingeniería moderna."
  },
  {
    year: "Actualidad",
    title: "Crecimiento Continuo",
    desc: "Un camino lleno de proyectos realizados con la mejor determinación y disposición posible. Seguimos creciendo y perfeccionándonos para entregar el mejor servicio."
  }
];

const SobreNosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroNosotros})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">Sobre Nosotros</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero mt-2 mb-6 animate-slide-up">
              Una Empresa Familiar con Valores Sólidos
            </h1>
            <p className="text-xl text-hero-muted animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Ingeniería Beiza y Beiza nace de la unión de experiencia, conocimiento técnico y
              compromiso familiar. Somos especialistas en instalaciones eléctricas y de gas
              con más de 20 años sirviendo a la Región Metropolitana.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 bg-mesh-light relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection animation="fade-up" className="space-y-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestra Historia</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Visión y Pasión por la Excelencia
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ingeniería Beiza y Beiza nace de la visión de dos ingenieros apasionados por entregar
                  soluciones técnicas de alta calidad en el ámbito eléctrico y de gas.
                </p>
                <p>
                  Desde nuestros inicios, hemos trabajado incansablemente para convertirnos en un
                  referente de confianza y profesionalismo en la Región Metropolitana.
                </p>
                <p>
                  Nuestro compromiso con la seguridad, el cumplimiento normativo y la satisfacción
                  del cliente nos ha permitido crecer y consolidarnos como una empresa líder en el sector.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2} className="relative">
              <div className="aspect-video bg-muted overflow-hidden shadow-2xl relative group">
                {/* Decorative Elements replacing image for now using CSS/Colors since no specific history image was provided */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Calendar className="h-10 w-10 text-primary" />
                    </div>
                    <span className="font-heading font-bold text-5xl text-foreground">20+</span>
                    <p className="text-muted-foreground font-medium mt-2 mb-6">Años de Trayectoria</p>
                    <img src={secLogo} alt="Autorizado SEC" className="h-16 w-auto mx-auto bg-white/80 rounded p-1 backdrop-blur-sm" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="py-16 bg-muted bg-grid-pattern overflow-hidden relative">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestro Camino</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Una Trayectoria de Esfuerzo y Crecimiento
            </h2>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {trajectory.map((milestone, index) => (
                <AnimatedSection key={milestone.year} animation="fade-up" delay={index * 0.2} className={`relative flex items-center md:justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-card p-6 border border-border shadow-sm hover:border-primary/50 transition-colors">
                      <span className="text-3xl font-bold text-primary font-heading block mb-2">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-primary border-4 border-background md:-translate-x-1/2 z-10 shadow-lg" />

                  {/* Empty Space for alignment */}
                  <div className="hidden md:block flex-1" />

                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores (Moved here) */}
      <section className="py-12 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestra Esencia</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Lo Que Nos Define
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 0.15} duration={0.5}>
                <div className="p-8 bg-card border border-border hover:border-primary/30 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 h-full group">
                  <div className={`w-14 h-14 ${item.color === 'secondary' ? 'bg-secondary/20' : 'bg-primary/10'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
      <section className="py-16 bg-mesh-dark overflow-hidden relative">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestro Equipo</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Conoce a Nuestros Profesionales
            </h2>
            <p className="text-white/80 text-lg">
              Un equipo familiar con la experiencia y certificaciones para garantizar trabajos de la más alta calidad.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} animation="scale" delay={index * 0.15} duration={0.5}>
                <div className="p-8 bg-card border border-border hover:shadow-hover transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col items-center">
                  <div className="w-40 h-40 overflow-hidden mb-6 border-4 border-primary/10 group-hover:border-primary group-hover:scale-105 transition-all duration-300 shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground text-center mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-primary text-sm text-center font-bold mb-4 uppercase tracking-wide">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6 text-center leading-relaxed flex-grow">{member.description}</p>

                  <div className="flex justify-center gap-4 mt-auto">
                    <a
                      href={`mailto:${member.email}`}
                      className="group/btn flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary text-foreground hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
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
