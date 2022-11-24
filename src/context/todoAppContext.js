import {createContext, useState, useEffect} from "react";
import {initialColumns} from "../components/data/columnList";
import {v4 as uuidv4} from 'uuid';
import {toast} from "react-toastify";
import dayjs from "dayjs";

const todoAppContext = createContext()

export const TodoProvider = ({children}) => {
    const [columns, setColumns] = useState(initialColumns)

    // Edit Task
    const toggleEditTask = (isEdit, setIsEdit, columnId, textLabel, textDesc, endDate, task, files) => {
        if (!isEdit) {
            setIsEdit(true)
        } else {
            deleteTask(columnId, task)
            handleAddTask(columnId, textLabel, textDesc, files, endDate)
            setIsEdit(false)
        }
    }

    // Change inputs
    const editTaskOnChange = (e, setIsEdit) => {
        setIsEdit((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            })
        )
    }

    // Open/Close task card
    const toggleTaskCard = (isOpen, setIsOpen) => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }

    // Create new Task
    const createTask = (columnId, setLabel, setDesc, setEndDate, setIsOpen, textLabel, textDesc, endDate, files) => {
        handleAddTask(columnId, textLabel, textDesc, files, endDate)
        setLabel("")
        setDesc("")
        setEndDate("")
        setIsOpen(false)
        toast.success("Task added!")
    }

    // new Task
    const handleAddTask = (columnId, label, description, files, endDate) => {
        const task = {
            id: uuidv4(),
            label,
            description,
            files,
            createDate: dayjs(),
            endDate: dayjs(endDate),
        }
        addTask(columnId, task)
    }

    // Save tasks in LocalStorage
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('columns'));

        if (todos) {
            setColumns(todos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('columns', JSON.stringify(columns));
    }, [columns]);

    // Add new Task in choose column
    const addTask = (columnId, task) => {
        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            const newColumns = [...prev]
            newColumns[columnIndex].items = [...newColumns[columnIndex].items, task]
            return newColumns
        })
    }

    // Warning before delete Task
    const handleDeleteTask = (columnId, taskId) => {
        if (window.confirm('Are you sure you want to delete?')) {
            deleteTask(columnId, taskId)
            toast.warning("Task deleted!")
        }
    }

    // Delete Task in choose column
    const deleteTask = (columnId, taskId) => {
        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            const newColumns = [...prev]
            newColumns[columnIndex].items = newColumns[columnIndex].items.filter((task) => taskId !== task.id)
            return newColumns
        })
    }

    // Transferring Task in choose column
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
        createTask,
        editTaskOnChange,
        toggleTaskCard,
        toggleEditTask,
    }}>
        {children}
    </todoAppContext.Provider>
}

export default todoAppContext