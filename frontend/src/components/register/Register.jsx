import React from "react";
import "./Register.css"; // Use a separate CSS file for the register page if needed
import Aos from "aos";
import "aos/dist/aos.css";

const Register = () => {
  Aos.init({ duration: 1000 });

  return (
    <div className="register-body">
      <div className="register-container" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="register-left">
          <h1 className="register-title">RESCUE BRIDGE</h1>
          <h1 className="register-subtitle">A DISASTER RELIEF PORTAL</h1>
        </div>
        <div className="register-right">
          <h1 className="register-heading">USER - REGISTER</h1>
          <div className="register-field">
            <svg className="register-icon" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <input type="email" placeholder="Email" className="register-input" />
          </div>
          <div className="register-field">
            <svg className="register-icon" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <input type="password" placeholder="Password" className="register-input" />
          </div>
          <div className="register-field">
            <svg className="register-icon" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <input type="password" placeholder="Confirm Password" className="register-input" />
          </div>
          <button className="register-button">REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
