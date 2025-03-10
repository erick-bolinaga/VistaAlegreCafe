import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "@fontsource/figtree/700.css";

createRoot(document.getElementById("root")!).render(<App />);