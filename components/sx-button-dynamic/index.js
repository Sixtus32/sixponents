export class SixDynamicButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    padding: 10px 20px;
                    border: 2px solid transparent;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    /* Cambia el gradiente por colores sólidos */
                    background-color: #007bff; /* Azul para el botón predeterminado */
                    color: #fff; /* Texto blanco para todos los botones */
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                /* Conserva las reglas para diferentes variantes */
                :host([variant="primary"]) {
                    background-color: #007bff;
                }

                :host([variant="secondary"]) {
                    background-color: #6c757d;
                }

                :host([variant="success"]) {
                    background-color: #28a745;
                }

                /* Nueva variante para el caso 'alert' */
                :host([variant="alert"]) {
                    background-color: #dc3545; /* Rojo para el botón de alerta */
                }

                /* Agrega la animación al hacer clic */
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }

                :host(:active) {
                    animation: pulse 0.3s ease;
                }
            </style>
            <slot></slot>
        `;
    }

    static get observedAttributes() {
        return ['variant'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'variant') {
            // Actualiza el estilo basado en el nuevo valor del atributo 'variant'
            this.style.backgroundColor = this.getBackgroundColor(newValue);
            this.style.color = '#fff'; // Establece el color del texto en blanco
        }
    }
    
    getBackgroundColor(variant) {
        switch (variant) {
            case 'primary':
                return '#007bff';
            case 'secondary':
                return '#6c757d';
            case 'success':
                return '#28a745';
            case 'alert': // Color rojo para la variante 'alert'
                return '#dc3545';
            default:
                return '#007bff'; // Valor por defecto
        }
    }
}

customElements.define('sx-button-dynamic', SixDynamicButton);

