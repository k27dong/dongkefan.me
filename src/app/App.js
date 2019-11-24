import React, { useState } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Divider } from "antd"

import Intro from "./sections/intro"
import Timeline from "./sections/timeline"
import Contact from "./sections/contact"

const Container = styled.div`
  padding: 50px 70px;
`

const App = () => {
  const [typeDone, setTypeDone] = useState(false)

  return (
    <Container>
      <Intro onTypistDone={e => setTypeDone(true)} />
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
