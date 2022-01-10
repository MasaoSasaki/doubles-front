import _ from "lodash";

import type { Match } from "../types";

export const MatchList = (entry: number) => {
  let matchList: Match[] = [];
  const MATCHES: number = (entry * (entry - 1) * (entry - 2) * (entry - 3)) / 8;

  //  すべての試合の配列を作る
  CreateLoop: while (matchList.length < MATCHES) {
    const match: Match = {
      pairA: [],
      pairB: [],
      rest: [],
    };

    // エントリー人数分の配列をランダムで作成する。
    const rangeArray = _.shuffle(_.range(1, entry + 1));
    match.pairA = rangeArray.slice(0, 2);
    match.pairB = rangeArray.slice(2, 4);
    console.log(match);

    // 過去の配列を比較し重複があった場合はmatchを作り直す。
    for (let i = 0; i < matchList.length; i++) {
      if (
        matchList[i].pairA.toString() === match.pairA.toString() ||
        matchList[i].pairA.toString() === match.pairA.reverse().toString() ||
        matchList[i].pairA.toString() === match.pairB.toString() ||
        matchList[i].pairA.toString() === match.pairB.reverse().toString()
      ) {
        continue CreateLoop;
      }
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
