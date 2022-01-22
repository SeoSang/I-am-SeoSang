import React from "react"
import { FlexDiv, INDEX_TEXT_COLOR, H2, INDEX_LINE_COLOR, A } from "../../styles/styled"
import styled from "styled-components"
import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import Link from "next/link"

const ProfjectCard = styled(Card)`
  width: 45%;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: auto;

  @media (max-width: 770px) {
    width: 80%;
    margin-bottom: 5px;
    margin-top: 5px;
  }
`

const Project = () => {
  return (
    <FlexDiv direction='column' style={{ marginTop: "40px" }}>
      <FlexDiv style={{ justifyContent: "space-around" }}>
        <ProfjectCard hoverable cover={<img src='/profile/project/freechat-freeboard.png' />}>
          <Meta
            title='FreeChat-FreeBoard'
            description={
              <p>
                비밀채팅방+자유게시판<br></br>
                기술 스택 : Socket.io, AWS(IaaS), Heroku(PaaS), Typescript, Next JS, Material UI,
                Mobx, MySQL, Node JS(Express), etc <br></br>
                참여 인원 : 혼자😂 <br></br>
                #Socket.io #AWS #RDB #Mobx #Heroku #JWT #풀스택 <br></br>
                {"  "}
                <A href='https://github.com/SeoSang/freechat-freeboard' target='_blank'>
                  깃허브
                </A>
              </p>
            }
          />
        </ProfjectCard>
        <ProfjectCard hoverable cover={<img src='/profile/project/main.gif' />}>
          <Meta
            title='SportDoDo'
            description={
              <p>
                승부를 예측하고 포인트를 쌓으세요!<br></br>
                기술 스택 : Next JS, Redux, MongoDB, Node JS(Express), Real-Time Scheduling, JWT,
                etc <br></br>
                참여 인원 : 리액트 팀원들! <br></br>
                #SPA #NoSQL #실시간 어플리케이션 #프론트총괄 #백엔드일부분 <br></br>
                <A href='https://sports-dodo.vercel.app/' target='_blank'>
                  URL
                </A>
                {"  "}
                <A href='https://github.com/SeoSang/score____temp' target='_blank'>
                  깃허브
                </A>
              </p>
            }
          />
        </ProfjectCard>
        <ProfjectCard hoverable cover={<img src='/profile/project/mydangdang.png' />}>
          <Meta
            title='My DangDang'
            description={
              <p>
                당신의 댕댕이를 자랑하고 공유하세요!<br></br>
                기술 스택 : Typescript, Next JS, Redux, Mysql, Node JS(Express), etc <br></br>
                참여 인원 : 솔플😂 <br></br>
                #SPA #SNS #Grid시스템 #풀스택 <br></br>
                <A href='https://github.com/SeoSang/myDangDang' target='_blank'>
                  깃허브
                </A>
              </p>
            }
          />
        </ProfjectCard>
        <ProfjectCard hoverable cover={<img src='/profile/project/bat.png' />}>
          <Meta
            title='Bat 프로그래밍!'
            description={
              <p>
                당신의 작업을 더 효율적이게~<br></br>
                기술 스택 : Bat 파일, CMD <br></br>
                참여 인원 : 솔플😂 <br></br>
                #심심풀이 #능률올리기 #재밌어요 <br></br>
                <A href='https://programming119.tistory.com/166?category=857957' target='_blank'>
                  블로그
                </A>{" "}
                <A href='https://github.com/SeoSang/MyEfficientWork' target='_blank'>
                  깃허브
                </A>
              </p>
            }
          />
        </ProfjectCard>
        <ProfjectCard hoverable cover={<img src='/profile/project/5mok.png' />}>
          <Meta
            title='You VS SeoPaggo'
            description={
              <p>
                오목의 왕 서파고에 도전하세요!<br></br>
                기술 스택 : TypeScript, Redux<br></br>
                참여 인원 : 솔플😂 <br></br>
                #심화알고리즘 #AI #사실초보.. <br></br>
                <A href='https://github.com/SeoSang/You-VS-Seopago-' target='_blank'>
                  깃허브
                </A>
              </p>
            }
          />
        </ProfjectCard>
        <Card
          hoverable
          style={{ width: "80%", marginTop: "40px" }}
          cover={<img src='/profile/project/games.png' />}
        >
          <Meta
            title='React Games'
            description={
              <p>
                리액트를 활용한 여러 게임들을 즐겨보세요! 이 사이트에서 직접 체험가능합니다😁
                <br></br>
                기술 스택 : Typescript, Next JS, FireBase etc <br></br>
                #방명록남겨주세요 #알고리즘 #포트폴리오 #CSS몰두.. <br></br>
                <Link href='/games'>
                  <A>링크</A>
                </Link>
              </p>
            }
          />
        </Card>
      </FlexDiv>
    </FlexDiv>
  )
}

export default Project
