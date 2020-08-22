import React from "react"
import { Divider, Row, Col } from "antd"
import { SmileOutlined } from "@ant-design/icons"

const profile = () => {
  return (
    <>
      <Row>
        <Col></Col>
      </Row>
      <Divider orientation='left'>
        <SmileOutlined /> About me
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation='right'>Right Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </>
  )
}

export default profile
