import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/taskSlice";
import {v4 as uuid} from 'uuid';
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState(
    {
      title: '',
      description: ''
    }
  );
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const onHandleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value}
    )
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(params.id){
      dispatch(editTask(task));
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
        completed: false
      }))
    }
   
    navigate("/");
  }

  useEffect(() => {
    if(params.id){
      setTask(tasks.find(t => t.id === params.id));
    }
  },[]) 

  return (
    <form method="" action="" onSubmit={onHandleSubmit}>
      <input 
        type="text" 
        name="title" 
        placeholder="title" 
        onChange={(e) => onHandleChange(e)} 
        value={task.title}/>
      <textarea 
        name="description"  
        placeholder="description" 
        onChange={(e) => onHandleChange(e)} 
        value={task.description}/>
      <button type="submit">Save</button>
    </form>
  );

};

export default TaskForm;
