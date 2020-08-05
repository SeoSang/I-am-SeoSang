import * as React from "react"
const { memo } = React

// const Try = ({ tryInfo }: { tryInfo: TryInfo }) => { 이것도 됨.

const Try: React.FunctionComponent<{ tryInfo: any }> = ({ tryInfo }) => {
  return (
    <>
      <li>
        {tryInfo.try} 🤷‍♂️ {tryInfo.result}
      </li>
    </>
  )
}

// TS 에서는 PropTypes 를 쓸 필요가 없다!

export default memo(Try)
