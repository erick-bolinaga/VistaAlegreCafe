import { z } from "zod";
import panCroqueta from "@/assets/images/pan-con-croqueta.jpg";
import panJamonQueso from "@/assets/images/pan-jamon-queso.jpg";
import lomoAhumado from "@/assets/images/lomo-ahumado.jpg";
import salchicha from "@/assets/images/salchicha.jpg";
import picadillo from "@/assets/images/picadillo.jpg";
import higado from "@/assets/images/higado.jpg";
import chuleta from "@/assets/images/chuleta.jpg";
import ensalada from "@/assets/images/ensalada.jpg";
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
    imageUrl: panJamonQueso
  },
  // Platos principales
  {
    id: 4,
    name: "Fricase de pollo",
    description: "Pollo guisado con papas, zanahorias y guisantes",
    category: "Platos principales",
    hit: true,
    imageUrl: lomoAhumado
  },
  {
    id: 5,
    name: "Higado a la italiana",
    description: "Hígado de res cocinado con cebolla y pimientos",
    category: "Platos principales",
    hit: false,
    imageUrl: higado
  },
  {
    id: 6,
    name: "Picadillo de pollo",
    description: "Picadillo de pollo con papas y aceitunas",
    category: "Platos principales",
    hit: true,
    imageUrl: picadillo
  },
  {
    id: 7,
    name: "Chuleta de cerdo",
    description: "Chuleta de cerdo a la parrilla con puré de papas",
    category: "Platos principales",
    hit: false,
    imageUrl: chuleta
  },
  {
    id: 8,
    name: "Pollo asado",
    description: "Pollo asado con hierbas y limón",
    category: "Platos principales",
    hit: true,
    imageUrl: lomoAhumado
  },
  {
    id: 9,
    name: "Lomo ahumado",
    description: "Lomo de cerdo ahumado con salsa barbacoa",
    category: "Platos principales",
    hit: false,
    imageUrl: lomoAhumado
  },
  {
    id: 10,
    name: "Caldosa",
    description: "Sopa espesa con carne de cerdo y vegetales",
    category: "Platos principales",
    hit: true,
    imageUrl: lomoAhumado
  },
  {
    id: 11,
    name: "Salchicha en salsa",
    description: "Salchichas cocinadas en salsa de tomate y cebolla",
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
    imageUrl: lomoAhumado
  },
  {
    id: 13,
    name: "Arroz amarillo",
    description: "Arroz amarillo con especias",
    category: "Guarniciones",
    hit: true,
    imageUrl: lomoAhumado
  },
  {
    id: 14,
    name: "Frijol colorado",
    description: "Frijoles colorados cocidos",
    category: "Guarniciones",
    hit: true,
    imageUrl: lomoAhumado
  },
  {
    id: 15,
    name: "Frijol negro",
    description: "Frijoles negros cocidos",
    category: "Guarniciones",
    hit: false,
    imageUrl: lomoAhumado
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
  }
];