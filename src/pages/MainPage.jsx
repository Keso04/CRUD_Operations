import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const MainPage = () => {
    const { response, error, loading, resendRequest } = useFetch({ url: '/api/v1/tasks', method: 'GET' });
    const {sendRequest} = useRequest({method: 'DELETE'});
    const tasksList = response?.items.map(task => {
        return {
            tasks: task.tasks,
            id: task._uuid
        }
    }) || []

    const onDelete = (taskId) => {
        sendRequest(null, `/api/v1/tasks/${taskId}`)
        .then(() => resendRequest())
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return <div>
        {tasksList.map((task) => <div key={task.id}>
            <h3 className='myh3'>{task.tasks}</h3>
            <Link to={`/update/${task.id}`}>Edit</Link>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>)}
    </div>
}

export default MainPage;