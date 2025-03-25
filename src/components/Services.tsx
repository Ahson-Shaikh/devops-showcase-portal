
import { LucideIcon, Cloud, Server, LayoutGrid, BarChart, GitBranch, Shield } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const services = [
  {
    title: "Cloud Infrastructure",
    description: "Design, implement, and optimize AWS and Azure cloud environments with high availability, scalability, and security in mind.",
    icon: Cloud,
  },
  {
    title: "DevOps Automation",
    description: "Build efficient CI/CD pipelines to automate testing, building, and deployment processes, reducing delivery time and improving software quality.",
    icon: GitBranch,
  },
  {
    title: "Containerization",
    description: "Implement Docker and Kubernetes solutions for application containerization, ensuring consistent deployment across environments.",
    icon: LayoutGrid,
  },
  {
    title: "Infrastructure as Code",
    description: "Develop and maintain infrastructure using Terraform and CloudFormation to enable consistent, version-controlled, and repeatable deployments.",
    icon: Server,
  },
  {
    title: "Monitoring & Observability",
    description: "Set up comprehensive monitoring solutions using Grafana, InfluxDB, and other tools to ensure system health and performance visibility.",
    icon: BarChart,
  },
  {
    title: "Security Implementation",
    description: "Implement DevSecOps practices and security measures to protect cloud infrastructure and applications from vulnerabilities and threats.",
    icon: Shield,
  },
];

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => (
  <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 reveal h-full border border-border/50">
    <div className="mb-4 p-3 bg-accent inline-block rounded-lg">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 mb-4 text-sm bg-accent rounded-full">Offerings</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Services I Provide</h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
