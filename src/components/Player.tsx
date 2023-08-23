import { Box } from "grommet";
import { useContext, useEffect } from "react";
import { GameContext } from "../store/game-context";
import Card from "./Card";
import PlayButton from "./Button";
import Pot from "./Pot";
import { useRules } from "../hooks/useRules";

export default function Player() {
  const gameCtx = useContext(GameContext);
  const [playerRules, houseRules, houseVSplayers] = useRules();

  useEffect(() => {
    houseRules();
    playerRules();
    houseVSplayers();
  }, [gameCtx, playerRules, houseRules, houseVSplayers]);

  return (
    <Box direction="row" flex>
      {gameCtx.players.map((player: any) => (
        <Box margin="medium" key={player.id}>
          <h2>{player.name}</h2>
          <Box direction="row" alignContent="center">
            {player.cards.map((card: number, index: number) => (
              <Card key={index} val={card} />
            ))}
          </Box>

          <Box alignSelf="center" gap="small" direction="row">
            {!player.out && (
              <Box alignSelf="center" gap="small" direction="row">
                <PlayButton label="HIT" player={player} />
                <PlayButton label="PASS" player={player} />
              </Box>
            )}
            {player.out && <p>{player.status}</p>}
          </Box>
          <Box alignSelf="center" gap="small" direction="row">
            <Pot chips={player.ammount} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
