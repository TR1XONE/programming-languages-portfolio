import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container text-center">
          <h1 className="heading-display mb-4">404</h1>
          <h2 className="heading-lg mb-4">Sidan Hittades Inte</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Tyvärr, sidan du letar efter finns inte. Låt oss få dig tillbaka på rätt väg.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Gå Tillbaka Till Hem
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
