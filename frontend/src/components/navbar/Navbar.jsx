import React, { useState } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
const Navbar = ({ isLogin, isNotFound, isAdmin }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  const handleDialogbox = () => {
    setIsDialogOpen((curr) => !curr);
  };

  const handleMenuBar = () => {
    setIsMobile((curr) => !curr);
  };

  return (
    <>
      {isNotFound ? (
        <></>
      ) : (
        <>
          <nav>
            <h2>RescueBridge</h2>

            {/* for Landing Page */}
            {isLogin ? (
              <>
                <div className="landing_page_nav">
                  <button>Login</button>
                  <button>SignUP</button>
                </div>
              </>
            ) : (


              <>
                 {/* for desktop */}
                <ul className="desktop_ul">
                  <li>
                    Home <TiHome />
                  </li>
                  <li>
                    Dashboard
                    <RiDashboardFill />
                  </li>
                </ul>
                <div className="menu" onClick={handleDialogbox}>
                  <IoMenu size={30} />
                </div>
              {/* for mobile view */}
                <div className="mobile_menu_bar">
                  <div className="mobile_menu" onClick={handleMenuBar}>
                    <IoMenu size={30} />
                  </div>
                  <ul className={`mobile_ul ${isMobile ? "open" : ""}`}>
                    <li>
                      Home <TiHome />
                    </li>
                    <li>
                      Dashboard <RiDashboardFill />{" "}
                    </li>
                    <li>
                      Theme <FaSun />
                    </li>
                    <li>
                      Logout <FiLogOut />
                    </li>
                  </ul>
                </div>
              </>
            )}
          </nav>
        </>
      )}


      {/* for dialogue Box  */}
      <div className={`dialog_box ${isDialogOpen ? "open" : ""}`}>
        <button>
          Theme <FaSun size={17} />
        </button>
        <button>
          Logout <FiLogOut size={17} />{" "}
        </button>
      </div>
    </>
  );
};

export default Navbar;
