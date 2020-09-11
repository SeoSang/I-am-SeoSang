import React from "react"
import Link from "next/link"
import { FlexDiv, ImgBox, GAME_BG_COLOR } from "../../styles/styled"
import styled from "styled-components"
import NotSupported from "../../components/NotSupported"

const IMG_SIZE = "250px"

const ContainerDiv = styled(FlexDiv)`
  position: relative;
  padding: 25px;
  width: 90%;
  flex-wrap: wrap;
  @media (max-width: 770px) {
    display: none;
  }
`
/* Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color */
const CardDiv = styled.div`
  position: relative;
  max-width: 280px;
  padding: 18px 16px;
  margin: 20px;
  height: ${IMG_SIZE};
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5), 0 18px 20px 3px rgba(0, 0, 0, 0.4);
  transition: 0.3s ease-in-out;
  background-color: #fff;

  &:hover {
    height: 340px;
    div {
      margin-top: -50px;
      visibility: visible;
    }
  }
  img {
  }
`

const Img_Box = styled(ImgBox)`
  //   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  top: -50px;
  transition: 0.3s ease-in-out;
  z-index: 1;
`
const ContentDiv = styled.div`
  position: relative;
  margin-top: -220px;
  padding: 10px 15px;
  transition: 0.3s ease-in-out;
  text-align: center;
  color: #111;
  visibility: hidden;
`

const index = () => {
  return (
    <FlexDiv backgroundColor={GAME_BG_COLOR} height='100vh'>
      <NotSupported />
      <ContainerDiv backgroundColor='#16384c'>
        <CardDiv>
          <Img_Box width={IMG_SIZE} height={IMG_SIZE} imgBorRad='4px'>
            <img src='/games/2048.png'></img>
          </Img_Box>
          <ContentDiv>
            <h2>2048</h2>
            <p>은근 꿀잼입니다.</p>
            <Link href='/games/game2048'>
              <a>GO!</a>
            </Link>
          </ContentDiv>
        </CardDiv>
        <CardDiv>
          <Img_Box width={IMG_SIZE} height={IMG_SIZE} imgBorRad='4px'>
            <img src='/games/lotto.jpg'></img>
          </Img_Box>
          <ContentDiv>
            <h2>로또 추첨기</h2>
            <p>1등... 분명 가능합니다.</p>
            <Link href='/games/lotto'>
              <a>GO!</a>
            </Link>
          </ContentDiv>
        </CardDiv>
        <CardDiv>
          <Img_Box width={IMG_SIZE} height={IMG_SIZE} imgBorRad='4px'>
            <img src='/games/numbers.jpg'></img>
          </Img_Box>
          <ContentDiv>
            <h2>숫자 야구</h2>
            <p>당신의 논리력을 테스트합니다.</p>
            <Link href='/games/numberbaseball'>
              <a>GO!</a>
            </Link>
          </ContentDiv>
        </CardDiv>
      </ContainerDiv>
    </FlexDiv>
  )
}

export default React.memo(index)
