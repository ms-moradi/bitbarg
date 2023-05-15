import {RouterProvider} from "react-router-dom";
import Router from "../src/route/route";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "../src/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router}/>
    </ThemeProvider>
  );
}

export default App;
