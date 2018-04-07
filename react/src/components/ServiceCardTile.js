import React, { Component } from 'react';
import { Link } from 'react-router';

class GeneralInfoTile extends Component {
  constructor(props){
    super(props);
    }

    render(){
      return(
        <div className="service">
          <div className="cards cards__product">

            <div className="svc-card">
              <div className="svc-card__body">
                <h6>Year Round Services</h6>
                <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit  placerat gubergren laboramus has ut.</p>
              </div>
              <div className="button-base">
                <a className="btn primary">Contact Us</a>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-card__body">
                <h6>Our Story</h6>
                <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit placerat gubergren laboramus has ut. </p>
              </div>
              <div className="button-base">
                <a className="btn primary">The Halls</a>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-card__body">
                <h6>Tree Care</h6>
                <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit  placerat gubergren laboramus has ut.</p>
              </div>
              <div className="button-base">
                <a className="btn primary">More Tips</a>
              </div>
            </div>

          </div>
        </div>
      )
    }
  }
  export default GeneralInfoTile;



  // <div className='service'>
  //   <div className='service__wrapper'>
  //     <div className='service__card'>
  //       <h6>Year Round Services</h6>
  //       <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit  placerat gubergren laboramus has ut.</p>
  //       <a className="button primary" href="#">Contact Us</a>
  //     </div>
  //     <div className='service__card'>
  //       <h6>Our Story</h6>
  //       <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit  placerat gubergren laboramus has ut.</p>
  //       <a className="button primary" href="#">The Halls</a>
  //     </div>
  //     <div className='service__card'>
  //     <h6>Tree Care</h6>
  //     <p>Lorem ipsum dolor sit amet, accumsan urbanitas cu eam, ei cibo iisque vix, ut eum posse populo necessitatibus. Ut vis dicta numquam, pro noluisse disputationi mediocritatem et. Ne prima brute labitur sit, an nisl platonem mea, vel velit  placerat gubergren laboramus has ut.</p>
  //     <a className="button primary" href="#">More Tips</a>
  //     </div>
  //   </div>
  // </div>
