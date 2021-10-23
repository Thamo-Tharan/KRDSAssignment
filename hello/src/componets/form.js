import React, {Component} from 'react'
class form extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            textarea:'',
            topic:'React'
        }
    }
    usernamechange=(event)=>{
this.setState({
    username:event.target.value
})
    }
textareachange=(event)=>{
        this.setState({
            textarea:event.target.value
        })
            }
selectchange=(event)=>{
                this.setState({
                    topic:event.target.value
                })
                    }
submitrigger=(event)=>{
    alert(`${this.state.username} ${this.state.textarea} ${this.state.topic}`);

}
    render(){
       return(
   <form>
       <div>
           <label>User Name</label>
           <input type='text' id='username' value={this.state.username} onChange={this.usernamechange}></input>
       </div>
       <div>
           <label>Comment</label>
           <textarea id='comment' value={this.state.textarea} onChange={this.textareachange}></textarea>
       </div>
       <div>
           <label>Topic</label>
           <select value={this.state.topic} onChange={this.selectchange}>
               <option value='React'>React</option>
               <option value='Angular'>Angular</option>
               <option value='View'>View</option>
           </select>
       </div>
       <button type='submit' onClick={this.submitrigger}>Submit</button>
   </form>
        )
    }
}
export default form;