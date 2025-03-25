
const skillsData = [
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Azure", "GCP"],
    icon: "☁️",
  },
  {
    category: "IaC & Configuration",
    skills: ["Terraform", "CloudFormation", "Ansible"],
    icon: "🏗️",
  },
  {
    category: "Containerization",
    skills: ["Docker", "Kubernetes", "EKS", "Helm"],
    icon: "📦",
  },
  {
    category: "CI/CD",
    skills: ["Jenkins", "BitBucket Pipelines", "AWS CodePipeline", "GitHub Actions"],
    icon: "⚙️",
  },
  {
    category: "Monitoring",
    skills: ["Grafana", "Telegraf", "InfluxDB", "CloudWatch"],
    icon: "📊",
  },
  {
    category: "Programming",
    skills: ["Python", "Bash", "NodeJS", "JavaScript"],
    icon: "💻",
  },
  {
    category: "Networking",
    skills: ["VPC", "Subnets", "VPN", "LoadBalancers", "API Gateway"],
    icon: "🔌",
  },
  {
    category: "Database",
    skills: ["MySQL", "RDS", "DynamoDB"],
    icon: "🗃️",
  },
];

const SkillCard = ({ category, skills, icon }) => (
  <div className="skill-card bg-white rounded-xl p-6 shadow-sm transition-all duration-300 h-full border border-border/50 reveal">
    <div className="text-2xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-3">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="inline-block text-xs font-medium bg-accent px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-accent/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 mb-4 text-sm bg-background rounded-full">Technical Proficiency</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => (
            <SkillCard 
              key={index}
              category={skillGroup.category}
              skills={skillGroup.skills}
              icon={skillGroup.icon}
            />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/50 rounded-full blur-3xl -z-10 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/50 rounded-full blur-3xl -z-10 opacity-30"></div>
    </section>
  );
};

export default Skills;
