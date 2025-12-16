import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { Users, Target, Award, Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Enrique Beiza Huencho",
    role: "Técnico Superior en Gas",
    description: "Especialista en proyectos de media y baja presión en gas natural y GLP. Experto en mediciones de monóxido, tramitación de sellos verdes y certificaciones TC6 ante la SEC. Más de 20 años de experiencia ejecutando redes de gas con soldadura plata según Decreto 66/2007.",
    email: "ebeizah@beizaybeiza.cl",
    linkedin: "https://linkedin.com/in/enrique-beiza-17b1786a",
  },
  {
    name: "Diego Beiza Silva",
    role: "Eléctrico SEC A | Despachador de Carga",
    description: "Profesional técnico-práctico especializado en supervisión y mantenimiento de sistemas eléctricos de media y alta tensión. Experiencia en sectores minero, energético y construcción. Coordinación operativa en tiempo real mediante SCADA, gestión de proyectos electromecánicos.",
    email: "diegobeizas@beizaybeiza.cl",
    linkedin: "https://linkedin.com/in/diego-beiza-008b27183",
  },
  {
    name: "Vicente Beiza Silva",
    role: "Soporte Técnico y Marketing Digital",
    description: "Estudiante de Ingeniería Civil Telemática en UTFSM. Apoyo en operaciones técnicas y desarrollo digital de la empresa. Experiencia en Python, JavaScript, SQL y sistemas de comunicación. Responsable de la presencia digital y marketing de Beiza y Beiza.",
    email: "vicentebeizas@beizaybeiza.cl",
    linkedin: "https://linkedin.com/in/vicentebeizas",
  },
];

const SobreNosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero hero-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Sobre Nosotros</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Una Empresa Familiar con Valores Sólidos
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Beiza y Beiza nace de la unión de experiencia, conocimiento técnico y 
              compromiso familiar. Somos especialistas en instalaciones eléctricas y de gas 
              con más de 20 años sirviendo a la Región Metropolitana.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Brindar soluciones integrales en instalaciones eléctricas y de gas, 
                garantizando seguridad, calidad y cumplimiento normativo en cada proyecto 
                que realizamos.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Ser reconocidos como líderes en servicios eléctricos y de gas en Chile, 
                destacando por nuestra excelencia técnica, compromiso con la seguridad 
                y atención personalizada.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Nuestros Valores</h3>
              <p className="text-muted-foreground">
                Responsabilidad, honestidad, compromiso con la calidad y seguridad. 
                Trabajamos con la filosofía de "hacerlo bien a la primera" en cada 
                proyecto que emprendemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestro Equipo</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Los Profesionales Detrás de Beiza y Beiza
            </h2>
            <p className="text-muted-foreground text-lg">
              Un equipo familiar comprometido con la excelencia y la satisfacción del cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="p-8 rounded-2xl bg-card border border-border hover:shadow-hover transition-all">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <span className="font-heading text-2xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground text-center mb-1">{member.name}</h3>
                <p className="text-primary text-sm text-center font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.description}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default SobreNosotros;
