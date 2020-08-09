import React, { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"

const MENU = "navigation-menu"
const MENU_ACTIVE = "navigation-menu active"
const MENU_BUTTON_STYLE = {
  fontSize: "22px",
  border: "2px solid",
  borderRadius: "3px",
  padding: "10px",
  color: "#192A56",
}
const X_BUTTON_STYLE = {
  fontSize: "22px",
  border: "2px solid",
  borderRadius: "3px",
  padding: "10px",
}

const Navigation = () => {
  const [isActive, setActive] = useState(false)
  const onClickMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive(!isActive)
  }
  return (
    <div className='navigation-wrapper'>
      <div className='navigation-button' onClick={onClickMenu}>
        {isActive ? (
          <CloseOutlined style={X_BUTTON_STYLE} />
        ) : (
          <MenuOutlined style={MENU_BUTTON_STYLE} />
        )}
      </div>
      <div className={isActive ? MENU_ACTIVE : MENU}>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/profile'>
              <a>ABOUT ME</a>
            </Link>
          </li>
          <li>
            <Link href='/games'>
              <a>Games</a>
            </Link>
          </li>
          <li>
            <Link href='/comment'>
              <a>Comment</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
