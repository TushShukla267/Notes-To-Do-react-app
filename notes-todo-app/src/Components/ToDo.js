import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

/**
 * Represents a ToDo component.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.textcolor - The style object for the text color.
 * @param {Function} props.showAlert - Function to show an alert.
 * @returns {JSX.Element} The ToDo component.
 */
function ToDo(props) {
  const [tasks, setTasks] = useState([{ text: "", checked: false }]);
  const [hideCompleted, setHideCompleted] = useState(false); // State to track whether completed tasks should be hidden

  useEffect(() => {
    props.showAlert("Opened ToDo's", "success");
  }, []);

  const handleTaskChange = (index, event) => {
    const newTasks = [...tasks];
    newTasks[index].text = event.target.value;
    setTasks(newTasks);
  };

  const addTask = (index) => {
    setTasks([...tasks, { text: "", checked: false }]);
    props.showAlert(`Added a New Task ${index + 1}`, "success");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleChecked = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  const hideCompletedTasks = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={props.textcolor}>
        <label
          htmlFor="taskTextarea"
          style={{
            fontFamily: "fantasy",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Enter Your Tasks
        </label>
      </div>
      <div
        className="d-flex align-items-center"
        style={{ flexDirection: "column", paddingLeft: "25px" }}
      >
        {tasks.map((task, index) => {
          if (hideCompleted && task.checked) return null; // Hide completed tasks if hideCompleted is true
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                width: "100%",
              }}
            >
              <div style={{ backgroundColor: "whitesmoke" }}>
                <Checkbox
                  checked={task.checked}
                  onChange={() => toggleChecked(index)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              &nbsp;&nbsp;&nbsp;
              <div style={{ width: "80%" }}>
                <textarea
                  className="form-control"
                  placeholder={`Task ${index + 1}`}
                  value={task.text}
                  onChange={(e) => handleTaskChange(index, e)}
                  disabled={task.checked} // Disable the textarea if the task is checked
                  style={{ marginTop: "10px", width: "100%" }}
                ></textarea>
              </div>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-danger btn-sm"
                type="button"
                onClick={() => deleteTask(index)}
                style={{ marginTop: "10px" }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-outline-primary btn-lg"
            type="button"
            style={{ position: "relative", top: "10px", left: "-50px" }}
            onClick={addTask}
          >
            Add Task
          </button>
          <button
            className="btn btn-outline-success btn-lg"
            type="button"
            style={{ position: "relative", top: "10px", left: "-50px" }}
            onClick={hideCompletedTasks}
          >
            {hideCompleted ? "Show Completed" : "Hide Completed"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
