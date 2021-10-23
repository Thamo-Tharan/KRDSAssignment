import React, { Component } from "react";

class classcomponet extends Component{
    constructor(props){
    super(props)
    this.state={value:0}
}
Counterlogic(){
this.setState({
    value:this.state.value+1
})
}
    render(){
return(
    <div>
        <h1>count value {this.state.value}</h1>
        <button id="counter" onClick={()=>{this.setState({value:this.state.value+1})}}>click me</button>
    </div>
)
    }
}
export default classcomponet;