import { Navigate, useParams } from "react-router-dom";
import ToDo from "../components/ToDo";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const UpdatePage = () => {
    const {taskId} = useParams();
    const {response, loading, error} = useFetch({url: `/api/v1/tasks/${taskId}`, method: 'GET'});

    const {sendRequest} = useRequest({url: `api/v1/tasks/${taskId}`, method: 'PUT'})
    const onSubmit = (tasks) => {
        sendRequest({tasks})
        .then(() => Navigate('/'))
        .catch(err => console.log(err))
    }

    if (loading && !response) return <p>Loading...</p>
    if (error || !response) return <p>Something went wrong{error}</p>

    return <ToDo onFormSubmit={onSubmit} tasks={response.tasks}/>
}

export default UpdatePage;