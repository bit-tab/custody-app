# Formularios

La aplicación utiliza formularios controlados en React.

## Características

- Uso de `useState` para inputs
- Inputs controlados (value + onChange)
- Validación básica
- Feedback visual al guardar

## Ejemplo

```tsx
const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>