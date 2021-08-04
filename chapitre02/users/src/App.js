import React from 'react';
import './App.css';
import Json from "./userInfo.json" 
import UserInfo from './components/UserInfo';

class App extends React.Component{

  userList =() => {
   return Json.map( (user)=>  (<UserInfo name={user.name} email={user.email} />	) )
    // {name:Json.name , email:Json.email, website:Json.website}
  }
  render() {
    return(
			<div>
				{/* {Json.map((user) => (<UserInfo name={user.name} email={user.email} />	))} */}
        {this.userList()}
			</div>
    )
  }
} 

export default App;
