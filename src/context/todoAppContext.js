import {createContext, useState, useEffect} from "react";
import {initialColumns} from "../components/data/columnList";
import {v4 as uuidv4} from 'uuid';
import {toast} from "react-toastify";
import dayjs from "dayjs";

const todoAppContext = createContext()

export const TodoProvider = ({children}) => {
    const [columns, setColumns] = useState(initialColumns)

    const [isEdit, setIsEdit] = useState(false)

    const toggleEditTask = () => {
        !isEdit ? setIsEdit(true) : setIsEdit(false)
    }

    const handleAddTask = (columnId, label, description, endDate) => {
        const task = {
            id: uuidv4(),
            label,
            description,
            createDate: dayjs(),
            endDate: dayjs(endDate),
        }
        addTask(columnId, task)
    }

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
            toast.warning("Task deleted!")
        }
    }

    const deleteTask = (columnId, taskId) => {
        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            console.log(columnIndex)
            const newColumns = [...prev]
            newColumns[columnIndex].items = newColumns[columnIndex].items.filter((task) => taskId !== task.id)
            return newColumns
        })
    }

    const editTask = (columnId, taskId) => {
        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            const newColumns = [...prev]
            console.log(columnIndex)
        })
    }

    const transferTask = (columnIndexFrom, columnIndexTo, taskId) => {
        const task = {...columns[columnIndexFrom].items.find(task => taskId === task.id)}
        addTask(columns[columnIndexTo].id, task)
        deleteTask(columns[columnIndexFrom].id, taskId)
        toast.info("Task transferred!")
    }


    return <todoAppContext.Provider value={{
        columns,
        handleAddTask,
        handleDeleteTask,
        transferTask,
        isEdit,
        editTask,
        toggleEditTask,
    }}>
        {children}
    </todoAppContext.Provider>
}

export default todoAppContext