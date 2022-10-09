import React, {useContext, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import todoAppContext from "../context/TodoAppContext";

const TaskCard = ({columnId}) => {
    const {addTask} = useContext(todoAppContext)

    const [textLabel, setTextLabel] = useState("")
    const [textDesc, setTextDesc] = useState("")

    const changeLabel = (e) => {
        setTextLabel(e.target.value)
    }

    const changeDesc = (e) => {
        setTextDesc(e.target.value)
    }

    const createTask = () => {
        addTask(columnId,textLabel,textDesc)
        setTextLabel("")
        setTextDesc("")
    }

    const isDisabled = !textLabel.trim() && !textDesc.trim()


    return (
        <>
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
                         onClick={() => createTask()}
                         className={`btn ${isDisabled && "btn-disabled" } gap-2 hover:btn-error  hover:text-white`}>Add task <AiOutlinePlus  size="20" /></button>
                </div>
            </div>
             </>
    );
};

export default TaskCard;