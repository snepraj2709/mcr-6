import { StrictMode } from "react";
import { createRoot } from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContext, DataProvider } from "./context/DataContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { DataContext };

root.render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
