import {createContext, useState} from "react";
import {initialColumns} from "../components/data/columnList";
import { v4 as uuidv4 } from 'uuid';

const TodoAppContext = createContext()

export const TodoProvider = ({children}) => {
    const [columns, setColumns] = useState(initialColumns)

    const addTask = (columnId, label, description) => {
        const currentDate = new Date().toLocaleString()

        const newTask = {
            id: uuidv4(),
            label,
            description,
            createDate: currentDate
        }

        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            const newColumns = [...prev]
            newColumns[columnIndex].items = [...newColumns[columnIndex].items, newTask]
            return newColumns
        })
    }

    const deleteTask = (columnId, taskId) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setColumns((prev) => {
                const columnIndex = prev.findIndex(item => item.id === columnId)
                const newColumns = [...prev]
                newColumns[columnIndex].items = newColumns[columnIndex].items.filter((task) => taskId !== task.id)
                return newColumns
            })
        }
    }

    return <TodoAppContext.Provider value={{
        columns,
        addTask,
        deleteTask,
    }}>
        {children}
    </TodoAppContext.Provider>
}

export default TodoAppContext