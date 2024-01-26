import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  getCountry = () => {
    const {activeId} = this.state
    const countryCapital = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeId,
    )
    return countryCapital.country
  }

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry()

    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading"> Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  value={eachItem.id}
                  key={eachItem.id}
                  className="option"
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
