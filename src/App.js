//History

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './HistoryPage/History.css';
import List from './Common/List';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './Common/MapContainer'
import Menu from './Common/MenuContainer'

export class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',     //store what we are passing as input
      items: []     //store every value we pass to the list
      //visible: false      //set menu visibility
    };
  this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
}
    
handleMouseDown(e) {            //for toggle menu
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }

toggleMenu() {      //menu visibility
  this.setState({
      visible: !this.state.visible
  });
}
    
  onChange = (event) => {   //allow input through submit 
    this.setState({ term: event.target.value });
  }
  
  onSubmit = (event) => {       //add submitted value to list
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

//show menu from righthand side
  showRight = (event) => {
    this.refs.right.show();
  }
  
    //google map loader
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }
  
//render methods for jsx
  render() {
    return (
      <div>
        <header className="History-header">
          <h1>Welcome to the TravelApp</h1>
        </header>
        
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        
        <p className="History-paragraph">
            History page: See your past travel:
        </p>
        
        
      <div>
        <MapContainer google={this.props.google} />
      </div>
        
        <grid-container>
            <grid-item>
                <p className="History-integratedParagraph">
                    Placeholder Activity
                </p>
            </grid-item>

        
            <grid-item>
                <p className="History-integratedParagraph">
                    Placeholder Activity
                </p>
            </grid-item>


            <grid-item>
                <p className="History-integratedParagraph">
                    Placeholder Activity
                </p>
            </grid-item>


            <grid-item>
                <p className="History-integratedParagraph">
                    Placeholder Activity
                </p>
            </grid-item>


            <grid-item>
                <p className="History-integratedParagraph">
                    Placeholder Activity
                </p>
            </grid-item>


            <grid-item>
                <p className="History-integratedParagraph">
                    Placeholder Activity
                </p>
            </grid-item>
        </grid-container>

        <List items={this.state.items} />

        <p className="History-detailsCorrect">
            
        </p>
        
        <form className="History-button" action="./PlanningPage/Planning.js">
            <input type="submit" value="Continue" />
        </form>
        
        <button className="History-Forward">Back</button>
            
        <button className="History-Backward">Continue</button>
      </div>
    );
  }
}


class MenuButton extends React.Component {  //class for menu button
  render() {
    return (
        <button id="roundButton"
            onMouseDown={this.props.handleMouseDown}>
        </button>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBGn3YvhByyDaT2_UbhuYEd72-3iJL_5J0',        //from google signup
})(History)
  



/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './NewTravelPage/NewTravel.css';
import NewTravel from './NewTravelPage/NewTravel';
import { BrowserRouter as Router, Route, Link } from "react-router";

const App = () => (
      <Router>
          <div>
          <Home /> 
            <ul>
              <li>
                <Link to="/NewTravel;">NewTrave; Me</Link>
              </li>
            </ul>
            <Route path="./NewTravel;" component={NewTravel} />
          </div>
      </Router>
)

export default App;

const Home = () => (
  <div className="App">
  <header className="App-header">
    <h1 className="title">Welcome to the ECSDigital Engineer in Test tech Test</h1>
  </header>
  <p className="intro">
    It's time to get serious. We want you would like you to complete the the e2e test that can be found in <code>src/e2e/</code>
  </p>
  </div>
)
*/



