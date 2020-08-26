import BillBoard from "../BillBoard"

const pipe = (...functions: any) => (input: any) =>
  functions.reduce((acc: Function, fn: Function) => fn(acc), input)

const isSameBoard = (board1: number[][], board2: number[][]): boolean => {
  return board1.every((row, r) => {
    return row.every((n, c) => {
      return board2[r][c] === n
    })
  })
}
function transposeCCW(board: number[][]): number[][] {
  // 행렬 돌리기 (시계 반대)
  let version = board.length || 0
  let newBoard = Array.from(Array(version), () => Array(version).fill(0))
  for (let i = 0; i < version; i++) {
    newBoard[i] = []
    for (let j = 0; j < version; j++) {
      newBoard[i][j] = board[j][version - i - 1]
    }
  }
  return newBoard
}

function transposeCW(board: number[][]): number[][] {
  // 행렬 돌리기 (시계)
  let version = board.length || 0
  let newBoard = Array.from(Array(version), () => Array(version).fill(0))
  for (let i = 0; i < version; i++) {
    newBoard[i] = []
    for (let j = 0; j < version; j++) {
      newBoard[i][version - j - 1] = board[j][i]
    }
  }
  return newBoard
}

// 새로운 숫자 생성 가능한지 테스트
const isGenerateAvailable = (board: number[][]): boolean => {
  let check = false
  board.forEach((row) =>
    row.forEach((n) => {
      if (n == 0) {
        check = true
      }
    }),
  )
  return check
}

// 0 인 자리를 찾아 숫자 생성
export const generateRandom = (board: number[][]): number[][] => {
  if (!isGenerateAvailable(board)) {
    return board
  }
  const version = board.length
  let ranNum = Math.floor(Math.random() * version * version)
  const row = Math.floor(ranNum / version)
  const column = ranNum % version
  if (board[row][column] == 0) {
    board[row][column] = version !== 4 ? version : 2
    return board
  } else {
    return generateRandom(board)
  }
}

// 오른쪽으로 단순 옮기기
export const slideRight = (board: number[][]) => {
  const version = board.length
  const newBoard = board.map((row, r) => {
    let remain = row.filter((n) => n != 0)
    let zero_cnt = version - remain.length
    let newRow = Array(zero_cnt)
      .fill(0)
      .concat(remain)
    return newRow
  })
  return newBoard
}

// 왼쪽으로 단순 옮기기
export const slideLeft = (board: number[][]) => {
  const version = board.length
  return board.map((row, r) => {
    let remain = row.filter((n) => n != 0)
    let zero_cnt = version - remain.length
    let newRow = remain.concat(Array(zero_cnt).fill(0))
    return newRow
  })
}

// slideTop과 Bottom 은 쓸 일이 없다  (회전 방식으로 바꿈.)
// // 위쪽으로 단순 옮기기
// export const slideTop = (board: number[][]) => {
//   return pipe(transposeCCW, slideLeft, transposeCW)(board)
// }

// // 위쪽으로 단순 옮기기
// export const slideBottom = (board: number[][]) => {
//   return pipe(transposeCCW, slideRight, transposeCW)(board)
// }

export const combineLeft = (board: number[][]) => {
  const version = board.length
  const newBoard = Array.from(board)
  for (let row = 0; row < version; row++) {
    for (let col = 0; col < version - 1; col++) {
      if (newBoard[row][col] === newBoard[row][col + 1]) {
        newBoard[row][col] = newBoard[row][col] + newBoard[row][col + 1]
        newBoard[row][col + 1] = 0
      }
    }
  }
  return newBoard
}

// 오른쪽 버튼을 눌렀을 때
export const moveRight = (board: number[][]) => {
  const nextBoard = pipe(slideRight, combineLeft, slideRight)(board)
  if (isSameBoard(board, nextBoard)) return board // 변화 없으면 그대로
  return generateRandom(nextBoard) // 변화 있으면 숫자 생성
}

// 왼쪽 버튼 눌렀을 때
export const moveLeft = (board: number[][]) => {
  const nextBoard = pipe(slideLeft, combineLeft, slideLeft)(board)
  if (isSameBoard(board, nextBoard)) return board // 변화 없으면 그대로
  return generateRandom(nextBoard) // 변화 있으면 숫자 생성
}

// 위쪽 버튼을 눌렀을 때
export const moveTop = (board: number[][]) => {
  const nextBoard = pipe(transposeCCW, slideLeft, combineLeft, slideLeft, transposeCW)(board)
  if (isSameBoard(board, nextBoard)) return board // 못움직이면 그대로
  return generateRandom(nextBoard)
}

// 아래쪽 버튼 눌렀을 때
export const moveBottom = (board: number[][]) => {
  const nextBoard = pipe(transposeCCW, slideRight, combineLeft, slideRight, transposeCW)(board)
  if (isSameBoard(board, nextBoard)) return board // 못움직이면 그대로
  return generateRandom(nextBoard)
}

// 점수 계산하는 함수
export const calScore = (prev: number[][], now: number[][]) => {
  const Score_prev: any = {}
  const Score_now: any = {}
  let score = 0
  prev.map((row) => {
    row.map((num) => {
      Score_prev[num] = Score_prev[num] ? Score_prev[num] + 1 : 1
    })
  })
  now.map((row) => {
    row.map((num) => {
      Score_now[num] = Score_now[num] ? Score_now[num] + 1 : 1
    })
  })
  Object.keys(Score_prev).map((num) => {
    let prev_cnt = Score_prev[num]
    let now_cnt = Score_now[num] ? Score_now[num] : 0
    // 터트렸을 때
    if (prev_cnt > now_cnt) {
      let isInitiailNum = num === "2" || num === "3" || num === "5"
      let diff_cnt = isInitiailNum ? prev_cnt - now_cnt + 1 : prev_cnt - now_cnt // 초기값은 1개가 새로생긴다
      score += diff_cnt * parseInt(num)
      Score_now[parseInt(num) * 2] -= 1
    }
  })
  return score
}

// 게임 끝났는지 확인
export const isGameOver = (board: number[][]) => {
  if (moveLeft(board) !== board) return false
  if (moveRight(board) !== board) return false
  if (moveTop(board) !== board) return false
  if (moveBottom(board) !== board) return false
  return true
}

export const MOVING_KEYCODE = [37, 38, 39, 40]

const LEVEL0 = "#d2dae2"
const LEVEL1 = "#fffa65"
const LEVEL2 = "#ffc048"
const LEVEL3 = "#ff9f1a"
const LEVEL4 = "#ffcccc"
const LEVEL5 = "#ff5e57"
const LEVEL6 = "#c4fb6d"
const LEVEL7 = "#0be881"
const LEVEL8 = "#34e7e4"
const LEVEL9 = "#cd84f1"
const LEVEL10 = "#F8EFBA"
const LEVEL11 = "#7d5fff"
const LEVEL12 = "#575fcf"
const LEVEL13 = "#808e9b"

export const chooseColor: any = {
  0: LEVEL0,
  // Ver 2 , 4
  2: LEVEL1,
  4: LEVEL2,
  8: LEVEL3,
  16: LEVEL4,
  32: LEVEL5,
  64: LEVEL6,
  128: LEVEL7,
  256: LEVEL8,
  512: LEVEL9,
  1024: LEVEL10,
  2048: LEVEL11,
  4096: LEVEL12,
  8192: LEVEL13,
  // Ver 3
  3: LEVEL1,
  6: LEVEL2,
  12: LEVEL3,
  24: LEVEL4,
  48: LEVEL5,
  96: LEVEL6,
  192: LEVEL7,
  384: LEVEL8,
  768: LEVEL9,
  1536: LEVEL10,
  3072: LEVEL11,
  6144: LEVEL12,
  12288: LEVEL13,
  // Ver 4
  5: LEVEL1,
  10: LEVEL2,
  20: LEVEL3,
  40: LEVEL4,
  80: LEVEL5,
  160: LEVEL6,
  320: LEVEL7,
  640: LEVEL8,
  1280: LEVEL9,
  2560: LEVEL10,
  5120: LEVEL11,
  10240: LEVEL12,
  20480: LEVEL13,
}
