import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faRss } from "@fortawesome/fontawesome-free-solid"
import { Button } from "antd"
import { open } from "../util/helpers"
import * as Constant from "../util/const"

const ContactWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`

const ButtonContainer = styled(Button).attrs({
  type: "primary",
  shape: "circle",
  size: "large"
})`
  margin: 10px;
`

const SocialMedia = [
  {
    name: "Github",
    icon: <FontAwesomeIcon icon={faGithub} />,
    link: Constant.GITHUB_LINK
  },
  {
    name: "Email",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    link: Constant.EMAIL_LINK
  },
  {
    name: "Linkedin",
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    link: Constant.LINKEDIN_LINK
  },
  {
    name: "Blog",
    icon: <FontAwesomeIcon icon={faRss} />,
    link: Constant.BLOG_LINK
  }
]

const Contact = () => (
  <ContactWrapper>
    {SocialMedia.map(s => (
      <ButtonContainer key={s.name} onClick={() => open(s.link)}>
        {s.icon}
      </ButtonContainer>
    ))}
  </ContactWrapper>
)

export default Contact
