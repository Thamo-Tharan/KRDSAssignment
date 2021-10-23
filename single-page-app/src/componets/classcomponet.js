// import React from "react";
//  class testingcomponet extends React{
//      render(){
//          return(
//          <div>
//              <h1>This is my first name</h1>
//          </div>
//          )
//      }
//  }
//  export default testingcomponet;
 import React, {Component} from 'react'
class Classclick extends Component{
ClickHandler(){
console.log('class click')
}
    render(){
       return( 
       <div>
            <button onClick={this.ClickHandler}>Class button</button>
        </div>
        )
    }
}
export default Classclick;