import React, { useEffect, useState } from 'react';

function Notes(props) {
  const [tasks, setTasks] = useState([{ text: ""}]);

  useEffect(() => {
    props.showAlert("Opened Notes", "success");
  }, []);

  const handleTaskChange = (index, event) => {
    const newTasks = [...tasks];
    newTasks[index].text = event.target.value;
    setTasks(newTasks);
  };

  const addTask = (index) => {
    setTasks([...tasks, { text: "", checked: false }]);
    props.showAlert(`Added Note ${index + 1}` , "success")
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
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
          Enter Your Notes
        </label>
      </div>
      <div
        className="d-flex align-items-center"
        style={{ flexDirection: "column", paddingLeft: "25px" }}
      >
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              width: "100%",
              justifyContent: "center"
            }}
          >
            <div style={{ width: "80%" }}>
              <textarea
                className="form-control"
                placeholder={`Note ${index + 1}`}
                value={task.text}
                onChange={(e) => handleTaskChange(index, e)}
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
        ))}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-primary btn-lg"
            type="button"
            style={{ position: "relative", top: "10px", left: "-50px" }}
            onClick={addTask}
          >
            Add Notes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
