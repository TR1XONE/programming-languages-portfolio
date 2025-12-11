import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const featuredLanguages = [
    { name: "Python", color: "#3776ab", icon: "🐍" },
    { name: "JavaScript", color: "#f7df1e", icon: "⚡" },
    { name: "Rust", color: "#ce422b", icon: "🦀" },
    { name: "Go", color: "#00add8", icon: "🐹" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="heading-display mb-6 leading-tight">
                Utforska Programmeringsspråk
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Upptäck funktionerna, användningsområdena och gemenskaperna bakom världens mest populära programmeringsspråk. Från Python till Rust, hitta rätt språk för ditt nästa projekt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/languages"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Utforska Språk <ArrowRight size={20} />
                </Link>
                <Link
                  href="/comparison"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Jämför Språk
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Languages Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="heading-lg mb-12 text-center">Utvalda Språk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-6 bg-card rounded-lg border border-border card-hover group"
                  style={{
                    borderTopColor: lang.color,
                    borderTopWidth: "3px",
                  }}
                >
                  <div className="text-4xl mb-4">{lang.icon}</div>
                  <h3 className="heading-md mb-2">{lang.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    Upptäck vad som gör {lang.name} speciellt och varför utvecklare älskar det.
                  </p>
                  <Link
                    href="/languages"
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    Läs Mer <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="heading-lg mb-12">Varför Lära Sig Programmeringsspråk?</h2>
            <ul className="space-y-4 max-w-2xl">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold mb-2">Utöka Dina Färdigheter</h3>
                  <p className="text-muted-foreground">
                    Att lära sig flera språk gör dig en mer mångsidig och värdefull utvecklare.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold mb-2">Lösa Olika Problem</h3>
                  <p className="text-muted-foreground">
                    Olika språk är bra på olika uppgifter. Välj rätt verktyg för jobbet.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold mb-2">Gå Med i Gemenskaper</h3>
                  <p className="text-muted-foreground">
                    Varje språk har en levande gemenskap redo att hjälpa och samarbeta.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold mb-2">Karriärmöjligheter</h3>
                  <p className="text-muted-foreground">
                    Flerspråkig kompetens öppnar dörrar till fler jobbmöjligheter.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="heading-lg mb-6">Redo att Komma Igång?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bläddra genom vår omfattande guide till programmeringsspråk och hitta ditt nästa favorit.
            </p>
            <Link
              href="/languages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Börja Utforska <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
