import { useNavigate } from "react-router-dom";
import ToDo from "../components/ToDo";
import useRequest from "../hooks/useRequest";

const CreatePage = () => {
    const {sendRequest, loading} = useRequest({url: '/api/v1/tasks', method: 'POST'});
    const navigate = useNavigate();

    const onSubmit = (tasks) => {
        sendRequest([{tasks}])
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    }

    if(loading) return <p>Loading...</p>

    return <ToDo onFormSubmit={onSubmit}/>
}

export default CreatePage;