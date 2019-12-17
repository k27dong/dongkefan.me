import React from "react"
import Typist from "react-typist"
import styled from "styled-components"
import _ from "lodash"

import { getAge } from "../util/helpers"

const IntroWrapper = styled.div`
  margin-top: 20px;
  text-align: left;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.65);
  font-size: 25px;

  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`

const finishDelay = 400
const beginDelay = 300

const Intro = ({ onTypistDone = _.noop, type }) =>
  type ? (
    <IntroWrapper>
      <span>Hello,</span> <br />
      <span>
        My name is Kefan Dong.
        <a
          style={{ color: "dodgerblue" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/k27dong"
        >
          {" "}
          (k27dong)
        </a>
      </span>{" "}
      <br />
      <span>
        Studying Electrical Engineering at the{" "}
        <a
          style={{ color: "#FFD54F" }}
          href="https://uwaterloo.ca/future-students/programs/electrical-engineering"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Waterloo.
        </a>
      </span>{" "}
      <br />
      <span>
        I am {getAge()} years old. Living in Mississauga, ON. Canada.
      </span>{" "}
      <br /> <br />
      <span>Experiences:</span>
    </IntroWrapper>
  ) : (
    <IntroWrapper>
      <Typist
        startDelay={1500}
        avgTypingDelay={45}
        cursor={{ hideWhenDone: true }}
        onTypingDone={onTypistDone}
      >
        <span>Hello,</span>

        <Typist.Delay ms={finishDelay} />
        <br />
        <Typist.Delay ms={beginDelay} />
        <span>
          My name is Kefan Dong.
          <Typist.Delay ms={300} />
          <a
            style={{ color: "dodgerblue" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/k27dong"
          >
            {" "}
            (k27dong)
          </a>
        </span>

        <Typist.Delay ms={finishDelay} />
        <br />
        <Typist.Delay ms={beginDelay} />
        <span>
          Studying Electrical Engineering at the{" "}
          <a
            style={{ color: "#FFD54F" }}
            href="https://uwaterloo.ca/future-students/programs/electrical-engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Waterloo.
          </a>
        </span>

        <Typist.Delay ms={finishDelay} />
        <br />
        <Typist.Delay ms={beginDelay} />
        <span>
          I am {getAge()} years old. Living in Mississauga, ON. Canada.
        </span>

        <Typist.Delay ms={finishDelay} />
        <br />
        <Typist.Delay ms={200} />
        <br />
        <Typist.Delay ms={beginDelay + 200} />
        <span>Experiences:</span>
        <Typist.Delay ms={1000} />
      </Typist>
    </IntroWrapper>
  )

export default Intro
