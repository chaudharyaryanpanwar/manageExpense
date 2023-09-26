import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import logo from  "./logo.png" ;
import "./Header.css"
import backgroundPhoto from "../../pages/background.svg"
import TranslateElement from "./TranslateElement";

const name = "Expense Manager      ";
const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
    <div style={{ backgroundImage: `url(${backgroundPhoto})` }}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              
              <section >  

<div id="wrap">
 


<div> <Link className="btn-slide" to="/" >
   
  
    <span class="title">{name}</span>
    <span class="title title-hover">made by Aryan</span>
   </Link> </div>
  

   
</div>
  </section>
  <TranslateElement/>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to = "/user" className="nav-link active" area-current = "page">
                  {loginUser && loginUser.name}
                </Link>
                
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Header;