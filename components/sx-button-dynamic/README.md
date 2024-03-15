# `<sx-button-dynamic>`

[![Published on npm](https://img.shields.io/npm/v/sx-button-dynamic.svg)](https://www.npmjs.com/package/sx-button-dynamic)

## Instalación

```sh
npm install sx-button-dynamic
```

```sh
yarn add sx-button-dynamic
```

> NOTA: sx-button-dynamic se distribuye como un Módulo de JavaScript ES2020 y utiliza la API de Elementos Personalizados. Es compatible con todos los navegadores modernos, incluyendo Chrome, Firefox, Safari, Edge e IE11, pero se requiere un paso adicional de herramientas para resolver los _bare module specifiers_, así como la transpilación y los polyfills para Edge e IE11.

## Uso de ejemplo

### Estándar

<img src="../../assets/img/dynamic-button.png" width="84px" height="48px">

```html
<sx-button-dynamic variant="primary">Primary</sx-button-dynamic>
<sx-button-dynamic variant="secondary">Secondary</sx-button-dynamic>
<sx-button-dynamic variant="success">Success</sx-button-dynamic>
<sx-button-dynamic variant="alert">Alert</sx-button-dynamic>

<script type="module">
    import 'sx-button-dynamic';
</script>
```

## API

### Ranuras (Slots)

_None_

### Propiedades/Atributos

| Nombre       | Tipo      | Valor por defecto | Descripción                         |
| ------------ | --------- | ----------------- | ----------------------------------- |
| `variant`    | `string`  | `'primary'`       | Estilo del botón (`'primary'`, `'secondary'`, `'success'`, `'alert'`)        |

### Métodos

_None_

### Eventos

_None_

### Propiedades CSS personalizadas

| Propiedad CSS personalizada | Descripción          | Valor por defecto                                   |
| --------------------------- | -------------------- | --------------------------------------------------- |
| `--color-primary`           | Color primario       | `#007bff`                                           |
| `--dark-primary-color`      | Color primario oscuro | `#007bff`                                         |
| `--sx-button-box-shadow`    | Sombra del botón     | `0 4px 6px rgba(0, 0, 0, 0.1)`                     |
| `--sx-button-shadow-color`  | Color de la sombra   | `rgba(0, 0, 0, 0.1)`                               |

```

Este Markdown proporciona información detallada sobre cómo instalar y usar tu componente `sx-button-dynamic`, así como detalles sobre su API, propiedades, eventos y propiedades CSS personalizadas.