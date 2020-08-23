import React from "react"
import styled from "styled-components"
import AboutMe from "../components/profile/AboutMe"
import TechUsed from "../components/profile/TechUsed"
import { Divider, Row, Col, BackTop } from "antd"
import {
  SmileOutlined,
  RadarChartOutlined,
  PictureOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons"
import { INDEX_BG_COLOR, INDEX_TEXT_COLOR } from "../styles/styled"
import Photo from "../components/profile/Photo"
import Project from "../components/profile/Project"

const ProfileContainer = styled.div`
  padding: 5vh 5vw;
  min-height: 100vh;
  background-color: ${INDEX_BG_COLOR};
  color: ${INDEX_TEXT_COLOR};
`

const BackTopDiv = styled.div`
  height: 40;
  width: 40;
  line-height: 40px;
  border-radius: 4;
  background-color: #1f4068;
  color: #ebecf1;
  text-align: center;
  font-size: 14;
`

const profile = () => {
  return (
    <ProfileContainer>
      <Divider style={{ margin: "40px 0" }} orientation='left'>
        <SmileOutlined /> About me
      </Divider>
      <AboutMe></AboutMe>
      <Divider style={{ margin: "40px 0" }} orientation='center'>
        <RadarChartOutlined /> Tech Used
      </Divider>
      <TechUsed></TechUsed>
      <Divider style={{ margin: "40px 0" }} orientation='center'>
        <FundProjectionScreenOutlined /> {"  Toy Projects"}
      </Divider>
      <Project></Project>
      <Divider style={{ margin: "80px 0" }} orientation='center'>
        <PictureOutlined /> Photo
      </Divider>
      <Photo></Photo>
      <BackTop>
        <BackTopDiv>UP</BackTopDiv>
      </BackTop>
    </ProfileContainer>
  )
}

export default profile
