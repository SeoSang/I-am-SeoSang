import styled from "styled-components"
import { FC } from "react"

export interface RollButtonProps {
  prevColor?: string
  hoverColor?: string
  prevBackColor?: string
  hoverBackColor?: string
}

export const RollButtonDiv = styled.div`
  perspective: 500px;
  -webkit-perspective: 500px;
  -moz-perspective: 500px;

  div {
    position: relative;
    text-align: center;
    width: 100%;
    height: 50px;
    padding: 10px;
    border: ${(props: RollButtonProps) => props.prevBackColor || "#ffffff"} solid 1px;
    pointer-events: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  div:nth-child(1) {
    top: 50px;
    color: ${(props: RollButtonProps) => props.hoverColor || "#ffffff"};
    background-color: ${(props: RollButtonProps) => props.hoverBackColor || "#000000"};
    border: ${(props: RollButtonProps) => props.hoverBackColor || "#000000"} solid 1px;
    transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transform-origin: 50% 50% -25px;
    -webkit-transform-origin: 50% 50% -25px;
    -moz-transform-origin: 50% 50% -25px;
  }

  div:nth-child(2) {
    color: ${(props: RollButtonProps) => props.prevColor || "#000000"};
    background-color: ${(props: RollButtonProps) => props.prevBackColor || "#ffffff"};
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transform-origin: 50% 50% -25px;
    -webkit-transform-origin: 50% 50% -25px;
    -moz-transform-origin: 50% 50% -25px;
  }

  &:hover {
    div:nth-child(1) {
      top: 50px;
      color: ${(props: RollButtonProps) => props.hoverColor || "#ffffff"};
      background-color: ${(props: RollButtonProps) => props.hoverBackColor || "#000000"};
      border: 1px solid #000000;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      transform: rotateX(0deg);
      -webkit-transform: rotateX(0deg);
      -moz-transform: rotateX(0deg);
    }

    div:nth-child(2) {
      color: ${(props: RollButtonProps) => props.hoverBackColor || "#000000"};
      background-color: ${(props: RollButtonProps) => props.hoverBackColor || "#000000"};
      border: none;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      transform: rotateX(-90deg);
      -webkit-transform: rotateX(-90deg);
      -moz-transform: rotateX(-90deg);
    }
  }
`

/**@ Rolling Button */
export const RollButton: FC<{ content: string; colors?: RollButtonProps }> = ({
  content,
  colors,
}) => {
  return (
    <RollButtonDiv
      hoverColor={colors && colors.hoverColor ? colors.hoverColor : "white"}
      prevColor={colors && colors.prevColor ? colors.prevColor : "black"}
      hoverBackColor={colors && colors.hoverBackColor ? colors.hoverBackColor : "black"}
      prevBackColor={colors && colors.prevBackColor ? colors.prevBackColor : "white"}
    >
      <div>{content}</div>
      <div>{content}</div>
    </RollButtonDiv>
  )
}
