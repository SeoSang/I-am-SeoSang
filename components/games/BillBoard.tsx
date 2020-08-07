import React, { FC } from "react"
import { BaseballResult } from "../../pages/games/numberbaseball"
import styled from "styled-components"
import { In_BlockDiv, BlinkYellowDiv, BlinkGreenDiv, FlexDiv, WhiteH2 } from "../../styles/styled"

const BillBoardDiv = styled.div`
  display: flex;
  background-color: black;
  border-radius: 10px;
  height: 60px;
  padding: 0 10px;
  margin-bottom: 10px;
  -webkit-box-shadow: inset 0px 0px 52px 53px rgba(41, 41, 41, 1);
  -moz-box-shadow: inset 0px 0px 52px 53px rgba(41, 41, 41, 1);
  box-shadow: inset 0px 0px 52px 53px rgba(41, 41, 41, 1);
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 7px solid #9c9c9c;
`

const BillBoard: FC<{ result: BaseballResult }> = ({ result }) => {
  const latestData = result ? result[result.length - 1] : null
  return (
    <BillBoardDiv>
      <FlexDiv>
        <WhiteH2
          style={{
            color: "#ffff12",
            margin: "0 10px",
          }}
        >
          Strike
        </WhiteH2>
      </FlexDiv>
      <FlexDiv>
        {latestData && latestData.strike
          ? new Array(latestData.strike)
              .fill("str")
              .map((str, i) => <BlinkYellowDiv key={`strike${i}`}></BlinkYellowDiv>)
          : ""}
      </FlexDiv>
      <FlexDiv>
        <WhiteH2
          style={{
            color: "#51ff00",
            margin: "0 10px",
          }}
        >
          Ball
        </WhiteH2>
      </FlexDiv>
      <FlexDiv>
        {latestData && latestData.ball
          ? new Array(latestData.ball)
              .fill("ball")
              .map((ball, i) => <BlinkGreenDiv key={`ball${i}`}></BlinkGreenDiv>)
          : ""}
      </FlexDiv>
    </BillBoardDiv>
  )
}

export default BillBoard
