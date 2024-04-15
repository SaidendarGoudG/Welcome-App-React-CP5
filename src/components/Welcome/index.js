import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onSubscribe = () => {
    this.setState(prevState => {
      return {isSubscribed: true}
    })
  }

  onUnSubscribe = () => {
    this.setState(prevState => {
      return {isSubscribed: false}
    })
  }

  render() {
    const {isSubscribed} = this.state
    //let subscribe

    // if (isSubscribed) {
    //   subscribe = (
    //     <button className="button" onClick={this.onUnSubscribe} type="button">Subscribe</button>
    //   )
    // } else {
    //   subscribe = (
    //     <button className="button" onClick={this.onSubscribe} type="button">Subscribed</button>
    //   )
    // }

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="button" onClick={this.onUnSubscribe} type="button">
            Subscribe
          </button>
        ) : (
          <button className="button" onClick={this.onSubscribe} type="button">
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
