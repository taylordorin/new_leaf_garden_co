import React, { Component } from 'react';
import { Link } from 'react-router';

class OurTeamTile extends Component {
  constructor(props){
    super(props);
    }

    render(){
      return(
        <div className='our-team'>
          <div className="our-team__container">
            <h1>Our Team</h1>
          </div>
        </div>
      )
    }
  }
  export default OurTeamTile;
