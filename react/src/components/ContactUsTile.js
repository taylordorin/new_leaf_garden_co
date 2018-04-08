import React, { Component } from 'react';
import { Link } from 'react-router';

class ContactUsTile extends Component {
  constructor(props){
    super(props);
    }

    render(){
      return(
        <div className="contact-us">
          <h1>Contact and Hours</h1>
            <div className="contact-us__address">
              <h4>New leaf Garden Company at Hall’s Christmas Tree Farm</h4>
              <p>816 Douty Hill Road  |  Sangerville Maine 04479 <br/>
              207-564-3603 <br/>
              newleafgardencompany@gmail.com</p>
            </div>

          <div className="cards contact-container">
            <div className="contact-card">
              <div className="contact-card__body">
                <h4>Landscaping Services in Booth Bay</h4>
                <p>May 1 - October 30 <br />
                Monday through Friday <br />
                9:00 a.m. - 4:00 p.m.</p>
              </div>
            </div>

            <div className="contact-card">
            <div className="contact-card__body">
              <h4>Christmas Store</h4>
              <p>Friday after Thanksgiving - December 20 <br />
              Wednesdays through Sundays <br />
              9:00 a.m. - 4:00 p.m.</p>
            </div>
            </div>

            <div className="contact-card">
            <div className="contact-card__body">
              <h4>Tree Stand and Barn</h4>
              <p>November 9 - December 20  <br />
              Monday through Friday <br />
              9:00 a.m. - 4:00 p.m.</p>
            </div>
            </div>

          </div>
        </div>
      )
    }
  }
  export default ContactUsTile;
