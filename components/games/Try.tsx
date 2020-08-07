import * as React from "react"
import { WhiteH3 } from "../../styles/styled"
const { memo } = React

// const Try = ({ tryInfo }: { tryInfo: TryInfo }) => { 이것도 됨.

const Try: React.FunctionComponent<{ tryInfo: any }> = ({ tryInfo }) => {
  return (
    <>
      <li>
        <WhiteH3>
          {tryInfo.try} 🤷‍♂️ {tryInfo.result}
        </WhiteH3>
      </li>
    </>
  )
}

// TS 에서는 PropTypes 를 쓸 필요가 없다!

export default memo(Try)
