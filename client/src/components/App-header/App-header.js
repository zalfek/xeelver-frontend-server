import React, {Component} from 'react';
import './App-header.css';
import { Form, Navbar, Nav} from 'react-bootstrap';
import logo from './logo5.svg';
import mode from './moon.svg';
import ReactModal from 'react-modal';
import { Modal } from 'bootstrap';
let signActive = " Container ";  
class Header extends Component {
    constructor(props){
      super(props);
      this.escFunction = this.escFunction.bind(this);
      // this.signUpClicked = this.signUpClicked.bind(this);
    }

  state = {
     ModalShow: false,
     signUpClicked : false,
    //  signInClicked : false
    }

  toggleModal = (e) => {
    this.setState({
      ModalShow: !this.state.ModalShow
    })
     e.preventDefault()
   }

closeModal= (e) =>{
    this.setState({
      ModalShow: false
    })
}

escFunction(event){
  if(event.keyCode === 27) {
    this.closeModal();
  }
 }

// signUpClicked = (e) => {
//  if(!this.state.signUpClicked){
//   this.setState({
//     signUpClicked: !this.state.signUpClicked
//   })
// }
//   alert(this.state.signUpClicked);
//  }
 
signUpClicked = (e) => {
  if(!this.state.signUpClicked){
   this.setState({
     signUpClicked: !this.state.signUpClicked
   },
   ()=>{
    signActive =  this.state.singUpClicked? "container right-panel-active" : "container";
    })
   }
  }


// classChanger =() =>{
//    signActive =  this.state.singUpClicked? "container right-panel-active" : "container";
//   return signActive
// }

 componentDidMount(){
  document.addEventListener("keydown", this.escFunction, false);
}
componentWillUnmount(){
  document.removeEventListener("keydown", this.escFunction, false);
}

  render() {
    // var signActive =  this.state.singUpClicked? "container right-panel-active" : "container";
    let signActive = " Container ";  
    return (
    <>

                  <Navbar  className ="bg" sticky="top"  >
                    <img className = "logo" src = {logo} alt = "Logotype" />
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline >
                      <button
                        className="btn"
                          id= "modal" 
                          data-modal
                          onClick={this.toggleModal} 
                          >Login</button>
                      <img  className="mode" src= {mode} alt = "light Mode"/>
                    </Form>
                  </Navbar>

                {/*  MODAL */}
               


          <div id="myModal" 
          // onClick={this.closeModal}
          className={this.state.ModalShow ? 'show' : 'modal'} >

<div className="modal-content centred ">
  <span className="close"
     onClick={this.closeModal}
  >&times;</span>
<div className= {this.signActive} id="container">
<div className="form-container sign-up-container">
  <form action="#" className="ModalForm" >
    <h1>Create Account</h1>
    <div className="social-container">
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-google-plus-g"></i>
      <i className="fab fa-linkedin-in"></i>
    </div>
    <span>or use your email for registration</span>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Sign Up</button>
  </form>
</div>
<div className="form-container sign-in-container">
  <form action="#" className="ModalForm">
    <h1>Sign in</h1>
    <div className="social-container">
      <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
      <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
      <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
    </div>
    <span>or use your account</span>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <a/>Forgot your password?<a/>
    <button>Sign In</button>
  </form>
</div>
<div className="overlay-container">
  <div className="overlay">
    <div className="overlay-panel overlay-left">
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
      <button className="ghost" id="signIn">Sign In</button>
    </div>
    <div className="overlay-panel overlay-right">
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details and start journey with us</p>
      <button 
      className="ghost" 
      id="signUp"
      onClick ={this.signUpClicked}
      >Sign Up</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
</>

    )
  }
}

export default Header;