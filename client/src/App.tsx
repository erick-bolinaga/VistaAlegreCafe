import { Switch, Route, Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";

function AppRouter() {
  const base = "/VistaAlegreCafe"
  return (
    <Router base={base}>
      <Switch>
        <Route path={`${base}/`} component={Home} />
        <Route path={`${base}/*`} component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <AppRouter />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
