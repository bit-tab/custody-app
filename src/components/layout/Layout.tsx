import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 space-y-4">
        <h2 className="text-xl font-bold">🪢 Custody App</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/">📅 Calendario</Link>
          <Link to="/events">📋 Eventos</Link>
          <Link to="/custody">⚖️ Custodia</Link>
        </nav>
        <button
          onClick={() => setDark(!dark)}
          className="mt-4 w-full bg-gray-300 dark:bg-gray-700 p-2 rounded"
        >
          {dark ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </aside>

      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {children}
      </main>
    </div>
  );
}