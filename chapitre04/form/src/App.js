import React from 'react';
import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{

    constructor(){
      super();

      this.state = {
        isLogin: false,
        email:"",
        emailClassName: "form-control",
        password: "",
        passwordClassName: "form-control"
      }
    }

    validationEmail = (e) => {
      let regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
      if (regexEmail.test(e.target.value)){
        console.log('in')
        this.setState((prevState)=> {
          return {
            ...prevState,
            email: e.target.value,
            emailClassName : "form-control is-valid"
          }
        });
      } else {
        console.log('out')
        this.setState((prevState)=> {
          return {
            ...prevState,
            email: e.target.value,
            emailClassName : "form-control is-invalid"
          }
        });
    }
    }

    validationPassWord = (e) => {
      if(e.target.value.length > 5){
        console.log('in')
        this.setState((prevState)=> {
          return {
            ...prevState,
            password : e.target.value,
            passwordClassName : "form-control is-valid"
          }
        });
      } else {
        console.log('out')
        this.setState((prevState)=> {
          return {
            ...prevState,
            password : e.target.value,
            passwordClassName : "form-control is-invalid"
          }
        });
    }
    }
    
    handleSubmit = (e) => {
      console.log("yeah i'm")
      e.preventDefault()
      if (this.state.emailClassName === "form-control is-valid" && this.state.passwordClassName === "form-control is-valid"){
        console.log("REEEEEEady")
        this.setState((prevState)=> {
          return {
            ...prevState,
            isLogin: true
          }
        })
      }
    }

    renderForm() {
      return (
        <div className="bg">
              <h1 className="title">Login</h1>
              <form className="container mx-auto" style={{width : 1000}}>
                    <div className="form-group"  style={{maxwidth : 800}}>
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input onChange={this.validationEmail} type="email" className={this.state.emailClassName} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email}  required/>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group"  style={{maxwidth : 800}}>
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input onChange={this.validationPassWord} type="password" className={this.state.passwordClassName} id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>
                    </div>
                    <div className="form-check"  style={{maxwidth : 800}}>
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
      )
    }

    renderFormSubmitted() {
      return (
        <div className="bg">
              <h1 className="title">Login</h1>
              <div className="form-container">
                <h2 className="form-title">Form Submitted</h2>
              </div>
        </div>
      )
    }

    render(){

        return (
            <div>
                {this.state.isLogin === true ? 
                    ( this.renderFormSubmitted() ) :
                    ( this.renderForm() )
                }
            </div>
        )
        
    }
}

export default App;
