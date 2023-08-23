import { useContext, useEffect, useState } from "react";
import { GameContext } from "../store/game-context";

export function useRules() {
  const gameCtx = useContext(GameContext);
  const [houseScore, setHouseScore] = useState<number>();

  useEffect(() => {
    setHouseScore(gameCtx.scoreReducer(gameCtx.house));
    console.log(houseScore);
  }, [gameCtx, houseScore]);

  function houseVSplayers() {
    gameCtx.players.forEach((player: any) => {
      if (houseScore !== undefined) {
        if (
          gameCtx.scoreReducer(player.cards) < 21 &&
          gameCtx.scoreReducer(gameCtx.house) > 21
        ) {
          player.status = "win";
        }
        if (
          gameCtx.scoreReducer(player.cards) < 21 &&
          gameCtx.scoreReducer(gameCtx.house) <= 21 &&
          gameCtx.players.every((player) => player.out)
        ) {
          if (
            gameCtx.scoreReducer(player.cards) >
            gameCtx.scoreReducer(gameCtx.house)
          ) {
            player.status = "win";
          } else if (
            gameCtx.scoreReducer(player.cards) ===
            gameCtx.scoreReducer(gameCtx.house)
          ) {
            player.status = "draw";
          } else if (
            gameCtx.scoreReducer(player.cards) <
            gameCtx.scoreReducer(gameCtx.house)
          ) {
            player.status = "lost";
          }
        }
      }
    });
  }

  function houseRules() {
    if (
      gameCtx.scoreReducer(gameCtx.house) < 17 &&
      gameCtx.scoreReducer(gameCtx.house) < 21 &&
      gameCtx.isEnd
    ) {
      gameCtx.handleHouse();
      //houseVSplayers();
    }
  }

  function playerRules() {
    gameCtx.players.forEach((player: any) => {
      switch (true) {
        case gameCtx.scoreReducer(player.cards) > 21:
          gameCtx.handleTurn(player.id);
          player.out = true;
          player.status = "out";
          break;
        case gameCtx.scoreReducer(player.cards) === 21:
          gameCtx.handleTurn(player.id);
          player.out = true;
          player.status = "blackjack";
          break;
        default:
          break;
      }
    });
  }

  return [playerRules, houseRules, houseVSplayers];
}
