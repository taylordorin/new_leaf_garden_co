import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderLinkTile extends Component {
  constructor(props){
    super(props);
    }

    render(){
      return(
        <div>
          <div className='logo-container'></div>
          <nav className='navigation'>
            <div className="navigation__container">
                <ul>
                  <li><a href="#">LANDSCAPING</a></li>
                  <li><a href="#">OUR TREES</a></li>
                  <li><a href="#">FARM STAND</a></li>
                  <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
          </nav>
        </div>
      )
    }
  }
  export default HeaderLinkTile;


  // <img className="logo" src={assetHelper["nlgc.png"]}></img>
