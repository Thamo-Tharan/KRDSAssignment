import React from "react";
// import 'login_page.css'
const login = () => (
    <div>
    <img src="img_avatar2.png" alt="Avatar" className="avatar"></img>
    <b>Username</b>
    <input type="text" placeholder="Enter Username" ></input>
    <b>Password</b>
    <input type="password" placeholder="Enter Password"></input>
    <button type="submit">Login</button>
    <button type="button" className="cancelbtn">Cancel</button>
    </div>
  );
  export default login;