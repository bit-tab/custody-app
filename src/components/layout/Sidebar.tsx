import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h2 className="text-lg font-bold mb-6">Custody App</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:underline">
          📅 Calendario
        </Link>

        <Link to="/events" className="hover:underline">
          📝 Eventos
        </Link>

        <Link to="/expenses" className="hover:underline">
          💰 Gastos
        </Link>
      </nav>
    </aside>
  );
}