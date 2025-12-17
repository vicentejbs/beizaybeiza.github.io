import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, items }: ServiceCardProps) => {
  return (
    <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 cursor-default h-full">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {items && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-150 transition-transform duration-300" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
