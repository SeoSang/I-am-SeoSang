import React, { FC } from "react"
import styled from "styled-components"
import { H3_KR } from "../../styles/styled"

interface TechHoverProps {
  visible: boolean
}

interface TechIconData {
  icon: string
  title: string
  comment: null | string
}

const ICON_WIDTH = 150
const ICON_HEIGHT = 150
const ICON_MARGIN = 20

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: ${ICON_WIDTH}px;
  height: ${ICON_HEIGHT}px;
  border-radius: 15px;
  margin: ${ICON_MARGIN}px;
  text-align: center;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(125, 125, 125, 1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(125, 125, 125, 1);
  box-shadow: 0px 2px 12px 0px rgba(125, 125, 125, 1);

  @media (max-width: 755px) {
    width: ${ICON_WIDTH / 2}px;
    height: ${ICON_HEIGHT / 2}px;
    border-radius: 8px;
    margin: ${ICON_MARGIN / 2}px;
  }
`

const TechHover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: visible;
  position: absolute;
  width: ${ICON_WIDTH}px;
  height: ${ICON_HEIGHT}px;
  border-radius: 15px;
  text-align: center;
  opacity: 0;
  transition: opacity 1s, background-color 1s;
  -webkit-transition:width 1s, background-color 1s;
  
  h2,
  p {
    transition: 
    color: white;
    opacity: 0;
  }
  
  &:hover {
    background-color: #2c3e50;
    opacity: 0.9;
    
    h2,
    p {
      color: white;
      opacity: 1;
    }
  }

  @media (max-width: 755px) {
    width: ${ICON_WIDTH / 2}px;
    height: ${ICON_HEIGHT / 2}px;
    border-radius: 8px;
  }
`

const TechIcon: FC<{ data: TechIconData }> = ({ data }) => {
  return (
    <IconBox>
      <img src={`/profile/${data.icon}`} style={{ maxWidth: "100%" }}></img>
      <TechHover>
        <H3_KR>{data.title}</H3_KR>
        <p>{data.comment ? data.comment : ""}</p>
      </TechHover>
    </IconBox>
  )
}

export default TechIcon
