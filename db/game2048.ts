import {Data2048, INIT_DATA_2048} from "../pages/games/game2048"
import db from "./index"
import {child, get, ref, set} from "firebase/database";


const GAME_PATH = '/games/2048'

export const get2048Data = async () => {
    let data_2048: Data2048 = INIT_DATA_2048
    try {
        const dbRef = ref(db)
        const gameValuesSnapshot = await get(child(dbRef, `${GAME_PATH}`))
        return gameValuesSnapshot.exists() ? gameValuesSnapshot.val() : data_2048
    } catch (e) {
        console.error(e)
        return data_2048
    }
}

// 최고점수 get
export const getBestScore_2048 = async (version: number) => {
    let res = -1
    const versionKey = `ver${version}`
    try {
        const dbRef = ref(db)
        const gameValuesSnapshot = await get(child(dbRef, `${GAME_PATH}/best/${versionKey}`))
        res = gameValuesSnapshot.exists() ? gameValuesSnapshot.val() : -1
        return res
    } catch (e) {
        console.error(e)
        return res
    }
}

// 최고점수 갱신
export const setBestScore_2048 = async (version: number, score: number) => {
    const versionKey = `ver${version}`
    try {
        const dbRef = ref(db)
        await set(ref(db, `${GAME_PATH}/best/${versionKey}`), score.toString())
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}

export const setBestName_2048 = async (version: number, name: string) => {
    const versionKey = `ver${version}_name`
    try {
        const dbRef = ref(db)
        await set(ref(db, `${GAME_PATH}/best/${versionKey}`), name.toString())
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}

