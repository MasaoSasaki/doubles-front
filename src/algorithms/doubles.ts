import type { Match } from "../types";

export const MatchList = (entry: number) => {
  let matchList: Match[] = [];
  const MATCHES: number = (entry * (entry - 1) * (entry - 2) * (entry - 3)) / 8;

  //  すべての試合の配列を作る
  while (matchList.length < MATCHES) {
    const match: Match = {
      pairA: [],
      pairB: [],
      rest: [],
    };

    // pairAの配列を作る
    while (match.pairA.length < 2) {
      const playerNumber = Math.floor(Math.random() * (entry + 1 - 1)) + 1;

      // 重複を排除
      if (match.pairA.includes(playerNumber)) continue;

      // pairAの確定
      match.pairA = [...match.pairA, playerNumber];
    }

    // pairBの配列を作る
    while (match.pairB.length < 2) {
      const playerNumber = Math.floor(Math.random() * (entry + 1 - 1)) + 1;

      // 重複を排除
      if (match.pairA.includes(playerNumber)) continue;
      if (match.pairB.includes(playerNumber)) continue;

      // pairBの確定
      match.pairB = [...match.pairB, playerNumber];
    }

    // 過去の配列を比較し重複排除
    console.log("判定開始");
    if (
      matchList.some((item) => {
        item.pairA.toString() === match.pairA.toString();
      })
    ) {
      console.log("equal");
    }

    // 一試合の確定
    matchList = [...matchList, match];
  }
  console.log(matchList);
  return matchList;
};

for (let i = 0; i < 4; i++) {
  MatchList(4);
}
