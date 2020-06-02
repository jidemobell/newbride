import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import { login } from '../redux/actions/auth'
import Footer from "../components/Footer";
import logo from "./../images/only_M.svg";




function Login() {
	const [username] = useState("")
	const [password] = useState("")
	const dispatch = useDispatch()


  return (
    <div className="App flex-col">
      <div className="top flex-col center">
        <section className="flex-col center" >
						<img 
							src={logo} 
							alt="logo" 
						  style={{width: "10%"}}
						/>
            <form
              className="flex-col  login"
              style={{
                // padding: "10px",
								marginTop: "20px",
								flexGrow: "1",
								flexShrink: "1",
								padding: "unset"
							}}
							onSubmit = {
								(e) => {
									e.preventDefault()
									let dataArray = e.target.elements !== undefined && e.target.elements
									let userData = {};
									([ ...dataArray].map((element) => {
										//  userData[element.id] = element.value
										 return element
									})).filter(element => {
										 return element.id !== "" &&  (userData[element.id] = element.value)
									})
									 dispatch(login(userData))
									 
									// e.target.reset()
								}
							}
            >
							<input 
								type="text" 
								placeholder="Username"
								id="username"
								className="sanser"
								defaultValue={username}
								required
								minLength={4}
								autoFocus
							/>
							<input 
								type="password" 
								placeholder="Password"
								id="password" 
								className="sanser"
								defaultValue={password} 
								minLength={8}
								required
							/>
              {/* <input type="submit" value="SUBMIT" /> */}
              <button  className="theme-button" type="submit" >SUBMIT</button>
            </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}


export default Login