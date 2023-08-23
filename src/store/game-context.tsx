import { createContext, useState, useEffect } from "react";
import { shuffle } from "../helpers/deck";

export const GameContext = createContext({
  startGame: false,
  setStartGame: () => {},
  playerName: "",
  scoreReducer: (scoreArr: any) => {
    return scoreArr;
  },
  numberPlayers: 0,
  setNumberPlayers: (no: any) => {},
  players: [],
  updateCards: (id: number) => {},
  house: [],
  handleHouse: () => {},
  handleReset: () => {},
  turn: 0,
  handleTurn: (id: number) => {},
  isEnd: false,
  handleEnd: () => {}
});

const playersArr: any = [];

type Player = {
  id: number;
  name: string;
  cards: any;
  score: number;
  out: boolean;
  ammount: number;
  status: string;
};

export default function GameContextProvider(props: any) {
  const [play, setPlay] = useState(false);
  const [playerNo, SetPlayerNo] = useState<number>(0);
  const [players, setPlayers] = useState<Player[]>([]);
  const [house, setHouse] = useState<number[]>([]);
  const [turn, setTurn] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const updateState = (id: number) => {
    players[id].cards.push(shuffle());
    setPlayers([...players]);
  };

  function handleTurn(id) {
    setTurn(id + 1);
  }

  useEffect(() => {
    if (play === true) {
      for (let i = 0; i < 2; i++)
        setHouse((prevState: number[]) => {
          return [...prevState, shuffle()];
        });
    }
  }, [play]);

  useEffect(() => {
    for (let i = 0; i < playerNo; i++) {
      //let name = prompt(`enter player ${i + 1} name`);
      playersArr.push({
        id: i,
        name: ` player ${i + 1}`,
        cards: [],
        score: 0,
        out: false,
        turn: false,
        ammount: 500,
        status: ""
      });
      if (playerNo !== undefined) {
        setPlayers(playersArr);
      }
    }
  }, [playerNo, play]);

  const handleReset = () => {
    window.location.reload();
  };

  const gameValue = {
    startGame: play,
    setStartGame: () => setPlay(!play),
    playerName: "",
    scoreReducer: (scoreArr: number[]) => {
      return scoreArr.reduce(
        (previousValue: number, currentValue: number) =>
          previousValue + currentValue,
        0
      );
    },
    numberPlayers: playerNo,
    setNumberPlayers: (playerNo: number) => SetPlayerNo(playerNo),
    players,
    updateCards: updateState,
    house: house,
    handleHouse: () => {
      setHouse((prevState) => [...prevState, shuffle()]);
    },
    handleReset,
    turn,
    handleTurn,
    isEnd,
    handleEnd: () => setIsEnd(!isEnd)
  };

  return (
    <GameContext.Provider value={gameValue}>
      {props.children}
    </GameContext.Provider>
  );
}
