import { createContext, useCallback, useContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const TasksContext = createContext(null);

const TasksContextProvider = ({children}) => {
    const { response, loading:dataLoading, resendRequest } = useFetch({ url: '/api/v1/tasks', method: 'GET' });
    const {sendRequest, loading:deleteLoading} = useRequest({method: 'DELETE'});
    const tasksList = useMemo(() => {
        return response?.items.map(task => {
            return {
                tasks: task.tasks,
                id: task._uuid
            }
        }) || []
    }, [response])

    const onDelete = useCallback(() => (taskId) => {
        sendRequest(null, `/api/v1/tasks/${taskId}`)
        .then(() => resendRequest())
    }, [resendRequest])

    const contextValue = useMemo(() => {
       return { 
        dataLoading,
        deleteLoading,
        tasksList,
        onDelete
    }
    }, [dataLoading, deleteLoading, tasksList, onDelete])

    return <TasksContext.Provider value={contextValue}>
        {children}
    </TasksContext.Provider>
}

export const useTasksContext = () =>{
    const contextValue = useContext(TasksContext);
    if(!contextValue) throw new Error('Your component is not  inside taskContextProvider');

    return contextValue;
}

export default TasksContextProvider;