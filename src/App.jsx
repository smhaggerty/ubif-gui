import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input';
import MaterialCard from './components/MaterialRepairCard'
import GithubLink from './components/GithubLink'
import repairs from './data.json'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const KEYS_TO_FILTERS = ['header']

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
    const filteredRepairs = repairs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
)
    return (
      <MuiThemeProvider>
        <AppBar
          title={<a href="https://www.ubreakifix.com"><img src="https://d27ppybfoyyraq.cloudfront.net/image/ubif_logo.svg" alt="uBreakiFix" width="160" height="24" /></a>}
          style={{backgroundColor: "rgb(33,33,33)", position: "fixed"}}
          titleStyle={{width: "100%",
                      textAlign: "center",
                      marginTop: "4px",
                      display: "block",
                      margin: "auto"}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        >

        </AppBar>
        <SearchInput
          placeholder="Search for repair..."
          style={{
            WebkitBorderRadius: "0",
            borderRadius: "0",
            fontSize:"18px",
            fontFamily:"roboto",
            marginBottom: "1em",
            padding:"10px 10px 10px 5px", background: "transparent", border: "none", marginTop: "120px", width: "80%", marginLeft: "10%", borderBottom: "solid red", value: ""}} onChange={this.searchUpdated}
        />
        {filteredRepairs.map(repair => {
          return (
            <div style={{width:"auto", marginLeft: "10%", marginRight: "10%", marginTop: "1%", marginBottom: "1%"}}>
              <MaterialCard  repairData={repair} />
            </div>
          )
        })}
        <p style={{
            color: "black",
            position: "fixed",
            margin: "auto",
            bottom: 0,
            left: 0}}
        >
          Last Update: {repairs[0].date}
        </p>
        <GithubLink />
      </MuiThemeProvider>
    );
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default App;


// <div className="App">


  // <div style={{width: "100%"}}>
  // </div>
  // {filteredRepairs.map(repair => {
  //   return (
  //     <div style={{width:"auto", marginLeft: "10%", marginRight: "10%", marginTop: "1%", marginBottom: "1%"}}>
  //     <MaterialCard  repairData={repair} />
  //     </div>
  //   )
  // })}
  // <div>

  // </div>
// </div>

// return <p>{repairs["https://www.ubreakifix.com/samsung-repair/samsung-galaxy-note-5-repair"]}</p>
// }
