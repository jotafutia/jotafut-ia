import getDB from "../db/database.js";
import { fetchUpcomingMatches } from "../api/football.js";

export async function updateMatchData() {
  const db = await getDB();
  const matches = await fetchUpcomingMatches();

  await db.exec("DELETE FROM matches;");

  for (const m of matches) {
    await db.run(
      "INSERT INTO matches (id, home, away, date) VALUES (?, ?, ?, ?)",
      m.fixture.id,
      m.teams.home.name,
      m.teams.away.name,
      m.fixture.date
    );
  }

  return matches.length;
}

export async function listMatches() {
  const db = await getDB();
  return db.all("SELECT * FROM matches;");
}
