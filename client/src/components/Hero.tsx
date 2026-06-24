import { Link } from "wouter";

/**
 * Hero Section Component - Apple Style
 * Minimalist design with large typography and clean layout
 */
export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-foreground leading-tight">
                System Administrator & IT Professional
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Specialized in infrastructure management, system optimization, and enterprise IT solutions. Delivering robust technical support and innovative solutions across Windows and cloud environments.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/#projects">
                <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                  View Experience
                </a>
              </Link>
              <Link href="/#contact">
                <a className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors">
                  Get In Touch
                </a>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">8+</p>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">2+</p>
                <p className="text-sm text-muted-foreground mt-2">Roles Mastered</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block relative h-96 md:h-full">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663789728286/EMZDFGdKvNtZWiaQiTc5TU/project-showcase-1-ns7cCLizh4U4x5s8XgUFi3.webp"
              alt="Professional workspace"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
