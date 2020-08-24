import React, { createElement, useState, useEffect, Context, ButtonHTMLAttributes } from "react"
import { FlexDiv, H1_KR, H2_KR, H3_KR, INDEX_BG_COLOR } from "../styles/styled"
import { Input, Comment, Tooltip, Button } from "antd"
import Avatar from "antd/lib/avatar/avatar"
import moment from "moment"
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons"
import styled, { StyledProps } from "styled-components"
import axios from "axios"
import Search from "antd/lib/input/Search"
import { Style } from "util"

export interface Comment {
  name: string
  content: string
  createdAt: string | Date
  like: number
  dislike: number
}

export const DB_URL = "https://i-am-seosang.firebaseio.com"
const DISPLAY_COMMENT_COUNT = 3

const GuestBookDiv = styled(FlexDiv)`
  background-color: #f0eadf;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 6px solid #6e6d6d;
  padding: 5vw;
  // overflow: auto;
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

const ERROR_OCCUR: Comment = {
  name: "에러발생",
  content: "데이터를 불러오는데 에러가 발생했습니다...",
  like: 0,
  dislike: 0,
  createdAt: moment().toDate(),
}

const CommentDiv = styled(Comment)`
  width: 65vw;
  background-color: #f6f5f5;
  padding-left: 15px;
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

const comment = ({ comments }: any) => {
  const [action, setAction] = useState(null)
  const [commentCount, setCommentCount] = useState(DISPLAY_COMMENT_COUNT)
  const [value, setValue] = useState("")
  const [name, setName] = useState("")
  const [allComments, setAllComments] = useState<Comment[]>(comments)
  const [displayComments, setDisplayComments] = useState(comments)

  useEffect(() => {
    setDisplayComments(allComments.slice(commentCount - DISPLAY_COMMENT_COUNT, commentCount))
  }, [allComments, commentCount])

  const onSubmitComment = (val: string) => {
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
      const commentData: Comment = {
        content: value,
        like: 0,
        dislike: 0,
        name: name,
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      }
      axios.post(`${DB_URL}/comments.json`, JSON.stringify(commentData)).then((res) => {
        console.log(res)
        axios.get(`${DB_URL}/comments.json`).then((getRes) => {
          setAllComments((Object.values(getRes.data) as Comment[]).reverse())
          return
        })
      })
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
    console.log("like 클릭댐")
  }
  const onClickDislike = (e: React.MouseEvent) => {
    console.log("like 클릭댐")
  }
  const onClickPrev = (e: React.MouseEvent) => {
    setCommentCount(commentCount <= 8 ? 4 : commentCount - 4)
  }
  const onClickMore = (e: React.MouseEvent) => {
    setCommentCount(commentCount + 4)
  }

  useEffect(() => {
    // console.log(comments)
  }, [])
  return (
    <FlexDiv color={INDEX_BG_COLOR} height='100vh'>
      <GuestBookDiv height='85vh' width='85vw'>
        {commentCount > 4 ? (
          <Button onClick={onClickPrev} style={floatPrevButton} icon={<CaretUpOutlined />}></Button>
        ) : null}
        <Button onClick={onClickMore} style={floatMoreButton} icon={<CaretDownOutlined />}></Button>
        <H1_KR color='#000000'>방명록</H1_KR>
        <div style={{ width: "100%", textAlign: "end" }}>
          <p>예쁜말만 합시다😁</p>
          <p>개인적인 용건은 ddrrpg@naver.com로 부탁드립니다.</p>
          <Button>
            <H3_KR style={{ width: "100%" }}>방명록 남기기</H3_KR>
          </Button>
        </div>
        <FlexDiv direction='column' style={{ overflow: "auto" }}>
          {displayComments.map((comment: Comment, i) => (
            <CommentDiv
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
        </FlexDiv>
      </GuestBookDiv>
    </FlexDiv>
  )
}

comment.getInitialProps = async (ctx: Context<any>) => {
  try {
    const res = await fetch(`${DB_URL}/comments.json`)
    const comments = await res.json()
    return { comments: Object.values(comments).reverse() }
  } catch (e) {
    console.error(e)
    return { comments: [ERROR_OCCUR] }
  }
}

export default comment
