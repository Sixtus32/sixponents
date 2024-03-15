# `<sx-button-modal>`

[![Published on npm](https://img.shields.io/npm/v/sx-button-dynamic.svg)](https://www.npmjs.com/package/sx-button-modal)

## Instalación

```sh
npm install sx-button-modal
```

```sh
yarn add sx-button-modal
```

> NOTA: `sx-button-modal` se distribuye como un Módulo de JavaScript ES2020 y utiliza la API de Elementos Personalizados. Es compatible con todos los navegadores modernos, incluyendo Chrome, Firefox, Safari, Edge e IE11, pero se requiere un paso adicional de herramientas para resolver los _bare module specifiers_, así como la transpilación y los polyfills para Edge e IE11.

## Uso de ejemplo

### Estándar


```html
<sx-button-modal label="Abrir Modal" modal-content="<h2>Modal</h2><p>Este es el contenido del modal.</p>"></sx-button-modal>

<script type="module">
    import 'custom-modal-button';
</script>
```

## API

### Ranuras (Slots)

_None_

### Atributos

| Nombre           | Tipo     | Valor por defecto | Descripción                                     |
| ---------------- | -------- | ------------------ | ----------------------------------------------- |
| `label`          | `string` | `'Abrir Modal'`   | Texto del botón para abrir el modal            |
| `modal-content`  | `string` | -                  | Contenido HTML del modal                        |

### Métodos

_None_

### Eventos

_None_

### Propiedades CSS personalizadas

_None_

```

Este Markdown proporciona información detallada sobre cómo instalar y usar tu componente `custom-modal-button`, así como detalles sobre sus atributos y su uso en un ejemplo estándar.