import React, { Component } from 'react';
import HeaderLinkTile from './HeaderLinkTile';
import LandingImageTile from './LandingImageTile';
import GeneralInfoTile from './GeneralInfoTile';
import ServiceCardTile from './ServiceCardTile';
import OurTeamTile from './OurTeamTile';
import ContactUsTile from './ContactUsTile';

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
        <ContactUsTile />
      </div>
    )
  }
}
export default HeaderTile;
