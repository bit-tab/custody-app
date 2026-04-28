# Context API y estado global

## ¿Qué es Context API?

Context API es una herramienta de React que permite compartir datos entre componentes sin tener que pasar props manualmente en cada nivel.

Es útil cuando varios componentes necesitan acceder a la misma información, como en este caso los eventos de la aplicación.

---

## Problema que se quería resolver

Inicialmente se utilizaba un custom hook (`useEvents`) directamente en cada página.

Esto provocaba que:

* Cada página tuviera su propio estado independiente
* Los eventos no se compartieran entre vistas
* Pareciera que los datos se borraban al cambiar de página

---

## Solución implementada

Se creó un contexto global llamado `EventsContext` que centraliza el estado de los eventos.

### 1. Provider

Se creó un `EventsProvider` que envuelve toda la aplicación y proporciona acceso al estado:

* events
* addEvent
* deleteEvent
* updateEvent

### 2. Hook personalizado

Se creó un hook `useEventsContext` para consumir el contexto de forma sencilla en cualquier componente.

---

## Cómo se utiliza

En lugar de usar:

```ts
useEvents()
```

Se utiliza:

```ts
useEventsContext()
```

Esto permite que todos los componentes compartan el mismo estado.

---

## Ventajas

* Estado único y centralizado
* Persistencia correcta entre páginas
* Código más limpio y mantenible
* Escalable para futuras funcionalidades

---

## Cuándo usar Context API

Context API es útil cuando:

* Varios componentes necesitan los mismos datos
* Se quiere evitar "prop drilling"
* Se necesita estado global simple

Para aplicaciones más complejas se podrían usar otras herramientas como Redux o Zustand.

---

## Conclusión

El uso de Context API ha permitido mejorar la arquitectura de la aplicación, asegurando que los eventos sean consistentes en todas las páginas y facilitando futuras ampliaciones como el calendario de custodia.
