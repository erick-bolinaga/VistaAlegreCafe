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
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
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
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              © 2024 Café Vista Alegre. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}