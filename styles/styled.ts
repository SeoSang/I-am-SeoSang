import styled from "styled-components"

interface MyDiv {
  backgroundColor?: string
  height?: string
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: MyDiv) => props.backgroundColor || "white"};
  height: ${(props: MyDiv) => props.height || "auto"};
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
/** --  Page 별 props들 */

// Game
export const GAME_BG_COLOR = "#16384c"
