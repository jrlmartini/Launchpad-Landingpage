import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Servicos from "@/pages/servicos";
import Lista from "@/pages/lista";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/curso" component={Home} />
      <Route path="/servicos" component={Servicos} />
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
