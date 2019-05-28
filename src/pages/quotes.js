import React from 'react'
import CardQuote from '../components/CardQuote'
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';

const QuotesPage = () => (
  <StaticQuery
    query={graphql`
      query QuoteDataQuery {
        allContentfulQuotes {
          edges {
            node {
              id
              author
              book
              quote {
                quote
              }
              tags
              updatedAt(fromNow: true)
              public
            }
          }
        }
      }
    `}
    render={data => (<Layout>
      <div>
        <div className="Hero">
          <div className="HeroGroup">
            <div className="Logos" />
            <div className="CardGroup">
            {data.allContentfulQuotes.edges.map(edge => (
              edge.node.public&&<CardQuote 
              key={edge.node.id}
              quote={edge.node.quote.quote}
              author={edge.node.author}
              book={edge.node.book}
              tags={edge.node.tags}
              time={edge.node.updatedAt}
              />
            ))}
              {data.allContentfulQuotes.length===0&&<CardQuote
                key="quote"
                quote="Under Construction"
                author=""
                book=""
                tags=""
                time=""
              />}
            </div>
          </div>
        </div>
      </div>
    </Layout>)}
  />
) 

export default QuotesPage
