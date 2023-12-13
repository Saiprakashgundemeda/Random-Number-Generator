// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  numberGenerator = () => {
    const randomValue = Math.ceil(Math.random() * 100)
    this.setState({count: randomValue})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgContainer">
        <div className="insideContainer">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100.</p>
          <button type="button" onClick={this.numberGenerator}>
            Generate
          </button>
          <p className="value">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
