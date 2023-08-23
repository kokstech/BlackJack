const deck: number[] = [];
const tens = [];

while (tens.length < 12) tens.push(10);

for (let i = 1; i <= 14; i++) {
  if (i === 11) continue;
  for (let j = 0; j < 4; j++) {
    deck.push(i);
  }
}

deck.splice(40, 12);

export const decks = deck.concat(tens);
deck.concat(tens);

export const shuffle = () => {
  const random = Math.floor(Math.random() * deck.length);
  const el = deck.splice(random, 1)[0];
  return el;
};
