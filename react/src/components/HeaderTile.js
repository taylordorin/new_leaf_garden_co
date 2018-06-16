import React, { Component } from 'react';
import HeaderLinkTile from './HeaderLinkTile';
import ImageTileTest from './ImageTileTest';
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
        <ImageTileTest />
        <GeneralInfoTile />
        <ServiceCardTile />
        <OurTeamTile />
        <ContactUsTile />
      </div>
    )
  }
}
export default HeaderTile;
