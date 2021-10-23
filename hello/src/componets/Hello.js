import React from 'react'

const hello=()=>{
/*return(
    <h1>hello thamotharan</h1>
)*/
return(
    React.createElement('div',{id:'hello_id',className:'hello-class'},React.createElement('h1',null,'thamotharan'))
)
}
export default hello;