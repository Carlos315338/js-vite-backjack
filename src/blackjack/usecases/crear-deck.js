import _ from "underscore";

/**
 * Esta función crea un nuevo Deck
 * @param {Array<String>} tiposDecarta Ejemplo : ["C", "D", "H", "S"];
 * @param {Array<String>} tiposEspeciales Ejemplo : ["A", "J", "Q", "K"];
 * @returns {Array<String>} Retorna un nuevo Deck de cartas
 */

export const crearDeck = (tiposDecarta, tiposEspeciales) => {
  //Se valida que se pasen los datos para la creacion del deck
  if (!tiposDecarta || tiposDecarta.length === 0)
    throw new Error("tiposDecarta es Obligatorio como un arreglo de string");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposEspeciales es Obligatorio como un arreglo de string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDecarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDecarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
