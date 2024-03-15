
# `<sx-custom-textarea>`

## Instalación

```sh
npm install sx-custom-textarea
```

```sh
yarn add sx-custom-textarea
```

> NOTA: `sx-custom-textarea` se distribuye como un Módulo de JavaScript ES2020 y utiliza la API de Elementos Personalizados. Es compatible con todos los navegadores modernos, incluyendo Chrome, Firefox, Safari, Edge e IE11, pero se requiere un paso adicional de herramientas para resolver los _bare module specifiers_, así como la transpilación y los polyfills para Edge e IE11.

## Uso de ejemplo

### Estándar

```html
<sx-custom-textarea label="Comentarios" max-chars="40"></sx-custom-textarea>
```

## API

### Ranuras (Slots)

_None_

### Atributos

| Nombre      | Tipo     | Valor por defecto | Descripción                                        |
| ----------- | -------- | ------------------ | -------------------------------------------------- |
| `label`     | `string` | `'Label'`          | Texto para la etiqueta                             |
| `max-chars` | `number` | `undefined`        | Número máximo de caracteres permitidos en el texto |

### Métodos

| Nombre     | Descripción                                      |
| ---------- | ------------------------------------------------ |
| `clear()`  | Limpia el contenido del área de texto.          |
| `focus()`  | Pone el foco en el área de texto.               |

### Eventos

_None_

### Propiedades CSS personalizadas

_None_

```

Este Markdown proporciona información detallada sobre cómo instalar y usar tu componente `sx-custom-textarea`, así como detalles sobre sus atributos y su uso en un ejemplo estándar.