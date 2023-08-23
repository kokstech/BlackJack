import { Box } from "grommet";
import Cards from "./Cards";

export default function Card(props: any) {
  return (
    <Box align="center" animation={props.house ? null : "slideDown"}>
      <Cards val={props.val} />
    </Box>
  );
}
