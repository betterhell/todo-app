import React, {useContext, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {BsCheckLg} from "react-icons/bs"
import todoAppContext from "../context/TodoAppContext";
import {toast} from "react-toastify";

const TaskCard = ({columnId}) => {
    const {handleAddTask} = useContext(todoAppContext)

    const [isOpen, setIsOpen] = useState(false);
    const [textLabel, setTextLabel] = useState("")
    const [textDesc, setTextDesc] = useState("")


    const changeLabel = (e) => {
        setTextLabel(e.target.value)
    }


    const changeDesc = (e) => {
        setTextDesc(e.target.value)
    }

    const createTask = () => {
        handleAddTask(columnId, textLabel, textDesc)
        setTextLabel("")
        setTextDesc("")
        setIsOpen(false)
        toast.success("Task added!")
    }

    const toggleTaskCard = () => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }

    const isDisabled = !textLabel.trim() && !textDesc.trim()

    return (
        <>
            {isOpen &&
                <div className="card card-bordered h-fit items-center p-3 m-5 shadow-2xl">
                    <div className="form-control">
                        <div className="card-title mb-5">
                            <input onChange={changeLabel} value={textLabel} type="text" placeholder="Task Label" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>

                        <div className="card-body p-0 w-full">
                            <textarea onChange={changeDesc} value={textDesc} className="resize-none textarea textarea-error" placeholder="Task Desc..."></textarea>
                        </div>
                    </div>

                    <div className="card-actions justify-center m-3">
                        <button
                            disabled={isDisabled}
                            onClick={createTask}
                            className={`btn ${isDisabled && "btn-disabled"} btn-accent text-white gap-2 hover:btn-success  hover:text-white`}>Confirm Task<BsCheckLg size="15" />
                        </button>
                    </div>
                </div>
            }
            {!isOpen &&
                <div className="card-actions justify-center m-3">
                    <button
                        onClick={toggleTaskCard}
                        className={`btn btn-active gap-2 hover:btn-success hover:text-white`}>Add task<AiOutlinePlus size="20" />
                    </button>
                </div>
            }
        </>
    );
};

export default TaskCard;