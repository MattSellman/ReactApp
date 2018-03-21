//Menu Components: 
import React from 'react'


class Menu extends React.Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
            //make menu component
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">Planning</a></h2>
        <h2><a href="#">Reference</a></h2>
        <h2><a href="#">History</a></h2>
      </div>
    );
  }
}

export default Menu;