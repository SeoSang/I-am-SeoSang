import styled from "styled-components"

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
export const FlexDiv = styled.div`
  display: ${(props: FlexDivProps) => props.flex || "flex"};
  flex-direction: ${(props: FlexDivProps) => props.direction || "row"};
  justify-content: center;
  align-items: center;
  background-color: ${(props: FlexDivProps) => props.backgroundColor || "auto"};
  height: ${(props: FlexDivProps) => props.height || "auto"};
  width: ${(props: FlexDivProps) => props.width || "auto"};
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
export const WhiteH1_KOR = styled.h1`
  font-size: 4vw;
  max-width: 75vw;
  color: #fefefe;
  font-family: "Noto Sans KR", "Red Hat Display", sans-serif;
`
export const WhiteH2_KOR = styled.h2`
  font-size: 2vw;
  max-width: 75vw;
  color: #fefefe;
  font-family: "Noto Sans KR", "Red Hat Display", sans-serif;
`
/** --  Page 별 props들 */

// Game
export const GAME_BG_COLOR = "#16384c"
