import React, {Component} from 'react'

class Count extends Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }
changevent(){
this.setState({
    count:this.state.count+1
},()=>{
    console.log('The new state value is ',this.state.count)
})
    }
    render(){
       return (
<div>
<h1>Count {this.state.count}</h1>
<button onClick={()=>this.changevent()}>Click me</button>
</div>
       )
    }
       
}
export default Count