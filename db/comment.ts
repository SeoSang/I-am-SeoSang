import rootRef from "./index"

export interface CommentData {
  name: string
  content: string
  like: number
  dislike: number
  createdAt: string
}

interface CommentSelector {
  getComments: () => Promise<any>
  addComment: (comment: CommentData) => Promise<void>
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

const comment: CommentSelector = {
  getComments: async () => {
    let res
    try {
      await rootRef.child("comments").once("value", (data) => {
        res = data.toJSON()
      })
      return res
    } catch (e) {
      console.error(e)
      return ERROR_DATA
    }
  },
  addComment: async (comment: CommentData) => {
    try {
      await rootRef.child("comments").push(comment)
    } catch (e) {
      console.error(e)
    }
  },
}

export default comment
