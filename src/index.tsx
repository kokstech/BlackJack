import * as ReactDOMClient from "react-dom/client";
import MovieContextProvider from "./store/game-context";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>
);
