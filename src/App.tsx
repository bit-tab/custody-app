import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { CalendarPage } from "./pages/CalendarPage";
import { EventsPage } from "./pages/EventsPage";
import { CustodySettingsPage } from "./pages/CustodySettingsPage";

function App() {
  return (
    <Layout>


      {/* 🔹 RUTAS */}
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/custody" element={<CustodySettingsPage />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </Layout>
  );
}

export default App;