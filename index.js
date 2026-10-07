// A função recebe vitórias e derrotas e retorna o saldo das partidas.
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// O enunciado define o nível pela quantidade de vitórias.
function classificarNivel(vitorias) {
  // Exatamente 10 vitórias não aparece no enunciado: incluído em Ferro.
  if (vitorias <= 10) return "Ferro";
  else if (vitorias <= 20) return "Bronze";
  else if (vitorias <= 50) return "Prata";
  else if (vitorias <= 80) return "Ouro";
  else if (vitorias <= 90) return "Diamante";
  else if (vitorias <= 100) return "Lendário";
  else return "Imortal";
}

// Altere os valores ou adicione jogadores para experimentar.
const jogadores = [
  { vitorias: 85, derrotas: 20 },
  { vitorias: 15, derrotas: 5 },
  { vitorias: 110, derrotas: 30 }
];

for (const jogador of jogadores) {
  const { vitorias, derrotas } = jogador;

  if (!Number.isSafeInteger(vitorias) || vitorias < 0 ||
      !Number.isSafeInteger(derrotas) || derrotas < 0) {
    console.log("Dados inválidos: vitórias e derrotas devem ser inteiros não negativos.");
    continue;
  }

  const saldoVitorias = calcularSaldo(vitorias, derrotas);
  const nivel = classificarNivel(vitorias);

  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}
