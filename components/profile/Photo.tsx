import React from "react"
import { FlexDiv, INDEX_TEXT_COLOR, H2, A } from "../../styles/styled"
import { Card } from "antd"
import Meta from "antd/lib/card/Meta"

const Photo = () => {
  return (
    <FlexDiv direction='column'>
      <H2 color={INDEX_TEXT_COLOR}>Hackaton</H2>
      <FlexDiv style={{ justifyContent: "space-around" }}>
        <Card style={{ width: "30%" }} cover={<img src='/profile/2019_hackaton.jpg' />}>
          <Meta
            title='2019 하나와영 해커톤'
            description={
              <p>
                CMD 속의 고양이 Minki !<br></br>
                <A href='https://github.com/beygee/minki'>깃허브</A>
              </p>
            }
          />
        </Card>
        <Card style={{ width: "30%" }} cover={<img src='/profile/me_hackaton.jpg' />}>
          <Meta title='2020 고려대학교 해커톤' description='Googri!' />
        </Card>
      </FlexDiv>
    </FlexDiv>
  )
}

export default Photo
