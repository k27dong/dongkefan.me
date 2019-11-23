import React from 'react'
import { Steps } from 'antd'
import styled from 'styled-components'

/* Logo */
import BigRiverLogo from '../../images/bigriver.jpg'

const { Step } = Steps

const TimelineWrapper = styled.div`
  margin-top: 20px;
`

const CompanyName = styled.a`
  font-size: 25px;
  color: rgba(255, 255, 255, 0.65);
`

const CompanyPosition = styled.div`
  font-size: 17px;
  margin-top: 10px;
`

const CompanyYear = styled.div`
  font-size: 15px;
`

const experiences = [
  {
    name: 'Safyre Labs',
    position: 'Fullstack Developer',
    time: 'Sep 2019 - Now',
    link: 'https://www.safyrelabs.com'
  },
  {
    name: 'big river technologies inc.',
    position: 'Software Developer',
    time: 'Jan 2019 - Apr 2019',
    link: 'https://bigrivertech.com',
    logo: BigRiverLogo
  }
]

const Timeline = () => (
  <TimelineWrapper>
    <Steps
      direction="vertical"
      labelPlacement="vertical"
      current={0}
    >
      {experiences.map((c) => (
        <Step
          key={c.name}
          title={
            <CompanyName 
              href={c.link}
              target="_blank"
            >
              {c.name}
            </CompanyName>
          }
          description={
            <>
              <CompanyPosition>
                {c.position}
              </CompanyPosition>
              <CompanyYear>
                {c.time}
              </CompanyYear>
            </>
          }
          // icon={
          //   <img 
          //     src={c.logo}
          //     width={20}
          //     height={20}
          //   />
          // }
        />
      ))
      }
    </Steps>

  </TimelineWrapper>
)

export default Timeline