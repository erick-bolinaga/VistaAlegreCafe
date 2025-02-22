import { z } from "zod";

export const menuItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.enum(['Desayuno', 'Merienda', 'Almuerzo', 'Cena', 'Nacionales', 'Importados']),
  price: z.number(),
  imageUrl: z.string()
});

export type MenuItem = z.infer<typeof menuItemSchema>;

// Static menu data
export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: 1,
    name: "Desayuno Tradicional",
    description: "Huevos revueltos, tostadas, frijoles y plátanos fritos",
    category: "Desayuno",
    price: 8.99,
    imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
  },
  {
    id: 2,
    name: "Tostadas Francesas",
    description: "Pan brioche con maple y frutas frescas",
    category: "Desayuno",
    price: 7.99,
    imageUrl: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553"
  },
  // Lunch
  {
    id: 3,
    name: "Pescado a la Parrilla",
    description: "Filete de pescado fresco con vegetales asados",
    category: "Almuerzo",
    price: 15.99,
    imageUrl: "https://images.unsplash.com/photo-1627662168781-4345690f0bb3"
  },
  {
    id: 4,
    name: "Pollo al Ajillo",
    description: "Pollo salteado en salsa de ajo y hierbas",
    category: "Almuerzo",
    price: 13.99,
    imageUrl: "https://images.unsplash.com/photo-1564851287875-fb73b71f0e4e"
  },
  // Dinner
  {
    id: 5,
    name: "Filete de Res",
    description: "Filete de res premium con puré de papas",
    category: "Cena",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a"
  },
  {
    id: 6,
    name: "Pasta Marinera",
    description: "Pasta con mariscos en salsa de vino blanco",
    category: "Cena",
    price: 18.99,
    imageUrl: "https://images.unsplash.com/photo-1565895405227-31cffbe0cf86"
  },
  // Local Drinks
  {
    id: 7,
    name: "Café de la Casa",
    description: "Nuestro café premium local",
    category: "Nacionales",
    price: 2.99,
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    id: 8,
    name: "Jugo Natural",
    description: "Jugo fresco del día",
    category: "Nacionales",
    price: 3.99,
    imageUrl: "https://images.unsplash.com/photo-1546695259-ad30ff3fd643"
  },
  // Imported Drinks
  {
    id: 9,
    name: "Vino Tinto",
    description: "Selección de vinos importados",
    category: "Importados",
    price: 6.99,
    imageUrl: "https://images.unsplash.com/photo-1531062916849-ac6624741870"
  },
  {
    id: 10,
    name: "Cerveza Artesanal",
    description: "Variedad de cervezas importadas",
    category: "Importados",
    price: 5.99,
    imageUrl: "https://images.unsplash.com/photo-1612528443702-f6741f70a049"
  }
];
