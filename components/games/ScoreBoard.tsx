import React, { FC } from "react"
import styled from "styled-components"
import { BaseballResult } from "../../pages/games/numberbaseball"

const Table = styled.div`
  //   display: inline-block;
  position: absolute;
  width: 25vw;
  right: 5%;
  background-color: #70a1ff;
  border-radius: 10px;
  padding: 5px;
`

const Tr = styled.div`
  display: block;
`
const Cell = styled.div`
  display: inline-block;
  width: 20%;
`

const dummy_result = [
  {
    inputNum: "1234",
    strike: 3,
    ball: 1,
    end: false,
  },
]

const ScoreBoard: FC<{ result: BaseballResult }> = ({ result }) => {
  return (
    <Table>
      <Tr style={{ color: "#DCDC55" }}>
        <Cell>Try</Cell>
        <Cell>Input</Cell>
        <Cell>Strike</Cell>
        <Cell>Ball</Cell>
        <Cell>Result</Cell>
      </Tr>
      {result.map((line, i) => (
        <Tr>
          <Cell>{i + 1}</Cell>
          <Cell>{line.inputNum}</Cell>
          <Cell>{"🟡".repeat(line.strike)}</Cell>
          <Cell>{"🟢".repeat(line.ball)}</Cell>
          <Cell>{line.end}</Cell>
        </Tr>
      ))}
    </Table>
  )
}

export default ScoreBoard
