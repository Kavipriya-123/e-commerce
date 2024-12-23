import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from "js-cookie"

import "./index.css";

class Login extends Component{
    state={name:"",password:"",loginResponse:""};

    onNameChange=(event)=>{
        this.setState({name:event.target.value});
    }

    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }

    formSubmitted=async(event)=>{
        event.preventDefault();
        try{
            const {name,password}=this.state;
            const url="http://localhost:5000/login";
            const userDetails={username:name,password};
            const options={
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(userDetails)
            }
            const result=await fetch(url,options);

            let responseFromLogin;
            const contentType=result.headers.get("Content-Type");

            if(contentType.includes("application/json")){
                responseFromLogin=await result.json();
                const {jwtToken}=responseFromLogin;
                Cookies.set("jwt_token",jwtToken,{expires:30});
                const {navigate}=this.props;
                navigate("/home");
            }
            else{
                responseFromLogin=await result.text();
                this.setState({loginResponse:responseFromLogin});
            }
        
        }
        catch(e){
            console.log(`Login Error: ${e.message}`);
        }
        
    }

    render(){
        const {loginResponse}=this.state;

        return(<div className="login-bg">
            <div className='login-cont'>
                <h1 className='login-head'>Login Form</h1>
                <form className="login-form" onSubmit={this.formSubmitted}>
                    <label htmlFor='name'>Username</label>
                    <input onChange={this.onNameChange} className="form-field" id="name" type="text" placeholder="username"/>
                    <br/><br/>
                    <label htmlFor="password">Password</label>
                    <input onChange={this.onPasswordChange}  className="form-field" id="password" type="password" placeholder='password' />
                    <br/><br/>
                    <button className='login-btn' type="submit">Submit</button>
                </form>
                <p className="login-result-para">{loginResponse}</p>
            </div>
            <p>If you are not yet register... <Link to="/register">Register here</Link></p>
        </div>)
    }
}

export default Login;