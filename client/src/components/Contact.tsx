import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Section Component - Apple Style
 * Clean contact form with minimal design
 */
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Interested in collaborating or have a project in mind? Let's connect and discuss how I can help with your IT infrastructure and support needs.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 bg-secondary rounded-2xl">
              <p className="text-sm text-muted-foreground mb-2">Phone</p>
              <a href="tel:9980769143" className="text-lg font-medium text-accent hover:opacity-80 transition-opacity">
                9980769143
              </a>
            </div>
            <div className="p-6 bg-secondary rounded-2xl">
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <a href="mailto:amith1529@gmail.com" className="text-lg font-medium text-accent hover:opacity-80 transition-opacity">
                amith1529@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none bg-white"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="pt-16 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-8">
              Or connect with me on social media
            </p>
            <div className="flex justify-center gap-6">
              {[
                { name: "LinkedIn", url: "#", icon: "in" },
                { name: "GitHub", url: "#", icon: "gh" },
                { name: "Twitter", url: "#", icon: "tw" },
                { name: "Email", url: "mailto:amith1529@gmail.com", icon: "em" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors text-sm font-medium"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
