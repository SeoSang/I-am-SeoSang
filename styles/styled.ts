import styled, { keyframes } from "styled-components"

interface FlexDivProps {
  backgroundColor?: string
  width?: string
  height?: string
  flex?: string
  direction?: "row" | "column"
}

interface ImgBoxDiv {
  width?: string
  height?: string
  /**
   @ Sub-Image border-radius
   */
  imgBorRad?: string
}

// Game
export const GAME_BG_COLOR = "#16384c"

// Index
export const INDEX_BG_COLOR = "#ebecf1"
export const INDEX_LINE_COLOR = "#206a5d"
export const INDEX_TEXT_COLOR = "#1b1c25"

export const FlexDiv = styled.div`
  display: ${(props: FlexDivProps) => props.flex || "flex"};
  flex-direction: ${(props: FlexDivProps) => props.direction || "row"};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props: FlexDivProps) => props.backgroundColor || "auto"};
  height: ${(props: FlexDivProps) => props.height || "auto"};
  width: ${(props: FlexDivProps) => props.width || "auto"};
`
export const In_BlockDiv = styled.div`
  display: inline-block;
`

export const ContentImg = styled.img`
  max-width: 100%;
`
export const ImgBox = styled.div`
  position: relative;
  width: ${(props: ImgBoxDiv) => props.width || "auto"};
  height: ${(props: ImgBoxDiv) => props.height || "auto"};

  img {
    max-width: 100%;
    border-radius: ${(props: ImgBoxDiv) => props.imgBorRad || "0"};
  }
`

export const WhiteH1 = styled.h1`
  font-size: 4vw;
  max-width: 75vw;
  color: #fefefe;
  font-family: "Red Hat Display", "Noto Sans KR", sans-serif;
`
export const WhiteH2 = styled.h2`
  font-size: 2vw;
  max-width: 75vw;
  color: #fefefe;
  font-family: "Red Hat Display", "Noto Sans KR", sans-serif;
`

export const WhiteH3 = styled.h3`
  font-size: 2vw;
  max-width: 75vw;
  color: #fefefe;
  font-family: "Red Hat Display", "Noto Sans KR", sans-serif;
`
export const WhiteH1_KR = styled.h1`
  font-size: 4vw;
  max-width: 75vw;
  color: #fefefe;
  font-family: "Noto Sans KR", "Red Hat Display", sans-serif;
`
export const WhiteH2_KR = styled.h2`
  font-size: 2vw;
  max-width: 75vw;
  color: #fefefe;
  font-family: "Noto Sans KR", "Red Hat Display", sans-serif;
`

export const H3 = styled.h2`
  font-size: 1.3rem;
  max-width: 75vw;
  color: ${(props) => props.color || "inherit"};
  font-family: "Red Hat Display", "Noto Sans KR", sans-serif;
`

export const H3_KR = styled.h2`
  font-size: 1.3rem;
  max-width: 75vw;
  color: ${(props) => props.color || "inherit"};
  font-family: "Noto Sans KR", "Red Hat Display", sans-serif;
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  max-width: 75vw;
  color: ${(props) => props.color || "inherit"};
  font-family: "Red Hat Display", "Noto Sans KR", sans-serif;
`

export const H2_KR = styled.h2`
  font-size: 1.5rem;
  max-width: 75vw;
  color: ${(props) => props.color || "inherit"};
  font-family: "Noto Sans KR", "Red Hat Display", sans-serif;
`

export const H1 = styled.h2`
  font-size: 3rem;
  max-width: 75vw;
  color: ${(props) => props.color || "inherit"};
  font-family: "Red Hat Display", "Noto Sans KR", sans-serif;
`

export const H1_KR = styled.h2`
  font-size: 3rem;
  max-width: 75vw;
  color: ${(props) => props.color || "inherit"};
  font-family: "Noto Sans KR", "Red Hat Display", sans-serif;
`

const blinkYellow = keyframes`
    from { background-color: #FF0; }
    50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 0px 0; }
    to { background-color: #FF0; }
`

const blinkGreen = keyframes`
    from { 
        background-color: #abff00; 
    }
    50% { 
        background-color: #74DF00; 
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #028039 0 -1px 9px, #abff00 0 0px 0; 
    }
    to { 
        background-color: #abff00; 
    }
`

export const BlinkYellowDiv = styled.div`
  display: inline-block;
  margin: 0 5px;
  width: 24px;
  height: 24px;
  background-color: #ff0;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    #ff0 0 2px 12px;
  -webkit-animation: ${blinkYellow} 1s infinite;
  -moz-animation: ${blinkYellow} 1s infinite;
  -ms-animation: ${blinkYellow} 1s infinite;
  -o-animation: ${blinkYellow} 1s infinite;
  animation: ${blinkYellow} 1s infinite;
`
export const YellowStrikeDiv = styled.div`
  display: inline-block;
  margin: 0px 5px;
  width: 24px;
  height: 24px;
  background-color: #ff0;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    #ff0 0 2px 12px;
`

export const GreenBallDiv = styled.div`
  display: inline-block;
  margin: 0 5px;
  width: 24px;
  height: 24px;
  background-color: #abff00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
    #89ff00 0 2px 12px;
`

export const BlinkGreenDiv = styled.div`
  display: inline-block;
  margin: 10px 5px;
  width: 24px;
  height: 24px;
  background-color: #abff00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
    #89ff00 0 2px 12px;
  -webkit-animation: ${blinkGreen} 1s infinite;
  -moz-animation: ${blinkGreen} 1s infinite;
  -ms-animation: ${blinkGreen} 1s infinite;
  -o-animation: ${blinkGreen} 1s infinite;
  animation: ${blinkGreen} 1s infinite;
`
export const A = styled.a`
  font-weight: bolder;
  color: ${INDEX_LINE_COLOR};
`

/** --  Page 별 props들 */
