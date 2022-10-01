import * as React from "react"
import {useEffect, useMemo, useRef, useState} from "react"
import Ball from "../../components/games/Ball"
import {FlexDiv, GAME_BG_COLOR, WhiteH2} from "../../styles/styled"
import {BallsContainer, LotteryContainer, onClickLotteryStyle,} from "../../styles/lotto/styled"
import GameLayout from "../../components/GameLayout"

function getWinNumbers() {
    const BONUS_INDEX = 7
    const candidate = Array(45)
        .fill(null)
        .map((v, i) => i + 1)
    const shuffle = []
    while (candidate.length > 0) {
        shuffle.push(
            candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
        )
    }
    const bonusNum = shuffle[BONUS_INDEX]
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c)
    return [...winNumbers, bonusNum]
}

const Lotto = () => {
    const lottoNums = useMemo(() => getWinNumbers(), [])
    const [winNums, setWinNums] = useState(lottoNums)
    const [winBalls, setWinBalls] = useState<number[]>([])
    const [bonus, setBonus] = useState<number>(0)
    const [lotteryStyle, setLotteryStyle] = useState({})
    const [ballContainerStyle, setBallContainerStyle] = useState({
        display: "none",
    })
    const [textObject, setTextObject] = useState({lottoNums: "", bonusNums: ""})

    const timeoutIDs = useRef<any[]>([])
    const bonusTimeoutID = useRef<any>()

    const onClickLotto = () => {
        // e.preventDefault()
        setLotteryStyle(onClickLotteryStyle)
        setBallContainerStyle({display: "flex"})
        refresh()
        showBalls()
        setTextObject({lottoNums: "6 Numbers", bonusNums: "Bonus"})
    }

    const refresh = () => {
        setWinNums(getWinNumbers())
        setWinBalls([])
        setBonus(0)
        timeoutIDs.current.forEach((v) => {
            clearTimeout(v)
        })
        clearTimeout(bonusTimeoutID.current)
    }

    const showBalls = () => {
        refresh()
        for (let i = 0; i < winNums.length - 1; i++) {
            timeoutIDs.current[i] = setTimeout(() => {
                setWinBalls((prev) => {
                    return [...prev, winNums[i]]
                })
            }, (i + 1) * 1500)
        }
        bonusTimeoutID.current = setTimeout(() => {
            setBonus(winNums[6])
        }, 10500)
    }

    useEffect(() => {
        // 컴포넌트 없어질 때 지워주기 (ComponentWillUnmount)
        return () => {
            timeoutIDs.current.forEach((v) => {
                clearTimeout(v)
            })
            clearTimeout(bonusTimeoutID.current)
        }
    }, [])

    return (
        <GameLayout>
            <FlexDiv
                height='100vh'
                backgroundColor={GAME_BG_COLOR}
                direction='column'>
                <LotteryContainer style={lotteryStyle} onClick={onClickLotto}>
                    <img src='/games/lottery.png'></img>
                </LotteryContainer>
                <FlexDiv
                    height='25%'
                    backgroundColor={GAME_BG_COLOR}
                    direction='column'>
                    <div>
                        <WhiteH2>{textObject.lottoNums}</WhiteH2>
                    </div>
                    <BallsContainer style={ballContainerStyle}>
                        {winBalls.map((nums, i) => (
                            <Ball key={`${i}번째 공`} ballNum={nums}></Ball>
                        ))}
                    </BallsContainer>
                </FlexDiv>
                <FlexDiv
                    height='25%'
                    backgroundColor={GAME_BG_COLOR}
                    direction='column'>
                    <div>
                        <WhiteH2>{textObject.bonusNums}</WhiteH2>
                    </div>
                    <BallsContainer style={ballContainerStyle}>
                        {bonus == null ? null : (
                            <Ball key='bonus 공' ballNum={bonus}></Ball>
                        )}
                    </BallsContainer>
                </FlexDiv>
            </FlexDiv>
            <footer>"Icon made by Pixel perfect from www.flaticon.com"</footer>
        </GameLayout>
    )
}

export default Lotto
