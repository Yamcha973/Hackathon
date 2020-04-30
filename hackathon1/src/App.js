import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import RequestApi from './components/RequestApi.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';


class App extends Component {
  constructor(){
    super();
    this.state = {
      activePage: "home"
    }
    this.changePage = this.changePage.bind(this);
    this.displayPage = this.displayPage.bind(this);
  }
  changePage(event){
    this.setState({activePage: event.target.id})
  }
  displayPage(){
    switch (this.state.activePage) {
      case "home": return<Home />;
      case "menu": return <RequestApi />;
      case "about": return <Footer />;
      case "gallery": return <Gallery />;
      default: return <Home />;        
    }
  }
  render(){
    return(
      <div>
        <Menu changePage={this.changePage} />
        <div>{this.displayPage()}</div>
      </div>
    )
  }
}  

export default App;