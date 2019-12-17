import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import { graphql } from "@octokit/graphql"
import { Badge, Card } from "antd"
import styled from "styled-components"
import { open } from "../util/helpers"

const RepoWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }
`

const Repo = styled(Card).attrs({
  hoverable: true
})`
  margin: 20px;

  @media (min-width: 768px) {
    flex: 0 0 27%;
    margin: 26px;
  }
`

const Title = styled.span`
  font-size: 18px;
`

const RepoDescription = styled.p`
  content: "";
`

const RepoLanguage = styled(Badge).attrs({
  color: props => props.color,
  text: props => props.language
})`
  float: right;
`

const RepoTitle = (name, language, color) => (
  <>
    <Title>{name}</Title>
    <RepoLanguage color={color} language={language} />
  </>
)

const githubGraphRequest = graphql.defaults({
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_GQL_TOKEN}`
  }
})

export const getPinnedProjects = async () =>
  await githubGraphRequest(PinnedProjects)

const PinnedProjects = `
{
  viewer {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          languages(orderBy: {field: SIZE, direction: DESC}, first: 1) {
            nodes {
              name
              color
            }
          }
          description
          url
        }
      }
    }
  }
}
`

const Github = () => {
  const [loading, setLoading] = useState(true)
  const [pinned, setPinned] = useState([])

  useEffect(() => {
    setLoading(true)
    Promise.all([getPinnedProjects()])
      .then(([p]) => {
        setPinned(p.viewer.pinnedItems.nodes)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    !loading && (
      <Fade>
        <RepoWrapper>
          {pinned.map((repo, index) => (
            <Repo
              title={RepoTitle(
                repo.name,
                repo.languages.nodes[0].name,
                repo.languages.nodes[0].color
              )}
              key={index}
              onClick={() => open(repo.url)}
            >
              <RepoDescription>{repo.description}</RepoDescription>
            </Repo>
          ))}
        </RepoWrapper>
      </Fade>
    )
  )
}

export default Github
