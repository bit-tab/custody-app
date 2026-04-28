import { useState } from "react";
import { useCustodyContext } from "../context/CustodyContext";
import type { Weekday } from "../types/custody";

export function CustodySettingsPage() {
  const { config, setConfig } = useCustodyContext();

  const [type, setType] = useState(config.type);
  const [startDate, setStartDate] = useState(config.startDate);
  const [firstParent, setFirstParent] = useState(config.firstParent);

  const [visitEnabled, setVisitEnabled] = useState(
    config.visits?.enabled ?? false
  );

  const [visitor, setVisitor] = useState<"madre" | "padre">(
    config.visits?.visitor ?? "padre"
  );

  const [saturday, setSaturday] = useState<"none" | "all" | "alternate">("none");
  const [sunday, setSunday] = useState<"none" | "all" | "alternate">("none");

  const [weekdays, setWeekdays] = useState<Weekday[]>([]);

  const [saved, setSaved] = useState(false);

  const toggleWeekday = (day: Weekday) => {
    setWeekdays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const handleSave = () => {
    if (type === "exclusive") {
      setConfig({
        type,
        startDate,
        firstParent,
        visits: {
          enabled: visitEnabled,
          visitor,
          weekend: { saturday, sunday },
          weekdays,
        },
      });
    } else {
      setConfig({ type, startDate, firstParent });
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-xl mx-auto p-6 rounded-2xl shadow-md 
      bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 space-y-6">

      <h2 className="text-2xl font-bold">⚖️ Configuración de Custodia</h2>

      {/* TIPO */}
      <div>
        <label className="block mb-1 font-medium">Tipo</label>
        <select
          className="w-full p-2 rounded border dark:bg-gray-700"
          value={type}
          onChange={(e) => setType(e.target.value as any)}
        >
          <option value="weekly">Semanal</option>
          <option value="biweekly">Quincenal</option>
          <option value="exclusive">Exclusiva</option>
        </select>
      </div>

      {/* FECHA */}
      <div>
        <label className="block mb-1 font-medium">Fecha inicio</label>
        <input
          type="date"
          className="w-full p-2 rounded border dark:bg-gray-700"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      {/* PROGENITOR */}
      <div>
        <label className="block mb-1 font-medium">Progenitor principal</label>
        <select
          className="w-full p-2 rounded border dark:bg-gray-700"
          value={firstParent}
          onChange={(e) => setFirstParent(e.target.value as any)}
        >
          <option value="madre">Madre</option>
          <option value="padre">Padre</option>
        </select>
      </div>

      {/* VISITAS */}
      {type === "exclusive" && (
        <div className="border-t pt-4 space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={visitEnabled}
              onChange={(e) => setVisitEnabled(e.target.checked)}
            />
            Activar visitas
          </label>

          {visitEnabled && (
            <>
              <div>
                <label className="block mb-1">Visitante</label>
                <select
                  className="w-full p-2 rounded border dark:bg-gray-700"
                  value={visitor}
                  onChange={(e) => setVisitor(e.target.value as any)}
                >
                  <option value="madre">Madre</option>
                  <option value="padre">Padre</option>
                </select>
              </div>

              {/* FIN DE SEMANA */}
              <div>
                <h3 className="font-semibold mb-2">Fines de semana</h3>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p>Sábado</p>
                    <select
                      className="w-full p-2 rounded border dark:bg-gray-700"
                      value={saturday}
                      onChange={(e) => setSaturday(e.target.value as any)}
                    >
                      <option value="none">No</option>
                      <option value="all">Todos</option>
                      <option value="alternate">Alternos</option>
                    </select>
                  </div>

                  <div>
                    <p>Domingo</p>
                    <select
                      className="w-full p-2 rounded border dark:bg-gray-700"
                      value={sunday}
                      onChange={(e) => setSunday(e.target.value as any)}
                    >
                      <option value="none">No</option>
                      <option value="all">Todos</option>
                      <option value="alternate">Alternos</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ENTRE SEMANA */}
              <div>
                <h3 className="font-semibold mb-2">Entre semana</h3>

                <div className="flex flex-wrap gap-2">
                  {["monday","tuesday","wednesday","thursday","friday"].map((d) => (
                    <button
                      key={d}
                      onClick={() => toggleWeekday(d as Weekday)}
                      className={`px-3 py-1 rounded-full border 
                        ${weekdays.includes(d as Weekday)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 dark:bg-gray-700"
                        }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* BOTÓN */}
      <button
        onClick={handleSave}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
      >
        Guardar configuración
      </button>

      {saved && (
        <p className="text-green-500 text-sm">✔ Guardado correctamente</p>
      )}
    </div>
  );
}