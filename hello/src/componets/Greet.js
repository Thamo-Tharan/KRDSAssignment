import React from 'react' /*this is allways used when you are creating a new js file in react*/
/*function Greet(){
    return <h1>hello thamotharan</h1>
}*/
 
const Greet=(props)=> 
{
    console.log(props);
return <h1>hello {props.name}</h1>
}



export default Greet;  /*what erver the function you must created that function is exported and imported from the main app.js file */