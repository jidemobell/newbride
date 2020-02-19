import React from "react";

// import Header from "./Headers/Header";
import Footer from "./Footer";

import logo from "./../images/only_M.svg";

export default function Login() {
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
            >
              <input type="text" placeholder="Username" className="sanser" />
              <input type="password" placeholder="Password" className="sanser" />
              <input type="submit" value="SUBMIT" />
              {/* <button type="submit" >SUBMIT</button> */}
            </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
