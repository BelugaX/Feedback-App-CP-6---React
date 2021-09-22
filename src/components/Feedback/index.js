// Write your React code here.
import {Component} from 'react'
import './index.css'


const ThankyouSection = props => {
  const {resources} = this.props
  const {loveEmojiUrl} = resources
  return (
    <div className="thanks-container">
      <img src={loveEmojiUrl} alt="" className="love-image" />
      <h1 className="thanks-heading">Thank You </h1>
      <p className="feedback-desc">
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )
}

class FeedbackSection extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onEmojiSelect = () => {
    this.setState({isFeedbackSelected: true
    })
  }

  render() {
    const {isFeedbackSelected} = this.state
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-card">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li className="emoji-list" key={eachEmoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={onEmojiSelect}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt="eachEmoji.name"
                  className="emoji-image"
                />
                <br />
                <span className="name">{eachEmoji.name} </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class Feedback extends Component {
    render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? <ThankyouSection />
            : <FeedbackSection />
        </div>
      </div>
      )
    }
}

export default Feedback
  
