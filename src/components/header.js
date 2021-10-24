import React from 'react'
import { Link } from 'gatsby'
import './header.css'
import Wave from './Wave'

// this is only active when the location pathname is exactly
// the same as the href.
const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'LinkColorActive' }
    : { className: 'LinkColorInactive' }
}

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 400) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    var NumProjects = this.props.projects.edges.filter(
      edge => edge.node.public === true
    ).length
    var NumQuotes = this.props.quotes.edges.filter(
      edge => edge.node.public === true
    ).length
    var NumTalks = this.props.talks.edges.filter(
      edge => edge.node.public === true
    ).length

    return (
      <div>
        <div
          className={
            this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'
          }
        >
          <div className="HeaderGroup">
            <img
              src={require('../images/janeyouavatar.png')}
              width="120"
              alt="avatar"
            />
            <h1>Jane You</h1>
            <h2>Senior Product Manager @ Dropbox</h2>
            <p>
              <span role="img" aria-label="reading">
                📝
              </span>
              Habit Tracker |{' '}
              <span role="img" aria-label="reading">
               🏋️‍♀️
              </span>
              Weight Squatter  |{' '}
              <span role="img" aria-label="reading">
               💫
              </span>
              Thriving<br /> for crytpo, web3, data intelligence, health span
            </p>
            <div
              className={
                this.state.hasScrolled ? ' MenuDiv MenuDivScrolled' : 'MenuDiv'
              }
            >
              <div
                className={
                  this.state.hasScrolled ? 'Menu MenuScrolled' : 'Menu'
                }
              >
                {this.state.hasScrolled && (
                  <Link to="/">
                    <img
                      src={require('../images/janeyouavatar.png')}
                      width="78"
                      alt="avatar"
                    />
                  </Link>
                )}
                {this.props.data.edges.map(edge => (
                  <Link
                    key={edge.node.title}
                    getProps={isActive}
                    to={edge.node.url}
                  >
                    <span className="Number">
                      {edge.node.title === 'Projects'
                        ? NumProjects
                        : edge.node.title === 'Quotes'
                          ? NumQuotes
                          : edge.node.title === 'Talks'
                            ? NumTalks
                            : 2}
                    </span>
                    <br /> <hr />
                    {edge.node.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="WaveDiv">
              <Wave />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
