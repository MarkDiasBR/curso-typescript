import { title } from "process";
import gamesRepository from "@/repository/games-repository";
import { CreateGame , Game } from "@/protocols/game-protocol";

async function getGames(): Promise<Game[]> {
  const games = await gamesRepository.getGames();
  return games;
}

async function createGame(game: CreateGame ): Promise<void> {
  if (gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame ): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result.length > 0;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;
