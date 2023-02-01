// Write your code here.
import {Component} from 'react'
import './index.css'

const plus = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minus = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isClick: false}

  onShow = () => {
    this.setState(prevState => ({
      isClick: !prevState.isClick,
    }))
  }

  render() {
    const {isClick} = this.state
    const {faqItem} = this.props
    const {questionText, answerText} = faqItem
    const imgUrl = !isClick ? plus : minus
    const alt = !isClick ? 'plus' : 'minus'

    return (
      <li className="item">
        <div className="ques-container">
          <h1 className="questionText">{questionText}</h1>
          <button type="button" className="button" onClick={this.onShow}>
            <img src={imgUrl} alt={alt} className="icon" />
          </button>
        </div>
        {isClick && (
          <div className="ques-container">
            <p className="answerText">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
