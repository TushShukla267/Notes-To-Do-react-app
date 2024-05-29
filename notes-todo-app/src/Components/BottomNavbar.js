import React from "react";
import { Link } from "react-router-dom";
import Todoimage from "./Todoimage.jpg";
import NotesImage from "./NotesImage.png";

function BottomNavbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} justify-content-center`}
        style={{ width: "750px" }}
      >
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
              <div className="container-fluid">
                <Link className="navbar-brand" to="/Notes">
                  <img
                    src={NotesImage}
                    alt=""
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top"
                  />
                  <span style={props.textcolor}>Notes</span>
                </Link>
              </div>
            </nav>
          </li>
          <li className="nav-item">
            <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
              <div className="container-fluid">
                <Link className="navbar-brand" to="/ToDo's">
                  <img
                    src={Todoimage}
                    alt=""
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top"
                  />
                  <span style={props.textcolor}>To Do's</span>
                </Link>
              </div>
            </nav>
          </li>
        </ul>
        <button
          type="button"
          className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} me-md-2`}
          style={{ position: "relative", top: "-20px", left: "150px" }}
        >
          Log Out
        </button>
      </nav>
    </div>
  );
}

export default BottomNavbar;
