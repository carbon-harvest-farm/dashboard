let totalResourcesQuantity = 0;

for (const sector of resources) {
  for (const resource of sector.recurses) {
    totalResourcesQuantity += resource.quantity;
  }
}

const resourcesCounter = document.getElementById("totalResources");
const sectorsCounter = document.getElementById("totalSectors");

sectorsCounter.textContent = `Setores: ${resources.length}`;
resourcesCounter.textContent = `Recursos: ${totalResourcesQuantity}`

const tableComponent = document.getElementById("table");

resources.map((item, index) => {
  const sectorLabel = document.createElement("h2");
  sectorLabel.classList.add("table-label")
  const sectorStatus = document.createElement("p");
  sectorLabel.textContent = `Setor: ${item.sector}`;
  sectorStatus.textContent = `Status: ${item.status}`;
  tableComponent.appendChild(sectorLabel);
  tableComponent.appendChild(sectorStatus);

  item.recurses.map((resource) => {
    const element = document.createElement("div");

    element.classList.add("table-item");
    
    const img = document.createElement("img");
    
    img.setAttribute("src", resource.icon);
    img.classList.add("table-icon")
    element.appendChild(img);
    
    const column = document.createElement("div");
    
    column.classList.add("column");
    element.appendChild(column);
    
    const title = document.createElement("h2")
    
    title.classList.add("table-label");
    title.textContent = resource.label;
    column.appendChild(title);
    
    const quantityLabel = document.createElement("p");
    
    quantityLabel.textContent = `Quantidade: ${resource.quantity}`;
    column.appendChild(quantityLabel);
    
    const energyGainLabel = document.createElement("p");
    
    energyGainLabel.textContent = `Ganho de energia: ${resource.energyGain}`;
    column.appendChild(energyGainLabel);
    
    const energyCustLabel = document.createElement("p");
    
    energyCustLabel.textContent = `Gasto de energia: ${resource.energyCust}`;
    column.appendChild(energyCustLabel);
    tableComponent.appendChild(element);
  });


})
