import { Global } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import AppRoutes from "./routes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
