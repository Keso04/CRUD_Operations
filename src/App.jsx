import { useEffect, useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';

const API_KEY = 's77WZJsgq9uj7LQHTZsWl7O2CKaylOmwewLpZChLCnKhE53FPw';
function App() {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    fetch('/api/v1/tasks', {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
      }
    }).then(res => {
      if(!res.ok) throw new Error("Response failed")
      return res.json();
    }).then(data => setTasksList(data.items.map(task => {
      return {
        tasks: task.tasks,
        id: task._uuid
      }
    })))
  }, [])

  const getTasks = () => {
    fetch('/api/v1/tasks', {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
      }
    }).then(res => {
      if(!res.ok) throw new Error("Response failed")
      return res.json();
    }).then(data => setTasksList(data.items.map(task => {
      return {
        tasks: task.tasks,
        id: task._uuid
      }
    })))
  }

  const onFormSubmit = (tasks) =>{
    fetch('/api/v1/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{tasks}])
    }).then(res => {
      if(!res.ok) throw new Error("Response failed")
      return res.json();
    }).then(data => setTasksList((prev) => [...prev, {
      tasks: data.items[0].tasks,
      id: data.items[0]._uuid
    }]))
    .catch(err => console.log(err));
  }
  return (
    <div className="App">
       <ToDo onFormSubmit={onFormSubmit}/>
       <button className='mybtn2' onClick={getTasks}>Get Tasks</button>
       <button className='mybtn2' onClick={() => setTasksList([])}>Clear Tasks</button>

       {tasksList.map((task) => <div key={task.id}>
         <h3 className='myh3'>{task.tasks}</h3>
       </div>)}
    </div>
  );
}

export default App;
