export class ThemeSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                select {
                    padding: 8px;
                    font-size: 16px;
                }
            </style>
            <select id="themeSelector">
                <option value="default" data-icon="ri-sun-line">Predeterminado</option>
                <option value="dark" data-icon="ri-moon-line">Oscuro</option>
                <option value="light" data-icon="ri-sun-fill">Claro</option>
            </select>
        `;
        this.themeSelector = this.shadowRoot.querySelector("#themeSelector");
        this.themeSelector.addEventListener("change", this.handleThemeChange.bind(this));
        
        // Añadir iconos a las opciones
        const options = this.themeSelector.querySelectorAll("option");
        options.forEach(option => {
            const iconClass = option.dataset.icon;
            if (iconClass) {
                option.innerHTML = `<i class="${iconClass}"></i> ${option.innerHTML}`;
            }
        });
    }

    handleThemeChange() {
        const selectedTheme = this.themeSelector.value;
        switch (selectedTheme) {
            case "dark":
                document.body.style.backgroundColor = "#333";
                document.body.style.color = "#fff";
                break;
            case "light":
                document.body.style.backgroundColor = "#fff";
                document.body.style.color = "#333";
                break;
            default:
                document.body.style.backgroundColor = "#f0f0f0";
                document.body.style.color = "#333";
        }
    }
}

customElements.define('sx-theme-selector', ThemeSelector);
