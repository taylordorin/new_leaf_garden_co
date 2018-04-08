import React, { Component } from 'react';
import { Link } from 'react-router';
import LogoTile from './LogoTile';

class HeaderLinkTile extends Component {
  constructor(props){
    super(props);
    }

    render(){
      return(
        <div>
          <LogoTile />
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
