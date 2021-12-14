// import { Match } from "../types"

export const MatchList = (entry: number) => {
  let matchList: number[][] = [];
  let match: number[] = [];
  const MATCHES: number = (entry * (entry - 1) * (entry - 2) * (entry - 3)) / 8;

  //  すべての試合の配列を作る
  while (matchList.length < MATCHES) {
    // 一試合分の配列を作る
    while (match.length < entry) {
      let playerNumber = Math.floor(Math.random() * (entry + 1 - 1)) + 1;

      // 重複を排除
      if (match.includes(playerNumber)) continue;

      // 一試合の選手の順番の確定
      match = [...match, playerNumber];

      // 初期化
      playerNumber = 0;
    }

    // 一試合の確定
    matchList = [...matchList, match];

    // 初期化
    match = [];
  }

  return matchList;
};

MatchList(4);
