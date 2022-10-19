import {createContext, useState, useEffect} from "react";
import {initialColumns} from "../components/data/columnList";
import {v4 as uuidv4} from 'uuid';
import {toast} from "react-toastify";

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

    // Save items in LS
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('columns'));

        if (todos) {
            setColumns(todos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('columns', JSON.stringify(columns));
    }, [columns]);

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
        toast.warning("Task deleted!")
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
        toast.info("Task transferred!")
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