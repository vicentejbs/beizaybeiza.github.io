import { AnimatedSection } from "@/hooks/useScrollAnimation";
import trabajoMedidor from "@/assets/trabajo-medidor.jpg";
import trabajoPoste from "@/assets/trabajo-poste.jpg";
import trabajoTablero from "@/assets/trabajo-tablero.jpg";
import trabajoClima from "@/assets/trabajo-clima.jpg";
import trabajoTransformador from "@/assets/trabajo-transformador.jpg";
import trabajoTecnico from "@/assets/trabajo-tecnico.jpg";

const projects = [
  { image: trabajoMedidor, title: "Instalación de Medidor", category: "Electricidad" },
  { image: trabajoTablero, title: "Tablero de Distribución", category: "Electricidad" },
  { image: trabajoTransformador, title: "Transformador Eléctrico", category: "Alta Tensión" },
  { image: trabajoClima, title: "Climatización", category: "Mantenimiento" },
  { image: trabajoPoste, title: "Instalación de Postes", category: "Proyectos" },
  { image: trabajoTecnico, title: "Trabajo en Terreno", category: "Equipo" },
];

export const ProjectGallery = () => {
  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestros Trabajos</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Proyectos Realizados
          </h2>
          <p className="text-muted-foreground text-lg">
            Conoce algunos de los trabajos que hemos realizado para nuestros clientes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 0.1} duration={0.5}>
              <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-background font-heading font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={0.6} className="text-center mt-8">
          <a
            href="https://www.instagram.com/ingenieriabeiza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover-glow transition-all duration-300 group"
          >
            <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Ver más en Instagram
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
