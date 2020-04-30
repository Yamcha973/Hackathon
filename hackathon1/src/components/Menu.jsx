import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa'
import '../App.css';

export default class Menu extends Component {
   constructor(){
      super();
      this.state = {
         toggle: false
      }
   }
  Toggle = () => {
     this.setState({toggle: !this.state.toggle})
  }
  render() {
      const { changePage } = this.props;
      return (
  <>
      <div className="navBar">
            <button className="burger" onClick={this.Toggle}>
                <FaAlignRight />
            </button>
            <ul className={this.state.toggle ? "links show-nav" : "links"}>
                <li id="home" onClick={(event) => {changePage(event)} } >Home</li>
                <li id="menu" onClick={(event) => {changePage(event)} }>WebcamLive</li>
                {/* <li id="gallery" onClick={(event) => {changePage(event)} } >Galerie</li> */}
                <li id="about" onClick={(event) => {changePage(event)} } >About</li>
            </ul>
      </div>
  </>
);
}
}
