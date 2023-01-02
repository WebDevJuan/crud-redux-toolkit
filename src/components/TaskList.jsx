// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const stateTask = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }
  
  return (
    <div>
      <header>
        <h1>Task {stateTask.length}</h1>
        <Link to="create-task">
          Create Task
        </Link>
      </header>
      {stateTask?.map(task => 
      <div key={task.id}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <Link to={`edit-task/${task.id}`}>Edit</Link>
        <button onClick={() => handleDelete(task.id)}>Remove</button>
      </div>)}
    </div>
  );
};

export default TaskList;
