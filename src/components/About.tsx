
import { useTransition } from './TransitionProvider';

const About = () => {
  return (
    <section id="about" className="section-padding bg-accent/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 mb-4 text-sm bg-background rounded-full">About Me</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional Overview</h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-square relative rounded-3xl overflow-hidden reveal">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl"></div>
              <div className="absolute inset-[3px] bg-background rounded-3xl flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-semibold mb-4">Ahson Shaikh</h3>
                  <p className="text-muted-foreground mb-4">DevOps Engineer</p>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="font-medium">Experience:</span>
                      <span>4+ Years</span>
                    </p>
                    <div className="h-px w-full bg-border"></div>
                    <p className="flex justify-between">
                      <span className="font-medium">Location:</span>
                      <span>Remote</span>
                    </p>
                    <div className="h-px w-full bg-border"></div>
                    <p className="flex justify-between">
                      <span className="font-medium">Availability:</span>
                      <span>Full-time</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="space-y-4 reveal">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">About My Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a seasoned DevOps Engineer with around 4 years of experience, I bring a distinctive blend of technical expertise and practical knowledge in managing both on-premises data centers and cloud infrastructure. My professional journey began as a Network & Support Engineer, where I excelled in designing and maintaining on-premises data centers, showcasing my meticulous attention to detail and adept troubleshooting skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In my current role, I have evolved my skills by taking charge of cloud infrastructure, overseeing the design, implementation, and maintenance of CI/CD pipelines. I leverage my proficiency in automation and cloud technologies, particularly AWS, to enhance operational efficiency and scalability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise extends to utilizing tools such as Docker, Linux, Ansible, and Grafana to automate and monitor various processes, demonstrating my ability to navigate complex infrastructure challenges with ease.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-background p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Cloud Engineering</h4>
                  <p className="text-sm text-muted-foreground">Expert in AWS architecture and infrastructure automation</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">CI/CD Pipelines</h4>
                  <p className="text-sm text-muted-foreground">Building efficient development workflows</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Infrastructure as Code</h4>
                  <p className="text-sm text-muted-foreground">Terraform, CloudFormation expertise</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Containerization</h4>
                  <p className="text-sm text-muted-foreground">Docker, Kubernetes orchestration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/50 rounded-full blur-3xl -z-10 opacity-30"></div>
    </section>
  );
};

export default About;
