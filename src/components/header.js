import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import Wave from './Wave';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.1,
      margin: 2
    }}
  />
)

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 450) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div>
        <div className="Header">
          <div className="HeaderGroup">
            <img src={require('../images/janeyouavatar.png')} width="120" alt="avatar" />
            <h1>Jane You</h1>
            <h2>Senior Product Manager @ Autodesk</h2>
            <p>📝 Habit Tracker | 🍜 Ramen enthusiast | 📈 Thriving<br /> for Data, Discipline, Creativity</p>
            <div className={this.state.hasScrolled ? ' MenuDiv MenuDivScrolled' : 'MenuDiv'}>
              <div className={this.state.hasScrolled ? ' Menu MenuScrolled' : 'Menu'}>
                {this.state.hasScrolled&&<Link to=""><img src={require('../images/janeyouavatar.png')} width="78" alt="avatar" /></Link>} 
                <Link to="/projects"><span className="Number">15</span><br /> <ColoredLine color="lightgrey" />Projects</Link>
                <Link to="/blogs"><span className="Number">15</span><br /> <ColoredLine color="lightgrey" />Blogs</Link>
                <Link to="/quotes"><span className="Number">15</span><br /> <ColoredLine color="lightgrey" />Quotes</Link>
                <Link to="/talks"><span className="Number">15</span><br /> <ColoredLine color="lightgrey" />Talks</Link>
              </div>
            </div>
            <div className="WaveDiv"><Wave /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
