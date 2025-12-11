import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "", file: null });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-secondary">
          <div className="container">
            <h1 className="heading-display mb-4">Kom I Kontakt</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Har du frågor om programmeringsspråk? Vill du dela dina erfarenheter? Vi skulle älska att höra från dig!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info Cards */}
              <article className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold">E-post</h3>
                </div>
                <p className="text-muted-foreground">
                  <a href="mailto:TRX@live.se" className="hover:text-primary transition-colors">
                    TRX@live.se
                  </a>
                </p>
              </article>

              <article className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold">Plats</h3>
                </div>
                <p className="text-muted-foreground">
                  Gävleborgs län<br />
                  Sverige
                </p>
              </article>

              <article className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Send className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold">Rallies Universe</h3>
                </div>
                <p className="text-muted-foreground">
                  Ditt varumärke för<br />
                  programmeringsspr\u00e5k
                </p>
              </article>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="heading-md mb-6">Skicka Ett Meddelande</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <h3 className="font-semibold text-green-900 mb-2">Tack!</h3>
                    <p className="text-green-700">
                      Ditt meddelande har mottagits. Vi kontaktar dig snart!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2">
                        Fullständigt Namn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block font-medium mb-2">
                        E-postadress *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block font-medium mb-2">
                        Ämne *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Välj ett ämne</option>
                        <option value="question">Allmän Fråga</option>
                        <option value="feedback">Feedback</option>
                        <option value="suggestion">Förslag</option>
                        <option value="other">Annat</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block font-medium mb-2">
                        Meddelande *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Ditt meddelande här..."
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label htmlFor="file" className="block font-medium mb-2">
                        Bifoga Fil (Valfritt)
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                      />
                      {formData.file && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Vald: {formData.file.name}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Skicka Meddelande <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="heading-lg mb-8">Vanliga Frågor</h2>
            <div className="space-y-6 max-w-2xl">
              <details className="bg-card p-6 rounded-lg border border-border cursor-pointer group">
                <summary className="font-semibold flex items-center justify-between">
                  Vilket programmeringsspråk bör jag lära mig först?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">
                  Python är ett utmärkt val för nybörjare på grund av dess läsbara syntax och omfattande resurser. JavaScript är också bra om du är intresserad av webbutveckling.
                </p>
              </details>

              <details className="bg-card p-6 rounded-lg border border-border cursor-pointer group">
                <summary className="font-semibold flex items-center justify-between">
                  Hur lång tid tar det att lära sig ett programmeringsspråk?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">
                  Det tar vanligtvis 3-6 månader att lära sig grunderna i ett programmeringsspråk med konsekvent övning. Att bli skicklig tar många års erfarenhet.
                </p>
              </details>

              <details className="bg-card p-6 rounded-lg border border-border cursor-pointer group">
                <summary className="font-semibold flex items-center justify-between">
                  Bör jag lära mig flera programmeringsspråk?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">
                  Ja! Att lära sig flera språk utökar dina problemlösningsförmågor och gör dig en mer mångsidig utvecklare. Olika språk är bra på olika uppgifter.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
