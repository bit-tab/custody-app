import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { CalendarPage } from "./pages/CalendarPage";
import { EventsPage } from "./pages/EventsPage";

function App() {
  return (
    <Layout>
      <Routes>
        {/* HOME → CALENDARIO */}
        <Route path="/" element={<CalendarPage />} />

        {/* EVENTOS */}
        <Route path="/events" element={<EventsPage />} />

        {/* 404 (opcional pero pro) */}
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </Layout>
  );
}

export default App;