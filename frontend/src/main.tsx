import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { MeetingProvider } from "./components/MeetingContext";

import App from "./App";
import "./index.css";
import "@/styles/st.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <MeetingProvider>
        <App />
      </MeetingProvider>
    </HelmetProvider>
  </React.StrictMode>
);