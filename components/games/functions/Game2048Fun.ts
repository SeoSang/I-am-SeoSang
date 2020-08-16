import BillBoard from "../BillBoard"

// 0 인 자리를 찾아 숫자 생성
export const generateRandom = (board: number[][]) => {
  const version = board.length
  let ranNum = Math.floor(Math.random() * version * version)
  const row = Math.floor(ranNum / version)
  const column = ranNum % version
  if (board[row][column] == 0) {
    board[row][column] = version !== 4 ? version : 2
  } else {
    generateRandom(board)
  }
}

// 오른쪽으로 단순 옮기기
export const slideRight = (board: number[][]) => {
  const version = board.length
  board.map((row, r) => {
    let remain = row.filter((n) => n != 0)
    let zero_cnt = version - remain.length
    let newRow = Array(zero_cnt).fill(0).concat(remain)
    return newRow
  })
}

// 왼쪽으로 단순 옮기기
export const slideLeft = (board: number[][]) => {
  const version = board.length
  board.map((row, r) => {
    let remain = row.filter((n) => n != 0)
    let zero_cnt = version - remain.length
    let newRow = remain.concat(Array(zero_cnt).fill(0))
    return newRow
  })
}

export const combineRight = (board: number[][]) => {
  const version = board.length
  board.map((row, r) => {
    row.map((col, c) => {
      if (c === version - 1) return col
      if (col === board[r][c + 1]) return col + board[r][c + 1]
    })
  })
}

// 오른쪽 버튼을 눌렀을 때
export const moveRight = (board: number[][]) => {
  slideRight(board)
  combineRight(board)
  slideRight(board)
  generateRandom(board)
  return board
}
