//reference.js
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ReferencePage/Reference.css';
import List from './Common/List';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './Common/MapContainer'
import MenuContainer from './Common/MenuContainer'

//Pass google maps props down to mapcontainer component as 'google'


class References extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',     //store every value passed to list
      items: []     //store what we pass as a value to input
    };
      //Bindings for menu
  this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
  }
    
    handleMouseDown(e) {            //for toggle menu
    this.toggleMenu();
 
    console.log("clicked"); //for web console
    e.stopPropagation();
  }
 
    
toggleMenu() {
  this.setState({
      visible: !this.state.visible
  });
}
    
//show menu from righthand side
  showRight = (event) => {
    this.refs.right.show();
  }
  
  
  //allows input to list from components
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

  render() {
    return (
      <div>
        <header className="Ref-header">
          <h1>Welcome to the TravelApp</h1>
        </header>
        
         
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <MenuContainer handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        
        <p className="Ref-paragraph">
            Reference Page: See your chosen activies here:
        </p>
        
        <p className="Ref-paragraph">
            PlaceHolder: Dates and Duration
        </p>
        
        
        <p className="Ref-paragraph">
            PlaceHolder: Activities list
        </p>
        
        <List items={this.state.items} />

      <div>
        <MapContainer google={this.props.google} />
      </div>
        
        
        
        <button className="Ref-Forward">Back</button>
        
        <button className="Ref-Backward">Continue</button>
        </div>
    );
  }
}

class MenuButton extends React.Component {  //button for slide-in menu
  render() {
    return (
        <button id="roundButton"
            onMouseDown={this.props.handleMouseDown}>
        </button>
    );
  }
}

//Export app component with the GoogleApiWrapper. You pass it down with an object containing your API key

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBGn3YvhByyDaT2_UbhuYEd72-3iJL_5J0',        //from google signup
})(References)


 
            
            
            
          
        
        