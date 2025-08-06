const cards = [
  { title: "Adição", desc: "Somar dois ou mais números. Ex: 2 + 3 = 5" },
  { title: "Subtração", desc: "Tirar uma quantidade de outra. Ex: 5 - 2 = 3" },
  { title: "Multiplicação", desc: "Repetir um número várias vezes. Ex: 4 × 3 = 12" },
  { title: "Divisão", desc: "Separar em partes iguais. Ex: 8 ÷ 2 = 4" },
  { title: "Números Pares e Ímpares", desc: "Pares terminam em 0,2,4,6,8. Ímpares em 1,3,5,7,9." },
  { title: "Tabuada", desc: "Ajuda a memorizar multiplicações rápidas." },
  { title: "Frações", desc: "Parte de um todo. Ex: 1/2 representa metade." },
  { title: "Porcentagem", desc: "Parte de 100. Ex: 25% = 25 de 100." },
  { title: "Unidades de Medida", desc: "Ex: metro, litro, grama – usadas para medir." },
  { title: "Números Decimais", desc: "Representam frações. Ex: 0,5 é igual a 1/2." },
];

const container = document.getElementById("card-container");

cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h2>${card.title}</h2><p>${card.desc}</p>`;
  container.appendChild(div);
});
