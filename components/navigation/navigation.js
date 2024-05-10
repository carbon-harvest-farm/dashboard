class LayoutContainer extends HTMLElement {
  constructor() {
    super();

    // Crie o template do componente
    const containerTemplate = document.createElement("template");
    containerTemplate.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <style>
          /* Estilos específicos para o componente */
          .main-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            width: 100%;
            background-color: rgb(var(--color-background));
            min-height: 100vh;
          }

          .transition-width {
            transition: width 200ms;
          }

          .navigation-container {
            min-height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 40;
            background-color: white;
            border-right: 1px solid rgb(var(--color-zinc-200));
          }

          .content {
            width: 100%;
            max-width: 1024px;
            padding: 15px;
            padding-left: 60px;
            overflow: hidden;
          }

          .navigation-content {
            height: 97vh;
            overflow: auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
          }

          .logout {
            background-color: rgb(var(--color-red-500));
            border: none;
            color: rgb(var(--color-red-100));
            width: 100%;
            padding: 10px;
            border-radius: var(--radius-md);
            overflow: hidden;
          }

          .navigation-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: 100%;
          }

          .navigation-menu-small {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
          }

          .full-size {
            width: 200px;
            padding: 15px;
          }

          .small-size {
            width: 44px;
            padding: 5px;
            padding-top: 15px;
          }

          .hidden-item {
            display: none;
          }

          .navigation-item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            text-decoration: none;
            color: rgb(var(--color-zinc-900));
            width: 85%;
            padding: 10px;
            background-color: rgb(var(--color-background));
            border-radius: var(--radius-md);
            border: 1px solid rgb(var(--color-zinc-200));
          }

          .nav-interations {
            transition: all 200ms;
          }

          .navigation-item-small {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: rgb(var(--color-zinc-900));
            height: 40px;
            width: 40px;
            background-color: rgb(var(--color-background));
            border-radius: var(--radius-md);
            border: 1px solid rgb(var(--color-zinc-200));
          }

          .nav-interations:hover {
            border: 1px solid rgb(var(--color-primary));
            color: rgb(var(--color-primary));
          }

          .control-nav {
            position: absolute;
            z-index: 40;
            right: -30px;
            font-size: var(--font-size-xl);
            background-color: white;
            border-top-right-radius: var(--radius-md);
            border-bottom-right-radius: var(--radius-md);
            color: rgb(var(--color-zinc-600));
            border: 1px solid rgb(var(--color-zinc-200));
          }

        </style>
        <section class="main-container">
          <div id="nav-menu" class="navigation-container full-size">
            <button id="cnav" class="control-nav"></i></button>
            <nav class="navigation-content">
            <div class="hidden-item menu-label small-visibility small-menu">
              <div class="navigation-menu-small">
              <a class="navigation-item-small nav-interations" href="/pages/dashboard">
              <i class="bi bi-house"></i>
              </a>
              <a class="navigation-item-small nav-interations" href="/pages/resources">
                <i class="bi bi-box-seam"></i>
              </a>
              <a class="navigation-item-small nav-interations" href="/pages/monitoring">
                <i class="bi bi-eye"></i>
              </a>
              <a class="navigation-item-small nav-interations" href="/pages/notifications">
                <i class="bi bi-bell"></i>
              </a>
              <a class="navigation-item-small nav-interations" href="/pages/faq">
                <i class="bi bi-chat"></i>  
              </a>
              </div>
            </div>

                <div class="navigation-menu full-visibility menu-label">
                <a class="navigation-item nav-interations" href="/pages/dashboard">
                <i class="bi bi-house"></i>
                  <span>
                    Geral
                  </span>
                </a>
                <a class="navigation-item nav-interations" href="/pages/resources">
                  <i class="bi bi-box-seam"></i>
                  <span>
                  Recursos
                  </span>
                </a>
                <a class="navigation-item nav-interations" href="/pages/monitoring">
                  <i class="bi bi-eye"></i>
                  <span>
                  Monitoramento
                  </span>
                </a>
                <a class="navigation-item nav-interations" href="/pages/notifications">
                  <i class="bi bi-bell"></i>
                  <span>
                  Notificações
                  </span>
                </a>
                <a class="navigation-item nav-interations" href="/pages/faq">
                  <i class="bi bi-chat"></i>  
                  <span>
                  FAQ
                  </span>
                </a>
                </div>

                <button class="logout">
                  <i class="bi bi-door-closed"></i>
                  <span class="menu-label full-visibility">
                  Desconectar
                  </span>
                </button>
                
            </nav>
          </div>
          <div class="content">
          <slot></slot>
          </div>
        </section>
      `;

    const shadowRoot = this.attachShadow({ mode: "open" });

    const menuVisibility = (change = false, navElement) => {
      const expandedStoredValue = localStorage.getItem("hasExpanded");
      const expandedParsedValue = JSON.parse(expandedStoredValue);
      const fullVisibilityItems = this.shadowRoot.querySelectorAll(".full-visibility");
      const smallVisibilityItems = this.shadowRoot.querySelectorAll(".small-visibility");

      if (change) {
        navMenu.classList.add("transition-width");
        if (!expandedParsedValue) {
          fullVisibilityItems.forEach((item) => item.classList.add("hidden-item"));
          smallVisibilityItems.forEach((item) => item.classList.remove("hidden-item"));
          navMenu.classList.remove("full-size");
          navMenu.classList.add("small-size");
        } else {
          fullVisibilityItems.forEach((item) => item.classList.remove("hidden-item"));
          smallVisibilityItems.forEach((item) => item.classList.add("hidden-item"));
          navMenu.classList.remove("small-size");
          navMenu.classList.add("full-size");
        }

        navElement.innerHTML =  !expandedParsedValue ?
        `<i class="bi bi-chevron-double-right">`
        : `<i class="bi bi-chevron-double-left">`;

      } else {
        if (expandedParsedValue === true) {
          fullVisibilityItems.forEach((item) => item.classList.add("hidden-item"));
          smallVisibilityItems.forEach((item) => item.classList.remove("hidden-item"));
          navMenu.classList.remove("full-size");
          navMenu.classList.add("small-size");
        } else {
          fullVisibilityItems.forEach((item) => item.classList.remove("hidden-item"));
          smallVisibilityItems.forEach((item) => item.classList.add("hidden-item"));
          navMenu.classList.remove("small-size");
          navMenu.classList.add("full-size");
        }

        navElement.innerHTML =  expandedParsedValue ?
        `<i class="bi bi-chevron-double-right">`
        : `<i class="bi bi-chevron-double-left">`;

      }

      if (change) {
        localStorage.setItem("hasExpanded", JSON.stringify(!expandedParsedValue));
      }
    }

    shadowRoot.appendChild(containerTemplate.content.cloneNode(true));
    const navMenu = this.shadowRoot.getElementById("nav-menu");
    const controlNav = this.shadowRoot.getElementById("cnav");
    
    controlNav.addEventListener("click", () => menuVisibility(true, controlNav));

    window.addEventListener("load", () => menuVisibility(false, controlNav));
  }
}

customElements.define("layout-container", LayoutContainer);
