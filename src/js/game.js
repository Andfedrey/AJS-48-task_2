import Character from "./domain";

export default class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
  console.log('readGame');
}

function writeGameSaving() {
  console.log('writeGame');
}

export { GameSavingData, readGameSaving, writeGameSaving }