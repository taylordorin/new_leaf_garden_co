import React, { Component } from 'react';
import { Link } from 'react-router';

class LandingImageTile extends Component {
  constructor(props){
    super(props);
    }

    render(){
      return(
        <div>
          <div className="background-image">
            <div className="main-intro_block">
              <h1>Family Owned Since 1931</h1>
            </div>
          </div>
        </div>
      )
    }
  }
  export default LandingImageTile;
