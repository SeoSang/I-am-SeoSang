import React, {useState} from "react"
import {Button, Col, message, Popconfirm, Row} from "antd"
import Game2048Board from "../../components/games/Game2048Board"
import styled from "styled-components"
import {GAME_BG_COLOR, H2} from "../../styles/styled"
import {NextPage, NextPageContext} from "next"
import {get2048Data} from "../../db/game2048"
import GameLayout from "../../components/GameLayout"

const EXIT_TEXT = "진행중인 게임이 종료 됩니다."

const VersionButton = styled(Button)`
  display: block;
  width: 50%;
  margin: 10px auto;
`

const ModeContainer = styled.div`
  width: 60%;
  background-color: #383b3a;
  -webkit-box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin: 20px auto;
`

const MainContainer = styled(Row)`
  color: #f5f6fa;
  min-height: 100vh;
  background-color: ${GAME_BG_COLOR};
`

export interface Data2048 {
    best: {
        ver2: number
        ver3: number
        ver4: number
        ver5: number
        ver2_name: string
        ver3_name: string
        ver4_name: string
        ver5_name: string
    }
}

export const INIT_DATA_2048 = {
    best: {
        ver2: -1,
        ver3: -1,
        ver4: -1,
        ver5: -1,
        ver2_name: "에러발생",
        ver3_name: "에러발생",
        ver4_name: "에러발생",
        ver5_name: "에러발생",
    },
}

const game2048: NextPage<{ serverData: Data2048 }> = ({serverData}) => {
    const [version, setVersion] = useState(4)

    const onClickButton = (ver: number) => {
        setVersion(ver)
    }
    return (
        <GameLayout>
            <MainContainer>
                <Col xs={24} md={6} style={{textAlign: "center"}}/>
                <Col xs={24} md={12}>
                    <br/>
                    <Game2048Board
                        serverData={serverData}
                        version={version}/>
                    <Row align='middle' justify='center' style={{textAlign: "center"}}>
                        <p>조작법 : ➡ / ⬅ / ⬆ / ⬇</p>
                        <p>
                            우측 상단메뉴를 통해 여러 모드와 테마로 즐길 수 있습니다! (웹
                            전용)
                        </p>
                    </Row>
                    <footer>게임 내용 출처 : "https://play2048.co/"</footer>
                </Col>
                <Col xs={24} md={6} style={{textAlign: "center"}}>
                    <ModeContainer>
                        <H2>SELECT MODE</H2>
                        {new Array(4).fill(null).map((v, i) => (
                            <Popconfirm
                                placement='leftTop'
                                title={EXIT_TEXT}
                                onConfirm={() => {
                                    message.success({content: "Mode changed.", duration: 1})
                                    onClickButton(i + 2)
                                }}
                                okText='Yes'
                                cancelText='No'
                                key={`Popconfirm__${i}`}>
                                <VersionButton>{`${i + 2}  ❌  ${i + 2}`}</VersionButton>
                            </Popconfirm>
                        ))}
                    </ModeContainer>
                </Col>
            </MainContainer>
        </GameLayout>
    )
}

game2048.getInitialProps = async (ctx: NextPageContext) => {
    try {
        const res = await get2048Data()
        return {serverData: res}
    } catch (e) {
        console.error(e)
        return {
            serverData: INIT_DATA_2048,
        }
    }
}

export default game2048
