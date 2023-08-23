import { useContext } from "react";
import { Box, Button } from "grommet";
import Game from "./components/Game";
import PlayersForm from "./components/Form";
import "./styles.css";
import { GameContext } from "./store/game-context";

function App() {
  const gameCtx = useContext(GameContext);

  return (
    <div className="App">
      <h1>BLACK JACK</h1>
      <Button
        label="reset"
        onClick={() => {
          gameCtx.handleReset();
        }}
        size="small"
        primary
        color="status-critical"
        margin={{ bottom: "medium" }}
      />
      <Box align="center">
        {!gameCtx.startGame && <PlayersForm />}
        {gameCtx.startGame && <Game />}
      </Box>
    </div>
  );
}

export default App;
