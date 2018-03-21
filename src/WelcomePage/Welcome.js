import React, { Component } from 'react';
import './Welcome.css';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      term: '',     //store every value passed to list
      items: []     //store what we pass as a value to input
    }
    // Bindings for slide in menu
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemount = this.handleRemount.bind(this);
  }

  handleSubmit(e) {         // submit button for slide-in menu
    e.preventDefault();
    this.setState({
      isVisible: false
    }, function() {
      console.log(this.state.isVisible)
         });
    return false;
  }
    
  handleRemount(e) {        //remount for slide-in menu
    this.setState({
      isVisible: true
    }, function() {
      console.log(this.state.isVisible)
    });
    e.preventDefault();
  }
    
    //render method below outlining headings, login values and buttons

  render() {
    return (
      <div>
        <header className="Welcome-header">
          <h1>Welcome to the TravelApp</h1>
        </header>
        
        <p className="Welcome-paragraph">
            Please Login or Register to continue.
        </p>

        
        
        <div className='Welcome-login'>
         <form onSubmit= { this.props.onSubmit }>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
        </form>
        
        <form className="Welcome-button" onSubmit={this.onSubmit}>
            <button>Submit</button>
        </form>
        
                <a href='#'>Lost your password?</a>


            <form className="Welcome-button" onSubmit={this.onSubmit}>
            <button>Click here to register</button>
            </form>
            </div>
      </div>
    );
  }
}             






class Input extends React.Component {       
  render() {
    return <div className='Input'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autocomplete='false'/>
              <label for={ this.props.name } ></label>
           </div>
  }
}   //input class for login inputs



// Button to bring page back - sliding menu
class ModalBack extends React.Component {
  render() {
    return <button className="bringitback" onClick={ this.props.onClick } key={ this.props.className }>Sign out</button>
  }
}

/*
              <div className='social-signin'>
                <button className="fb" onClick={ this.props.onClick }><i className="fa fa-facebook" aria-hidden="true"></i></button>
                <button className="tw" onClick={ this.props.onClick }><i className="fa fa-twitter" aria-hidden="true"></i></button>
              </div>
*/


/*
  //router:
Routing = () => (
      <Router>
          <div>
          <Home /> 
            <ul>
              <li>
                <Link to=".Welcome">Home</Link>
              </li>
            </ul>
            <Route path="/WelcomePage/Welcome" component={Welcome} />
          </div>
      </Router>
)
*/