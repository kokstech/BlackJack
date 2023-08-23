import { useState, useContext } from "react";
import { Box, Form, FormField, TextInput, Button } from "grommet";
import { GameContext } from "../store/game-context";

export default function PlayersForm() {
  const [val, setVal] = useState("");
  const gameCtx = useContext(GameContext);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVal(e.currentTarget.value);
  };

  const handleSubmit = () => {
    gameCtx.setNumberPlayers(val);

    setVal("");
  };

  return (
    <Box width="medium">
      <Form
        onSubmit={() => {
          handleSubmit();
          gameCtx.setStartGame();
        }}
      >
        <FormField label="Enter number of players">
          <TextInput
            value={val}
            type="number"
            max="5"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormField>
        <Button primary margin="medium" type="submit" label="submit" />
      </Form>
    </Box>
  );
}
