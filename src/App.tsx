import { ThemeProvider } from "@/context/theme-provider.tsx";
import Home from "./home/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
