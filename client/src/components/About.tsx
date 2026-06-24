/**
 * About Section Component - Apple Style
 * Clean, minimal layout with professional bio
 */
export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 order-2 md:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663789728286/EMZDFGdKvNtZWiaQiTc5TU/project-showcase-2-UcbT5TyLvQtAsa2rr6EpMf.webp"
              alt="Digital creativity"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h2 className="text-foreground mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm Amith H A, a dedicated IT professional with expertise in system administration, desktop support, and infrastructure management. Based in Bangalore, I bring strong technical knowledge and hands-on experience across Windows environments, cloud platforms, and enterprise systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a background in both system administration and desktop support engineering, I excel at optimizing application performance, managing infrastructure deployments, and resolving complex technical challenges. I'm committed to delivering innovative solutions and embracing new technological advancements.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-6">
              <h3 className="text-foreground">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Windows 10/11",
                  "System Administration",
                  "AWS Cloud (EC2, VPC, S3)",
                  "Network Configuration",
                  "Infrastructure Management",
                  "Disaster Recovery",
                  "Active Directory",
                  "IT Support",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-border transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-4">
              <h3 className="text-foreground">Core Competencies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Innovative problem-solving with creative and effective solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Strong analytical and troubleshooting capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Excellent communication and team collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Leadership and mentoring abilities</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity mt-4"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
