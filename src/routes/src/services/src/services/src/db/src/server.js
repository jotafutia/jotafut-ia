import express from 'express';
import cors from 'cors';
import { addGame, getGames } from './db/database.js';
import { calculateProbabilities } from './services/probability.js';

const app = express();
app.use(cors());
app.use(express.json());

// Rota principal de teste
app.get('/', (req, res) => {
  res.send('JotaFut IA Backend rodando!');
});

// Rota para adicionar um jogo
app.post('/games', (req, res) => {
  const game = req.body;
  const savedGame = addGame(game);
  res.json(savedGame);
});

// Rota para listar todos os jogos
app.get('/games', (req, res) => {
  const games = getGames();
  res.json(games);
});

// Rota para calcular probabilidades
app.post('/probabilities', (req, res) => {
  const { home, away } = req.body;
  const probabilities = calculateProbabilities(home, away);
  res.json(probabilities);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
