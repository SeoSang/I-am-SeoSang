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
    let newRow = Array(zero_cnt).fill(0).concat(remain)
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
