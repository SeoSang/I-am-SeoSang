import { Data2048 } from "../pages/games/game2048"
import rootRef from "./index"

interface Game2048DBSelector {
  get2048Data: () => Promise<Data2048>
  getBestScore_2048: (version: number) => Promise<number | firebase.database.DataSnapshot>
  setBestScore_2048: (version: number, score: number) => {}
}

const game2048: Game2048DBSelector = {
  get2048Data: async () => {
    let data_2048: Data2048 = {
      best: {
        ver2: -1,
        ver3: -1,
        ver4: -1,
        ver5: -1,
      },
    }
    try {
      await rootRef
        .child("games")
        .child("2048")
        .once("value", function (data) {
          data_2048 = data.val()
        })
      return data_2048
    } catch (e) {
      console.error(e)
      return data_2048
    }
  },
  // 최고점수 get
  getBestScore_2048: async (version: number) => {
    let res
    const versionKey = `ver${version}`
    try {
      res = await rootRef
        .child("games")
        .child("2048")
        .child("best")
        .child(versionKey)
        .once("value", function (data) {
          console.log(data.val())
          return data.val()
        })
    } catch (e) {
      res = -1
      console.error(e)
    }
    return res
  },
  // 최고점수 갱신
  setBestScore_2048: async (version: number, score: number) => {
    try {
      await rootRef
        .child("games")
        .child("2048")
        .child("best")
        .child(`ver${version}`)
        .set(score.toString())
    } catch (e) {
      console.error(e)
    }
  },
}

export default game2048