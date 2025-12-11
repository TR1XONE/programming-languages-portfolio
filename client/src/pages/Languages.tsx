import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Languages() {
  const languages = [
    {
      name: "Python",
      color: "#3776ab",
      icon: "🐍",
      description: "A versatile, beginner-friendly language known for its readability and simplicity.",
      year: 1991,
      creator: "Guido van Rossum",
      uses: ["Web Development", "Data Science", "AI/ML", "Automation"],
      features: [
        "Simple and readable syntax",
        "Extensive standard library",
        "Strong community support",
        "Cross-platform compatibility",
      ],
      videoId: "rfscVS0vtik",
    },
    {
      name: "JavaScript",
      color: "#f7df1e",
      icon: "⚡",
      description: "The language of the web, enabling interactive experiences in browsers and servers.",
      year: 1995,
      creator: "Brendan Eich",
      uses: ["Web Development", "Frontend", "Backend (Node.js)", "Mobile Apps"],
      features: [
        "Runs in all browsers",
        "Event-driven programming",
        "Asynchronous capabilities",
        "Rich ecosystem (npm)",
      ],
      videoId: "PkZNo7MFNFg",
    },
    {
      name: "Rust",
      color: "#ce422b",
      icon: "🦀",
      description: "A systems language focused on safety, speed, and concurrency without garbage collection.",
      year: 2010,
      creator: "Graydon Hoare",
      uses: ["Systems Programming", "WebAssembly", "Game Development", "Embedded Systems"],
      features: [
        "Memory safety without GC",
        "Zero-cost abstractions",
        "Fearless concurrency",
        "Excellent error messages",
      ],
      videoId: "BpPEoZW5IiY",
    },
    {
      name: "Go",
      color: "#00add8",
      icon: "🐹",
      description: "A statically typed language designed for simplicity, efficiency, and concurrent programming.",
      year: 2009,
      creator: "Google",
      uses: ["Backend Services", "Cloud Computing", "DevOps", "Microservices"],
      features: [
        "Simple syntax",
        "Fast compilation",
        "Built-in concurrency",
        "Static typing with inference",
      ],
      videoId: "YS4e4q9oBaU",
    },
    {
      name: "Java",
      color: "#007396",
      icon: "☕",
      description: "An enterprise-grade language known for its 'write once, run anywhere' philosophy.",
      year: 1995,
      creator: "Sun Microsystems",
      uses: ["Enterprise Applications", "Android Apps", "Web Services", "Big Data"],
      features: [
        "Platform independent",
        "Strong type system",
        "Garbage collection",
        "Extensive ecosystem",
      ],
      videoId: "eIrMbAQSU34",
    },
    {
      name: "C++",
      color: "#00599c",
      icon: "⚙️",
      description: "A powerful systems language combining low-level access with high-level abstractions.",
      year: 1985,
      creator: "Bjarne Stroustrup",
      uses: ["Game Development", "System Software", "Performance-Critical Apps", "Embedded Systems"],
      features: [
        "Direct memory access",
        "High performance",
        "Object-oriented design",
        "Standard library (STL)",
      ],
      videoId: "18c3MTX0PK0",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-secondary">
          <div className="container">
            <h1 className="heading-display mb-4">Programming Languages</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore detailed information about the world's most popular programming languages, their features, use cases, and communities.
            </p>
          </div>
        </section>

        {/* Languages Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {languages.map((lang) => (
                <article
                  key={lang.name}
                  className="bg-card border border-border rounded-lg overflow-hidden card-hover"
                  style={{
                    borderTopColor: lang.color,
                    borderTopWidth: "4px",
                  }}
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-5xl mb-3">{lang.icon}</div>
                        <h2 className="heading-md">{lang.name}</h2>
                      </div>
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: lang.color }}
                      >
                        {lang.name.charAt(0)}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{lang.description}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-6">
                    {/* Info List */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground font-medium">Created</p>
                        <p className="font-semibold">{lang.year}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-medium">Creator</p>
                        <p className="font-semibold">{lang.creator}</p>
                      </div>
                    </div>

                    {/* Use Cases - Unordered List */}
                    <div>
                      <h3 className="font-semibold mb-3">Common Use Cases</h3>
                      <ul className="space-y-2">
                        {lang.uses.map((use) => (
                          <li key={use} className="flex items-center gap-2 text-sm">
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: lang.color }}
                            />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features - Ordered List */}
                    <div>
                      <h3 className="font-semibold mb-3">Key Features</h3>
                      <ol className="space-y-2 list-decimal list-inside">
                        {lang.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Embedded Video */}
                    <div>
                      <h3 className="font-semibold mb-3">Learn More</h3>
                      <div className="relative w-full pt-[56.25%] bg-secondary rounded-lg overflow-hidden">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${lang.videoId}`}
                          title={`${lang.name} Introduction`}
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
