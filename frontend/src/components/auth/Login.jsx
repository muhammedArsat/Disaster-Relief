import React from "react";
import "./Login.css"; 
import Aos from "aos";
import "aos/dist/aos.css";

const Login = () => {
  Aos.init({ duration: 1000 });

  return (
    <div className="login-body">
      <div className="login-container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="login-left">
          <h1 className="login-title">RESCUE BRIDGE</h1>
          <h1 className="login-subtitle">A DISASTER RELIEF PORTAL</h1>
        </div>
        <div className="login-right">
          <h1 className="login-heading">USER - LOGIN</h1>
          <div className="login-field">
            <svg className="login-icon" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="#000000"
                strokeWidth="1.5"
              />
              <path
                d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                stroke="#000000"
                strokeWidth="1.5"
              />
            </svg>
            <input type="email" placeholder="Email" className="login-input" />
          </div>
          <div className="login-field">
            <svg className="login-icon" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 15.25C13.3807 15.25 14.5 14.1307 14.5 12.75C14.5 11.3693 13.3807 10.25 12 10.25C10.6193 10.25 9.5 11.3693 9.5 12.75C9.5 14.1307 10.6193 15.25 12 15.25Z"
                stroke="#000000"
                strokeWidth="1.5"
              />
              <path
                d="M17.5349 17.7121C16.4749 19.1946 14.8563 20.125 13 20.125C11.1438 20.125 9.52514 19.1946 8.46509 17.7121"
                stroke="#000000"
                strokeWidth="1.5"
              />
            </svg>
            <input type="password" placeholder="Password" className="login-input" />
          </div>
          <button className="login-button">LOGIN</button>

          <div className="google-signin">
            <button className="google-button">
            <svg width="28px" height="22px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#c9cbcf"> </path> </g> </g> </g> </g></svg>
              Sign in with Google
            </button>
          </div>

          <div className="registration-link">
            <p>
              Don't have an account?<a href="/register" className="register-link">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
