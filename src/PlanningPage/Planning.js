import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PlanningPage/Planning.css';
import List from './Common/List';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './Common/MapContainer'
import MenuContainer from './Common/MenuContainer'

//Pass google maps props down to mapcontainer component as 'google'


class Planning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',     //store every value passed to list
      items: []     //store what we pass as a value to input
    };
      //Bindings for menu component
  this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
  }
    
    handleMouseDown(e) {            //for toggle menu
    this.toggleMenu();
 
    console.log("clicked");     // for web developer tools
    e.stopPropagation();
  }
 
    
toggleMenu() {      //toggles menu visibility
  this.setState({
      visible: !this.state.visible
  });
}
    
//show menu from righthand side
  showRight = (event) => {
    this.refs.right.show();
  }
  
  
  //for appending activites to list (need to make more automatic) 
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  
  //google map loader
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

        //google api reference
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

//render jsx code - header, button, paragraph, form, google map, liosts, etc.
//cannot put comments inside render - mess up developer web view (localhost:3000)
  render() {
    return (
      <div>
        <header className="Plan-header">
          <h1 className="Plan-title">Welcome to the TravelApp</h1>
        </header>
        
         
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <MenuContainer handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        
        <p className="Plan-paragraph">
            Search the map for activites to join
        </p>


      <div>
        <MapContainer google={this.props.google} />
      </div>
        
        <form className="Plan-button" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        
        <List items={this.state.items} />
        
        <button className="Plan-Forward">Back</button>
        
        <button className="Plan-Backward">Continue</button>
        </div>
    );
  }
}

class MenuButton extends React.Component { //menu button for slide in menu
  render() {
    return (
        <button id="roundButton"
            onMouseDown={this.props.handleMouseDown}>
        </button>
    );
  }
}

//here is the export the App component with the GoogleApiWrapper. You pass it down with an object containing your API key

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBGn3YvhByyDaT2_UbhuYEd72-3iJL_5J0',        //from google signup
})(Planning)
