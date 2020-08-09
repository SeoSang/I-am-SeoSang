import React, { createElement, useState, useEffect, Context } from "react"
import { FlexDiv, H1_KR } from "../styles/styled"
import { Input, Comment, Tooltip } from "antd"
import Avatar from "antd/lib/avatar/avatar"
import moment from "moment"
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from "@ant-design/icons"
import styled from "styled-components"

export interface Comment {
  name: string
  content: string
  createdAt: string
  like: number
  dislike: number
}

export const DB_URL = "https://i-am-seosang.firebaseio.com"

const GuestBookDiv = styled(FlexDiv)`
  background-color: #f0eadf;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 6px solid #969496;
  flex-direction: column;
  padding: 0 5vw;
`

const comment = ({ comments }: any) => {
  const [action, setAction] = useState(null)
  const [value, setValue] = useState("")

  const onSubmitComment = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
  }
  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const onClickLike = (e: React.MouseEvent) => {
    console.log("like 클릭댐")
  }
  const onClickDislike = (e: React.MouseEvent) => {
    console.log("like 클릭댐")
  }

  useEffect(() => {
    // console.log(comments)
  }, [])
  return (
    <FlexDiv height='100vh'>
      <GuestBookDiv height='80vh' width='80vw'>
        <H1_KR color='#000000'>방명록</H1_KR>
        <div style={{ width: "100%", textAlign: "end" }}>
          <p>예쁜말만 합시다😁</p>
          <p>개인적인 용건은 ddrrpg@naver.com로 부탁드립니다.</p>
        </div>
        <Input.TextArea
          style={{ width: "60vw" }}
          rows={4}
          value={value}
          onPressEnter={onSubmitComment}
          onChange={onChangeComment}
          placeholder={"안부 말을 남겨주세요😘"}
        ></Input.TextArea>
        {comments.map((comment: Comment, i) => (
          <Comment
            actions={[
              <Tooltip key='comment-basic-like' title='Like'>
                <span onClick={onClickLike}>
                  {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
                  <span className='comment-action'>{comment.like}</span>
                </span>
              </Tooltip>,
              <Tooltip key='comment-basic-dislike' title='Dislike'>
                <span onClick={onClickDislike}>
                  {React.createElement(action === "disliked" ? DislikeFilled : DislikeOutlined)}
                  <span className='comment-action'>{comment.dislike}</span>
                </span>
              </Tooltip>,
            ]}
            author={<a>{comment.name}</a>}
            avatar={<Avatar alt={comment.name}>{comment.name.charAt(0)}</Avatar>}
            content={<p>{comment.content}</p>}
            style={{ width: "65vw" }}
            datetime={
              <Tooltip title={comment.createdAt}>
                <span>{moment(comment.createdAt).fromNow()}</span>
              </Tooltip>
            }
            key={`comment_${i}`}
          />
        ))}
      </GuestBookDiv>
    </FlexDiv>
  )
}

comment.getInitialProps = async (ctx: Context<any>) => {
  try {
    // const comments = await axios.get(`${DB_URL}/comment.json`)
    const res = await fetch(`${DB_URL}/comments.json`)
    const comments: Comment[] = await res.json()
    return { comments: comments.reverse() }
  } catch (e) {
    console.error(e)
    return { comments: null }
  }
}

export default comment
