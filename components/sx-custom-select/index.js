export class CustomSelect extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Estilos para el componente
        const style = document.createElement("style");
        style.textContent = `
            :host {
                display: block;
                width: 100%;
                margin-bottom: 15px;
            }

            label {
                font-size: 16px;
                font-weight: bold;
                display: block;
                margin-bottom: 5px;
            }

            select {
                width: 100%;
                padding: 18px 22.5px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
                box-sizing: border-box;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            select option {
                padding: 15px 8px; /* Aumentar el espacio interno de las opciones */
            }
        `;
        this.shadowRoot.appendChild(style);

        // Crear elementos dentro del shadow DOM
        const label = document.createElement("label");
        label.setAttribute("for", "custom-select");
        label.textContent = this.getAttribute("label") || "Label";
        this.shadowRoot.appendChild(label);

        const select = document.createElement("select");
        select.setAttribute("id", "custom-select");
        select.addEventListener("change", this.handleChange.bind(this));
        this.shadowRoot.appendChild(select);
    }

    // Método para generar las opciones de tarjetas según el array especificado
    generateCardOptions(options) {
        const select = this.shadowRoot.querySelector("select");
        select.innerHTML = ""; // Limpiar opciones existentes
        options.forEach((option, index) => {
            const optionElement = document.createElement("option");
            optionElement.textContent = option;
            optionElement.setAttribute("value", index + 1);
            select.appendChild(optionElement);
        });
    }

    // Manejar el cambio en la selección
    handleChange() {
        const selectedValue = parseInt(this.shadowRoot.querySelector("select").value);
        alert(`Has seleccionado la opción ${selectedValue}.`);
    }

    // Método para limpiar la selección
    clear() {
        const select = this.shadowRoot.querySelector("select");
        select.selectedIndex = -1;
    }

    connectedCallback() {
        // Obtener las opciones del atributo "options" o usar un array predeterminado
        let options = JSON.parse(this.getAttribute("options")) || ["Opción 1", "Opción 2", "Opción 3"];
        // Generar las opciones del selector desplegable
        this.generateCardOptions(options);
    }
}

customElements.define('sx-custom-select', CustomSelect);

/**
 * 
        <h2>Ejemplo de Custom Select</h2>

    <!-- <sx-custom-select label="Selecciona una opción" options='["Manzana", "Banana", "Naranja","sixtus"]'/>

    <sx-custom-select label="Medicos" options='["Dios","Medicos"]'/> -->
    <sx-custom-select label="Medicos" options='["Andrés Bolaños","Marta Espín"]'></sx-custom-select>

 */