## Uso de TypeScript (tipos)

  En el proyecto se utilizan tipos de TypeScript para definir la estructura de los datos.

 Un tipo permite especificar qué propiedades tiene un objeto y qué tipo de datos contiene.

Ejemplo:

type Event = {
  title: string;
  date: string;
  type: "medico" | "escolar" | "otro";
};

Esto permite evitar errores y mejorar la mantenibilidad del código.

### Importación de tipos

Cuando se importa un tipo, se utiliza la sintaxis:

import type { Event } from "...";

Esto se debe a que los tipos solo existen durante el desarrollo y no forman parte del código final en ejecución.

En cambio, los componentes y funciones se importan con:

import { Component } from "...";

# Hooks de React

## useState

Se utiliza para gestionar el estado de la aplicación. En este proyecto se usa para almacenar la lista de eventos.

## useEffect

Permite ejecutar efectos secundarios. Se utiliza para cargar los eventos iniciales cuando la aplicación se inicia.

## useMemo

Se utiliza para optimizar cálculos costosos. En este caso, se usa para filtrar eventos sin recalcular en cada render.

## useCallback

Permite memorizar funciones y evitar que se creen de nuevo en cada render, mejorando el rendimiento.

## Custom Hook: useEvents

Se ha creado un hook personalizado para encapsular la lógica de gestión de eventos.

Este hook permite:
- almacenar eventos
- añadir nuevos eventos

Esto facilita la reutilización de la lógica en distintos componentes.