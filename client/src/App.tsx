import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Curso from "@/pages/curso";
import Servicos from "@/pages/servicos";
import Projetos from "@/pages/projetos";
import Tecnologia from "@/pages/tecnologia";
import Lista from "@/pages/lista";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/curso" component={Curso} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/projetos" component={Projetos} />
      <Route path="/tecnologia" component={Tecnologia} />
      <Route path="/lista" component={Lista} />
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
