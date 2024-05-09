class LayoutContainer extends HTMLElement {
    constructor() {
      super();
  
      // Crie o template do componente
      const containerTemplate = document.createElement("template");
      containerTemplate.innerHTML = `
        <style>
          /* Estilos específicos para o componente */
          .main-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            width: 100%;
            background-color: rgb(var(--color-background));
          }

          .navigation-container {
            min-height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 40;
            background-color: white;
            min-width: 200px;
            border-right: 1px solid rgb(var(--color-zinc-200));
          }

          .content {
            width: 100%;
            max-width: 800px;
            padding: 15px;
          }

          .navigation-content {
            padding: 15px;
            height: 98vh;
            overflow: auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
          }

          .logout {
            background-color: rgb(var(--color-red-500));
            border: none;
            color: rgb(var(--color-red-950));
            font-size: var(--font-size-xl);
            width: 100%;
            padding: 10px;
            border-radius: var(--radius-md);
          }

        </style>
        <section class="main-container">
          <div class="navigation-container">
            <nav class="navigation-content">
                <div class="navigation-menu">
                Logo

                </div>
                <button class="logout">Sair</button>
            </nav>
          </div>
          <div class="content">
          <slot></slot>
          </div>
        </section>
      `;
  
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(containerTemplate.content.cloneNode(true));
    }
  }
  
  customElements.define("layout-container", LayoutContainer);
  