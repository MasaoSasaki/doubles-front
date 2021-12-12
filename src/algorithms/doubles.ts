export const MatchList = (entry: number) => {
  let match: number[] = [];

  // 一試合分の配列を作る
  while (match.length < entry) {
    let playerNumber = Math.floor(Math.random() * (entry + 1 - 1)) + 1;

    // 重複を排除
    if (match.includes(playerNumber)) continue;
    match = [...match, playerNumber];
    playerNumber = 0;
  }
  return match;
};

MatchList(5);
