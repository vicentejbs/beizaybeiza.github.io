import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, items }: ServiceCardProps) => {
  return (
    <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-hover transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {items && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
