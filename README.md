# 🎮 Calculadora de Partidas Rankeadas

Solução em JavaScript para o segundo desafio de lógica de programação da DIO.

## Objetivo

Criar uma função que recebe a quantidade de vitórias e derrotas, retorna o saldo e armazena esse resultado em uma variável. O programa também determina o nível e exibe a mensagem solicitada.

```text
saldoVitorias = vitorias - derrotas
```

## Critério de classificação

O nível é determinado pelo total de **vitórias**, conforme o texto do enunciado. O saldo é calculado separadamente. Por exemplo, 85 vitórias e 20 derrotas resultam em saldo 65 e nível Diamante.

| Vitórias | Nível |
| --- | --- |
| 0 a 10 | Ferro |
| 11 a 20 | Bronze |
| 21 a 50 | Prata |
| 51 a 80 | Ouro |
| 81 a 90 | Diamante |
| 91 a 100 | Lendário |
| 101 ou mais | Imortal |

**Lacuna do enunciado:** exatamente 10 vitórias não tem classificação no texto original. Neste projeto, foi incluído em Ferro.

## Conceitos utilizados

| Requisito | Aplicação |
| --- | --- |
| Variáveis | `vitorias`, `derrotas`, `saldoVitorias` e `nivel` |
| Operadores | Subtração, comparação, atribuição e operadores lógicos |
| Laços de repetição | `for...of` percorre os jogadores |
| Estruturas de decisão | `if`, `else if` e `else` |
| Funções | `calcularSaldo` recebe dois parâmetros e retorna o saldo; `classificarNivel` retorna o nível |

## Como executar

Com Node.js instalado, abra o terminal na pasta do projeto e execute:

```bash
node index.js
```

Não é necessário instalar dependências.

Saída dos exemplos:

```text
O Herói tem de saldo de 65 está no nível de Diamante
O Herói tem de saldo de 10 está no nível de Bronze
O Herói tem de saldo de 80 está no nível de Imortal
```

A frase foi mantida conforme o formato solicitado pelo desafio.

## Personalização

Edite a lista `jogadores` em `index.js`:

```javascript
const jogadores = [
  { vitorias: 85, derrotas: 20 }
];
```

Adicione outros objetos para calcular vários resultados com o laço. Vitórias e derrotas devem ser inteiros não negativos representáveis com segurança em JavaScript. Dados inválidos são identificados e não são calculados. Um saldo negativo é permitido quando há mais derrotas do que vitórias.

## Arquivos

- `index.js`: funções, exemplos, validação e saída no console.
- `README.md`: documentação, regras e instruções de execução.

Projeto de estudo para o desafio **Calculadora de partidas Rankeadas**, da DIO.
