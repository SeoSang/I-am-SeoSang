import * as React from "react"
const { useState, createRef } = React
import Try from "../../components/games/Try"
import { GAME_BG_COLOR, FlexDiv, WhiteH1, WhiteH2, WhiteH2_KOR } from "../../styles/styled"
import GameNavigation from "../../components/GameNavigation"
import { LotteryContainer } from "./lotto"
import styled from "styled-components"

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
  top: "10%",
  transform: "scale(0.5)",
  filter: "grayscale(0)",
  img: {
    filter: "grayscale(0)",
  },
}

const onClickImgStyle = {
  filter: "grayscale(0)",
}

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
  const [result, setResult] = useState("")
  const [value, setValue] = useState("")
  const [answer, setAnswer] = useState(getRandomNumbers())
  const [tries, setTries] = useState<any[]>([])
  const [baseballStyle, setBaseballStyle] = useState({})
  const [gameTriggered, setTrigger] = useState<boolean>(false)

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
      setResult("정답입니다!")
      setTries([...tries, { try: value, result: "홈런" }])
      alert("홈런!! 한번 더 하시죠. 거절은 못합니다 ㅎㅎ")
      setValue("")
      setAnswer(getRandomNumbers())
      setTries([])
      setResult("")
    }
    // 오답일 경우
    else {
      let strike = 0
      let ball = 0
      // 10번 넘게틀림 리겜
      if (tries.length >= 9) {
        alert(`10번 넘게틀려서 실패! 답은 ${answer} 였습니다ㅎㅎ`)
        setAnswer(getRandomNumbers())
        setTries([])
        setResult("")
      } else {
        for (var j = 0; j < 4; j++) {
          if (value[j] === answer[j]) {
            strike += 1
          } else if (answer.includes(value[j])) {
            ball += 1
          }
        }
        setResult(`${strike} strike and ${ball} ball`)
        const RESULT = `${strike} strike and ${ball} ball`
        setTries([...tries, { try: value, result: RESULT }])
        console.log({ tries })
      }
      setValue("")
    }
    inputFocus()
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  let valueInput = createRef<HTMLInputElement>()

  const inputFocus = () => {
    if (valueInput.current !== null) valueInput.current.focus()
    console.log("TCL: inputFocus -> valueInput", valueInput)
  }

  return (
    <React.Fragment>
      <GameNavigation></GameNavigation>
      <FlexDiv height='90vh' backgroundColor={GAME_BG_COLOR} direction='column'>
        <BaseballContainer style={baseballStyle} onClick={onClickBaseBall}>
          <img style={gameTriggered ? onClickImgStyle : {}} src='/baseball.png'></img>
        </BaseballContainer>
        <FlexDiv direction='column' style={{ visibility: gameTriggered ? "visible" : "hidden" }}>
          <div>
            <WhiteH1>Number BaseBall!</WhiteH1>
          </div>
          <div>
            <WhiteH2_KOR>4자리 숫자를 맞춰보세요</WhiteH2_KOR>
            <WhiteH2>{result}</WhiteH2>
            <form onSubmit={onSubmitForm} style={{ textAlign: "center" }}>
              <input ref={valueInput} maxLength={4} value={value} onChange={onChangeInput}></input>
            </form>
            <ul>
              {tries.map((tr, i) => (
                <Try key={`${i}차 시도 입니다.`} tryInfo={tr}></Try>
              ))}
            </ul>
          </div>
        </FlexDiv>
      </FlexDiv>
      <footer>"Icon made by Pixel perfect from www.flaticon.com"</footer>
    </React.Fragment>
  )
}

export default NumberBaseball
