import { useContext, useEffect } from "react";
import { Box } from "grommet";
import Player from "./Player";
import Card from "./Card";
import { GameContext } from "../store/game-context";

export default function Game() {
  const gameCtx = useContext(GameContext);

  useEffect(() => {
    for (let i = 0; i < gameCtx.players.length; i++) {
      while (gameCtx.players[i].cards.length < 2) {
        gameCtx.updateCards(gameCtx.players[i].id);
      }
    }
  }, [gameCtx]);

  return (
    <Box>
      <h2>House</h2>
      <Box direction="row" alignSelf="center">
        {gameCtx.house !== undefined &&
          gameCtx.house.map((card) => (
            <Box key={Math.random().toString(36).slice(2)}>
              <Card house={true} val={card} />
            </Box>
          ))}
      </Box>
      <Player />
    </Box>
  );
}
