export function calculateProbabilities(home, away) {
  return {
    homeWin: Math.random().toFixed(2),
    awayWin: Math.random().toFixed(2),
    draw: Math.random().toFixed(2)
  };
}
