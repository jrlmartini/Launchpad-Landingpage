import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Curso from "@/pages/curso";
import Treinamentos from "@/pages/treinamentos";
import RhaeIa2026 from "@/pages/rhae";
import RhaeConfirmacao from "@/pages/rhae-confirmacao";
import Servicos from "@/pages/servicos";
import Projetos from "@/pages/projetos";
import Tecnologia from "@/pages/tecnologia";
import Lista from "@/pages/lista";
import Privacidade from "@/pages/privacidade";
import Termos from "@/pages/termos";
import Triagem from "@/pages/triagem";
import Metodo from "@/pages/metodo";
import Inteligencia from "@/pages/inteligencia";
import Artigos from "@/pages/artigos";
import Artigo from "@/pages/artigo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/curso" component={Curso} />
      <Route path="/treinamentos" component={Treinamentos} />
      <Route path="/treinamentos/rhae-ia-2026" component={RhaeIa2026} />
      <Route
        path="/treinamentos/rhae-ia-2026/confirmacao"
        component={RhaeConfirmacao}
      />
      <Route path="/servicos" component={Servicos} />
      <Route path="/projetos" component={Projetos} />
      <Route path="/tecnologia" component={Tecnologia} />
      <Route path="/lista" component={Lista} />
      <Route path="/privacidade" component={Privacidade} />
      <Route path="/termos" component={Termos} />
      <Route path="/triagem" component={Triagem} />
      <Route path="/metodo" component={Metodo} />
      <Route path="/inteligencia" component={Inteligencia} />
      <Route path="/artigos" component={Artigos} />
      <Route path="/artigos/:slug" component={Artigo} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
