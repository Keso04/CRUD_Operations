import { useState } from "react";

const ToDo = ({onFormSubmit}) => {
    const [tasksToDo, setTasks] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(tasksToDo);
    }

    return <form onSubmit={onSubmit}>
        <input className="myinput" type="text" placeholder="Tasks to do" onChange={e => setTasks(e.target.value)}/>
        <button className="mybtn">Submit</button>
    </form>
}

export default ToDo;