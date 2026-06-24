/**
 * Projects Section Component - Apple Style
 * Minimalist project showcase with clean cards
 */
export function Projects() {
  const experiences = [
    {
      id: 1,
      title: "Freelancer (Desktop Support Engineer)",
      company: "Self-Employed",
      period: "May 2025 - Present",
      description:
        "Providing comprehensive desktop support and system administration services. Setting up user profiles, managing software installations, troubleshooting application errors, and ensuring systems are protected with updated antivirus and security patches.",
      highlights: [
        "User profile and system settings configuration",
        "Software deployment and management",
        "Application troubleshooting and error resolution",
        "Network connectivity and printer support",
        "System security and antivirus management",
      ],
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663789728286/EMZDFGdKvNtZWiaQiTc5TU/project-showcase-1-ns7cCLizh4U4x5s8XgUFi3.webp",
    },
    {
      id: 2,
      title: "System Administrator",
      company: "Balaji Automotive TATA Motors",
      period: "Nov 2023 - May 2025",
      description:
        "Managed enterprise IT infrastructure with focus on system optimization, security protocols, and disaster recovery. Deployed critical upgrades, managed user access, and maintained comprehensive backup strategies.",
      highlights: [
        "Infrastructure deployment and configuration",
        "System optimization and performance monitoring",
        "Security and vulnerability management",
        "Data backup and disaster recovery",
        "Identity and access management",
        "Technology modernization initiatives",
      ],
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663789728286/EMZDFGdKvNtZWiaQiTc5TU/project-showcase-2-UcbT5TyLvQtAsa2rr6EpMf.webp",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-secondary border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16 md:mb-20">
          <h2 className="text-foreground mb-6">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A track record of delivering robust IT infrastructure solutions and exceptional technical support across diverse organizational environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-20 md:space-y-24">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-80 md:h-96 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover rounded-2xl hover:shadow-lg transition-shadow"
                />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div>
                  <h3 className="text-foreground">{exp.title}</h3>
                  <p className="text-accent font-medium mt-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-24 pt-24 border-t border-border">
          <h2 className="text-foreground mb-8">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-2xl">
              <h3 className="text-foreground font-semibold mb-2">Master of Computer Application</h3>
              <p className="text-accent font-medium">VTU</p>
              <p className="text-sm text-muted-foreground mt-2">2021</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <h3 className="text-foreground font-semibold mb-2">Bachelor of Computer Application</h3>
              <p className="text-accent font-medium">BU</p>
              <p className="text-sm text-muted-foreground mt-2">2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
