const promotionsContainer = document.getElementById("promotions");
const howContainer = document.getElementById("how");
const optionContainer = document.getElementById("contract-options");
const contractForm = document.getElementById("contract-form");
let selectedPlan;

function mountPromotions() {
  for (let index = 0; index < plans.length; index++) {
    const plan = plans[index];

    const cardPlan = document.createElement("div");
    cardPlan.classList.add("card-promotion");

    cardPlan.innerHTML = `
      <img class="promotion-asset" src="${plan.image}" alt="Fazenda">
      <div class="card-promotion-content">
        <div class="card-promotion-header">
        <p class="promotion-name">${plan.name}</p>  
        <h2 class="promotion-price">${plan.price}<span class="promotion-sign">/${plan.sign}</span></h2>
        <p class="promotion-description">${plan.description}</p>
        </div>
        <ul id="plan-list-${index}" class="promotion-list">
        </ul>
      </div>
    `;

    const cardOption = document.createElement("div");
    cardOption.classList.add("row-start", "w-full", "border-zinc-200", "rounded");
    cardOption.setAttribute("id", `option-${index}`);
    cardOption.innerHTML = `  
    <img class="plan-icon" src="${plan.optionImage}" alt="Fazenda grande">
    <div class="column-start p-10">
      <p class="promotion-name">${plan.name}</p>
      <p class="promotion-description">${plan.description}</p>
      <p class="promotion-price">${plan.price}<span class="promotion-sign">/${plan.sign}</span></p>
    </div>
    `;

    cardOption.addEventListener("click", () => {
      const hasSelected = document.querySelectorAll(".active-option");

      if (hasSelected) {
        hasSelected.forEach((item) => item.classList.remove("active-option"));
      }

      const element = document.getElementById(`option-${index}`);
      element.classList.add("active-option");
      selectedPlan = plan;
    });

    optionContainer.appendChild(cardOption);
    promotionsContainer.appendChild(cardPlan);
    const cardList = document.getElementById(`plan-list-${index}`);

    plan.vantages.map((item) => {
      const vantageItem = document.createElement("li");
      vantageItem.classList.add("promotion-item");
      vantageItem.innerHTML = `
        <i class="bi bi-check-lg"></i>
        <p>${item.label}</p>
      `

      cardList.appendChild(vantageItem);
    });
  }
}

function mountHow() {
  for (let index = 0; index < how.length; index++) {
    const item = how[index];

    const title = document.createElement("p");
    title.classList.add("how-title");
    title.textContent = item.question;
    const question = document.createElement("p");
    question.classList.add("how-paragraph");
    question.textContent = item.how;
    const result = document.createElement("p");
    result.classList.add("how-paragraph");
    result.textContent = `Resultado: ${item.result}`;

    const element = document.createElement("div");
    element.classList.add("column-start");

    element.appendChild(title);
    element.appendChild(question);
    element.appendChild(result);

    howContainer.appendChild(element);
  }
}

contractForm.addEventListener("submit", (e) => {
  const errorMessageContainer = document.getElementById("error-message");

  errorMessageContainer.innerHTML = '';

  const name = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("mail");
  const cell = document.getElementById("cell");

  e.preventDefault();

  const errorList = []

  if (!selectedPlan) errorList.push("Escolha um plano");
  if (!name.value) errorList.push("Digite seu nome");
  if (!lastName.value) errorList.push("Informe seu sobrenome");
  if (!email.value) errorList.push("Informe um email");
  if (!cell.value) errorList.push("Informe um celular");

  if (errorList.length > 0) {
    errorList.forEach((error) => {
      const message = document.createElement("p");
      message.classList.add("error-message");
      message.textContent = error;
      errorMessageContainer.appendChild(message);
    });

    return;
  }

  const successScreen = document.getElementById("success-screen");

  successScreen.classList.remove("hidden");
})

window.addEventListener("load", () => {
  mountPromotions();
  mountHow();
});
