
import { LucideIcon, Cloud, Server, LayoutGrid, BarChart, GitBranch, Shield, Clock, Headphones, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    title: "DevSecOps Implementation",
    description: "Implement DevSecOps practices and security measures to protect cloud infrastructure and applications from vulnerabilities and threats.",
    icon: Shield,
  },
  {
    title: "24/7 DevOps Support",
    description: "Providing round-the-clock support for critical infrastructure, ensuring minimal downtime and rapid issue resolution for business continuity.",
    icon: Clock,
  },
  {
    title: "DevOps Consultation",
    description: "Expert consultation on DevOps strategy, tooling, and implementation to help organizations transition to modern deployment practices.",
    icon: Headphones,
  },
  {
    title: "Global DevOps Solutions",
    description: "Delivering DevOps solutions for organizations worldwide, leveraging cloud technologies to enable remote teams and distributed infrastructure.",
    icon: Globe,
  },
];

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => (
  <Card className="gradient-border card-hover h-full overflow-hidden">
    <CardContent className="bg-card p-6 h-full flex flex-col rounded-[calc(var(--radius)-1px)]">
      <div className="mb-4 p-3 gradient-bg rounded-lg inline-block">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 py-2 px-4 mb-4 rounded-full bg-accent">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium">Professional Services</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 gradient-text">DevOps Services & Support</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive DevOps solutions to help organizations automate, scale, and secure their infrastructure.
          </p>
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
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 opacity-30"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern -z-20"></div>
    </section>
  );
};

export default Services;
