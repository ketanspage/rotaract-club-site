import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import logo from '../images/wallet.webp';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
function home() {
  return (
    <body >
        
      <div className="row-home">
      <div className="column-home">
        <div className="slogan">
        <h1 id="slogan">
          <div class="padding-2"></div>
          <p class="S1">Self Development -</p>
          <p class="S2">Fellowship Through </p>
          <p class="S3">Service</p>
        </h1>
  </div>
  </div>

  <div className="column-home">
    <div className="video">
    <iframe width="80%" height="100%" src="https://www.youtube.com/embed/RQ-TcKXLOJo">
        </iframe>
    </div>
  </div>

</div>
<div>
<div>
      <div id="row-2" className="row">
        <div className="col col-sm-12 col-lg-4 col-md-12 col-12">
          <button id="B1" className="btn btn-light" type="button" name="button">
            <i className="ic1 fa-sharp fa-solid fa-face-smile fa-3x" style={{paddingTop: '10px'}}></i>
            <br />
            <div className="mem-odometer">
              0
            </div>
            <p id="od-title1">Rotaractors</p>
          </button>
        </div>
        <div className="col col-sm-12 col-lg-4 col-md-12 col-12">
          <button id="B3" className="btn btn-light" type="button" name="button">
            <i className="ic3 fa-solid fa-house fa-3x" style={{paddingTop: '10px'}}></i>
            <br />
            <div className="club-odometer">
              0
            </div>
            <p id="od-title3">Clubs</p>
          </button>
        </div>
        <div className="col col-sm-12 col-lg-4 col-md-12 col-12">
          <button id="B2" className="btn btn-light" type="button" name="button">
            <i className="ic2 fa-sharp fa-solid fa-earth-americas fa-3x" style={{paddingTop: '10px'}}></i>
            <br />
            <div className="con-odometer">
              0
            </div>
            <p id="od-title2">Countries</p>
          </button>
        </div>
      </div>
    </div>

</div>
<div className="container-fluid" id="next">
      <div className="About-Us">
        <h1 className="about">About Us 📄</h1>
        <div className="about-text">
          <p>
          <h4 style={{fontWeight:'bold'}}>Rotary International:</h4>
          <br/>
          Rotary International is an international service organization whose stated purpose is to bring together business and professional leaders in order to provide humanitarian services, encourage high ethical standards in all vocations, and
          help build goodwill and peace in the world. It is a secular organization open to all persons regardless of race, colour, creed, religion, gender, or political preference. There are more than 46,000...
          </p>
          <a href="#"><Link to="/about" style={{textDecoration:'none'}}>Read more</Link></a>
        </div>
      </div>
</div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/>
     <br/> 

    </body>
 )
}
export default home;
