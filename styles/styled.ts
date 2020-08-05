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
  justify-contet: center;
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
