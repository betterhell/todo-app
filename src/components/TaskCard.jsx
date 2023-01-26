import React, {useContext, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {BsCheckLg} from "react-icons/bs"
import todoAppContext from "../context/todoAppContext";
import InputFile from "./InputFile";

const TaskCard = ({columnId}) => {
    const {createTask, toggleTaskCard} = useContext(todoAppContext)

    const [isOpen, setIsOpen] = useState(false)
    const [textLabel, setTextLabel] = useState("")
    const [textDesc, setTextDesc] = useState("")
    const [endDate, setEndDate] = useState("")
    const [files, setFiles] = useState([])

    const changeLabel = (e) => {
        setTextLabel(e.target.value)
    }

    const changeDesc = (e) => {
        setTextDesc(e.target.value)
    }

    const changeEndDate = (e) => {
        setEndDate(e.target.value)
    }

    const isDisabled = !textLabel.trim() && !textDesc.trim()

    return (
        <>
            {isOpen &&
                <div className={`card card-bordered h-fit items-center p-2 shadow-md`}>
                    <div className="form-control">
                        <div className="card-title mb-5">
                            <input id="label" onChange={changeLabel} value={textLabel} type="text" placeholder="Task Label" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>

                        <div className="card-body p-0 mb-5 w-full relative">
                            <textarea id="desc" onChange={changeDesc} value={textDesc} className="resize-none textarea textarea-error" placeholder="Task Desc..."></textarea>
                        </div>

                        <div className="card-body p-0 w-full relative">
                            <label className="m-0 font-light" htmlFor="expirationDate">Ending Date</label>
                            <input id="endDate" name="expirationDate" onChange={changeEndDate} value={endDate} placeholder="End date" type="datetime-local" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="card-actions justify-center m-3">
                        <button
                            disabled={isDisabled}
                            onClick={() => createTask(columnId, setTextLabel, setTextDesc, setEndDate, setIsOpen, textLabel, textDesc, endDate, files)}
                            className={`btn ${isDisabled && "btn-disabled"} btn-accent text-white gap-2 hover:btn-success  hover:text-white`}>Confirm Task<BsCheckLg size="15" />
                        </button>
                    </div>
                </div>
            }
            {!isOpen &&
                <div className="card-actions justify-center m-3">
                    <button
                        onClick={() => toggleTaskCard(isOpen, setIsOpen)}
                        className={`btn btn-active gap-2 hover:btn-success hover:text-white`}>Add task<AiOutlinePlus size="20" />
                    </button>
                </div>
            }
        </>
    );
};

export default TaskCard;