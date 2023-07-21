import { Link } from "react-router-dom";
import { useTasksContext } from "../contexts/TasksContext";
import { LanguageDictionary, useLanguageContext } from "../contexts/LanguageContext";

const MainPage = () => {
    const {language} = useLanguageContext();
    const {tasksList, dataLoading, deleteLoading, onDelete} = useTasksContext()

    if (dataLoading || deleteLoading) return <p>Loading...</p>

    return <div>
        {tasksList.map((task) => <div key={task.id}>
            <h3 className='myh3'>{task.tasks}</h3>
            <Link className="link" to={`/update/${task.id}`}>Edit</Link>
            <button className="mybtn3" onClick={() => onDelete(task.id)}>Delete</button>
        </div>)}
        <p>{LanguageDictionary[language]}</p>
    </div>
}

export default MainPage;