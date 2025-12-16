import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { Book, Zap, Flame, ShieldCheck, AlertTriangle } from "lucide-react";

const guides = [
  {
    icon: Zap,
    category: "Electricidad",
    title: "¿Qué es el Certificado TE1?",
    description: "El certificado TE1 es un documento oficial emitido por un instalador eléctrico autorizado que acredita que una instalación eléctrica cumple con la normativa vigente. Es obligatorio para todo inmueble que se conecte a la red eléctrica.",
    tips: [
      "Es obligatorio para nuevas instalaciones y ampliaciones",
      "Debe ser emitido por un instalador SEC Clase A o B",
      "Tiene una vigencia indefinida mientras no se modifique la instalación",
      "Se requiere para obtener suministro eléctrico definitivo"
    ]
  },
  {
    icon: ShieldCheck,
    category: "Normativa",
    title: "Reglamento de Instalaciones de Consumidores (RIC)",
    description: "El RIC establece las condiciones mínimas de seguridad que deben cumplir las instalaciones eléctricas de consumidores. Conocerlo es fundamental para garantizar instalaciones seguras.",
    tips: [
      "Define los calibres de cables según carga",
      "Establece las protecciones obligatorias",
      "Indica las distancias mínimas de seguridad",
      "Regula la puesta a tierra"
    ]
  },
  {
    icon: Flame,
    category: "Gas",
    title: "Instalaciones de Gas: Lo que debes saber",
    description: "Las instalaciones de gas requieren de profesionales certificados y deben cumplir con el Decreto 66/2007. La seguridad es primordial en este tipo de proyectos.",
    tips: [
      "Solo técnicos certificados pueden realizar instalaciones",
      "Las pruebas de hermeticidad son obligatorias",
      "Se requiere ventilación adecuada en espacios cerrados",
      "La medición de monóxido es esencial"
    ]
  },
  {
    icon: AlertTriangle,
    category: "Seguridad",
    title: "Señales de Alerta en tu Instalación",
    description: "Aprende a identificar problemas potenciales en tus instalaciones eléctricas y de gas antes de que se conviertan en emergencias.",
    tips: [
      "Olor a quemado o chispas en enchufes",
      "Cortes de luz frecuentes o fusibles que saltan",
      "Luces que parpadean o bajan de intensidad",
      "Olor a gas o llamas de color anormal"
    ]
  },
];

const Aprende = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero hero-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Centro de Aprendizaje</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Aprende con Beiza y Beiza
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Compartimos nuestro conocimiento técnico para que puedas entender mejor 
              las normativas vigentes y tomar decisiones informadas sobre tus instalaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {guides.map((guide) => (
              <div key={guide.title} className="p-8 rounded-2xl bg-card border border-border hover:shadow-hover transition-all">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <guide.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{guide.title}</h3>
                    <p className="text-muted-foreground text-lg">{guide.description}</p>
                  </div>
                  <div className="lg:w-1/3 lg:border-l lg:border-border lg:pl-8">
                    <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Book className="h-4 w-4 text-primary" />
                      Puntos Clave
                    </h4>
                    <ul className="space-y-3">
                      {guide.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> Esta información es de carácter educativo. 
              Para trabajos de instalación o reparación, siempre contrate a profesionales certificados. 
              Las instalaciones eléctricas y de gas requieren conocimientos técnicos especializados.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Aprende;
