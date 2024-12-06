import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import config from "./config.ts";
import { UserProvider } from "./store/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={config.basename}>
      <UserProvider>
        <App />
       </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
