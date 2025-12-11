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
                Explore Programming Languages
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover the features, use cases, and communities behind the world's most popular programming languages. From Python to Rust, find the right language for your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/languages"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Explore Languages <ArrowRight size={20} />
                </Link>
                <Link
                  href="/comparison"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Compare Languages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Languages Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="heading-lg mb-12 text-center">Featured Languages</h2>
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
                    Discover what makes {lang.name} special and why developers love it.
                  </p>
                  <Link
                    href="/languages"
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="heading-lg mb-12">Why Learn Programming Languages?</h2>
            <ul className="space-y-4 max-w-2xl">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold mb-2">Expand Your Skills</h3>
                  <p className="text-muted-foreground">
                    Learning multiple languages makes you a more versatile and valuable developer.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold mb-2">Solve Different Problems</h3>
                  <p className="text-muted-foreground">
                    Different languages excel at different tasks. Choose the right tool for the job.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold mb-2">Join Communities</h3>
                  <p className="text-muted-foreground">
                    Each language has a vibrant community ready to help and collaborate.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold mb-2">Career Opportunities</h3>
                  <p className="text-muted-foreground">
                    Multi-language proficiency opens doors to more job opportunities.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our comprehensive guide to programming languages and find your next favorite.
            </p>
            <Link
              href="/languages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Start Exploring <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
