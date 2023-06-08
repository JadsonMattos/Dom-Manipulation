// 1. Alterando texto;

function changeText() {
  const paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = 'Daqui a dois anos quero ser sênior morando fora do Brasil!';
}
changeText();

// 2. Alterando a cor do elemento amarelo;

function changeColorGreen() {
  const main = document.getElementsByClassName('main-content')[0];
  main.style.background = 'rgb(76, 164, 109';
}
changeColorGreen();

// 3. Alterando a cor do elemento vermelho

function changeColorWhite() {
  const section = document.getElementsByClassName('center-content')[0];
  section.style.background = 'rgb(255, 255, 255';
}
changeColorWhite();

// 4. Corrigindo o título

function correctionTitle() {
  const h1 = document.getElementsByClassName('title')[0];
  h1.innerHTML = 'Desafio - JavaScript';
}
correctionTitle();

// 5. Letras de casos

function modifyText() {
  const text = document.getElementsByTagName('p')[0];
  text.innerHTML = text.innerHTML.toUpperCase();
}
modifyText();

// 6. Exibindo tags

function showTag() {
  const tags = document.getElementsByTagName('p');
  let space = '';
  for (let i = 0; i < tags.length - 1; i += 1) {
    space += `${tags[i].innerText} `;
  }
  tags[3].innerText = space;
}
showTag();
