import * as ReactDOMClient from "react-dom/client";
import GameContextProvider from "./store/game-context";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
