import React from 'react'
import Typist from 'react-typist'
import styled from 'styled-components'
import _ from "lodash"


import { getAge } from '../util/helpers'

const IntroWrapper = styled.div`
    text-align: left;
    line-height: 1.25;
    color: rgba(255, 255, 255, 0.65);
    font-size: 25px;
`

// introduction part with typist
const finishDelay = 400
const beginDelay = 300

// const finishDelay = 0
// const beginDelay = 0

const Intro = ({onTypistDone = _.noop}) => (
    <IntroWrapper>
        <Typist
            startDelay={1500}
            avgTypingDelay={45}
            cursor={{hideWhenDone: true}}
            onTypingDone={ onTypistDone }
        >
            <span>
                Hello,
            </span>

            <Typist.Delay ms={finishDelay}/>
            <br/>
            <Typist.Delay ms={beginDelay}/>
            <span>
                My name is Kefan Dong.
            </span>

            <Typist.Delay ms={finishDelay}/>
            <br/>
            <Typist.Delay ms={beginDelay}/>
            <span>
                Studying Electrical Engineering at the{" "}
                <a
                    style={{color: "#FFD54F"}}
                    href="https://uwaterloo.ca/future-students/programs/electrical-engineering"
                    target="_blank"
                >
                    University of Waterloo.
                </a>
            </span>

            <Typist.Delay ms={finishDelay}/>
            <br/>
            <Typist.Delay ms={beginDelay}/>
            <span>
                I am { getAge() } years old. Living in Mississauga, ON. Canada.
            </span>

            <Typist.Delay ms={finishDelay}/>
            <br/><br/>
            <Typist.Delay ms={beginDelay+200}/>
            <span>
                Experiences: 
            </span>
            <Typist.Delay ms={1000}/>

        </Typist>
    </IntroWrapper>
)

export default Intro