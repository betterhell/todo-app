import React, {useContext} from 'react';
import todoAppContext from "../context/TodoAppContext";
import {MdDeleteOutline} from "react-icons/md"

const Card = ({columnId, id, label, desc, date}) => {
    const {handleDeleteTask, transferTask} = useContext(todoAppContext)

    return (
        <div className="card mb-5 w-full bg-base-100 shadow-xl">
            <div className="card-body break-all p-3 max-h-fit">
                <h2 className="card-title">{label}</h2>
                <p>{desc}</p>
                <hr />
                {columnId === 1 &&
                    <div className="card-actions flex justify-center">
                        <button onClick={() => transferTask(0, 1, id)} className="btn btn-sm text-white btn-warning">Pending</button>
                        <button onClick={() => transferTask(0, 2, id)} className="btn btn-sm text-white btn-success">Done</button>
                        <button onClick={() => handleDeleteTask(columnId, id)} className="btn btn-sm text-white btn-error"><MdDeleteOutline size={20}/></button>
                    </div>
                }
                {columnId === 2 &&
                    <div className="card-actions flex justify-center">
                        <button onClick={() => transferTask(1, 2, id)} className="btn btn-sm text-white btn-success">Done</button>
                        <button onClick={() => handleDeleteTask(columnId, id)} className="btn btn-sm text-white btn-error"><MdDeleteOutline size={20}/></button>
                    </div>
                }
                {columnId === 3 &&
                    <div className="card-actions flex justify-center">
                        <button onClick={() => transferTask(2, 1, id)} className="btn btn-sm text-white btn-warning">Pending</button>
                        <button onClick={() => handleDeleteTask(columnId, id)} className="btn btn-sm text-white btn-error"><MdDeleteOutline size={20}/></button>
                    </div>
                }
                <div className="card-body font-light text-sm text-center p-0">
                    <p>Creating: {date}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;