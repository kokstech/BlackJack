// import styles from "./Card.module.css";
import "./Card.css";

function randomCard(cards: string[]) {
  return cards[Math.floor(Math.random() * cards.length)];
}

const aboveTen = [
  "https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/KD.svg",
  "https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/QS.svg",
  "https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/JS.svg",
  "https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/10C.svg",
];

export default function Cards(props: any) {
  return (
    <div className="card">
      {props.val === 1 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/AC.svg"
          alt=""
        />
      )}
      {props.val === 2 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/2C.svg"
          alt=""
        />
      )}
      {props.val === 3 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/3C.svg"
          alt=""
        />
      )}
      {props.val === 4 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/4C.svg"
          alt=""
        />
      )}
      {props.val === 5 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/5C.svg"
          alt=""
        />
      )}
      {props.val === 6 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/6D.svg"
          alt=""
        />
      )}
      {props.val === 7 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/7C.svg"
          alt=""
        />
      )}
      {props.val === 8 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/8C.svg"
          alt=""
        />
      )}
      {props.val === 9 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/9C.svg"
          alt=""
        />
      )}
      {props.val === 10 && <img src={randomCard(aboveTen)} alt="" />}
      {props.val === 11 && (
        <img
          src="https://raw.githubusercontent.com/richardschneider/cardsJS/master/cards/AD.svg"
          alt=""
        />
      )}
      {props.val === 12 && <img src={randomCard(aboveTen)} alt="" />}
      {props.val === 13 && <img src={randomCard(aboveTen)} alt="" />}
      {props.val === 14 && <img src={randomCard(aboveTen)} alt="" />}
    </div>
  );
}
// src={randomCard(aboveTen)}
