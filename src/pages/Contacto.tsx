import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+56 9 7861 7592",
    subtitle: "Diego Beiza - Encargado",
    href: "tel:+56978617592",
  },
  {
    icon: Mail,
    title: "Email",
    value: "diegobeizas@beizaybeiza.cl",
    subtitle: "Respuesta en 24 horas",
    href: "mailto:diegobeizas@beizaybeiza.cl",
  },
  {
    icon: MapPin,
    title: "Cobertura",
    value: "Región Metropolitana, Chile",
    subtitle: "Visitas técnicas a domicilio",
    href: null,
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lunes a Viernes: 8:00 - 18:00",
    subtitle: "Sábados: 9:00 - 13:00",
    href: null,
  },
];

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">Contacto</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero mt-2 mb-6 animate-slide-up">
              Contáctanos
            </h1>
            <p className="text-xl text-hero-muted animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Estamos listos para ayudarte con tu próximo proyecto. 
              Solicita una cotización sin compromiso o agenda una visita técnica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection animation="slide-left" duration={0.6}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-4 mb-10">
                {contactInfo.map((item, index) => {
                  const Content = (
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 hover:-translate-x-1 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  );

                  return (
                    <AnimatedSection key={item.title} animation="fade-up" delay={index * 0.1} duration={0.4}>
                      {item.href ? (
                        <a href={item.href}>{Content}</a>
                      ) : (
                        Content
                      )}
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <AnimatedSection animation="scale" delay={0.5}>
                <a
                  href="https://wa.me/56978617592?text=Hola,%20me%20interesa%20solicitar%20información%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-green-600 text-primary-foreground font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] group"
                >
                  <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
                  Escríbenos por WhatsApp
                </a>
              </AnimatedSection>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-right" duration={0.6}>
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-hover transition-all duration-500">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Solicita un Presupuesto
                </h2>
                <p className="text-muted-foreground mb-8">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+56 9 XXXX XXXX"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="servicio">Servicio de interés</Label>
                      <select
                        id="servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 focus:scale-[1.02]"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="electrico">Instalaciones Eléctricas</option>
                        <option value="gas">Proyectos de Gas</option>
                        <option value="certificacion">Certificaciones SEC</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="auditoria">Auditoría Técnica</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      placeholder="Describe tu proyecto o consulta..."
                      rows={5}
                      className="transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 hover-glow transition-all duration-300 hover:scale-[1.02] group"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Contacto;
