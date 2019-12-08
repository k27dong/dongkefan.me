import React, { useState } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Divider, Button } from "antd"

import Intro from "./sections/intro"
import Timeline from "./sections/timeline"
import Contact from "./sections/contact"

const Container = styled.div`
  padding: 50px 70px;

  @media screen and (max-width: 767px) {
    padding: 50px 10px;
  }
`

const SkipButton = styled(Button)`
  float: right;
`

const isMobile = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  )
}

const App = () => {
  const [typeDone, setTypeDone] = useState(false)
  const [skipFlag, setSkipFlag] = useState(false)

  return (
    <Container>
      {!typeDone && (
        <SkipButton
          onClick={e => {
            setTypeDone(true)
            setSkipFlag(true)
          }}
        >
          {isMobile() ? "Skip" : "Skip Animation"}
        </SkipButton>
      )}
      <Intro type={skipFlag} onTypistDone={e => setTypeDone(true)} />
      {typeDone && (
        <Fade>
          <Timeline />
          <Divider />
          <Contact />
        </Fade>
      )}
    </Container>
  )
}

export default App
