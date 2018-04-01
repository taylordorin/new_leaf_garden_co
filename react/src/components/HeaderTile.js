import React, { Component } from 'react';
import HeaderLinkTile from './HeaderLinkTile';
import LandingImageTile from './LandingImageTile';
import GeneralInfoTile from './GeneralInfoTile';
import ServiceCardTile from './ServiceCardTile';
import OurTeamTile from './OurTeamTile';

class HeaderTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <HeaderLinkTile />
        <LandingImageTile />
        <GeneralInfoTile />
        <ServiceCardTile />
        <OurTeamTile />
      </div>
    )
  }
}
export default HeaderTile;
