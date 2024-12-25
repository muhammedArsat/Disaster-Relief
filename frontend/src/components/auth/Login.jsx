import React from "react";
import "./Login.css";
import img4 from "../../../assets/kc-bk-hero.jpg";
const Login=()=>{

    return(
        <div className="login-body">
            <div className="login-cont">
                <div className="login-left">
                    <h1>RESCUE BRIDGE</h1>
                    <h1>A DISASTER RELIEF PORTAL</h1>
                </div>
                <div className="login-right">
                    <h1>USER - LOGIN</h1>
                    <div className="user-details">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email .."required/>
                    </div>
                </div>
            </div>

        </div>
            

    );
}

export default Login;