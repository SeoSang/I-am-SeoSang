import * as React from "react"
import { memo } from "react"
import { CSSProperties } from "react"
import { FlexDiv } from "../../styles/styled"

const Ball: React.FunctionComponent<{ ballNum: number }> = ({ ballNum }) => {
  const styles: CSSProperties = {
    borderRadius: "10000px",
    width: "70px",
    height: "70px",
    margin: "0 15px",
    background: "radial-gradient(circle at 17px 17px, #eb4d4b, rgb(255, 252, 252))",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "large",
  }

  // 보너스번호 안나오게
  if (ballNum === 0) {
    return null
  }

  if (ballNum < 10) {
    styles.background = "radial-gradient(circle at 17px 17px, #ff4757, #772530)"
  } else if (ballNum < 20) {
    styles.background = "radial-gradient(circle at 17px 17px, #ffa502, #772530)"
  } else if (ballNum < 30) {
    styles.background = "radial-gradient(circle at 17px 17px, #fffa65, #7c7c30)"
  } else if (ballNum < 40) {
    styles.background = "radial-gradient(circle at 17px 17px, #1e90ff, #2f3542)"
  } else {
    styles.background = "radial-gradient(circle at 17px 17px, #7bed9f, #2f3542)"
  }
  return <div style={styles}>{ballNum}</div>
}

export default memo(Ball)
