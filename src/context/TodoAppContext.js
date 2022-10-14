import {createContext, useState} from "react";
import {initialColumns} from "../components/data/columnList";
import {v4 as uuidv4} from 'uuid';

const TodoAppContext = createContext()

export const TodoProvider = ({children}) => {
    const [columns, setColumns] = useState(initialColumns)

    const handleAddTask = (columnId,label, description) => {
        const currentDate = new Date().toLocaleString()

        const task = {
            id: uuidv4(),
            label,
            description,
            createDate: currentDate
        }
        addTask(columnId, task)
    }

    const addTask = (columnId, task) => {
        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            const newColumns = [...prev]
            newColumns[columnIndex].items = [...newColumns[columnIndex].items, task]
            return newColumns
        })
    }

    const handleDeleteTask = (columnId, taskId) => {
        if (window.confirm('Are you sure you want to delete?')) {
            deleteTask(columnId, taskId)
        }
    }

    const deleteTask = (columnId, taskId) => {
        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            const newColumns = [...prev]
            newColumns[columnIndex].items = newColumns[columnIndex].items.filter((task) => taskId !== task.id)
            return newColumns
        })
    }

    const transferTask = (columnIndexFrom, columnIndexTo, taskId) => {
        const task = {...columns[columnIndexFrom].items.find(task => taskId === task.id)}
        addTask(columns[columnIndexTo].id, task)
        deleteTask(columns[columnIndexFrom].id, taskId)
    }


    return <TodoAppContext.Provider value={{
        columns,
        handleAddTask,
        handleDeleteTask,
        transferTask,
    }}>
        {children}
    </TodoAppContext.Provider>
}

export default TodoAppContext