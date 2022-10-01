import React, {Context, createElement, useCallback, useEffect, useState,} from "react"
import {FlexDiv, H1_KR, INDEX_BG_COLOR} from "../styles/styled"
import {Button, Col, Comment, Input, Modal, Row, Tooltip} from "antd"
import Avatar from "antd/lib/avatar/avatar"
import moment from "moment"
import {
    CaretDownOutlined,
    CaretUpOutlined,
    DislikeFilled,
    DislikeOutlined,
    LikeFilled,
    LikeOutlined,
} from "@ant-design/icons"
import styled from "styled-components"
import {addComment, CommentData, getComments} from "../db/comment"

const DISPLAY_COMMENT_COUNT = 3

const GuestBookDiv = styled.div`
  height: 88vh;
  width: 85vw;
  overflow: auto;
  background-color: #f0eadf;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 6px solid #6e6d6d;
  padding: 5vw;
`
const CommentConatiner = styled(FlexDiv)`
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
`

const ContentContainer = styled(FlexDiv)`
  margin-top: 20px;
  overflow: auto;
`

const floatPrevButton: any = {
    top: "30vh",
    position: "absolute",
    zIndex: 2,
}

const floatMoreButton: any = {
    bottom: "10vh",
    position: "absolute",
    zIndex: 2,
}

const ERROR_OCCUR: CommentData = {
    name: "에러발생",
    content: "데이터를 불러오는데 에러가 발생했습니다...",
    like: 0,
    dislike: 0,
    createdAt: moment().format("YYYY-MM-DD HH:mm"),
}

const CommentDiv = styled(Comment)`
  width: 65vw;
  background-color: #f6f5f5;
  padding: 5px 10px;
  margin-bottom: 8px;
  margin-top: 8px;
  -webkit-box-shadow: 10px 10px 5px -8px rgba(128, 128, 128, 0.78);
  -moz-box-shadow: 10px 10px 5px -8px rgba(128, 128, 128, 0.78);
  box-shadow: 10px 10px 5px -8px rgba(128, 128, 128, 0.78);
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 2px solid #d9bd86;
`
const isValidComment = (comment: any) => {
    if (comment.name && comment.content && comment.createdAt) {
        return true
    }
    return false
}

const comment = ({comments}: any) => {
    const [action,] = useState(null)
    const [commentCount, setCommentCount] = useState(DISPLAY_COMMENT_COUNT)
    const [value, setValue] = useState("")
    const [isModalOpen, setModalOpen] = useState(false) // 모달
    const [name, setName] = useState("")
    const [allComments, setAllComments] = useState<CommentData[]>(comments)
    const [displayComments, setDisplayComments] = useState(comments)

    useEffect(() => {
        setDisplayComments(
            allComments.slice(commentCount - DISPLAY_COMMENT_COUNT, commentCount)
        )
    }, [allComments, commentCount])

    const onSubmitComment = async (val: string) => {
        setModalOpen(false)
        if (name === "") {
            alert("이름을 입력해주세요!")
            return
        }
        if (value.trim() === "") {
            alert("내용을 입력해주세요!")
            return
        }
        if (!confirm("방명록을 등록할까요?")) {
            return
        }
        try {
            const commentData: CommentData = {
                content: value,
                like: 0,
                dislike: 0,
                name: name,
                createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
            }
            await addComment(commentData)

            const getCommentResults = await getComments()
            setAllComments((Object.values(getCommentResults) as CommentData[]).reverse())
        } catch (e) {
            console.error(e)
        }
    }
    const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onClickLike = (e: React.MouseEvent) => {
        alert("좋아해주셔서 감사합니다. 좋아요 기능 구현 전입니다ㅎㅎ")
    }
    const onClickDislike = (e: React.MouseEvent) => {
        alert("싫어해해주셔서 감사합니다. 좋아요 기능 구현 전입니다ㅎㅎ")
    }
    const onClickPrev = (e: React.MouseEvent) => {
        setCommentCount(
            commentCount <= DISPLAY_COMMENT_COUNT * 2
                ? DISPLAY_COMMENT_COUNT
                : commentCount - DISPLAY_COMMENT_COUNT
        )
    }
    const onClickMore = (e: React.MouseEvent) => {
        setCommentCount(commentCount + DISPLAY_COMMENT_COUNT)
    }

    // 모달 관련
    const handleOk = async (e: React.MouseEvent) => {
        await onSubmitComment(value)
        setModalOpen(false)
    }


    const showModal = useCallback(() => {
        setModalOpen(true)
    }, [isModalOpen])

    return (
        <FlexDiv direction='column' color={INDEX_BG_COLOR} height='100vh'>
            <GuestBookDiv>
                <CommentConatiner>
                    <Modal
                        title='방명록 남기기'
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={(e) => {
                            e.stopPropagation();
                            setModalOpen(false)
                        }}>
                        <Row justify='space-around' align='middle'>
                            <Col span={8}>
                                <label>이름</label>
                            </Col>
                            <Col span={16}>
                                <Input
                                    value={name}
                                    onChange={onChangeName}
                                    placeholder='이름을 입력하세요.'
                                />
                            </Col>
                        </Row>
                        <Input.TextArea
                            value={value}
                            onChange={onChangeComment}
                            placeholder='이쁜말, 고운말을 써주세요😄'
                            style={{marginTop: "20px"}}
                        />
                    </Modal>
                    <Button
                        onClick={onClickMore}
                        style={floatMoreButton}
                        icon={<CaretDownOutlined/>}/>
                    <div style={{marginBottom: "0", flex: 1}}>
                        <H1_KR style={{marginBottom: "0", flex: 1}} color='#000000'>
                            방명록
                        </H1_KR>
                    </div>
                    <div style={{width: "100%", textAlign: "end"}}>
                        <p>예쁜말만 합시다😁</p>
                        <p>개인적인 용건은 ddrrpg@naver.com로 부탁드립니다.</p>
                        <Button onClick={showModal}>방명록 남기기</Button>
                    </div>
                    {commentCount > 4 ? (
                        <Button
                            onClick={onClickPrev}
                            style={floatPrevButton}
                            icon={<CaretUpOutlined/>}/>
                    ) : null}
                    <ContentContainer direction='column'>
                        {displayComments.map((comment: CommentData, i: number) =>
                                isValidComment(comment) ? (
                                    <CommentDiv
                                        actions={[
                                            <Tooltip key='comment-basic-like' title='Like'>
                      <span onClick={onClickLike}>
                        {createElement(
                            action === "liked" ? LikeFilled : LikeOutlined
                        )}
                          <span className='comment-action'>{comment.like}</span>
                      </span>
                                            </Tooltip>,
                                            <Tooltip key='comment-basic-dislike' title='Dislike'>
                      <span onClick={onClickDislike}>
                        {React.createElement(
                            action === "disliked"
                                ? DislikeFilled
                                : DislikeOutlined
                        )}
                          <span className='comment-action'>
                          {comment.dislike}
                        </span>
                      </span>
                                            </Tooltip>,
                                        ]}
                                        author={<a>{comment.name}</a>}
                                        avatar={
                                            <Avatar alt={comment.name}>{comment.name.charAt(0)}</Avatar>
                                        }
                                        content={<p>{comment.content}</p>}
                                        style={{width: "65vw"}}
                                        datetime={
                                            <Tooltip title={comment.createdAt}>
                      <span>
                        {moment(
                            comment.createdAt,
                            "YYYY-MM-DD HH:mm:ss"
                        ).fromNow()}
                      </span>
                                            </Tooltip>
                                        }
                                        key={`comment_${i}`}
                                    />
                                ) : (
                                    ""
                                )
                        )}
                    </ContentContainer>
                </CommentConatiner>
            </GuestBookDiv>
        </FlexDiv>
    )
}

comment.getInitialProps = async (ctx: Context<any>) => {
    try {
        const comments = await getComments()
        return {comments: Object.values(comments).reverse()}
    } catch (e) {
        console.error(e)
        return {comments: [ERROR_OCCUR]}
    }
}

export default comment
