
# `<sx-custom-select>`

## Instalación

```sh
npm install sx-custom-select
```

```sh
yarn add sx-custom-select
```

> NOTA: `sx-custom-select` se distribuye como un Módulo de JavaScript ES2020 y utiliza la API de Elementos Personalizados. Es compatible con todos los navegadores modernos, incluyendo Chrome, Firefox, Safari, Edge e IE11, pero se requiere un paso adicional de herramientas para resolver los _bare module specifiers_, así como la transpilación y los polyfills para Edge e IE11.

## Uso de ejemplo

### Estándar

```html
<sx-custom-select label="Medicos" options='["Andrés Bolaños","Marta Espín"]'></sx-custom-select>
```

## API

### Ranuras (Slots)

_None_

### Atributos

| Nombre    | Tipo     | Valor por defecto    | Descripción                |
| --------- | -------- | --------------------- | -------------------------- |
| `label`   | `string` | `'Label'`             | Texto para la etiqueta     |
| `options` | `string` | `["Opción 1", ...]`   | Opciones del select        |

### Métodos

| Nombre     | Descripción                                      |
| ---------- | ------------------------------------------------ |
| `clear()`  | Limpia la selección actual del select.           |

### Eventos

_None_

### Propiedades CSS personalizadas

_None_

```

Este Markdown proporciona información detallada sobre cómo instalar y usar tu componente `sx-custom-select`, así como detalles sobre sus atributos y su uso en un ejemplo estándar.