import React from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {useContext} from "react";
import TodoAppContext from "../context/TodoAppContext"

const TaskCard = () => {
    const {addTask, textAllLabel, textAllDesc, changeDesc, changeLabel} = useContext(TodoAppContext)

    return (
        <>
            <div className="card card-bordered h-fit items-center p-3 m-5 shadow-2xl">
                <div className="form-control">
                    <div className="card-title mb-5">
                        <input onChange={changeLabel} value={textAllLabel} type="text" placeholder="Task Label" className="input input-bordered input-accent w-full max-w-xs" />
                    </div>

                    <div className="card-body p-0 w-full">
                        <textarea onChange={changeDesc} value={textAllDesc} className="resize-none textarea textarea-error" placeholder="Task Desc..."></textarea>
                    </div>
                </div>
                <div className="card-actions justify-center m-3">
                    {(textAllLabel && textAllDesc).trim() === ""
                        ? <button disabled={true} onClick={addTask}  className="btn btn-disabled gap-2 hover:btn-error  hover:text-white">Add task <AiOutlinePlus  size="20" /></button>
                        : <button onClick={addTask} className="btn btn-active gap-2 hover:btn-error  hover:text-white">Add task <AiOutlinePlus  size="20" /></button> }
                </div>
            </div>
             </>
    );
};

export default TaskCard;