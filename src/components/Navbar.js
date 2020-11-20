import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar({ userType }) {
  console.log(userType);
  return (
    <header>
      <div className="container nav-cont">
        <div className="logo">
          <img
            src="https://i.ibb.co/cCQ7pD3/1130px-Cloud-icon-svg.png"
            alt="School in the cloud"
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link className="link-name" to="/">
                sign-up/login
              </Link>
            </li>
            {userType ? (
              <li>
                <Link className="link-name" to={`/${userType}`}>
                  {" "}
                  {userType}
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  const { userType } = state.userType;
  return {
    userType,
  };
};

export default connect(mapStateToProps, {})(Navbar);
