import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import repairs from './repairs.json';
import './App.css';


/*const repairs = [
{"id": 0, "repair": "iPhone 3G Loud Speaker Repair", "name": "iphone 3g", "price": "$39.99", "date": "Thu Sep 28 17:43:30 2017", "url": "https://www.ubreakifix.com/iphone-repair/iphone-3g-repair/iphone-3g-loud-speaker-repair"},
{"id": 1, "repair": "iPhone 3G LCD Replacement", "name": "iphone 3g", "price": "$39.99", "date": "Thu Sep 28 17:43:30 2017", "url": "https://www.ubreakifix.com/iphone-repair/iphone-3g-repair/iphone-3g-lcd-replacement"},
{"id": 2, "repair": "iPhone 3G Home Button Replacement", "name": "iphone 3g", "price": "$39.99", "date": "Thu Sep 28 17:43:30 2017", "url": "https://www.ubreakifix.com/iphone-repair/iphone-3g-repair/iphone-3g-home-button-replacement"},
{"id": 3, "repair": "iPhone 3G Headphone Jack Repair", "name": "iphone 3g", "price": "$39.99", "date": "Thu Sep 28 17:43:30 2017", "url": "https://www.ubreakifix.com/iphone-repair/iphone-3g-repair/iphone-3g-headphone-jack-repair"},
]*/

const KEYS_TO_FILTERS = ['repair']


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      repairs: repairs,
      searchTerm: '',
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render() {
    const filteredRepairs = repairs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <div className="header-bar">
        <img src="https://d27ppybfoyyraq.cloudfront.net/image/ubif_logo.svg" title="uBreakiFix" alt="uBreakiFix" width="160" height="24" className="ubif-logo"/>
        </div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredRepairs.map(repair => {
          return (
            <div className="id" key={repair.id}>
              <div className="repair">{repair.repair} {repair.price}</div>
              <div className="link">
                <a href={repair.url}>Click for repair page</a>
              </div>
            </div>
          )
        })}
        <a className="github-link" href="https://github.com/smhaggerty">
        <img className="ghlogo" alt="link to developer page" src="./GitHub-Mark-32px.png" />
        </a>
      </div>
    )
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default App;
