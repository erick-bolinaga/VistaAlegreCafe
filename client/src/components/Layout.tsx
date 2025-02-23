import { ReactNode } from "react";
import { Link } from "wouter";
import Logo from "./Logo";

export default function Layout({ children }: { children: ReactNode }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between max-w-4xl mx-auto">
            <Logo />
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Menú
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contacto
              </button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:py-0">
        <div className="w-full grid py-6 items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-sm leading-loose text-center">
            © 2024 Café Vista Alegre. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}