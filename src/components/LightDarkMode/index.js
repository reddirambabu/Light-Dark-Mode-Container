// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isActive: false}

  onToggleBackgroundColor = () => {
    this.setState(previousState => ({isActive: !previousState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const buttonText = isActive ? 'Dark Mode' : 'Light Mode'
    const backgroundColor = isActive ? 'lite-background' : 'dark-background'

    return (
      <div className="app-container">
        <div className={`card-container ${backgroundColor}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.onToggleBackgroundColor}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
