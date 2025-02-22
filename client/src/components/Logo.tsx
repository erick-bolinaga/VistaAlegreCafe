import { Utensils } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Utensils className="h-8 w-8 text-primary" />
      <div className="flex flex-col">
        <span className="text-lg font-bold">Café Vista Alegre</span>
        <span className="text-xs text-muted-foreground">Sabores que inspiran</span>
      </div>
    </div>
  );
}
