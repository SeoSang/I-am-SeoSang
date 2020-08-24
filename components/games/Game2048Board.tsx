import React, { FC, useState, useEffect, useCallback, useRef } from "react"
import { Row, Col, Button } from "antd"
import { FlexDiv, H2, GAME_BG_COLOR } from "../../styles/styled"
import styled from "styled-components"
import {
  generateRandom,
  moveRight,
  moveLeft,
  moveTop,
  moveBottom,
  chooseColor,
  calScore,
} from "./functions/Game2048Fun"

const ArrowContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 30px;
  background: #ea5455;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
  border: 5px solid #d2dae2;
`

const Arrow = styled(H2)`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const ScoreBestCol = styled(Col)`
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  margin-left: 10px;
`

interface CellProps {
  version: number
  customTheme?: number
  value: number
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
  background-color: ${(props: CellProps) => {
    let version = props.version !== 4 ? props.version : 2 // 4버전은 2버전이랑 색을 공유
    let index = props.value / version
    if (index === 0) return chooseColor[0]
    let color = chooseColor[props.value]
    switch (props.customTheme) {
      case 1:
        color = chooseColor[props.value]
        break
      case 2:
        color = chooseColor[Math.floor(Math.pow(2, 13) / index)]
        break
      default:
        break
    }
    return color
  }};
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
const Game2048Board: FC<{ version: number }> = ({ version }) => {
  const [gameBoard, setGameBoard] = useState<number[][]>(init_gameBoard(version))
  const [text, setText] = useState<string>("PRESS START!")
  const [arrow, setArrow] = useState<string>("")
  const [theme, setTheme] = useState<number>(1)
  const [score, setScore] = useState<number>(0)
  const [best, setBest] = useState<number>(0)
  const [scoreDiff, setScoreDiff] = useState<number>(0)
  const gameDoing = useRef(null)

  useEffect(() => {
    Initialize_Game()
  }, [version])

  // 게임 초기화
  const Initialize_Game = useCallback(() => {
    setGameBoard(init_gameBoard(version))
    setText("START!")
    setScore(0)
  }, [version, theme])

  // 키보드 눌렀을 때
  const handleKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault()
    let prevBoard = Array.from(gameBoard)
    let nextBoard = gameBoard
    if (e.keyCode === 39) nextBoard = moveRight(gameBoard)
    if (e.keyCode === 37) nextBoard = moveLeft(gameBoard)
    if (e.keyCode === 38) nextBoard = moveTop(gameBoard)
    if (e.keyCode === 40) nextBoard = moveBottom(gameBoard)
    setGameBoard(Array.from(nextBoard))
    setScore(score + calScore(prevBoard, nextBoard))
  }
  const handleKeyUp = (e: React.KeyboardEvent) => {
    e.preventDefault()
    if (e.keyCode === 39) setArrow("➡")
    if (e.keyCode === 37) setArrow("⬅")
    if (e.keyCode === 38) setArrow("⬆")
    if (e.keyCode === 40) setArrow("⬇")
  }
  // 게임 시작
  const onClickStart = useCallback(
    (e: React.MouseEvent) => {
      const { current }: any = gameDoing
      current?.focus()
      Initialize_Game()
    },
    [version, theme],
  )

  const onClickChange = useCallback(
    (e: React.MouseEvent) => {
      const { current }: any = gameDoing
      current?.focus()
      setText("THEME CHANGED!")
      setTheme(theme === 1 ? 2 : 1)
    },
    [version, theme],
  )

  const gameFocus = useCallback(
    (e: React.MouseEvent) => {
      const { current }: any = gameDoing
      current?.focus()
      setText("PLAYING!")
    },
    [version, theme],
  )

  return (
    <>
      <Row>
        <Col xs={24} md={6}>
          <H2>2048</H2>
        </Col>
        <ScoreBestCol xs={12} md={3}>
          <Row>Score</Row>
          <Row>{score}</Row>
        </ScoreBestCol>
        <ScoreBestCol xs={12} md={3}>
          <Row>Best</Row>
          <Row>{score}</Row>
        </ScoreBestCol>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <label>2048 Clone Game!</label>
        </Col>
        <Col xs={12} md={12} style={{ textAlign: "right" }}>
          <Button onClick={onClickChange}>테마바꾸기</Button>
          <Button style={{ margin: "10px" }} onClick={onClickStart}>
            Start
          </Button>
        </Col>
      </Row>
      <Row align={"middle"} justify={"center"} style={{ textAlign: "center" }}>
        <ArrowContainer>
          <Arrow>{arrow}</Arrow>
        </ArrowContainer>
        <ArrowContainer style={{ left: "30px" }}>
          <Arrow>{arrow}</Arrow>
        </ArrowContainer>
        <div onClick={gameFocus} style={{ margin: "10px auto" }}>
          <input
            style={{
              border: "none",
              cursor: "default",
              textAlign: "center",
              fontSize: "3vw",
              margin: "10px 0",
              color: "#4b4b4b",
            }}
            onKeyDown={handleKeyPress}
            onKeyUp={handleKeyUp}
            ref={gameDoing}
            value={text}
            readOnly
          ></input>
          {gameBoard.map((row, r) => (
            <FlexDiv width='60%' key={`FlexDiv__${r}`} style={{ margin: "0 auto" }}>
              {row.map((num, c) => (
                <Cell version={version} value={num} customTheme={theme} key={`Cell__${r}_${c}`}>
                  <InnerH2 color={GAME_BG_COLOR} key={`H2__${r}_${c}`}>
                    {num}
                  </InnerH2>
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
