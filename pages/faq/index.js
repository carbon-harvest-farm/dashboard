const questions = [
  {
    id: 1,
    label: 'O que é o projeto de redução de emissões de carbono e metano?',
    value: 'O projeto visa reduzir as emissões de gases de efeito estufa (GEE), como carbono e metano, por meio de práticas sustentáveis na agricultura. Ele segue padrões internacionais para medição, monitoramento e verificação das reduções de emissões.'
  },
  {
    id: 2,
    label: 'Como funciona a rotação de culturas inteligente?',
    value: 'A rotação de culturas inteligente utiliza algoritmos para recomendar a melhor cultura com base no histórico do solo e nas condições atuais. Isso otimiza o uso da terra, melhora a produtividade e reduz o impacto ambiental.'
  },
  {
    id: 3,
    label: 'Como são gerados os créditos de carbono?',
    value: 'As métricas de redução de GEE são utilizadas para gerar créditos de carbono correspondentes às reduções verificadas. Esses créditos podem ser negociados e vendidos no mercado.'
  },
  {
    id: 4,
    label: 'Qual é o papel da infraestrutura no projeto?',
    value: 'A infraestrutura é fundamental para o monitoramento contínuo do projeto. Ela permite a instalação de sensores e sistemas de acompanhamento, bem como o uso de energia limpa para garantir a sustentabilidade do ecossistema.'
  },
  {
    id: 5,
    label: 'Como o projeto lida com o armazenamento e envio dos produtos?',
    value: 'O armazenamento é monitorado pelo sistema, que leva em conta as condições adequadas para cada espécie. O envio é facilitado pela separação eficiente dos produtos na colheita e pelo registro detalhado no sistema.'
  },
  {
    id: 6,
    label: 'Quais métricas são utilizadas para avaliar a eficiência do projeto?',
    value: 'As métricas incluem reduções de emissões de GEE, produtividade das culturas, eficiência energética e impacto econômico. Esses dados são essenciais para aprimorar o projeto ao longo do tempo.'
  }
];

const questionsContainer = document.getElementById("questions-container");

for (let index = 0; index < questions.length; index++) {
  const faqItemElement = document.createElement("div");
  faqItemElement.setAttribute("id", questions[index].id);
  faqItemElement.classList.add("faq-item");
  const faqItemHeader = document.createElement("div");
  faqItemHeader.classList.add("faq-item-header");
  faqItemElement.appendChild(faqItemHeader);
  const faqItemQuestion = document.createElement("p");
  const faqItemQuestionIcon = document.createElement("i");
  faqItemQuestionIcon.classList.add("bi", "bi-chevron-bar-expand");
  faqItemQuestion.textContent = questions[index].label;
  faqItemHeader.appendChild(faqItemQuestion);
  faqItemHeader.appendChild(faqItemQuestionIcon);
  const faqItemContent = document.createElement("div");
  faqItemContent.classList.add("faq-item-content", "faq-item-closed");
  faqItemElement.appendChild(faqItemContent);
  const faqItemContentAnsewr = document.createElement("p");
  faqItemContentAnsewr.textContent = questions[index].value;  
  faqItemContent.appendChild(faqItemContentAnsewr);

  questionsContainer.appendChild(faqItemElement);

  faqItemHeader.addEventListener("click", () => {
    faqItemContent.classList.toggle("faq-item-expanded");
  })

}

