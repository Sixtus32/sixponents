# Sixponents Elements

------------------------------------------------

> IMPORTANT : Sixponents elements is a project made to carry out an internship for the company Metaenlace.

Web components to work with the Cita Clinica API project.

## Components

| Component       | Description           |
|-----------------| ----------------------|
| `sx-button-dynamic`     | Botón de acción       |
| `sx-custom-finput`   | label + input      |
| `sx-custom-select`   | Trabajar con array en el select    |
| `sx-custom-textarea`      | Conteo de texto en el un textarea      |
| `sx-button-modal`     | Botón para abrir modal      |
| `sx-theme-selector`      | Selector moderno      |

> IMPORTANTE : It's called sixcomponents because they usually call me Six, and because they are my components too and I will only create six components.

## Quick start

### 1) Install

Install a component (sx-button-dynamic for example) from NPM:

```sh
npm install @sixponents/sx-button-dynamic
```

### 2) Write Raw HTML and JS (without framework)

Import the component's JS module, use the component in your HTML, and control it with JS, just like you would with a built-in element such as a `div`

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Example App</title>

    <!-- Add support for Web Components to older browsers. -->
    <script src="./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>

    <!-- Your application must load the Roboto and Material Icons fonts. -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <body>
    <!-- Use Web Components in your HTML like regular built-in elements. -->
    <sx-button id="myButton" raised>Click Me!</sx-button>

    <!-- The Conectate Elements use standard JavaScript modules. -->
    <script type="module">
      // Importing this module registers <ct-button> as an element that you
      // can use in this page.
      //
      // ====================================================================
      // Note this import is a BARE MODULE specifier, so it must be converted
      // to a path using a server such as es-dev-server.
      // ====================================================================
      import '@sixponents/sx-button';

      // Standard DOM APIs work with Web Components just like they do for
      // built-in elements.
      const button = document.querySelector('#myButton');
      button.addEventListener('click', () => {
        alert('You clicked!');
      });
    </script>
  </body>
</html>
```

#### 3) Use It and your serve

Serve your HTML with any server or build process, for example for angular :

```sh
ng server -o
```
