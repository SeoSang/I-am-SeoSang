import React, { FC, useState, useEffect, useCallback, useRef, Context } from "react"
import { Row, Col, Button, message } from "antd"
import { FlexDiv, H2, GAME_BG_COLOR } from "../../styles/styled"
import styled, { keyframes, css } from "styled-components"
import {
  generateRandom,
  moveRight,
  moveLeft,
  moveTop,
  moveBottom,
  chooseColor,
  calScore,
  isGameOver,
  isMovingKey,
  getStyle,
} from "./functions/Game2048Fun"
import { NextPage } from "next"
import axios from "axios"
import * as firebase from "firebase/app"
import { Data2048 } from "../../pages/games/game2048"
import db from "../../db/game2048"

interface DiffProps {
  triggered: boolean
}
interface CellProps {
  version: number
  customTheme?: number
  value: number
}

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

const diffAnimation = keyframes`
  0% {
    top: 60px;
    opacity: 100%;
  }
  100% {
    top: -20px;
    opacity: 0%;
  }
`
const triggeredStyle = css`
  animation: ${diffAnimation} 1s linear;
  animation-iteration-count: 1;
`
const prevStyle = css`
  animation: none;
`

const DiffScore = styled.div`
  position: absolute;
  top: -20px;
  opacity: 0;
  font-size: 150%;
  ${(props: DiffProps) => (props.triggered ? triggeredStyle : prevStyle)}
`

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

const getBestFromData = (data: Data2048, version: number) => {
  let result = -1
  switch (version) {
    case 2:
      result = data.best.ver2
      break
    case 3:
      result = data.best.ver3
      break
    case 4:
      result = data.best.ver4
      break
    case 5:
      result = data.best.ver5
      break
    default:
      break
  }
  return result
}

const init_gameBoard = (version: number | undefined) => {
  const newBoard = Array.from(Array(version), () => Array(version).fill(0))
  generateRandom(newBoard)
  return newBoard
}

// version = 몇 칸짜리 게임인지
const Game2048Board: NextPage<{ version: number; serverData: Data2048 }> = ({
  version,
  serverData,
}) => {
  const [gameBoard, setGameBoard] = useState<number[][]>(init_gameBoard(version))
  const [text, setText] = useState<string>("PRESS START!")
  const [arrow, setArrow] = useState<string>("")
  const [theme, setTheme] = useState<number>(1)
  const [score, setScore] = useState<number>(0)
  const [playing, setPlaying] = useState<boolean>(false)
  const [best, setBest] = useState<number>(0)
  const [scoreDiff, setScoreDiff] = useState<number>(0)
  const [diff, setDiff] = useState<boolean>(false) // diff 애니메이션 trigger 역할
  const [diffCheck, setDiffCheck] = useState<boolean>(true) // diff 변수 컨트롤 역할
  const [pressAvail, setPressAvail] = useState<boolean>(true)
  const gameDoing = useRef(null)

  // 버전 바뀌었을 때
  useEffect(() => {
    Initialize_Game()
    setBest(getBestFromData(serverData, version))
  }, [version])

  // diff 애니메이션용
  useEffect(() => {
    let timer: number
    if (diffCheck) {
      timer = setTimeout(() => {
        setDiff(!diff)
      })
      setDiffCheck(false)
    }
    return () => {
      if (!diffCheck) clearTimeout(timer)
    }
  }, [diff, diffCheck])

  // 게임 초기화
  const Initialize_Game = useCallback(() => {
    setGameBoard(init_gameBoard(version))
    setText("START!")
    setScore(0)
    setScoreDiff(0)
    setDiff(false)
    setDiffCheck(true)
    setPlaying(true)
  }, [version, theme, playing, serverData])

  // 키보드 눌렀을 때
  const handleKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault()
    if (!pressAvail) return
    // Ctrl + R 게임 초기화 (치트키)
    if (e.keyCode === 82 && e.ctrlKey) {
      Initialize_Game()
      return
    }
    if (playing === false) return // 게임 중인지 체크
    if (isMovingKey(e.keyCode) === false) return // 상하좌우 키 인지 체크
    let prevBoard = Array.from(gameBoard)
    let nextBoard = gameBoard
    if (e.keyCode === 39) nextBoard = moveRight(gameBoard)
    else if (e.keyCode === 37) nextBoard = moveLeft(gameBoard)
    else if (e.keyCode === 38) nextBoard = moveTop(gameBoard)
    else if (e.keyCode === 40) nextBoard = moveBottom(gameBoard)
    setGameBoard(Array.from(nextBoard))
    const gettingScore = calScore(prevBoard, nextBoard)
    setScore(score + gettingScore)
    setScoreDiff(gettingScore)
    // 움직인 결과일 때 diff 애니메이션 작동
    if (isMovingKey(e.keyCode) && gettingScore !== 0) {
      setDiff(!diff)
      setDiffCheck(true)
    }
    // 게임 끝!
    if (isGameOver(gameBoard)) {
      // 최고 스코어 갱신
      if (score > best) {
        setBest(score)
        db.setBestScore_2048(version, score)
        message.success(`최고기록 갱신!! 점수 : ${score}`)
      } else {
        message.error(`게임 종료! 점수 : ${score}`)
      }
      setText("Game Over!!")
      setPlaying(false)
    }
    setPressAvail(false)
    setTimeout(() => {
      setPressAvail(true)
    }, 10)
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
    [version, theme, playing],
  )

  const onClickChange = useCallback(
    (e: React.MouseEvent) => {
      const { current }: any = gameDoing
      current?.focus()
      setText("THEME CHANGED!")
      setTheme(theme === 1 ? 2 : 1)
    },
    [version, theme, playing],
  )

  const gameFocus = useCallback(
    (e: React.MouseEvent) => {
      if (playing === false) return
      const { current }: any = gameDoing
      current?.focus()
      setText("PLAYING!")
    },
    [version, theme, playing],
  )

  return (
    <>
      <Row>
        <Col xs={24} md={6}>
          <H2>2048</H2>
        </Col>
        <ScoreBestCol xs={12} md={3}>
          <DiffScore triggered={diff}>+{scoreDiff}</DiffScore>
          <Row>Score</Row>
          <Row>{score}</Row>
        </ScoreBestCol>
        <ScoreBestCol xs={12} md={3}>
          <Row>Best</Row>
          <Row>{best}</Row>
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
              fontSize: "2.5vw",
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
            <FlexDiv width='55%' key={`FlexDiv__${r}`} style={{ margin: "0 auto" }}>
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
