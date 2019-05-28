import React from 'react'
import CardTalk from '../components/CardTalk'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

class TalksPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <div className="Hero">
            <div className="HeroGroup">
              <div className="Logos" />
              <div className="CardGroup">
                {this.props.data.edges.map(
                  edge =>
                    edge.node.public && (
                      <CardTalk
                        key={edge.node.title}
                        title={edge.node.title}
                        text={edge.node.description}
                        loc={edge.node.location}
                        image={edge.node.image.fluid.src}
                        date={edge.node.date}
                        org={edge.node.organizer}
                        url={edge.node.url}
                        url2={edge.node.url2}
                      />
                    )
                )}
                {this.props.data.edges.length === 0 && (
                  <CardTalk
                    key="talk"
                    title="Under Construction"
                    text="Coming soon. Feel free to contact me."
                    loc="talk"
                    image=""
                    date=""
                    org=""
                    url=""
                    url2=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query TalkDataQuery {
        allContentfulTalks {
          edges {
            node {
              title
              organizer
              date(fromNow: true)
              location
              description
              public
              url
              url2
              image {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => <TalksPage data={data.allContentfulTalks} />}
  />
)
