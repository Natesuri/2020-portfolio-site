import React from 'react'

export class TenureTimer extends React.Component {
  state = {
    timerId: 0,
    timeSince: ''
  };

  componentDidMount() {
    let timerId = setInterval(() => this.calculateTimeSince(this.props.pointInTime), 1000)
    this.setState({timerId})
  }

  componentWillUnmount() {
   clearInterval(this.state.timerId);
 }

  calculateTimeSince = pointInTime => {
    const date = new Date(pointInTime)
    const epochSince = Date.now() - date.getTime()

    const minutes = 1000 * 60
    const hours = minutes * 60
    const days = hours * 24
    const years = days * 365

    // get the remainder of calculating the years and days of years here since both are reused.
    const yearsRemainder = epochSince % years
    const daysRemainderOfYears = yearsRemainder % days
    const hoursRemainderOfDays = daysRemainderOfYears % hours

    const myYears = Math.floor(epochSince / years)
    const myDays = Math.floor(yearsRemainder / days)
    const myHours = Math.floor(daysRemainderOfYears / hours)
    const myMinutes = Math.floor((daysRemainderOfYears % hours) / minutes)
    const mySeconds = Math.floor((hoursRemainderOfDays % minutes) / 1000)

    const timeSince = myYears
      ? `${myYears} years ${myDays} days ${myHours} hours ${myMinutes} minutes and ${mySeconds} seconds`
      : `${myDays} days ${myHours} hours ${myMinutes} minutes and ${mySeconds} seconds`

    this.setState({timeSince})
  }

  render() {
    return (
      <div className='workTimerContent'>
        <p>{this.props.eventName}</p>
        <p>{this.state.timeSince}</p>
      </div>
    )
  }
}
