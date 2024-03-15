export class CustomTextArea extends HTMLElement {
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

            textarea {
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
        label.setAttribute("for", "custom-textarea");
        label.textContent = this.getAttribute("label") || "Label";
        this.shadowRoot.appendChild(label);

        const textarea = document.createElement("textarea");
        textarea.setAttribute("id", "custom-textarea");
        this.shadowRoot.appendChild(textarea);

        // Agregar estilos personalizados
        style.textContent += `
            textarea {
                background-color: #f8f8f8;
                color: #333;
                font-family: Arial, sans-serif;
                font-size: 14px;
                border: 2px solid #ddd;
                border-radius: 8px;
                resize: vertical; /* Permitir ajuste vertical */
            }
        `;

        // Ajuste de tamaño automático
        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        });

        // Limitación de caracteres
        const maxChars = parseInt(this.getAttribute("max-chars"));
        if (!isNaN(maxChars) && maxChars > 0) {
            textarea.setAttribute('maxlength', maxChars);
            const counter = document.createElement('span');
            counter.textContent = `${maxChars} caracteres restantes`;
            this.shadowRoot.appendChild(counter);

            textarea.addEventListener('input', () => {
                const remainingChars = maxChars - textarea.value.length;
                counter.textContent = `${remainingChars} caracteres restantes`;
                if (remainingChars <= 0) {
                    textarea.style.pointerEvents = "none"; // Desactiva la entrada de texto
                } else {
                    textarea.style.pointerEvents = "auto"; // Activa la entrada de texto
                }
            });
        }

    }

    get value() {
        return this.shadowRoot.querySelector("textarea").value;
    }

    set value(newValue) {
        this.shadowRoot.querySelector("textarea").value = newValue;
    }

    clear() {
        this.value = "";
    }

    focus() {
        this.shadowRoot.querySelector("textarea").focus();
    }

    connectedCallback() {
        const textarea = this.shadowRoot.querySelector("textarea");
        textarea.addEventListener("focus", () => this.dispatchEvent(new Event("focus")));
        textarea.addEventListener("change", () => this.dispatchEvent(new Event("change")));
    }

    disconnectedCallback() {
        const textarea = this.shadowRoot.querySelector("textarea");
        textarea.removeEventListener("focus", () => this.dispatchEvent(new Event("focus")));
        textarea.removeEventListener("change", () => this.dispatchEvent(new Event("change")));
    }
}

customElements.define('sx-custom-textarea', CustomTextArea);
