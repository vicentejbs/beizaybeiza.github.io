import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Zap, Flame, ShieldCheck, AlertTriangle, Lightbulb, FileText, CheckCircle2, HelpCircle } from "lucide-react";
import heroAprende from "@/assets/hero-aprende.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const safetyTips = [
  {
    icon: ShieldCheck,
    title: "Nunca intervenga instalaciones usted mismo",
    description: "Las instalaciones eléctricas y de gas requieren conocimientos técnicos específicos. Intervenir sin capacitación puede poner en riesgo su vida y la de su familia."
  },
  {
    icon: AlertTriangle,
    title: "Ante una emergencia, corte el suministro",
    description: "Conozca la ubicación de su tablero eléctrico y llaves de paso de gas. En caso de emergencia, corte el suministro y evacúe antes de llamar a profesionales."
  },
  {
    icon: Lightbulb,
    title: "Mantenga sus instalaciones actualizadas",
    description: "Las instalaciones antiguas pueden no cumplir con la normativa actual. Una revisión periódica previene accidentes y puede reducir su consumo energético."
  }
];

const faqCategories = [
  {
    id: "electricidad",
    title: "Electricidad",
    icon: Zap,
    color: "primary",
    questions: [
      {
        q: "¿Qué es el Certificado TE1?",
        a: "El certificado TE1 es el documento oficial emitido por la SEC que acredita que una instalación eléctrica ha sido declarada por un instalador autorizado y cumple con la normativa vigente. Es indispensable para solicitar un nuevo empalme o aumento de capacidad."
      },
      {
        q: "¿Qué es el TC5?",
        a: "El TC5 es el formulario de Declaración de Instalación Eléctrica Interior que debe presentarse ante la SEC. Es obligatorio para toda instalación eléctrica nueva o modificación significativa. Este documento certifica que la instalación cumple con la normativa vigente y fue ejecutada por un instalador autorizado."
      },
      {
        q: "¿Cuándo debo regularizar mi instalación eléctrica?",
        a: "Debes regularizar cuando realizas ampliaciones en tu hogar o negocio, si tu instalación es muy antigua y no tiene planos actualizados, o si necesitas aumentar la potencia de tu empalme. Una instalación regularizada garantiza seguridad y respaldo legal ante siniestros."
      },
      {
        q: "¿Qué diferencia hay entre las clases SEC (A, B, C, D)?",
        a: "Las clases definen el alcance de lo que un instalador puede hacer. Clase A (Ingenieros) pueden realizar cualquier instalación sin límite de potencia. Clase B y C también tienen rangos amplios, mientras que Clase D (generalmente técnicos) está limitada a instalaciones de baja tensión con potencia instalada máxima de 10 kW. En Beiza y Beiza contamos con profesionales de todas las categorías."
      },
      {
        q: "¿Cuáles son las señales de una instalación eléctrica peligrosa?",
        a: "Presta atención a: olores a quemado, enchufes calientes o manchados, interruptores que chisporrotean, luces que parpadean constantemente o automáticos que saltan de forma frecuente sin sobrecarga aparente."
      }
    ]
  },
  {
    id: "gas",
    title: "Gas",
    icon: Flame,
    color: "secondary",
    questions: [
      {
        q: "¿Qué es el TC6?",
        a: "El TC6 es la Declaración de Instalaciones Interiores de Gas. Al igual que el TE1 para electricidad, este trámite inscribe tu instalación de gas (natural o GLP) ante la SEC, certificando que cumple con los estándares de seguridad exigidos por el Decreto 66."
      },
      {
        q: "¿Qué es el Sello Verde?",
        a: "Es un distintivo que certifica que las instalaciones de gas de un edificio o comunidad son seguras y cumplen con la normativa. Existen también el Sello Amarillo (con observaciones leves) y el Sello Rojo (instalación peligrosa que requiere arreglo urgente)."
      },
      {
        q: "¿Cómo detecto una fuga de gas?",
        a: "El olor a huevo podrido es el aditivo (mercaptano) que se le pone al gas para detectarlo, ya que el gas es inodoro. Si sientes este olor, ventila y no enciendas luces ni aparatos eléctricos. También puedes notar un aumento injustificado en tu cuenta o silbidos en las cañerías."
      },
      {
        q: "¿Cada cuánto debo hacer mantención a mis artefactos de gas?",
        a: "Se recomienda una mantención anual para calefones, calderas y estufas antes de que comience el invierno. Esto asegura una combustión eficiente (llama azul) y previene la emisión de monóxido de carbono."
      }
    ]
  },
  {
    id: "normativa",
    title: "Normativa SEC",
    icon: FileText,
    color: "primary",
    questions: [
      {
        q: "¿Qué es la SEC?",
        a: "La Superintendencia de Electricidad y Combustibles (SEC) es el organismo estatal encargado de vigilar que las personas cuenten con productos y servicios seguros y de calidad en los sistemas de electricidad y combustibles."
      },
      {
        q: "¿Por qué es importante contratar instaladores certificados SEC?",
        a: "Porque solo ellos han demostrado tener los conocimientos técnicos y normativos para realizar instalaciones seguras. Además, son los únicos autorizados legalmente para firmar planos y tramitar certificaciones válidas."
      },
      {
        q: "¿Qué multas aplica la SEC?",
        a: "La SEC puede aplicar multas importantes a propietarios que intervengan redes sin autorización o que mantengan instalaciones peligrosas. Además, en caso de siniestro (incendio), el seguro podría no cubrir los daños si la instalación no estaba certificada."
      },
      {
        q: "¿Dónde puedo verificar si un instalador está certificado?",
        a: "Puedes verificar la licencia de cualquier instalador directamente en el sitio web de la SEC (www.sec.cl) ingresando su RUT o nombre. En Ingeniería Beiza y Beiza, todos nuestros profesionales cuentan con su licencia al día."
      }
    ]
  }
];

const Aprende = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroAprende})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in mb-2">
            Centro de Aprendizaje
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-hero mb-6 animate-slide-up">
            Aprende con <span className="text-secondary">Ingeniería Beiza y Beiza</span>
          </h1>
          <p className="text-xl text-hero-muted max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Conoce más sobre instalaciones eléctricas, de gas y la normativa chilena.
            Información útil para mantener tu hogar seguro.
          </p>
        </div>
      </section>

      {/* Safety Tips Cards */}
      <section className="py-12 bg-background -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {safetyTips.map((tip, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.1} duration={0.5}>
                <div className="bg-primary p-8 h-full shadow-xl hover:-translate-y-1 transition-transform duration-300 text-primary-foreground border-2 border-primary/50 relative overflow-hidden group">
                  {/* Decorative background icon */}
                  <tip.icon className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 group-hover:text-white/10 transition-colors duration-300 transform rotate-12" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center mb-6">
                      <tip.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 leading-tight">
                      {tip.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-mesh-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Preguntas Frecuentes</span>
            <h2 className="font-heading text-4xl font-bold text-foreground mt-2">
              Todo lo que Necesitas Saber
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hemos recopilado las preguntas más comunes sobre instalaciones eléctricas, de gas y normativa SEC.
            </p>
          </AnimatedSection>

          <div className="space-y-12 max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <AnimatedSection key={category.id} animation="fade-up" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 ${category.color === 'secondary' ? 'bg-secondary/20' : 'bg-primary/10'}`}>
                    <category.icon className={`h-6 w-6 ${category.color === 'secondary' ? 'text-secondary-foreground' : 'text-primary'}`} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="bg-card border border-border overflow-hidden shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`} className="border-b border-border last:border-0 px-6">
                        <AccordionTrigger className="hover:no-underline py-5 text-left font-medium text-foreground hover:text-primary transition-colors">
                          <span className="flex items-start gap-3">
                            <HelpCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6 pl-8 leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-mesh-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-6 bg-white/10 backdrop-blur-sm border border-white/10">
            <p className="text-white/90 text-sm">
              <strong className="text-white">Nota Importante:</strong> Esta información es de carácter educativo y orientativo.
              Para cualquier trabajo de instalación, modificación o reparación, siempre debe contratar a profesionales certificados por la SEC.
              La seguridad de su hogar es lo más importante.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Aprende;
