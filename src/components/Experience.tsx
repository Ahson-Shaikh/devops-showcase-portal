
import { cn } from '@/lib/utils';

const experiences = [
  {
    id: 1,
    company: "Easypanel",
    position: "DevOps Engineer",
    period: "Dec 2024 - Present",
    location: "Remote",
    description: "Currently leading DevOps initiatives, focusing on web development and process automation."
  },
  {
    id: 2,
    company: "SphereOps",
    position: "Chief Executive Officer",
    period: "Dec 2024 - Present",
    location: "Pakistan · Remote",
    description: "Leading a specialized DevOps consulting firm focused on cloud infrastructure optimization and automation solutions."
  },
  {
    id: 3,
    company: "Connection",
    position: "DevOps Engineer",
    period: "Oct 2023 - Dec 2024",
    location: "United States · Hybrid",
    description: "Developed custom Terraform modules for Azure infrastructure. Deployed production-grade infrastructure on AWS with Terraform. Created Python-based backend systems integrated with Slack. Set up real-time monitoring for system metrics and syslogs."
  },
  {
    id: 4,
    company: "Net2Apps",
    position: "DevOps Engineer",
    period: "Feb 2023 - Oct 2023",
    location: "Hyderabad, Sindh, Pakistan",
    description: "Managed CloudFront cost optimization. Configured Grafana, Telegraf, and InfluxDB for real-time monitoring. Designed cloud architecture and implemented CI/CD with AWS CodeSuite. Worked on infrastructure provisioning with Terraform."
  },
  {
    id: 5,
    company: "Fiber Beam Private Limited",
    position: "IT Support Engineer & DevOps",
    period: "Nov 2020 - Feb 2023",
    location: "Karāchi, Sindh, Pakistan",
    description: "Managed servers and networking infrastructure. Built custom Docker images. Deployed Kubernetes clusters. Gained hands-on experience with Linux/Ubuntu/CentOS systems and AWS EC2 deployments."
  }
];

const ExperienceItem = ({ experience, isLeft }: { experience: typeof experiences[0], isLeft: boolean }) => {
  return (
    <div className={cn(
      "timeline-item mb-12 md:mb-0 reveal",
      isLeft ? "md:pr-12 md:text-right" : "md:pl-12",
      "md:w-1/2",
      isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
    )}>
      <div className="timeline-dot"></div>
      <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <span className="inline-block text-xs font-medium text-muted-foreground mb-2">{experience.period}</span>
        <h3 className="text-lg font-semibold">{experience.position}</h3>
        <h4 className="text-primary font-medium mb-2">{experience.company}</h4>
        <p className="text-sm text-muted-foreground mb-3">{experience.location}</p>
        <p className="text-sm leading-relaxed">{experience.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 mb-4 text-sm bg-accent rounded-full">My Journey</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="relative timeline">
          <div className="md:flex md:flex-wrap">
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={experience.id} 
                experience={experience}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
