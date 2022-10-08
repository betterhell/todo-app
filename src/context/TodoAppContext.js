import {createContext, useState} from "react";
import {allTasksList} from "../components/data/allTasksList";

const TodoAppContext = createContext()

export const TodoProvider = ({children}) => {
    const [allTasks, setAllTasks] = useState(allTasksList)
    const [textAllLabel, setTextAllLabel] = useState("")
    const [textAllDesc, setTextAllDesc] = useState("")

    const addTask = () => {
        const currentDate = new Date().toLocaleString()

        const newTask = {
            label: textAllLabel,
            description: textAllDesc,
            createDate: currentDate
        }

        setAllTasks([...allTasks, newTask])
        setTextAllLabel("")
        setTextAllDesc("")
    }

    const deleteCard = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setAllTasks(allTasks.filter((item) => item.id !== id))
        }
    }

    const changeLabel = (e) => {
        setTextAllLabel(e.target.value)
    }

    const changeDesc = (e) => {
        setTextAllDesc(e.target.value)
    }

    return <TodoAppContext.Provider value={{
        allTasks,
        textAllLabel,
        textAllDesc,
        addTask,
        changeDesc,
        changeLabel,
        deleteCard,
    }}>
        {children}
    </TodoAppContext.Provider>
}

export default TodoAppContext