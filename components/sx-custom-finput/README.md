# `<sx-custom-finput>`

## Instalación

```sh
npm install sx-custom-finput
```

```sh
yarn add sx-custom-finput
```

> NOTA: `sx-custom-finput` se distribuye como un Módulo de JavaScript ES2020 y utiliza la API de Elementos Personalizados. Es compatible con todos los navegadores modernos, incluyendo Chrome, Firefox, Safari, Edge e IE11, pero se requiere un paso adicional de herramientas para resolver los _bare module specifiers_, así como la transpilación y los polyfills para Edge e IE11.

## Uso de ejemplo

### Estándar

```html
<sx-custom-finput label="Nombre completo"></sx-custom-finput>

<sx-custom-finput></sx-custom-finput>
```

## API

### Ranuras (Slots)

_None_

### Atributos

| Nombre  | Tipo     | Valor por defecto | Descripción             |
| ------- | -------- | ------------------ | ----------------------- |
| `label` | `string` | `'Label'`          | Texto para la etiqueta  |

### Métodos

| Nombre     | Descripción                               |
| ---------- | ----------------------------------------- |
| `value`    | Obtiene o establece el valor del input.   |
| `clear()`  | Limpia el valor del input.                |
| `focus()`  | Hace foco en el input.                    |

### Eventos

| Nombre    | Descripción                                        |
| --------- | -------------------------------------------------- |
| `focus`   | Se dispara cuando el input recibe el foco.        |
| `change`  | Se dispara cuando el valor del input cambia.      |

### Propiedades CSS personalizadas

_None_

```

Este Markdown proporciona información detallada sobre cómo instalar y usar tu componente `sx-custom-finput`, así como detalles sobre sus atributos y su uso en un ejemplo estándar.