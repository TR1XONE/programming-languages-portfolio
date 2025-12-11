import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams } from "wouter";
import { articles } from "@/lib/articleData";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function ArticleDetail() {
  const { id } = useParams();
  const articleId = parseInt(id || "1");
  const article = articles.find((a) => a.id === articleId);
  const [comments, setComments] = useState<Array<{ name: string; email: string; text: string; date: string }>>([]);
  const [commentForm, setCommentForm] = useState({ name: "", email: "", text: "" });

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="container text-center">
            <h1 className="heading-lg mb-4">Artikeln Hittades Inte</h1>
            <Link href="/blog" className="text-primary font-medium hover:underline">
              Tillbaka Till Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentForm.name && commentForm.email && commentForm.text) {
      setComments([
        ...comments,
        {
          ...commentForm,
          date: new Date().toLocaleDateString("sv-SE"),
        },
      ]);
      setCommentForm({ name: "", email: "", text: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Back Button */}
        <section className="py-6 border-b border-border">
          <div className="container">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              <ArrowLeft size={18} />
              Tillbaka Till Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background to-secondary">
          <div className="container max-w-4xl">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white mb-6"
              style={{ backgroundColor: article.color }}
            >
              {article.category}
            </div>
            <h1 className="heading-display mb-6">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(article.date).toLocaleDateString("sv-SE")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  <div className="bg-card p-8 rounded-lg border border-border">
                    {article.fullContent.split("\n").map((paragraph, idx) => {
                      if (paragraph.startsWith("##")) {
                        return (
                          <h2 key={idx} className="heading-md mt-8 mb-4">
                            {paragraph.replace("## ", "")}
                          </h2>
                        );
                      }
                      if (paragraph.startsWith("```")) {
                        return null;
                      }
                      if (paragraph.trim() === "") {
                        return <div key={idx} className="h-4" />;
                      }
                      return (
                        <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary border border-border rounded-full text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Social Sharing */}
                  <div className="mt-8 p-6 bg-secondary border border-border rounded-lg">
                    <h3 className="font-semibold mb-4">Dela denna artikel</h3>
                    <div className="flex gap-3">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=https://rallies-universe.com/blog/${article.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#1DA1F2] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        title="Dela på Twitter"
                      >
                        𝕏
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://rallies-universe.com/blog/${article.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#0A66C2] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        title="Dela på LinkedIn"
                      >
                        in
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://rallies-universe.com/blog/${article.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#1877F2] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        title="Dela på Facebook"
                      >
                        f
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Related Articles */}
                <div className="bg-card border border-border rounded-lg p-6 mb-6 sticky top-20">
                  <h3 className="heading-md mb-4">Relaterade Artiklar</h3>
                  <div className="space-y-4">
                    {relatedArticles.length > 0 ? (
                      relatedArticles.map((related) => (
                        <Link
                          key={related.id}
                          href={`/blog/${related.id}`}
                          className="block p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <p className="text-sm font-medium line-clamp-2">{related.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{related.readTime}</p>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-sm">Inga relaterade artiklar</p>
                    )}
                  </div>
                </div>

                {/* Author Info */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="heading-md mb-4">Om Författaren</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: article.color }}
                    >
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{article.author}</p>
                      <p className="text-sm text-muted-foreground">Programmeringsexpert</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {article.author} är en erfaren utvecklare med passion för att lära ut programmering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container max-w-4xl">
            <h2 className="heading-lg mb-8">Kommentarer</h2>

            {/* Comment Form */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Lämna en Kommentar</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Namn *</label>
                    <input
                      type="text"
                      value={commentForm.name}
                      onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-post *</label>
                    <input
                      type="email"
                      value={commentForm.email}
                      onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Din e-post"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kommentar *</label>
                  <textarea
                    value={commentForm.text}
                    onChange={(e) => setCommentForm({ ...commentForm, text: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Din kommentar här..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Skicka Kommentar
                </button>
              </form>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.length > 0 ? (
                comments.map((comment, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold">{comment.name}</p>
                      <p className="text-xs text-muted-foreground">{comment.date}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{comment.email}</p>
                    <p className="text-muted-foreground">{comment.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-8">Inga kommentarer än. Var den första att kommentera!</p>
              )}
            </div>
          </div>
        </section>

        {/* More Articles Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="heading-lg mb-8">Fler Artiklar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles
                .filter((a) => a.id !== article.id)
                .slice(0, 3)
                .map((a) => (
                  <Link key={a.id} href={`/blog/${a.id}`} className="bg-card border border-border rounded-lg overflow-hidden card-hover">
                    <div
                      className="h-40 flex items-center justify-center text-5xl"
                      style={{ backgroundColor: a.color }}
                    >
                      {a.category === "Python" && "🐍"}
                      {a.category === "JavaScript" && "⚡"}
                      {a.category === "Rust" && "🦀"}
                      {a.category === "Go" && "🐹"}
                      {a.category === "Java" && "☕"}
                      {a.category === "C++" && "⚙️"}
                    </div>
                    <div className="p-6">
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                        style={{ backgroundColor: a.color }}
                      >
                        {a.category}
                      </div>
                      <h3 className="heading-md mb-2 line-clamp-2">{a.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{a.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{a.readTime}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
