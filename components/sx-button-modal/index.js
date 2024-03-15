export class CustomModalButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Estilos para el botón y el modal
        const style = document.createElement("style");
        style.textContent = `
            :host {
                display: inline-block;
            }

            button {
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 15px 30px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 8px;
                transition: transform 0.3s ease;
            }

            button:hover {
                background-color: #45a049;
                transform: scale(1.05);
            }

            #modal {
                display: none;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(0, 0, 0, 0.5);
                padding: 20px;
                border-radius: 8px;
                z-index: 9999;
                color: white;
            }
        `;
        this.shadowRoot.appendChild(style);

        // Crear el botón y el modal dentro del shadow DOM
        const button = document.createElement("button");
        button.textContent = this.getAttribute("label") || "Abrir Modal";
        button.addEventListener("click", () => this.toggleModal());
        this.shadowRoot.appendChild(button);

        const modal = document.createElement("div");
        modal.setAttribute("id", "modal");
        const modalContent = this.getAttribute("modal-content") || "<h2>Modal</h2><p>Este es el contenido del modal.</p>";
        modal.innerHTML = modalContent;
        this.shadowRoot.appendChild(modal);

        // Escuchar clic en el botón "Cerrar Modal"
        const closeButton = modal.querySelector("#closeModal");
        if (closeButton) {
            closeButton.addEventListener("click", () => this.toggleModal());
        }
    }

    toggleModal() {
        const modal = this.shadowRoot.querySelector("#modal");
        modal.style.display = (modal.style.display === 'none') ? 'block' : 'none';
    }

    // Observar cambios en los atributos 'label' y 'modal-content'
    static get observedAttributes() {
        return ['label', 'modal-content'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'label') {
            const button = this.shadowRoot.querySelector('button');
            button.textContent = newValue;
        } else if (name === 'modal-content') {
            const modal = this.shadowRoot.querySelector("#modal");
            modal.innerHTML = newValue;
        }
    }
}

customElements.define('sx-modal-button', CustomModalButton);
