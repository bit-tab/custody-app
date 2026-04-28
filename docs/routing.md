# Routing

La aplicación utiliza React Router para gestionar la navegación entre páginas.

## Rutas principales

- `/` → Calendario
- `/events` → Gestión de eventos
- `/custody` → Configuración de custodia
- `*` → Página 404

## Implementación

Se utiliza `Routes` y `Route` para definir las páginas:

```tsx
<Routes>
  <Route path="/" element={<CalendarPage />} />
  <Route path="/events" element={<EventsPage />} />
  <Route path="/custody" element={<CustodySettingsPage />} />
  <Route path="*" element={<p>Página no encontrada</p>} />
</Routes>