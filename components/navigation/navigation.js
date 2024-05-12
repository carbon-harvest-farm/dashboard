let notifications = [
  {
    hasRead: false,
    emitedAt: "2023-10-05T14:48:00.000Z",
    type: "danger",
    title: "Terra com baixa umidade",
    message: "O seu cultivo de Abobrinha no setor A1 Bloco 8 apresenta umidade abaixo do recomendado nas coordenadas 87798779 - 3212333.",
    deeplink: "/pages/monitoring"
  },
  {
    hasRead: true,
    emitedAt: "2022-03-15T10:30:00.000Z",
    type: "info",
    title: "Atualização de Software",
    message: "Uma nova versão do software de monitoramento está disponível. Por favor, atualize para garantir o melhor desempenho e segurança.",
    deeplink: "/pages/update"
  },
  {
    hasRead: false,
    emitedAt: "2024-05-01T08:00:00.000Z",
    type: "good",
    title: "Colheita Bem-Sucedida",
    message: "Parabéns! A colheita de Milho no setor B3 Bloco 12 foi bem-sucedida. Os resultados estão acima das expectativas.",
    deeplink: "/pages/harvest"
  },
  {
    hasRead: true,
    emitedAt: "2022-08-20T14:30:00.000Z",
    type: "warning",
    title: "Manutenção Agendada",
    message: "No dia 25 de agosto, haverá uma manutenção programada no sistema. Algumas funcionalidades podem ficar temporariamente indisponíveis.",
    deeplink: "/pages/schedule"
  },
  {
    hasRead: false,
    emitedAt: "2024-02-15T11:45:00.000Z",
    type: "danger",
    title: "Alerta de Pragas",
    message: "Detectamos um aumento na presença de pragas no cultivo de Tomate no setor C2 Bloco 5. Recomendamos a aplicação de medidas de controle imediatamente.",
    deeplink: "/pages/pest-control"
  }
];

class LayoutContainer extends HTMLElement {
  constructor() {
    super();

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
            display: flex;
            flex-direction: column;
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

          .notify-counter {
            position: absolute;
            top: -5px;
            right: 0;
            color: white;
            z-index: 40;
            font-size: var(--font-size-xs);
            background-color: rgb(var(--color-red-500));
            height: 18px;
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
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
            position: relative;
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
            position: relative;
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
            z-index: 30;
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
          <div id="nav-menu" class="navigation-container small-size">
            <button id="cnav" class="control-nav"></i></button>
            <nav class="navigation-content">
            <div class="menu-label small-visibility small-menu">
              <div class="navigation-menu-small">
              <a class="navigation-item-small nav-interations" href="../../pages/dashboard">
              <i class="bi bi-house"></i>
              </a>
              <a class="navigation-item-small nav-interations" href="../../pages/resources">
                <i class="bi bi-box-seam"></i>
              </a>
              <a class="navigation-item-small nav-interations" href="../../pages/monitoring">
                <i class="bi bi-eye"></i>
              </a>
              <a class="navigation-item-small nav-interations" href="../../pages/notifications">
                <span class="notify-counter hidden-item"></span>  
                <i class="bi bi-bell"></i>
              </a>
              <a class="navigation-item-small nav-interations" href="../../pages/faq">
                <i class="bi bi-chat"></i>  
              </a>
              </div>
            </div>

                <div class="navigation-menu hidden-item full-visibility menu-label">
                <a class="navigation-item nav-interations" href="../../pages/dashboard">
                <i class="bi bi-house"></i>
                  <span>
                    Geral
                  </span>
                </a>
                <a class="navigation-item nav-interations" href="../../pages/resources">
                  <i class="bi bi-box-seam"></i>
                  <span>
                  Recursos
                  </span>
                </a>
                <a class="navigation-item nav-interations" href="../../pages/monitoring">
                  <i class="bi bi-eye"></i>
                  <span>
                  Monitoramento
                  </span>
                </a>
                <a class="navigation-item nav-interations" href="../../pages/notifications">
                  <i class="bi bi-bell"></i>
                  <span class="notify-counter hidden-item"></span>
                  <span>
                  Notificações
                  </span>
                </a>
                <a class="navigation-item nav-interations" href="../../pages/faq">
                  <i class="bi bi-chat"></i>  
                  <span>
                  FAQ
                  </span>
                </a>
                </div>

                <button class="logout" id="btnLogout">
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

        navElement.innerHTML = !expandedParsedValue ?
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

        navElement.innerHTML = expandedParsedValue ?
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

    window.addEventListener("load", () => {
      const notificationComponent = this.shadowRoot.querySelectorAll(".notify-counter");
      const newNotifications = notifications.filter((item) => !item.hasRead);

      if (newNotifications) {
        notificationComponent.forEach((item) => {
          item.classList.remove("hidden-item");

          item.textContent = newNotifications.length > 9 ? "+9" : newNotifications.length;
        });
      }

      menuVisibility(false, controlNav);
    });

    var btnLogout = this.shadowRoot.getElementById("btnLogout");
    btnLogout.addEventListener("click", () => {
      localStorage.removeItem("user-login");

      return window.location.href = "/index.html"
    });
  }
}

customElements.define("layout-container", LayoutContainer);
