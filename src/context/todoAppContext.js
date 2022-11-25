import {createContext, useState, useEffect} from "react";
import {initialColumns} from "../components/data/columnList";
import {v4 as uuidv4} from 'uuid';
import {toast} from "react-toastify";
import dayjs from "dayjs";

const todoAppContext = createContext()

export const TodoProvider = ({children}) => {
    const [columns, setColumns] = useState(initialColumns)

    /**
     * Edit task.
     * @param {boolean} isEdit  - Common state of edit
     * @param {boolean} setIsEdit - New state of edit
     * @param {number} columnId - ID column
     * @param {string} textLabel - Label for task
     * @param {string} textDesc - Description for task
     * @param {string} endDate - Finish date for task
     * @param {number} task - ID task
     * @param {array} files - Attached files for task
     */
    const toggleEditTask = (isEdit, setIsEdit, columnId, textLabel, textDesc, endDate, task, files) => {
        if (!isEdit) {
            setIsEdit(true)
        } else {
            deleteTask(columnId, task)
            handleAddTask(columnId, textLabel, textDesc, files, endDate)
            setIsEdit(false)
        }
    }

    /**
     * Change inputs toggle.
     * @param {event} e  - Common state of edit
     * @param {boolean} setIsEdit - New state of edit
     */
    const editTaskOnChange = (e, setIsEdit) => {
        setIsEdit((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            })
        )
    }

    /**
     * Task card toggle.
     * @param {boolean} isOpen  - Common state of open card
     * @param {boolean} setIsOpen - New state of open card
     */
    const toggleTaskCard = (isOpen, setIsOpen) => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }

    /**
     * Create a new task.
     * @param {number} columnId - ID column
     * @param {string} setLabel - New state for label
     * @param {string} setDesc - New state for description
     * @param {string} setEndDate - New state for finish date
     * @param {boolean} setIsOpen - New state open/close task
     * @param {string} textLabel - New label for task
     * @param {string} textDesc - New description for task
     * @param {string} endDate - Finish date for task
     * @param {array} files - Attached files for task
     */
    const createTask = (columnId, setLabel, setDesc, setEndDate, setIsOpen, textLabel, textDesc, endDate, files) => {
        handleAddTask(columnId, textLabel, textDesc, files, endDate)
        setLabel("")
        setDesc("")
        setEndDate("")
        setIsOpen(false)
        toast.success("Task added!")
    }

    /**
     * Form for new Task.
     * @param {number} columnId - ID column
     * @param {string} label - Label for task
     * @param {string} description - Description for task
     * @param {array} files - Attached files for task
     * @param {string} endDate - Finish date for task
     */
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

    /**
     * Add new Task in choose column.
     * @param {number} columnId - ID column
     * @param {number} taskId - ID task
     */
    const addTask = (columnId, taskId) => {
        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            const newColumns = [...prev]
            newColumns[columnIndex].items = [...newColumns[columnIndex].items, taskId]
            return newColumns
        })
    }

    /**
     * Warn before delete task.
     * @param {number} columnId - ID column
     * @param {number} taskId - ID task
     */
    const handleDeleteTask = (columnId, taskId) => {
        if (window.confirm('Are you sure you want to delete?')) {
            deleteTask(columnId, taskId)
            toast.warning("Task deleted!")
        }
    }

    /**
     * Delete task from column.
     * @param {number} columnId - ID column
     * @param {number} taskId - ID task
     */
    const deleteTask = (columnId, taskId) => {
        setColumns((prev) => {
            const columnIndex = prev.findIndex(item => item.id === columnId)
            const newColumns = [...prev]
            newColumns[columnIndex].items = newColumns[columnIndex].items.filter((task) => taskId !== task.id)
            return newColumns
        })
    }

    /**
     * Transferred task in a choose column.
     * @param {number} columnIndexFrom - ID column from task
     * @param {number} columnIndexTo - ID column for task
     * @param {number} taskId - ID task
     */
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