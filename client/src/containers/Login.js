import React, {useState, useContext} from "react";
// import axios from 'axios'
import Footer from "../components/Footer";
import logo from "./../images/only_M.svg";
import { stateContext } from '../store/index'
import { authActions } from '../store/actions/auth'

// var response;
// const initialState = { username: '', password: ''}



// async function authActions(data){
// 	const user =  {
// 		username: data.username,
// 		Password: data.password
//  }
//  console.log(user)	
//  try {
// 		response = await axios.post(`/v1/login`,
// 		 {
// 				username: data.username,
// 				password: data.password
// 		 }
// 		)
// 		console.log(response)
// 		return {
// 			type: "LOGIN",
// 			payload: response.data
// 		}
// 	} catch (error) {
// 		console.log(error.response.data)
// 		return {
// 			type: "LOGIN_ERR",
// 			payload: error
// 		}
// 	}
// }

// function reducer(state, action){
//   switch (action.type) {
// 		case "LOGIN":
// 			return { success: action.payload }
// 		default:
// 			return state
// 	}
// }

export default function Login() {
	// const [state, dispatch] = useReducer(reducer, initialState)
	const [username] = useState("")
	const [password] = useState("")
	const { dispatch } = useContext(stateContext)
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
              className="flex-col contact login"
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
									dispatch(authActions(userData))
									e.target.reset()
								}
							}
            >
							<input 
								type="file" 
								// placeholder="Username"
								id="input"
								className="sanser"
								// defaultValue={username}
								// required
								// minLength={4}
							/>
							<input 
								type="text" 
								placeholder="Username"
								id="username"
								className="sanser"
								defaultValue={username}
								required
								minLength={4}
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
              <button type="submit" >SUBMIT</button>
            </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
