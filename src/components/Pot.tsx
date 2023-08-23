import { Box, Button } from "grommet";
import { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case action.placeholder:
      return (state = state - action.placeholder);
    case "ALLIN":
      return (state = 0);
  }
}

export default function Pot(props: any) {
  const [bet, dispatch] = useReducer(reducer, props.chips);
  const betValue = [10, 30, 50];
  const handleBet = (betAmmount: number | string) => {
    if (typeof betAmmount === "string") {
      dispatch({ type: "ALLIN" });
      return;
    }
    dispatch({ type: betAmmount, placeholder: betAmmount });
  };

  const btnColor = (val) => {
    let clr;
    if (val === 10) clr = "accent-2";
    else if (val === 30) clr = "status-warning";
    else {
      clr = "status-critical";
    }
    return clr;
  };

  return (
    <Box>
      <Box>
        <h3>ammount left: {bet} </h3>
        <h3>Current bet: {props.chips - bet} </h3>
      </Box>
      <Box direction="row" alignContent="center">
        {betValue.map((chip, index) => (
          <Button
            size="small"
            primary
            color={btnColor(chip)}
            key={index}
            onClick={() => handleBet(chip)}
            margin="small"
            label={chip}
          />
        ))}

        <Button
          onClick={() => handleBet("ALLIN")}
          primary
          gap="small"
          color="status-ok"
          margin="small"
          label="ALL IN"
        />
      </Box>
    </Box>
  );
}
