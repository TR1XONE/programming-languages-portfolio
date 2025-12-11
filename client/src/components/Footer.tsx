import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <section>
            <h3 className="heading-md mb-4">Om Rallies Universe</h3>
            <p className="text-muted-foreground">
              En omfattande guide till populära programmeringsspråk, deras funktioner och gemenskaper.
            </p>
          </section>

          {/* Quick Links */}
          <section>
            <h3 className="heading-md mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/languages" className="text-muted-foreground hover:text-primary transition-colors">
                  Språk
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="text-muted-foreground hover:text-primary transition-colors">
                  Jämförelse
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </section>

          {/* Resources */}
          <section>
            <h3 className="heading-md mb-4">Resurser</h3>
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
            © {currentYear} Rallies Universe. Alla rättigheter förbehållna.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Byggt med semantisk HTML, tillgänglighet och responsiv design i fokus.
          </p>
        </div>
      </div>
    </footer>
  );
}
