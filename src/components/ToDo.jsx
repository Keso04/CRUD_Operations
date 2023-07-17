import { useRef } from "react";

const ToDo = ({onFormSubmit, tasks}) => {
    const taskRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(taskRef.current.value);
    }

    return <form onSubmit={onSubmit}>
        <input className="myinput" type="text" placeholder="Tasks to do" ref={taskRef} defaultValue={tasks}/>
        <button className="mybtn">Submit</button>
    </form>
}

export default ToDo;