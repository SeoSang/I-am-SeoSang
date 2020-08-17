import React, { FC, useState } from "react"
import { FlexDiv, H2 } from "../../styles/styled"
import styled from "styled-components"
import { generateRandom, moveRight, moveLeft, moveTop, moveBottom } from "./functions/Game2048Fun"

interface CellProps {
  version?: number | undefined
}

const getStyle = (version: number | undefined) => {
  let verStyle = STYLE.ver4
  switch (version) {
    case 2:
      verStyle = STYLE.ver2
      break
    case 3:
      verStyle = STYLE.ver3
      break
    case 4:
      verStyle = STYLE.ver4
      break
    default:
      verStyle = STYLE.ver4
      break
  }
  return verStyle
}
const STYLE = {
  ver2: {
    width: "50%",
    paddingBottom: "50%",
  },
  ver3: {
    width: "33.3%",
    paddingBottom: "33.3%",
  },
  ver4: {
    width: "25%",
    paddingBottom: "25%",
  },
  ver5: {
    width: "20%",
    paddingBottom: "20%",
  },
}

const Cell = styled.div`
  ${(props: CellProps) => getStyle(props.version)}
  position: relative;
  background-color: orange;
  border: 2px solid;
`
const InnerH2 = styled(H2)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const init_gameBoard = (version: number | undefined) => {
  const newBoard = Array.from(Array(version), () => Array(version).fill(0))
  generateRandom(newBoard)
  return newBoard
}

// version = 몇 칸짜리 게임인지
const Game2048Board: FC<{ version: number | undefined }> = ({ version }) => {
  const [gameBoard, setGameBoard] = useState<number[][]>(init_gameBoard(version))
  const handleKeyPress = (e: React.KeyboardEvent) => {
    console.log("keyframe 일단눌림 !!")
    if (e.keyCode === 39) {
      // 오른쪽
      const nextBoard = moveRight(gameBoard)
      setGameBoard(Array.from(nextBoard))
    }
    if (e.keyCode === 37) {
      // 왼쪽
      const nextBoard = moveLeft(gameBoard)
      setGameBoard(Array.from(nextBoard))
    }
    if (e.keyCode === 38) {
      // 위쪽
      const nextBoard = moveTop(gameBoard)
      setGameBoard(Array.from(nextBoard))
    }
    if (e.keyCode === 40) {
      // 아래쪽
      const nextBoard = moveBottom(gameBoard)
      setGameBoard(Array.from(nextBoard))
    }
  }

  return (
    <div>
      <input onKeyDown={handleKeyPress}></input>
      {gameBoard.map((row, r) => (
        <FlexDiv width='100%' key={`FlexDiv__${r}`}>
          {row.map((num, c) => (
            <Cell version={version} key={`Cell__${r}_${c}`}>
              <InnerH2 key={`H2__${r}_${c}`}>{num}</InnerH2>
            </Cell>
          ))}
        </FlexDiv>
      ))}
    </div>
  )
}

export default Game2048Board
