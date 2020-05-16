import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import porkersData from "../porkers_data";
import HogList from './HogList'
import HogDetails from './HogDetails'

class App extends Component {

  state = {
    pigs: porkersData,
    clickedPig: null
  }

  showDetailPage = (pig) => {
    //stop rendering pigs 
    //show details of pig that is clicked on
    this.setState({pigs: []})
    this.setState({clickedPig: pig})
  }

  filterGreased = () => {
    let greasedPigs = porkersData.filter(pig => pig.greased)
    this.setState({pigs: greasedPigs})
  }

  sortName = () => {
    let sortedNames = porkersData.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({pigs: sortedNames})
  }
  
  sortWeight = () => {
    let sortedWeight = porkersData.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    this.setState({pigs: sortedWeight})
  }

  renderAll = () => {
    this.setState({pigs: porkersData})
    this.setState({clickedPig: null})
  }

  renderWithoutHidden = (hog) => {
    // render all the pigs without hidden pig
    let hogData = [ ...this.state.pigs]
    let index = hogData.indexOf(hog)
    hogData.splice(index, 1)
    this.setState({pigs: hogData})
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.filterGreased}>Greased Hogs</button>
        <button onClick={this.sortName}>Sort By Name</button>
        <button onClick={this.sortWeight}>Sort By Weight</button><br></br><br></br>
        <HogList hogs={this.state.pigs} showDetail={this.showDetailPage} renderWithoutHidden={this.renderWithoutHidden}/>
        {this.state.clickedPig ? <HogDetails renderAll={this.renderAll} pig={this.state.clickedPig} /> : null}
      </div>
    );
  }
}

export default App;