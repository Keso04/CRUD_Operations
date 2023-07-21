import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TasksContextProvider from "../contexts/TasksContext";
import CreatePage from "../pages/CreatePage";
import MainPage from "../pages/MainPage";
import UpdatePage from "../pages/UpdatePage";
import LanguageContextProvider from "../contexts/LanguageContext";

const routes = [
    {
        element: (
            <div>
              <LanguageContextProvider>
                <Header />
                <Outlet />
              </LanguageContextProvider>
            </div>
        ), 
        path: '/',
        children: [
            {
                element: (
                    <div>
                    <TasksContextProvider>
                        <MainPage/>
                    </TasksContextProvider>
                    </div>
                ),
                index: true
            },
            {
                element: <CreatePage/>,
                path: 'create'
            }, {
                element: <UpdatePage/>,
                path: 'update/:taskId'
            }
        ]
    }
]

export default routes;