import React, { FC, useState, useEffect, useCallback, useRef } from "react"
import { Row, Col, Button } from "antd"
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
    case 5:
      verStyle = STYLE.ver5
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
  const [text, setText] = useState<string>("PRESS START!")
  const gameDoing = useRef(null)

  useEffect(() => {
    setGameBoard(init_gameBoard(version))
  }, [version])

  // 키보드 눌렀을 때
  const handleKeyPress = (e: React.KeyboardEvent) => {
    console.log("keyframe 일단눌림 !!")
    let nextBoard = gameBoard
    if (e.keyCode === 39) nextBoard = moveRight(gameBoard)
    if (e.keyCode === 37) nextBoard = moveLeft(gameBoard)
    if (e.keyCode === 38) nextBoard = moveTop(gameBoard)
    if (e.keyCode === 40) nextBoard = moveBottom(gameBoard)
    setGameBoard(Array.from(nextBoard))
  }
  // 게임 시작
  const onClickStart = useCallback(
    (e: React.MouseEvent) => {
      const { current }: any = gameDoing
      current?.focus()
      setText("START!")
      setGameBoard(init_gameBoard(version))
    },
    [version],
  )

  const gameFocus = useCallback(
    (e: React.MouseEvent) => {
      const { current }: any = gameDoing
      current?.focus()
      setText("PLAYING!")
    },
    [version],
  )

  return (
    <>
      <Row>
        <Col xs={24} md={6}>
          <H2>2048</H2>
        </Col>
        <Col xs={24} md={3}>
          Score
        </Col>
        <Col xs={24} md={3}>
          Best
        </Col>
      </Row>
      <Row>
        <Col span={18}>2048 Clone Game!</Col>
        <Col span={6}>
          <Button onClick={onClickStart}>Start</Button>
        </Col>
      </Row>
      <Row align={"middle"} justify={"center"} style={{ textAlign: "center" }}>
        <div onClick={gameFocus} style={{ margin: "10px auto" }}>
          <input
            style={{
              border: "none",
              cursor: "default",
              textAlign: "center",
              fontSize: "4vw",
              margin: "10px 0",
            }}
            onKeyDown={handleKeyPress}
            ref={gameDoing}
            value={text}
            readOnly
          ></input>
          {gameBoard.map((row, r) => (
            <FlexDiv width='80%' key={`FlexDiv__${r}`} style={{ margin: "0 auto" }}>
              {row.map((num, c) => (
                <Cell version={version} key={`Cell__${r}_${c}`}>
                  <InnerH2 key={`H2__${r}_${c}`}>{num}</InnerH2>
                </Cell>
              ))}
            </FlexDiv>
          ))}
        </div>
      </Row>
    </>
  )
}

export default Game2048Board
