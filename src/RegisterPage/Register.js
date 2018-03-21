import React, { Component } from 'react';
import './RegisterPage/Register.css';
import List from './Common/List';
import WelcomePage from './WelcomePage/Welcome';
import Menu from './Common/MenuContainer';

export default class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      first_name:'',
      last_name:'',
      email:'',
      password:'',
        
      term: '',     //store what we are passing as input
      items: []     //store every value we pass to the list
        
    };
  }
    
    handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
   console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    //To be done: check for empty values before hitting submit
        
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password
    }
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

  //render input and submission buttons
  render() {
    return (
      <div>
        
        <header className="Register-header">
          <h1>Welcome to the TravelApp</h1>
        </header>
        
        <p className="Register-paragraph">
            Please Register to continue.
        </p>

           <grid-container>
            <grid-item>
                <p className="Register-integratedParagraph">
                    Please enter a username:
                </p>
            </grid-item>

        
            <grid-item>
               <form className="Register-button" onSubmit={this.onSubmit}>            
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
            </grid-item>


            <grid-item>
                <p className="Register-integratedParagraph">
                   Please enter your email: 
                </p>
            </grid-item>


            <grid-item>
                <form className="Register-button" onSubmit={this.onSubmit}>
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
            </grid-item>


            <grid-item>
                <p className="Register-integratedParagraph">
                    Please enter your password 
                </p>
            </grid-item>
        
                    <grid-item>
                <form className="Register-button" onSubmit={this.onSubmit}>
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
            </grid-item>


            <grid-item>
                <p className="Register-integratedParagraph">
                    Please confirm your password
                </p>
            </grid-item>
        
                            <grid-item>
                <form className="Register-button" onSubmit={this.onSubmit}>
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
            </grid-item>

        </grid-container>

        <button className="Register-Forward">Back</button>
        
        <button className="Register-Backward">Continue</button>

      </div>
    );
  }
}