// Write your code here.

import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isPlus: true}

  onVisible = id => {
    console.log(id)
    this.setState(prevState => ({
      isPlus: !prevState.isPlus,
    }))
  }

  render() {
    const {isPlus} = this.state
    const {faqsList} = this.props

    console.log(isPlus)

    return (
      <div className="app-container">
        <div className="Faq-container">
          <h1 className="head">FAQs</h1>
          <ul className="item-container">
            {faqsList.map(each => (
              <FaqItem
                faqItem={each}
                key={each.id}
                isPlus={isPlus}
                onVisible={this.onVisible}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
