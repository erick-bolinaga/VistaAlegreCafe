import { z } from "zod";
import panCroqueta from "@/assets/images/pan-con-croqueta.jpg";
import panJamonQueso from "@/assets/images/pan-jamon-queso.jpg";
import hamburguesa from "@/assets/images/hamburguesa.jpg";
import lomoAhumado from "@/assets/images/lomo-ahumado.jpg";
import salchicha from "@/assets/images/salchicha.jpg";
import picadillo from "@/assets/images/picadillo.jpg";
import higado from "@/assets/images/higado.jpg";
import chuleta from "@/assets/images/chuleta.jpg";
import polloAsado from "@/assets/images/pollo-asado.jpg";
import ensalada from "@/assets/images/ensalada.jpg";
import arrozBlanco from "@/assets/images/arroz-blanco.jpg";
import arrozAmarillo from "@/assets/images/arroz-amarillo.jpg";
import frijolesColorados from "@/assets/images/frijoles-colorados.jpg";
import refrescos from "@/assets/images/refrescos.jpg";
import cervezas from "@/assets/images/cervezas.jpg";
import aguaMaltaEnergizantes from "@/assets/images/agua-malta-energizantes.jpg";

export const menuItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.enum(['Panes', 'Platos principales', 'Guarniciones', 'Bebidas']),
  hit: z.boolean().optional(),
  imageUrl: z.string()
});

export type MenuItem = z.infer<typeof menuItemSchema>;

// Static menu data
export const menuItems: MenuItem[] = [
  // Panes
  {
    id: 1,
    name: "Pan con croqueta y vegetales",
    description: "Pan, 3 croquetas, lechuga u otros vegetales de estación, pepino encurtido",
    category: "Panes",
    hit: true,
    imageUrl: panCroqueta
  },
  {
    id: 2,
    name: "Pan con jamón y queso",
    description: "Pan, una lasca de jamón, una de queso, lechuga, tomate",
    category: "Panes",
    hit: false,
    imageUrl: panJamonQueso
  },
  {
    id: 3,
    name: "Hamburguesa con vegetales",
    description: "Pan, hamburguesa de cerdo o pollo, lechuga, tomate, pepinillos, cebolla",
    category: "Panes",
    hit: false,
    imageUrl: hamburguesa
  },
  // Platos principales
  {
    id: 4,
    name: "Fricase de pollo",
    description: "Cocinado con aceite vegetal, tomate natural, pimiento, cebolla y ajo",
    category: "Platos principales",
    hit: true,
    imageUrl: polloAsado
  },
  {
    id: 5,
    name: "Higado a la italiana",
    description: "Cocinado con pimiento, ajo, cebolla y vino seco",
    category: "Platos principales",
    hit: false,
    imageUrl: higado
  },
  {
    id: 6,
    name: "Picadillo de pollo",
    description: "Cocinado con tomate natural, ajo, cebolla y pimiento",
    category: "Platos principales",
    hit: true,
    imageUrl: picadillo
  },
  {
    id: 7,
    name: "Chuleta de cerdo",
    description: "Chuleta marinada con limón y ajo cocinada en la plancha con cebolla",
    category: "Platos principales",
    hit: false,
    imageUrl: chuleta
  },
  {
    id: 8,
    name: "Pollo asado",
    description: "Marinado limón, ajo horneada con cebolla",
    category: "Platos principales",
    hit: true,
    imageUrl: polloAsado
  },
  {
    id: 9,
    name: "Lomo ahumado",
    description: "Cocinado en la plancha con cebolla",
    category: "Platos principales",
    hit: false,
    imageUrl: lomoAhumado
  },
  {
    id: 10,
    name: "Caldosa",
    description: "Concentrado de pollo, viandas y tomate natural",
    category: "Platos principales",
    hit: true,
    imageUrl: frijolesColorados
  },
  {
    id: 11,
    name: "Salchicha en salsa",
    description: "Cocinado con tomate natural, ajo, cebolla y pimiento",
    category: "Platos principales",
    hit: false,
    imageUrl: salchicha
  },
  // Guarniciones
  {
    id: 12,
    name: "Arroz blanco",
    description: "Arroz blanco cocido",
    category: "Guarniciones",
    hit: true,
    imageUrl: arrozBlanco
  },
  {
    id: 13,
    name: "Arroz amarillo",
    description: "Arroz amarillo con especias",
    category: "Guarniciones",
    hit: true,
    imageUrl: arrozAmarillo
  },
  {
    id: 14,
    name: "Frijol colorado",
    description: "Frijoles colorados cocidos",
    category: "Guarniciones",
    hit: true,
    imageUrl: frijolesColorados
  },
  {
    id: 15,
    name: "Frijol negro",
    description: "Frijoles negros cocidos",
    category: "Guarniciones",
    hit: false,
    imageUrl: frijolesColorados
  },
  // Bebidas
  {
    id: 14,
    name: "Refrescos",
    description: "Refrescos gaseosos nacionales e importados",
    category: "Bebidas",
    hit: false,
    imageUrl: refrescos
  },
  {
    id: 15,
    name: "Agua, maltas, energizantes",
    description: "Agua importada, malta nacional e importada, energizantes importados",
    category: "Bebidas",
    hit: false,
    imageUrl: aguaMaltaEnergizantes
  },
  {
    id: 16,
    name: "Cervezas",
    description: "Cervezas nacionales e importadas",
    category: "Bebidas",
    hit: true,
    imageUrl: cervezas
  },
  {
    id: 17,
    name: "Café expresso",
    description: "Café expresso recién hecho",
    category: "Bebidas",
    hit: true,
    imageUrl: cervezas
  },
  {
    id: 18,
    name: "Café cortado",
    description: "Café expresso con una pequeña cantidad de leche",
    category: "Bebidas",
    hit: false,
    imageUrl: cervezas
  },
  {
    id: 19,
    name: "Café capuchino",
    description: "Café expresso con leche espumada y cacao en polvo",
    category: "Bebidas",
    hit: false,
    imageUrl: cervezas
  },
  {
    id: 20,
    name: "Café con leche",
    description: "Café expresso con leche caliente",
    category: "Bebidas",
    hit: false,
    imageUrl: cervezas
  },
  {
    id: 21,
    name: "Té negro caliente",
    description: "Té negro servido caliente",
    category: "Bebidas",
    hit: false,
    imageUrl: cervezas
  },
  {
    id: 22,
    name: "Té negro frío",
    description: "Té negro servido con hielo",
    category: "Bebidas",
    hit: false,
    imageUrl: cervezas
  }
];