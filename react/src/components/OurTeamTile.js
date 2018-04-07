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

            <div className="team">
              <div className="teams team__cards">

                <div className="team-card">
                  <div className="team-card__img">
                    <img className="portrait" src={assetHelper["abbey_crop.jpg"]}></img>
                  </div>
                  <div className="team-card__body">
                    <h3>Abbey Bray</h3>
                    <h6>Most Awesome Person Title</h6>
                    <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit  placerat gubergren laboramus has ut.</p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="team-card__img">
                    <img className="portrait" src={assetHelper["toby_crop.jpg"]}></img>
                  </div>
                  <div className="team-card__body">
                    <h3>Tobey Hall</h3>
                    <h6>Blah Blah Title</h6>
                    <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit placerat gubergren laboramus has ut. </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="team-card__img">
                    <img className="portrait" src={assetHelper["cynthia_crop.jpg"]}></img>
                  </div>
                  <div className="team-card__body">
                    <h3>Cynthia Hall</h3>
                    <h6>Blah Title</h6>
                    <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit  placerat gubergren laboramus has ut.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  export default OurTeamTile;
