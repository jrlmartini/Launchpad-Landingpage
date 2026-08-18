import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

/**
 * O build gera o HTML de cada rota (script/prerender.ts). Quando esse markup
 * está presente, hidratamos em vez de recriar: o conteúdo já visível não
 * pisca e o React só anexa os handlers. Em desenvolvimento o container vem
 * vazio e caímos no render normal.
 */
if (container.firstElementChild) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
