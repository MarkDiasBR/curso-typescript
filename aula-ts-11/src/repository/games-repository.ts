import { CreateGame, Game } from "../protocols/game-protocol.ts";
import { db } from "../database/connection.ts";

async function getGames(): Promise<Game[]> {
  const games = await db.query<Game>(`
    SELECT * 
      FROM games
  `);

  return games.rows;
}

async function createGame(game: CreateGame): Promise<void> {
  await db.query<CreateGame>(`
    INSERT
      INTO games (title, platform)
      VALUES ($1, $2)
  `, [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: CreateGame): Promise<Game[]> {
  const { title, platform } = game;

  const result = await db.query<Game>(`
    SELECT
      FROM games
      WHERE title = $1 AND platform = $2;
  `, [title, platform]);


  return result.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;
