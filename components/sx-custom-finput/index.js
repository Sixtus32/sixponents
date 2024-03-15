export class CustomInput extends HTMLElement {
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

            input[type="text"] {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
                box-sizing: border-box;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
        `;
        this.shadowRoot.appendChild(style);

        // Crear elementos dentro del shadow DOM
        const label = document.createElement("label");
        label.setAttribute("for", "custom-input");
        label.textContent = this.getAttribute("label") || "Label";
        this.shadowRoot.appendChild(label);

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "custom-input");
        this.shadowRoot.appendChild(input);
    }

    // Método para obtener y establecer el valor del input
    get value() {
        return this.shadowRoot.querySelector("input").value;
    }

    set value(newValue) {
        this.shadowRoot.querySelector("input").value = newValue;
    }

    // Método para limpiar el valor del input
    clear() {
        this.value = "";
    }

    // Método para enfocar el input
    focus() {
        this.shadowRoot.querySelector("input").focus();
    }

    connectedCallback() {
        // Añadir eventos de enfoque y cambio al input
        const input = this.shadowRoot.querySelector("input");
        input.addEventListener("focus", () => this.dispatchEvent(new Event("focus")));
        input.addEventListener("change", () => this.dispatchEvent(new Event("change")));
    }

    disconnectedCallback() {
        // Limpiar eventos al quitar el componente del DOM
        const input = this.shadowRoot.querySelector("input");
        input.removeEventListener("focus", () => this.dispatchEvent(new Event("focus")));
        input.removeEventListener("change", () => this.dispatchEvent(new Event("change")));
    }
}

customElements.define('sx-custom-finput', CustomInput);

/**
 *     <!-- Ejemplo de uso de custom-input con un label personalizado -->
    <custom-input label="Nombre completo"></custom-input>

    <!-- Ejemplo de uso de custom-input sin label -->
    <custom-input></custom-input>
 */