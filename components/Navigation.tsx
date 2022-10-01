import React, {useState} from "react"
import Link from "next/link"
import {CloseOutlined, MenuOutlined} from "@ant-design/icons"
import styled from "styled-components";

const MENU = "navigation-menu"
const MENU_ACTIVE = "navigation-menu active"
const MENU_BUTTON_STYLE = {
    fontSize: "22px",
    border: "2px solid",
    borderRadius: "3px",
    padding: "10px",
    color: "#776d8a",
}
const X_BUTTON_STYLE = {
    fontSize: "22px",
    border: "2px solid",
    borderRadius: "3px",
    padding: "10px",
}

const NavigationLi = styled.li`
  list-style: none;
  font-family: impact;
  font-weight: 300;
  color: hsl(0, 0%, 70%);
  margin-bottom: 20px;
`

const Navigation = () => {
    const [isActive, setActive] = useState(false)
    const onClickMenu = () => {
        setActive(!isActive)
    }
    return (
        <div className='navigation-wrapper'>
            <div className='navigation-button' onClick={onClickMenu}>
                {isActive ? (
                    <CloseOutlined style={X_BUTTON_STYLE}/>
                ) : (
                    <MenuOutlined style={MENU_BUTTON_STYLE}/>
                )}
            </div>
            <div
                className={isActive ? MENU_ACTIVE : MENU}
                onClick={() => {
                    if (isActive) onClickMenu()
                }}
                style={!isActive ? {zIndex: 0} : {}}>
                <ul>
                    <NavigationLi>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </NavigationLi>
                    <NavigationLi>
                        <Link href='/profile'>
                            <a>About me</a>
                        </Link>
                    </NavigationLi>
                    <NavigationLi>
                        <Link href='/games'>
                            <a>Games</a>
                        </Link>
                    </NavigationLi>
                    <NavigationLi>
                        <Link href='/comment'>
                            <a>Guest</a>
                        </Link>
                    </NavigationLi>
                    <NavigationLi>
                        <a href='https://programming119.tistory.com/' target='_blank'>
                            Blog
                        </a>
                    </NavigationLi>
                    <NavigationLi>
                        <a href='https://github.com/SeoSang' target='_blank'>
                            Github
                        </a>
                    </NavigationLi>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Navigation)
