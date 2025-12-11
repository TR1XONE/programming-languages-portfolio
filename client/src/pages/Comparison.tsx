import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      language: "Python",
      year: 1991,
      difficulty: "Easy",
      speed: "Slow",
      typing: "Dynamic",
      gc: "Yes",
      popularity: "Very High",
    },
    {
      language: "JavaScript",
      year: 1995,
      difficulty: "Medium",
      speed: "Medium",
      typing: "Dynamic",
      gc: "Yes",
      popularity: "Very High",
    },
    {
      language: "Rust",
      year: 2010,
      difficulty: "Hard",
      speed: "Very Fast",
      typing: "Static",
      gc: "No",
      popularity: "High",
    },
    {
      language: "Go",
      year: 2009,
      difficulty: "Medium",
      speed: "Fast",
      typing: "Static",
      gc: "Yes",
      popularity: "High",
    },
    {
      language: "Java",
      year: 1995,
      difficulty: "Medium",
      speed: "Fast",
      typing: "Static",
      gc: "Yes",
      popularity: "Very High",
    },
    {
      language: "C++",
      year: 1985,
      difficulty: "Very Hard",
      speed: "Very Fast",
      typing: "Static",
      gc: "No",
      popularity: "High",
    },
  ];

  const downloadComparison = () => {
    const csvContent = [
      ["Language", "Year", "Difficulty", "Speed", "Typing", "Garbage Collection", "Popularity"],
      ...comparisonData.map((row) => [
        row.language,
        row.year,
        row.difficulty,
        row.speed,
        row.typing,
        row.gc,
        row.popularity,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "language-comparison.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-secondary">
          <div className="container">
            <h1 className="heading-display mb-4">Språkjämförelse</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Jämför programmeringsspråk sida vid sida för att hitta det bästa för ditt projekt.
            </p>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="heading-lg">Funktionsjämförelse</h2>
              <button
                onClick={downloadComparison}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <Download size={18} />
                Ladda ner CSV
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-card border border-border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Språk</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">År Skapat</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Svårighetsgrad</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Hastighet</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Typsystem</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Skräpinsamling</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Populäritet</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={row.language}
                      className={`border-b border-border hover:bg-secondary transition-colors ${
                        idx % 2 === 0 ? "bg-background" : "bg-card"
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-foreground">{row.language}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.year}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.difficulty}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.speed}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.typing}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.gc}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          {row.popularity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Svårighetsgrader</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    Lätt - Bra för nybörjare
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    Medel - Viss inlärningskurva
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    Svår/Mycket svår - Brant inlärningskurva
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Prestandanivåer</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    Långsam - Tolkad, dynamisk
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    Snabb - Kompilerad eller optimerad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500" />
                    Mycket snabb - Lågnivåaccess
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="heading-lg mb-8">Välja Rätt Språk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">För Nybörjare</h3>
                <p className="text-muted-foreground mb-4">
                  Börja med Python eller JavaScript. Båda har mild inlärningskurva och omfattande resurser.
                </p>
                <p className="text-sm font-medium text-primary">Rekommenderat: Python</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">För Webbutveckling</h3>
                <p className="text-muted-foreground mb-4">
                  JavaScript är essentiellt för frontend. Kombinera det med Python, Go eller Node.js för backend.
                </p>
                <p className="text-sm font-medium text-primary">Rekommenderat: JavaScript + Node.js</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">För Prestanda</h3>
                <p className="text-muted-foreground mb-4">
                  Välj Rust eller C++ för systemprogrammering och prestandakritiska applikationer.
                </p>
                <p className="text-sm font-medium text-primary">Rekommenderat: Rust</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">För Företag</h3>
                <p className="text-muted-foreground mb-4">
                  Java och Go är industristandarder för storskaliga applikationer och mikrotjänster.
                </p>
                <p className="text-sm font-medium text-primary">Rekommenderat: Java eller Go</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
