let nome = "Herói1";  // Nome do herói
let xp = 3860;  // Quantidade de experiência

let nivel;

if (xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 5000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

print(`O Herói de nome ${nome} está no nível de ${nivel}`);  // Exibe a mensagem final
