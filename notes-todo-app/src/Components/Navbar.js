import React from "react";
import Todoimage from "./Todoimage.jpg";
import BottomNavbar from "./BottomNavbar";

function Navbar(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="container-fluid-Title"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={Todoimage}
            alt=""
            width="150"
            height="120"
            className="d-inline-block align-text-top"
          />
          <div style={props.textcolor}>
            <span
              style={{
                marginLeft: "10px",
                fontFamily: "cursive",
                fontSize: "50px",
              }}
            >
              To Do's List
            </span>
          </div>
        </div>
        <div
          className="container-fluid-Nav"
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "30px",
            paddingRight: "50px",
          }}
        >
          <BottomNavbar mode={props.mode} textcolor={props.textcolor} />
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} justify-content-center`}
        style={{paddingLeft: '250px'}}
      >
        <button type="button" className="btn btn-outline-primary">
          Edit
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-outline-success">
          Hide Completed
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-outline-secondary">
          Settings
        </button>
        <div className="form-check form-switch" style={{position : 'relative' , left : '300px'}}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={props.textcolor}
          >
            {props.text}
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
