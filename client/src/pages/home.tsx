import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@shared/schema";
import MenuCarousel from "@/components/MenuCarousel";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Import local images
import lomoAhumado from "@/assets/images/lomo-ahumado.jpg";
import panConCroqueta from "@/assets/images/pan-con-croqueta.jpg";
import ensalada from "@/assets/images/ensalada.jpg";
import restaurantQRCode from "@/assets/images/restaurant_qr_code.jpg";

export default function Home() {
  const categories = ["Panes", "Platos principales", "Guarniciones", "Bebidas"] as const;

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Café Vista Alegre</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Desayunos, meriendas, almuerzos y cenas como en casa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src={lomoAhumado}
                alt="Restaurant interior"
                className="rounded-lg object-cover h-[200px] w-full shadow-lg"
              />
              <img
                src={panConCroqueta}
                alt="Restaurant ambiance"
                className="rounded-lg object-cover h-[200px] w-full shadow-lg"
              />
              <img
                src={ensalada}
                alt="Restaurant terrace"
                className="rounded-lg object-cover h-[200px] w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="w-full py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Menú</h2>
          {categories.map((category) => {
            const items = menuItems.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                <MenuCarousel items={items} />
                {category === "Platos principales" &&
                  <h3 className="text-xl mt-5 text-center">Todos los platos salen con ensalada de vegetales, vianda hervida y arroz</h3>
                }
              </div>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16 bg-primary/5 scroll-mt-20">
        <div className="flex flex-col md:flex-row max-w-4xl gap-6 mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 min-w-5 text-primary" />
                  <a href="tel:+5358289758" className="underline text-blue-500">+53 5 828 9758</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 min-w-5 text-primary" />
                  <a href="mailto:blancanievesvinalsromero@gmail.com" className="underline text-blue-500">Enviar correo electrónico</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 min-w-5 text-primary" />
                  <span>Calle Vista Alegre No. 652 entre Goss y La Sola, La Víbora, Municipio Diez de Octubre, La Habana</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 min-w-5 text-primary" />
                  <div>
                    <p>Lunes - Viernes: 8:30 AM - 9:00 PM</p>
                    <p>Sábado - Domingo: 8:30 AM - 10:30 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-6">QR EnZona</h2>
              <img
                src={restaurantQRCode}
                alt="Restaurant interior"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}