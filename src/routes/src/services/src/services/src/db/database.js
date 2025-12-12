const games = [];

export function addGame(game) {
  games.push(game);
  return game;
}

export function getGames() {
  return games;
}
