import React from "react"
import { FlexDiv, INDEX_TEXT_COLOR, H2, A } from "../../styles/styled"
import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import styled from "styled-components"

const PhotoCard = styled(Card)`
  width: 30%;
  @media (max-width: 1000px) {
    width: 45%;
  }
`

const CardMeta = styled(Meta)`
  overflow: auto;

  .ant-card-meta-title {
    overflow: auto;
    @media (max-width: 1000px) {
      font-size: 12px;
    }
  }

  .ant-card-meta-description {
    overflow: auto;
    @media (max-width: 1000px) {
      font-size: 10px;
    }
  }
`

const Photo = () => {
  return (
    <FlexDiv direction='column'>
      <H2 color={INDEX_TEXT_COLOR}>Photos </H2>
      <FlexDiv style={{ flexWrap: "wrap", justifyContent: "space-around" }}>
        <PhotoCard cover={<img src='/profile/photos/2019_hackaton.jpg' />}>
          <CardMeta
            title='2019 하나와영 해커톤'
            description={
              <p>
                CMD 속의 고양이 Minki !<br></br>
                <A href='https://github.com/beygee/minki'>깃허브</A>
              </p>
            }
          />
        </PhotoCard>
        <PhotoCard cover={<img src='/profile/photos/me_hackaton.jpg' />}>
          <CardMeta title='2020 고려대학교 해커톤' description='Googri!' />
        </PhotoCard>
        <PhotoCard cover={<img src='/profile/photos/sds.jpg' />}>
          <CardMeta
            title='2020 삼성 SDS 알고리즘 특강 수료증'
            description='다들 수고 많으셨습니다!'
          />
        </PhotoCard>
        <PhotoCard cover={<img src='/profile/photos/sds_professional.png' />}>
          <CardMeta title='SDS Professional' description='합격!!!🔥🔥🔥' />
        </PhotoCard>
      </FlexDiv>
    </FlexDiv>
  )
}

export default Photo
