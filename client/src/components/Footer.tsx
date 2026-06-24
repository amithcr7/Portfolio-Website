/**
 * Footer Component - Apple Style
 * Minimalist footer with clean links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-semibold text-lg text-foreground">
              Amith H A
            </span>
            <p className="text-sm text-muted-foreground">
              System Administrator & IT Professional. Based in Bangalore.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:9980769143"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  9980769143
                </a>
              </li>
              <li>
                <a
                  href="mailto:amith1529@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  amith1529@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { name: "LinkedIn", icon: "in" },
                { name: "GitHub", icon: "gh" },
                { name: "Twitter", icon: "tw" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-border hover:bg-accent hover:text-white transition-colors text-xs font-bold"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Amith H A. All rights reserved. Designed with care.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
