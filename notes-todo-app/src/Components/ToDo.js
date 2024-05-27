import React from "react";
import Checkbox from "@mui/material/Checkbox";

function ToDo(props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  

  return (
    <div>
      <div style={props.textcolor}>
        <label
          htmlFor="taskTextarea"
          style={{ fontFamily: "fantasy", fontSize: "30px" }}
        >
          Enter Your Tasks
        </label>
      </div>
      <div className="d-flex align-items-center" style={{ paddingLeft: "25px" }}>
        <div style={{backgroundColor : 'whitesmoke'}}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style={{ marginLeft: 0, width: "90%" }}>
          <textarea
            className="form-control"
            placeholder="Task 1"
            id="taskTextarea"
            style={{ marginTop: "10px" }} // Add some margin to separate label and textarea
          ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-primary btn-lg"
            type="button"
            style={{ position: "relative", top: "100px", left: "-50px" }}
          >
            <label>AddTask</label>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
