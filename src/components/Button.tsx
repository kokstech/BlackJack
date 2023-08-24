import { useContext } from "react";
import { Button } from "grommet";
import { GameContext } from "../store/game-context";
import { useRules } from "../hooks/useRules";

export default function PlayButton(props: any) {
  const gameCtx = useContext(GameContext);

  return (
    <Button
      margin="small"
      primary={true}
      color="neutral-3"
      disabled={
        gameCtx.scoreReducer(props.player.cards) >= 21 ||
        props.player.id === gameCtx.turn
          ? false
          : true
      }
      onClick={(e) => {
        e.preventDefault();

        if (props.label === "PASS") {
          gameCtx.handleTurn(props.player.id);
          props.player.out = true;
          if (props.player.id + 1 === gameCtx.players.length)
            gameCtx.handleEnd();
        }
        if (props.label === "HIT") {
          gameCtx.updateCards(props.player.id);
        }
        console.log(props.player.id, gameCtx.players.length);
      }}
      label={props.label}
      size="small"
      type="button"
    />
  );
}
