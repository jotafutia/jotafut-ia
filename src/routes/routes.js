import express from "express";
import { updateMatchData, listMatches } from "../services/matches.js";
import { calculateProbabilities } from "../services/probability.js";

const router = express.Router();

router.get("/update", async (req, res) => {
  const count = await updateMatchData();
  res.json({ updated: count });
});

router.get("/matches", async (req, res) => {
  const matches = await listMatches();
  res.json(matches);
});

router.get("/prob/:home/:away", (req, res) => {
  const { home, away } = req.params;
  res.json(calculateProbabilities(home, away));
});

export default router;
