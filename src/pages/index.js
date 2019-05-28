import React from 'react'
import Card from '../components/Card'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query ProjectDataQuery {
        allContentfulProjects {
          edges {
            node {
              image {
                fluid {
                  src
                }
              }
              description {
                description
              }
              tags
              public
              status
              type
              title
              createdAt
              timeStart(formatString: "YYYY")
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div>
          <div className="Hero">
            <div className="HeroGroup">
              <div className="Logos" />
              <div className="CardGroup">
                {data.allContentfulProjects.edges.map(
                  edge =>
                    edge.node.public && (
                      <Card
                        key={edge.node.title}
                        title={edge.node.title}
                        text={edge.node.description.description}
                        type={edge.node.type}
                        tags={edge.node.tags}
                        image={edge.node.image.fluid.src}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
