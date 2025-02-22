import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type MenuItem } from "@shared/schema";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="w-[300px]">
      <CardHeader className="p-0">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-[200px] w-full object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}
