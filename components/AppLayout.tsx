import React, { FC } from "react"
import Navigation from "./Navigation"

const AppLayout: FC<any> = ({ children }) => {
  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <Navigation></Navigation>
      {children}
    </div>
  )
}

export default AppLayout
