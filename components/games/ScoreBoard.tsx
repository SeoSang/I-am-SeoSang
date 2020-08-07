import React, { FC } from "react"
import styled from "styled-components"
import { BaseballResult } from "../../pages/games/numberbaseball"

interface CellProps {
  width?: string
}

const Table = styled.div`
  width: 40vw;
  background-color: #70a1ff;
  border-radius: 10px;
  padding: 7px;
  margin: 10px;
`

const Tr = styled.div`
  display: block;
`
const Cell = styled.div`
  display: inline-block;
  width: ${(props: CellProps) => props.width || "20%"};
  font-weight: 500;
`

const ScoreBoard: FC<{ result: BaseballResult }> = ({ result }) => {
  return (
    <Table>
      <Tr style={{ color: "#DCDC55" }}>
        <Cell width='10%'>Try</Cell>
        <Cell>Input</Cell>
        <Cell>Strike</Cell>
        <Cell>Ball</Cell>
        <Cell width='30%'>Result</Cell>
      </Tr>
      {result.map((line, i) => (
        <Tr>
          <Cell width='10%'>{i + 1}</Cell>
          <Cell>{line.inputNum}</Cell>
          <Cell>{"🟡".repeat(line.strike)}</Cell>
          <Cell>{"🟢".repeat(line.ball)}</Cell>
          <Cell width='30%'>{line.word}</Cell>
        </Tr>
      ))}
    </Table>
  )
}

export default ScoreBoard
