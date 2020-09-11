import * as React from "react"
import { memo } from "react"
import styled, { keyframes } from "styled-components"

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const BallDiv = styled.div`
  border-radius: 10000px;
  width: 70px;
  height: 70px;
  margin: 0 15px;
  background: radial-gradient(circle at 17px 17px, #eb4d4b, rgb(255, 252, 252));
  text-align: center;
  font-weight: 700;
  font-size: large;
  animation: ${fadein} 2s;
`

const Ball: React.FunctionComponent<{ ballNum: number }> = ({ ballNum }) => {
  let ballColor = "radial-gradient(circle at 17px 17px, #ff4757, #772530)"

  // 보너스번호 안나오게
  if (ballNum === 0) {
    return null
  }

  if (ballNum < 10) {
    ballColor = "radial-gradient(circle at 17px 17px, #ff4757, #772530)"
  } else if (ballNum < 20) {
    ballColor = "radial-gradient(circle at 17px 17px, #ffa502, #772530)"
  } else if (ballNum < 30) {
    ballColor = "radial-gradient(circle at 17px 17px, #fffa65, #7c7c30)"
  } else if (ballNum < 40) {
    ballColor = "radial-gradient(circle at 17px 17px, #1e90ff, #2f3542)"
  } else {
    ballColor = "radial-gradient(circle at 17px 17px, #7bed9f, #2f3542)"
  }
  return <BallDiv style={{ background: ballColor }}>{ballNum}</BallDiv>
}

export default memo(Ball)
