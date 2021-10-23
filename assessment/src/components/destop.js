import React, { useEffect, useState} from "react";
import axios from "axios";
function MyComponent() {
    const [mapdata,setPosts]=useState({logo:'',data:[]})
    useEffect(() => {
        axios
        .get('https://krds-assignment.github.io/aoc/api-assets/data.json')
        .then(res =>{
          let abc=[]
            abc=res.data;
            setPosts({
              logo:abc.logo,
              data:abc.features
            })
            console.log(mapdata)
        } )
        .catch(err =>{
            console.log(err)
        })
    },[])
      return (
        <div id='parent'>
          {
            mapdata.data.map((currentValue,index)=>{
              return( 
              <div>
                <div>
                {index==0 && <img src={mapdata.logo} alt='logo' width="100" height="100"/>}
                  <img src={currentValue.logo} alt={currentValue.title} width="200" height="200"/>
                  <p>{currentValue.title}</p>
                  <hr/>
                  <p>{currentValue.desc}</p>
                  </div>
                <div><img src={currentValue.image} alt={currentValue.title} width="500" height="500"/></div>
              </div>
            )
            })
          }
        </div>
      );
    }
  export default MyComponent;