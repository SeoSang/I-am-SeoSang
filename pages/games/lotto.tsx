import * as React from "react"
import { useState, useRef, useEffect, useMemo } from "react"
import Ball from "../../components/games/Ball"
import { FlexDiv, GAME_BG_COLOR, WhiteH2 } from "../../styles/styled"
import GameNavigation from "../../components/GameNavigation"
import styled from "styled-components"

export const LotteryContainer = styled.div`
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  background-color: #f1f2f6;
  width: 150px;
  height: 150px;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0.07);

  img {
    filter: grayscale(1);
    max-width: 100%;
  }

  &:hover {
    width: 250px;
    height: 250px;
    box-shadow: 0 10px 30px rgba(0, 0, 0.1);
    cursor: pointer;

    img {
      filter: grayscale(0);
    }
  }
`
const onClickLotteryStyle = {
  top: "20%",
  transform: "scale(0.5)",
}

function getWinNumbers() {
  console.log("getWinNumbers")
  const BONUS_INDEX = 7
  const candidate = Array(45)
    .fill(null)
    .map((v, i) => i + 1)
  const shuffle = []
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
  }
  const bonusNum = shuffle[BONUS_INDEX]
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c)
  return [...winNumbers, bonusNum]
}

const Lotto = () => {
  const lottoNums = useMemo(() => getWinNumbers(), [])
  const [winNums, setWinNums] = useState(lottoNums)
  const [winBalls, setWinBalls] = useState<number[]>([])
  const [bonus, setBonus] = useState<number>(0)
  const [lotteryStyle, setLotteryStyle] = useState({})
  const [textObject, setTextObject] = useState({ lottoNums: "", bonusNums: "" })

  const timeoutIDs = useRef<number[]>([])
  const bonusTimeoutID = useRef<number>()

  const onClickLotto = (e: React.MouseEvent) => {
    // e.preventDefault()
    setLotteryStyle(onClickLotteryStyle)
    refresh()
    showBalls()
    setTextObject({ lottoNums: "6 Numbers", bonusNums: "Bonus" })
  }

  const refresh = () => {
    setWinNums(getWinNumbers())
    setWinBalls([])
    setBonus(0)
    timeoutIDs.current.forEach((v) => {
      clearTimeout(v)
    })
    clearTimeout(bonusTimeoutID.current)
  }

  const showBalls = () => {
    refresh()
    for (let i = 0; i < winNums.length - 1; i++) {
      timeoutIDs.current[i] = setTimeout(() => {
        setWinBalls((prev) => {
          return [...prev, winNums[i]]
        })
      }, (i + 1) * 1000)
    }
    bonusTimeoutID.current = setTimeout(() => {
      setBonus(winNums[6])
    }, 7000)
  }

  useEffect(() => {
    // 컴포넌트 없어질 때 지워주기 (ComponentWillUnmount)
    return () => {
      timeoutIDs.current.forEach((v) => {
        clearTimeout(v)
      })
      clearTimeout(bonusTimeoutID.current)
    }
  }, [])

  return (
    <>
      <GameNavigation></GameNavigation>
      <FlexDiv height='90vh' backgroundColor={GAME_BG_COLOR} direction='column'>
        <LotteryContainer style={lotteryStyle} onClick={onClickLotto}>
          <img src='/lottery.png'></img>
        </LotteryContainer>
        <FlexDiv flex='inline-flex' height='20%' backgroundColor={GAME_BG_COLOR}>
          <div style={{ position: "absolute", left: "10%" }}>
            <WhiteH2>{textObject.lottoNums}</WhiteH2>
          </div>
          <FlexDiv height='90px'>
            {winBalls.map((nums, i) => (
              <Ball key={`${i}번째 공`} ballNum={nums}></Ball>
            ))}
          </FlexDiv>
        </FlexDiv>
        <FlexDiv flex='inline-flex' height='20%' backgroundColor={GAME_BG_COLOR}>
          <div style={{ position: "absolute", left: "10%" }}>
            <WhiteH2>{textObject.bonusNums}</WhiteH2>
          </div>
          <FlexDiv height='90px'>
            {bonus == null ? null : <Ball key='bonus 공' ballNum={bonus}></Ball>}
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
      <footer>"Icon made by Pixel perfect from www.flaticon.com"</footer>
    </>
  )
}

export default Lotto
