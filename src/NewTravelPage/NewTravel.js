import React, { Component } from 'react';
import './NewTravelPage/NewTravel.css';
import List from './Common/List';
import WelcomePage from './WelcomePage/Welcome';
import Menu from './Common/MenuContainer';


export default class NewTravel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',     //store what we are passing as input
      items: []     //store every value we pass to the list
      //visible: false      //set menu visibility
    };
      //Bindings for menu slide-in
  this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
}
    
handleMouseDown(e) {            //for slide-in menu
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }
 
toggleMenu() {      //set menu visibility
  this.setState({
      visible: !this.state.visible
  });
}
    
  onChange = (event) => {       //allows you to type into submit boxes
    this.setState({term: event.target.value });
  }

  onSubmit = (event) => {       //on submit add term to item list
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
  
  render() {
    return (
      <div>

        <header className="NewTravel-header">
          <h1>Welcome to the TravelApp</h1>
        </header>
        
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        
        <p className="Newtravel-paragraph">
            Please Login or Register to continue.
        </p>

        <p className="Newtravel-paragraph">
            Please enter the time, date and city you will be visiting.
        </p>
        
        <grid-container>
            <grid-item>
                <p className="Newtravel-integratedParagraph">
                    Time: From starting time to finishing time: 
                </p>
            </grid-item>

        
            <grid-item>
               <form className="Newtravel-button" onSubmit={this.onSubmit}>            
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
            </grid-item>


            <grid-item>
                <p className="Newtravel-integratedParagraph">
                    Date: From starting day to finishing day: 
                </p>
            </grid-item>


            <grid-item>
                <form className="Newtravel-button" onSubmit={this.onSubmit}>
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
            </grid-item>


            <grid-item>
                <p className="Newtravel-integratedParagraph">
                    Please select a city to travel to: 
                </p>
            </grid-item>


            <grid-item>
                <select className="Newtravel-dropdown" onSubmit={this.onSubmit}>
                  <option value="ChooseCity">Please choose a city  </option>
                  <option value="London">London  </option>
                  <option value="Paris">Paris    </option>
                  <option value="Berlin">Berlin  </option>
                </select>
            
                <form className="Newtravel-button" onSubmit={this.onSubmit}>
                  <option value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>

                </grid-item>
        </grid-container>

        <List items={this.state.items} />

        <p className="Newtravel-detailsCorrect">
            Are these details correct? Press the continue button to submit.
        </p>
        
        <form classname="Newtravel-button" action="./PlanningPage/Planning.js">
            <input type="submit" value="Continue" />
        </form>
        
        <button className="Newtravel-Forward">Back</button>
            
        
        <button className="Newtravel-Backward">Continue</button>
        

      </div>

    );
  }
}


class MenuButton extends React.Component {      //button for slide-in menu
  render() {
    return (
        <button id="roundButton"
            onMouseDown={this.props.handleMouseDown}>
        </button>
    );
  }
}


            
           

            
            
            
            
            
            



/* from app.js page:

//times page: 

//date - from ? to ?
//time from ? to ?
//city - dropdown options menu

//continue 
//menu
    //- can be copypasted on every page - repeating componant
    //next buttons can also be repeating componants

import React, { Component } from 'react';
import './App.css';
import List from './Common/List';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { Route, IndexRoute } from 'react-router';
import WelcomePage from './WelcomePage/Welcome';
import Header from './Common/Header';



export default class NewTravel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',     //store what we are passing as input
      items: []     //store every value we pass to the list
    };
  }
    
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
  
     handleClick(event) {
        this.classList.toggle("change");   //non-functioning - figure out why
    }



  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to the TravelApp</h1>
        </header>
        
        <p className="App-paragraph">
            Please enter the time, date and city you will be visiting.
        </p>
        


        <grid-container>
            <grid-item>
                <p className="App-integratedParagraph">
                    Time: From starting time to finishing time: 
                </p>
            </grid-item>

        
            <grid-item>
               <form className="App-button" onSubmit={this.onSubmit}>            
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
            </grid-item>


            <grid-item>
                <p className="App-integratedParagraph">
                    Date: From starting day to finishing day: 
                </p>
            </grid-item>


            <grid-item>
                <form className="App-button" onSubmit={this.onSubmit}>
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
            </grid-item>


            <grid-item>
                <p className="App-integratedParagraph">
                    Please select a city to travel to: 
                </p>
            </grid-item>


            <grid-item>
                <select className="App-dropdown" onSubmit={this.onSubmit}>
                  <option value="ChooseCity">Please choose a city  </option>
                  <option value="London">London  </option>
                  <option value="Paris">Paris    </option>
                  <option value="Berlin">Berlin  </option>
                </select>
            
                
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>

                </grid-item>
                                      //append chosen option to list from dropdown
        </grid-container>



        <List items={this.state.items} />

        <p className="App-paragraph">
            Are these details correct? Press the continue button to submit.
        </p>
        
        
        
        <button className="App-Forward">Back</button>
            
        
        <button className="App-Backward">Continue</button>
        
        <form action="./NewTravelPage/NewTravel">
            <input type="submit" value="Continue" />
        </form>
      </div>

    );
  }
}

first figure out integration of text and textfields
then figure out buttons (premade submit already there)
then figure out formatting - how to get them where you want them


dropdown menu

*/


//successful creation - how can we edit this to match what we need?
    //- we need: 
    /*from date to date (text input)
      from time to time (text input) - int?
      city - dropdown box (source: http://www.material-ui.com/#/components/dropdown-menu)
      
      
      
      
      /*

      */