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
            <h1 className="heading-display mb-4">Language Comparison</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Compare programming languages side by side to find the best fit for your project.
            </p>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="heading-lg">Feature Comparison</h2>
              <button
                onClick={downloadComparison}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <Download size={18} />
                Download CSV
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-card border border-border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Language</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Year Created</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Difficulty</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Speed</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Type System</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Garbage Collection</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Popularity</th>
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
                <h3 className="font-semibold mb-4">Difficulty Levels</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    Easy - Great for beginners
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    Medium - Some learning curve
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    Hard/Very Hard - Steep learning curve
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Performance Levels</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    Slow - Interpreted, dynamic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    Fast - Compiled or optimized
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500" />
                    Very Fast - Low-level access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="heading-lg mb-8">Choosing the Right Language</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">For Beginners</h3>
                <p className="text-muted-foreground mb-4">
                  Start with Python or JavaScript. Both have gentle learning curves and extensive resources.
                </p>
                <p className="text-sm font-medium text-primary">Recommended: Python</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">For Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  JavaScript is essential for frontend. Pair it with Python, Go, or Node.js for backend.
                </p>
                <p className="text-sm font-medium text-primary">Recommended: JavaScript + Node.js</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">For Performance</h3>
                <p className="text-muted-foreground mb-4">
                  Choose Rust or C++ for systems programming and performance-critical applications.
                </p>
                <p className="text-sm font-medium text-primary">Recommended: Rust</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">For Enterprise</h3>
                <p className="text-muted-foreground mb-4">
                  Java and Go are industry standards for large-scale applications and microservices.
                </p>
                <p className="text-sm font-medium text-primary">Recommended: Java or Go</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
