import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <section>
            <h3 className="heading-md mb-4">About ProLang</h3>
            <p className="text-muted-foreground">
              A comprehensive guide to popular programming languages, their features, and communities.
            </p>
          </section>

          {/* Quick Links */}
          <section>
            <h3 className="heading-md mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/languages" className="text-muted-foreground hover:text-primary transition-colors">
                  Languages
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="text-muted-foreground hover:text-primary transition-colors">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </section>

          {/* Resources */}
          <section>
            <h3 className="heading-md mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Stack Overflow
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dev.to
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ProLang Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Built with semantic HTML, accessibility, and responsiveness in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
