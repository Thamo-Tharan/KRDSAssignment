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