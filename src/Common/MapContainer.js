import React from 'react'
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react'

export default class MapContainer extends React.Component {

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: 40.7485722, lng: -74.0068633}, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '90vw', // 90vw will take up 90% of the width screen. px also works.
      height: '50vh', // 50vh will take up roughly 50% of the height of the screen.
      padding: '1em'    //pad the map - non functioning - why?
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}

//https://medium.com/front-end-hacking/simplified-google-maps-api-in-a-react-app-46981441d2c9
//https://www.npmjs.com/package/google-maps-react






/*
 
export class MapContainer extends Component {
render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (AIzaSyBGn3YvhByyDaT2_UbhuYEd72-3iJL_5J0)
})(MapContainer)


import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//import the GoogleApiWrapper
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
//container:
export default class GoogleMaps extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
      <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}
          containerStyle={{}}
          centerAroundCurrentLocation={true}
          onClick={this.onMapClicked}
          onDragend={this.onMapMoved} />  
      </div>
    )
  }
}

GoogleMaps({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(GoogleMaps)






Hi Cy, my ticket says I need to reach out to AWS admins for AWS/Sandpit training, can we schedule a time for these?

I also need to setup dropbox, but I haven't had an invite as it says on the ticket, could you send me one or point me in the right direction?


//polygon - place polygon on map
//info window for menu - possible - 
// events 
//

*/