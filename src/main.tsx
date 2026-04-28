import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { EventsProvider } from "./context/EventsContext";
import { CustodyProvider } from "./context/CustodyContext";
import "./index.css";


// Solo una llamada a createRoot
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<BrowserRouter>
  <CustodyProvider>
    <EventsProvider>
      <App />
    </EventsProvider>
  </CustodyProvider>
</BrowserRouter>
  </React.StrictMode>
);
