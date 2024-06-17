// const itemsDiv = document.getElementById("items");

// // Crie o primeiro bloco de informações
// const currentBlock = document.createElement('div');
// currentBlock.classList.add('column-start', 'columns', 'g-15');
// const currentTitle = document.createElement('h2');
// currentTitle.innerText = 'Cultura atual';

// // Crie o primeiro card
// const currentCard = createCard('Tomate', 'Title', 'Desc', '../../assets/tiles/f1.png');

// // Crie o segundo bloco de informações
// const historyTitle = document.createElement('h2');
// historyTitle.innerText = 'Histórico de culturas';
// const historyBlock = document.createElement('div');
// historyBlock.classList.add('columns', 'column-start');

// // Crie o segundo card
// const historyCard = createCard('Tomate', 'Title', 'Desc', '../../assets/tiles/f1.png');

// // Adicione os elementos ao DOM
// currentBlock.appendChild(currentTitle);
// currentBlock.appendChild(currentCard);
// historyBlock.appendChild(historyTitle);
// historyBlock.appendChild(historyCard);
// itemsDiv.appendChild(currentBlock);
// itemsDiv.appendChild(historyBlock);

// // Função auxiliar para criar um card
// function createCard(title, infoTitle, infoDesc, spriteSrc) {
//   const cardDiv = document.createElement('div');
//   cardDiv.classList.add('card', 'column-start');

//   const rowDiv = document.createElement('div');
//   rowDiv.classList.add('row-start');

//   const spriteImg = document.createElement('img');
//   spriteImg.classList.add('card-sprite');
//   spriteImg.src = spriteSrc;
//   spriteImg.alt = '';

//   const titleP = document.createElement('p');
//   titleP.classList.add('card-title');
//   titleP.textContent = title;

//   rowDiv.appendChild(spriteImg);
//   rowDiv.appendChild(titleP);

//   const sectionDiv = document.createElement('div');
//   sectionDiv.classList.add('card-section', 'card-column-start');

//   const infoTitleP = document.createElement('p');
//   infoTitleP.classList.add('info-title');
//   infoTitleP.textContent = infoTitle;

//   const infoDescP = document.createElement('p');
//   infoDescP.classList.add('info-desc');
//   infoDescP.textContent = infoDesc;

//   sectionDiv.appendChild(infoTitleP);
//   sectionDiv.appendChild(infoDescP);

//   cardDiv.appendChild(rowDiv);
//   cardDiv.appendChild(sectionDiv);

//   return cardDiv;
// }
