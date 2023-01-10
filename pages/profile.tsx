import React, {useState} from "react"
import styled from "styled-components"
import AboutMe from "../components/profile/AboutMe"
import TechUsed from "../components/profile/TechUsed"
import {BackTop, Divider} from "antd"
import {
    DownOutlined,
    FundProjectionScreenOutlined,
    PictureOutlined,
    RadarChartOutlined,
    SmileOutlined,
    UpOutlined
} from "@ant-design/icons"
import {INDEX_BG_COLOR, INDEX_TEXT_COLOR} from "../styles/styled"
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
    const [techUsedActive, setTechUsedActive] = useState(false)
    const [projectActive, setProjectActive] = useState(false)
    const [photoActive, setPhotoActive] = useState(false)

    return (
        <ProfileContainer>
            <Divider style={{margin: "40px 0"}} orientation='left'>
                <SmileOutlined/> About me
            </Divider>
            <AboutMe/>
            <Divider style={{margin: "40px 0"}} orientation='center'>
                <RadarChartOutlined/> Tech Used
            </Divider>
            <div style={{cursor: 'pointer'}} onClick={(e) => setTechUsedActive(prev => !prev)}>
                <span>{techUsedActive ? '접기' : '자세히보기'} </span>
                {techUsedActive ? <UpOutlined/> : <DownOutlined/>}
            </div>
            {techUsedActive && <TechUsed/>}
            <Divider style={{margin: "40px 0"}} orientation='center'>
                <FundProjectionScreenOutlined/> {"  Toy Projects"}
            </Divider>
            <div style={{cursor: 'pointer'}} onClick={(e) => setProjectActive(prev => !prev)}>
                <span>{projectActive ? '접기' : '자세히보기'} </span>
                {projectActive ? <UpOutlined/> : <DownOutlined/>}
            </div>
            {projectActive && <Project/>}
            <Divider style={{margin: "40px 0 40px 0"}} orientation='center'>
                <PictureOutlined/> Photo
            </Divider>
            <div style={{cursor: 'pointer'}} onClick={(e) => setPhotoActive(prev => !prev)}>
                <span>{photoActive ? '접기' : '자세히보기'} </span>
                {photoActive ? <UpOutlined/> : <DownOutlined/>}
            </div>
            {photoActive && <Photo/>}
            <BackTop>
                <BackTopDiv>UP</BackTopDiv>
            </BackTop>
        </ProfileContainer>
    )
}

export default profile
