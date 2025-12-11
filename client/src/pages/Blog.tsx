import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, Share2 } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Kom Igång Med Python - En Nybörjarguide",
      excerpt: "Lär dig grunderna i Python och skapa ditt första program på mindre än en timme.",
      content: "Python är ett utmärkt val för nybörjare. I denna guide kommer vi att täcka variabler, datatyper, loopar och funktioner.",
      author: "Rallies Universe",
      date: "2025-12-10",
      category: "Python",
      color: "#3776ab",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "JavaScript ES6 - Moderna Funktioner Du Måste Känna Till",
      excerpt: "Utforska de senaste JavaScript-funktionerna som gör koden mer elegant och läsbar.",
      content: "ES6 introducerade många nya funktioner som arrow functions, destructuring, och template literals. Låt oss dyka in i dessa koncept.",
      author: "Rallies Universe",
      date: "2025-12-08",
      category: "JavaScript",
      color: "#f7df1e",
      readTime: "12 min",
    },
    {
      id: 3,
      title: "Rust Ownership System - Förklarat Enkelt",
      excerpt: "Förstå Rusts unika ownership-system och varför det gör Rust så säkert.",
      content: "Ownership är en av de viktigaste koncepten i Rust. Det säkerställer minnessäkerhet utan garbage collection.",
      author: "Rallies Universe",
      date: "2025-12-05",
      category: "Rust",
      color: "#ce422b",
      readTime: "15 min",
    },
    {
      id: 4,
      title: "Go Goroutines - Parallell Programmering Gjord Enkelt",
      excerpt: "Lär dig hur du använder goroutines för att skriva effektiv parallell kod i Go.",
      content: "Goroutines är en av Go:s mest kraftfulla funktioner. De gör det enkelt att skriva concurrent kod.",
      author: "Rallies Universe",
      date: "2025-12-03",
      category: "Go",
      color: "#00add8",
      readTime: "10 min",
    },
    {
      id: 5,
      title: "Java Spring Boot - Bygga REST API:er",
      excerpt: "Skapa en fullständig REST API med Spring Boot på bara några minuter.",
      content: "Spring Boot förenklar utvecklingen av Java-applikationer. Vi kommer att bygga en komplett API från grunden.",
      author: "Rallies Universe",
      date: "2025-12-01",
      category: "Java",
      color: "#007396",
      readTime: "14 min",
    },
    {
      id: 6,
      title: "C++ Templates - Generisk Programmering",
      excerpt: "Bemästra C++ templates och skriv återanvändbar, typ-säker kod.",
      content: "Templates är ett kraftfullt verktyg i C++ för att skriva generisk kod som fungerar med olika datatyper.",
      author: "Rallies Universe",
      date: "2025-11-29",
      category: "C++",
      color: "#00599c",
      readTime: "16 min",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-secondary">
          <div className="container">
            <h1 className="heading-display mb-4">Rallies Universe Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Läs våra senaste artiklar om programmeringsspr\u00e5k, tutorials och utvecklingstips.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-card border border-border rounded-lg overflow-hidden card-hover mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white mb-4"
                    style={{ backgroundColor: articles[0].color }}
                  >
                    {articles[0].category}
                  </div>
                  <h2 className="heading-lg mb-4">{articles[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(articles[0].date).toLocaleDateString("sv-SE")}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {articles[0].author}
                    </div>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                      Läs Artikeln <ArrowRight size={18} />
                    </button>
                    <div className="flex gap-2">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(articles[0].title)}&url=https://rallies-universe.com/blog/${articles[0].id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#1DA1F2] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        title="Dela på Twitter"
                      >
                        𝕏
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://rallies-universe.com/blog/${articles[0].id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#0A66C2] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        title="Dela på LinkedIn"
                      >
                        in
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://rallies-universe.com/blog/${articles[0].id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#1877F2] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        title="Dela på Facebook"
                      >
                        f
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div
                    className="w-full h-64 rounded-lg flex items-center justify-center text-white text-6xl"
                    style={{ backgroundColor: articles[0].color }}
                  >
                    🐍
                  </div>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <h2 className="heading-lg mb-8">Senaste Artiklar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="bg-card border border-border rounded-lg overflow-hidden card-hover flex flex-col"
                >
                  {/* Article Header */}
                  <div
                    className="h-40 flex items-center justify-center text-5xl"
                    style={{ backgroundColor: article.color }}
                  >
                    {article.category === "Python" && "🐍"}
                    {article.category === "JavaScript" && "⚡"}
                    {article.category === "Rust" && "🦀"}
                    {article.category === "Go" && "🐹"}
                    {article.category === "Java" && "☕"}
                    {article.category === "C++" && "⚙️"}
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3 w-fit"
                      style={{ backgroundColor: article.color }}
                    >
                      {article.category}
                    </div>
                    <h3 className="heading-md mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-2">{article.excerpt}</p>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 border-t border-border pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(article.date).toLocaleDateString("sv-SE")}
                      </div>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Read More Link and Social Sharing */}
                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                        Läs Mer <ArrowRight size={16} />
                      </button>
                      <div className="flex gap-2">
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=https://rallies-universe.com/blog/${article.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-[#1DA1F2] text-white rounded hover:shadow-md transition-all duration-300 text-xs"
                          title="Dela på Twitter"
                        >
                          𝕏
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=https://rallies-universe.com/blog/${article.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-[#0A66C2] text-white rounded hover:shadow-md transition-all duration-300 text-xs"
                          title="Dela på LinkedIn"
                        >
                          in
                        </a>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=https://rallies-universe.com/blog/${article.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-[#1877F2] text-white rounded hover:shadow-md transition-all duration-300 text-xs"
                          title="Dela på Facebook"
                        >
                          f
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="heading-lg mb-8">Bläddra Efter Kategori</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Python", color: "#3776ab", icon: "🐍" },
                { name: "JavaScript", color: "#f7df1e", icon: "⚡" },
                { name: "Rust", color: "#ce422b", icon: "🦀" },
                { name: "Go", color: "#00add8", icon: "🐹" },
                { name: "Java", color: "#007396", icon: "☕" },
                { name: "C++", color: "#00599c", icon: "⚙️" },
              ].map((cat) => (
                <button
                  key={cat.name}
                  className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <p className="font-semibold text-sm">{cat.name}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-2xl">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <h2 className="heading-md mb-4">Prenumerera På Vår Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Få de senaste programmerings-tutorials och tips direkt till din inkorg varje vecka.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Prenumerera
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
