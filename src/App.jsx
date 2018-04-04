import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import SearchInput, { createFilter } from 'react-search-input';
import MaterialCard from './components/MaterialRepairCard'
import GithubLink from './components/GithubLink'
import repairs from './data.json'
import './App.css';


const KEYS_TO_FILTERS = ['header']

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      repairs: repairs,
      searchTerm: '',
    }
    this.searchUpdated = this.searchUpdated.bind(this)
    this.appBarStyle = {
      backgroundColor: "rgb(33,33,33)",
      position: "fixed"
    }
    this.appBarTitleStyle = {
      width: "100%",
      textAlign: "center",
      marginTop: "4px",
      display: "block",
      margin: "auto"
    }
    this.searchInputStyle = {
      WebkitBorderRadius: "0",
      borderRadius: "0",
      fontSize:"18px",
      fontFamily:"roboto",
      marginBottom: "1em",
      padding:"10px 10px 10px 5px",
      background: "transparent",
      border: "none",
      marginTop: "120px",
      width: "80%",
      marginLeft: "10%",
      borderBottom: "solid red",
      value: ""
    }
    this.repairCardDivStyle = {
      width:"auto",
      marginLeft: "10%",
      marginRight: "10%",
      marginTop: "1%",
      marginBottom: "1%"
    }
    this.lastUpdateStampStyle = {
      color: "black",
      fontFamily:"roboto",
      position: "fixed",
      margin: "auto",
      bottom: 0,
      left: 0
    }
  }

  render() {
    const filteredRepairs = repairs.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <MuiThemeProvider>
        <div className="app">
          <AppBar
            style={this.appBarStyle}
            titleStyle={this.appBarTitleStyle}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            title={
              <a href="https://www.ubreakifix.com">
                <img
                  src="http://d27ppybfoyyraq.cloudfront.net/image/ubif_logo.svg"
                  alt="uBreakiFix"
                  width="160"
                  height="24"
                />
              </a>
            }
          />
          <SearchInput
            placeholder="Search for repair..."
            throttle={500}
            style={this.searchInputStyle}
            onChange={this.searchUpdated}
          />
          {filteredRepairs.map(repair => {
            return (
              <div
                key={repair.url + repair.repair}
                style={this.repairCardDivStyle}
              >
                <MaterialCard  repairData={repair} />
              </div>
            )
          })}
          <p style={this.lastUpdateStampStyle}>
            Last Update: {repairs[0].date}
          </p>
          <GithubLink />
        </div>
      </MuiThemeProvider>
    );
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default App;
