import { Layout } from "@/components/Layout";
import { ContactCTA } from "@/components/ContactCTA";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    
    // Simulate form submission
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
      <section className="py-20 bg-hero hero-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contacto</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Estamos listos para ayudarte con tu próximo proyecto. 
              Solicita una cotización sin compromiso o agenda una visita técnica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:+56978617592"
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+56 9 7861 7592</p>
                    <p className="text-sm text-muted-foreground">Diego Beiza - Encargado</p>
                  </div>
                </a>

                <a
                  href="mailto:diegobeizas@beizaybeiza.cl"
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">diegobeizas@beizaybeiza.cl</p>
                    <p className="text-sm text-muted-foreground">Respuesta en 24 horas</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Cobertura</p>
                    <p className="text-muted-foreground">Región Metropolitana, Chile</p>
                    <p className="text-sm text-muted-foreground">Visitas técnicas a domicilio</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horario</p>
                    <p className="text-muted-foreground">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="text-sm text-muted-foreground">Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/56978617592?text=Hola,%20me%20interesa%20solicitar%20información%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-green-600 text-primary-foreground font-semibold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
                Escríbenos por WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-card border border-border">
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
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="servicio">Servicio de interés</Label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Contacto;
