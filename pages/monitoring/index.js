let totalEstimatedProfit = 0;

const monitorContainer = document.getElementById("monitor");
const totalProfit = document.getElementById("total-profit");

function createMonitorInfo(caption, value) {
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('monitor-info');

  const captionSpan = document.createElement('span');
  captionSpan.classList.add('caption');
  captionSpan.textContent = caption;

  const valueP = document.createElement('p');
  valueP.textContent = value;

  infoDiv.appendChild(captionSpan);
  infoDiv.appendChild(valueP);

  return infoDiv;
}

function componentMount() {
  for (let index = 0; index < monitorings.length; index++) {
    const monitoring = monitorings[index];
    totalEstimatedProfit += monitoring.estimatedProfit;

    const tileContainerDiv = document.createElement('div');
    tileContainerDiv.classList.add('tile-container');

    const monitorCardDiv = document.createElement('div');
    monitorCardDiv.classList.add('monitor-card', 'hidden-card');

    const locationInfo = createMonitorInfo('Cordenadas', monitoring.location);
    const cultureInfo = createMonitorInfo('Cultura', monitoring.culture);
    const healthInfo = createMonitorInfo('Saúde', monitoring.health);
    const harvestInfo = createMonitorInfo('Colheita', monitoring.harvest);
    const quantityInfo = createMonitorInfo('Quantidade estimada', monitoring.estimatedQuantity);
    const profitInfo = createMonitorInfo('Lucro estimado', new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      monitoring.estimatedProfit,
    ))

    monitorCardDiv.appendChild(locationInfo);
    monitorCardDiv.appendChild(cultureInfo);
    monitorCardDiv.appendChild(healthInfo);
    monitorCardDiv.appendChild(harvestInfo);
    monitorCardDiv.appendChild(quantityInfo);
    monitorCardDiv.appendChild(profitInfo);

    const spriteImg = document.createElement('img');
    spriteImg.classList.add('tile-sprite');
    spriteImg.src = monitoring.sprite;
    spriteImg.alt = 'Sprite representando a colheita';

    tileContainerDiv.appendChild(monitorCardDiv);

    switch (monitoring.health) {
      case "Excelente":
        tileContainerDiv.classList.add('good')
        break;
      case "Ruim":
        tileContainerDiv.classList.add('danger')
        break;
      case "Insatisfatória":
        tileContainerDiv.classList.add('warning')
        break;
      case "Boa":
        tileContainerDiv.classList.add('info')
        break;
      default:
        tileContainerDiv.classList.add('info')
        break;
    }

    tileContainerDiv.appendChild(spriteImg);

    tileContainerDiv.addEventListener("mouseenter", () => {
      monitorCardDiv.classList.remove("hidden-card")
      monitorCardDiv.classList.add("active-card");
    });
    tileContainerDiv.addEventListener("mouseleave", () => {
      monitorCardDiv.classList.add("hidden-card")
      monitorCardDiv.classList.remove("active-card");
    });

    monitorContainer.appendChild(tileContainerDiv);
  }

  totalProfit.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    totalEstimatedProfit,
  );
}

window.addEventListener("load", componentMount);
