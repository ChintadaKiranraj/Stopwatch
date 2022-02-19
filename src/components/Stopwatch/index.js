import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
  }

  Start = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(PrevState => ({
      seconds: PrevState.seconds + 1,
    }))
  }

  Stop = () => {
    clearInterval(this.timerId)
  }

  Restart = () => {
    this.setState({
      seconds: 0,
    })
    clearInterval(this.timerId)
  }

  getTimeInMinutesSeconds = Sec => {
    const minutes = Math.floor(Sec / 60)
    const seconds = Math.floor(Sec % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {seconds} = this.state
    const time = this.getTimeInMinutesSeconds(seconds)
    return (
      <div className="container-out">
        <div className="head-clock">
          <h1 className="heading-stopwatch">Stopwatch</h1>
          <div className="watch-container">
            <div className="clock-logo-text">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{time}</h1>
            <div>
              <button
                type="button"
                className="button startBtn"
                onClick={this.Start}
              >
                Start
              </button>
              <button
                type="button"
                className="button pauseBtn"
                onClick={this.Stop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button restartBtn"
                onClick={this.Restart}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
