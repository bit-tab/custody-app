**Arquitectura de la aplicación**

 🅰️Visión general

  La aplicación será una web para la gestión de custodias compartidas entre progenitores. Permitirá organizar calendarios, eventos, gastos y comunicación entre usuarios.

  Se ha diseñado utilizando React con TypeScript en el frontend, y una arquitectura basada en componentes reutilizables y gestión de estado centralizada.

🅱️Estructura de componentes principales

  La aplicación se divide en los siguientes componentes principales:

  Layout: estructura general de la aplicación (cabecera, navegación, contenido)
  Navbar: barra de navegación principal
  Calendar: componente principal para mostrar la custodia
  EventList: listado de eventos asociados a fechas
  EventForm: formulario para crear y editar eventos
  Auth (Login/Register): gestión de autenticación de usuarios 
  ExpenseTracker: módulo para gestión de gastos

©️ Componentes reutilizables

  Se crearán componentes reutilizables para mantener el código limpio:
    Button
    Input
    Modal
    Card
    DatePicker

  Estos componentes se utilizarán en distintas partes de la aplicación.

🔢Gestión del estado de la aplicación

El estado se gestionará principalmente mediante:
  React Context API para estado global

    Estados locales (useState) para componentes individuales

    Estado global principal:
      Usuario autenticado
      Datos del calendario
      Eventos
      Gastos

5. Datos que se deben persistir

  Los datos que se almacenarán en base de datos serán:
    Usuarios (progenitores)
    Calendario de custodia
    Eventos (citas médicas, actividades, etc.)
    Gastos compartidos
    Mensajes (si se implementa chat)

6. Flujo de datos

  El flujo de datos será unidireccional:
    El usuario interactúa con la interfaz
    Se actualiza el estado en React
    Se envía petición al backend (API REST)
    El backend procesa y guarda en base de datos
    Se devuelve respuesta al frontend
    Se actualiza la vista

7. Diagrama simplificado del flujo
Usuario
  ↓
React Components
  ↓
Context API (Estado global)
  ↓
API REST (Backend)
  ↓
Base de datos

8. Decisiones de arquitectura
  Se utilizará una arquitectura basada en componentes reutilizables
  Se separa la lógica de UI y lógica de datos
  Se prioriza la escalabilidad del proyecto
  Se utiliza React Router para navegación entre páginas
  Se utilizará Context API en lugar de Redux por simplicidad