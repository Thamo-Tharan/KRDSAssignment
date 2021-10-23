import React, {Component} from 'react'

class Welcome extends Component{
    constructor(){
        super()
        this.state={name:'Welcome to my channel'}
    }
changevent(){
this.setState({
    name:'Thank you for subscribing'
})
    }
    render(){
       return (
<div>
<h1>{this.state.name}</h1>
<button onClick={()=>this.changevent()}>Click me</button>
</div>
       )
    }
       
}
export default Welcome