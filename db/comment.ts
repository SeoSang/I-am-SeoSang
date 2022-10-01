import db from "./index";
import {child, get, push, ref, update} from "firebase/database";

export const COMMENT_PATH = 'comments'

export interface CommentData {
    name: string
    content: string
    like: number
    dislike: number
    createdAt: string
}

const ERROR_DATA = {
    "0": {
        name: "주의!",
        content: "서버 오류 발생!",
        like: 0,
        dislike: 100,
        createdAt: "2020-09-04 21:39",
    },
}

export const getComments = async () => {
    try {
        const dbRef = ref(db)
        const commentSnapshot = await get(child(dbRef, COMMENT_PATH))
        return commentSnapshot.exists() ? commentSnapshot.val() : ERROR_DATA
    } catch (e) {
        console.error(e)
        return ERROR_DATA
    }
}

export const addComment = async (comment: CommentData) => {
    try {
        const newCommentKey = push(child(ref(db), COMMENT_PATH)).key;
        const updates: any = {}
        updates[`/${COMMENT_PATH}/${newCommentKey}`] = comment
        const updateResult = await update(ref(db), updates)
        return updateResult
    } catch (e) {
        console.error(e)
        return ERROR_DATA
    }
}


