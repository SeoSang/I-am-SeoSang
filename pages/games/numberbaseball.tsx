import * as React from "react"
const { useState, createRef } = React
import {
  GAME_BG_COLOR,
  FlexDiv,
  WhiteH1,
  WhiteH2,
  WhiteH2_KR,
  BlinkGreenDiv,
  BlinkYellowDiv,
} from "../../styles/styled"
import GameNavigation from "../../components/GameNavigation"
import styled from "styled-components"
import ScoreBoard from "../../components/games/ScoreBoard"
import BillBoard from "../../components/games/BillBoard"
import { useInput, digits4Input } from "../../styles/buttons"

export interface BaseballLine {
  inputNum: string
  strike: number
  ball: number
  word?: string
}
export type BaseballResult = BaseballLine[]

const BaseballContainer = styled.div`
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

// 버튼 눌렀을 때 야구아이콘 스타일
const onClickBaseballStyle = {
  bottom: "10%",
  left: "5%",
  transform: "scale(0.5)",
  filter: "grayscale(0)",
  img: {
    filter: "grayscale(0)",
  },
}

const onClickImgStyle = {
  filter: "grayscale(0)",
}

const DigitInput = styled.input`
  background: rgba(164, 179, 87, 1);
  background: -moz-linear-gradient(top, rgba(164, 179, 87, 1) 0%, rgba(117, 137, 12, 1) 100%);
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(164, 179, 87, 1)),
    color-stop(100%, rgba(117, 137, 12, 1))
  );
  background: -webkit-linear-gradient(top, rgba(164, 179, 87, 1) 0%, rgba(117, 137, 12, 1) 100%);
  background: -o-linear-gradient(top, rgba(164, 179, 87, 1) 0%, rgba(117, 137, 12, 1) 100%);
  background: -ms-linear-gradient(top, rgba(164, 179, 87, 1) 0%, rgba(117, 137, 12, 1) 100%);
  background: linear-gradient(to bottom, rgba(164, 179, 87, 1) 0%, rgba(117, 137, 12, 1) 100%);
  font-size: 3vw;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a4b357', endColorstr='#75890c', GradientType=0 );
  letter-spacing: 1vw;
  text-align: center;
  border: none;
  border-radius: 10px;
  margin: 5px 0;
`

// 임의의 4자리 다 다른 숫자 받아오기 (문자열 배열)
const getRandomNumbers = () => {
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var randomNum = []
  for (var i = 0; i < 4; i++) {
    const pickOneEachNum = num.splice(Math.ceil(Math.random() * 9) - i - 1, 1)[0]
    randomNum.push(pickOneEachNum)
  }
  return randomNum
}

const duplicateCheck = (n: string) => {
  if (n.slice(1, 4).includes(n[0])) return false
  if (n.slice(2, 4).includes(n[1]) || n[1] === n[0]) return false
  if (n.slice(0, 2).includes(n[2]) || n[2] === n[3]) return false
  if (n.slice(0, 3).includes(n[3])) return false
  return true
}

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getRandomNumbers())
  const [baseballStyle, setBaseballStyle] = useState({})
  const [gameTriggered, setTrigger] = useState<boolean>(false)
  const [result, setResult] = useState<BaseballResult | []>([])
  const [billBoard, setBillBoard] = useState<String>("")
  const digit4 = useInput("", (digits: string) => {
    return !isNaN(Number(digits))
  })
  let value: string = digit4.value

  const onClickBaseBall = (e: React.MouseEvent) => {
    setBaseballStyle(onClickBaseballStyle)
    setTrigger(true)
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 정답일 경우
    if (value.length !== 4 || isNaN(+value)) {
      alert("4자리 숫자여야만 합니다요")
    } else if (value.includes("0")) {
      alert("0은 포함이 불가능합니다요")
    } else if (!duplicateCheck(value)) {
      alert("숫자는 중복되면 안돼요!")
    } else if (value === answer.join("")) {
      setBillBoard("⭐ HOME RUN! ⭐")
      setAnswer(getRandomNumbers())
      setResult([])
    }
    // 오답일 경우
    else {
      let strike = 0
      let ball = 0
      // 10번 넘게틀림 리겜
      if (result.length >= 9) {
        alert(`10번 넘게틀려서 실패! 답은 ${answer} 였습니다ㅎㅎ`)
        setAnswer(getRandomNumbers())
        setResult([])
      } else {
        for (var j = 0; j < 4; j++) {
          if (value[j] === answer[j]) {
            strike += 1
          } else if (answer.includes(value[j])) {
            ball += 1
          }
        }
        const newLine: BaseballLine = {
          inputNum: value,
          strike: strike,
          ball: ball,
          word: `🤷‍♂️ ${strike}  Strike  ${ball}  Ball`,
        }
        setResult([...result, newLine])
        setBillBoard(`🤷‍♂️ ${strike}  Strike  ${ball}  Ball`)
      }
    }
    inputFocus()
  }

  let valueInput = createRef<HTMLInputElement>()

  const inputFocus = () => {
    if (valueInput.current !== null) valueInput.current.focus()
  }

  return (
    <React.Fragment>
      <GameNavigation></GameNavigation>
      <FlexDiv height='100vh' backgroundColor={GAME_BG_COLOR} direction='column'>
        <BaseballContainer style={baseballStyle} onClick={onClickBaseBall}>
          <img style={gameTriggered ? onClickImgStyle : {}} src='/baseball.png'></img>
        </BaseballContainer>
        <FlexDiv
          direction='column'
          style={{ visibility: gameTriggered ? "visible" : "hidden", marginBottom: "15vh" }}
        >
          <BillBoard result={result}></BillBoard>
          <WhiteH2 style={{ marginBottom: "20px" }}>{billBoard}</WhiteH2>
          <div>
            <WhiteH1>Number BaseBall!</WhiteH1>
          </div>
          <div style={{ textAlign: "center" }}>
            <WhiteH2_KR>4자리 숫자를 맞춰보세요</WhiteH2_KR>
            <form onSubmit={onSubmitForm} style={{ textAlign: "center" }}>
              <DigitInput ref={valueInput} maxLength={4} {...digit4}></DigitInput>
            </form>
          </div>
          <ScoreBoard result={result}></ScoreBoard>
        </FlexDiv>
      </FlexDiv>
      <footer>"Icon made by Pixel perfect from www.flaticon.com"</footer>
    </React.Fragment>
  )
}

export default NumberBaseball
