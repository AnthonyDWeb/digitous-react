import React from 'react';
import './App.css';
import Json from "./userInfo.json" 
import UserInfo from './components/UserInfo';

class App extends React.Component{

  // userList =() => {
  //   // Json.map( (item)=> <p>Name: {item.name} , E-mail: {item.email} , Website: {item.website}</p> )
  //   {name:Json.name , email:Json.email, website:Json.website}
  // }
  render() {
    return(
			<div>
				{/* {Json.map((user) => (
					<UserInfo name={user.name} email={user.email} />
				))} */}
			</div>
    )
  }
} 

export default App;
