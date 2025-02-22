import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { menuItems } from "@shared/schema";
import MenuCarousel from "@/components/MenuCarousel";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QRCode from "react-qr-code";

export default function Home() {
  const categories = ["Desayuno", "Almuerzo", "Cena", "Nacionales", "Importados"] as const;

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Café Vista Alegre</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sabores auténticos con vista al mar
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1708597543370-604fb27a9754"
            alt="Restaurant interior"
            className="rounded-lg object-cover h-[200px] w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1576048177169-f0622a66adbd"
            alt="Restaurant ambiance"
            className="rounded-lg object-cover h-[200px] w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1594375188248-174763da4d69"
            alt="Restaurant terrace"
            className="rounded-lg object-cover h-[200px] w-full"
          />
        </div>
      </section>

      {/* Menu Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Menú</h2>
        {categories.map((category) => {
          const items = menuItems.filter((item) => item.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <MenuCarousel items={items} />
            </div>
          );
        })}
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@cafevistaalegre.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Playa Vista Dr, Costa del Sol</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p>Lunes - Viernes: 7:00 AM - 10:00 PM</p>
                  <p>Sábado - Domingo: 8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6">Síguenos</h2>
            <QRCode
              value="https://cafevistaalegre.com"
              size={200}
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground text-center">
              Escanea para visitarnos en línea
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
