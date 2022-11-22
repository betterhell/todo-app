import React, {useContext} from 'react';
import todoAppContext from "../context/todoAppContext";
import {MdDeleteOutline} from "react-icons/md"
import dayjs from "dayjs";
import {BiEdit, BiLike} from "react-icons/bi"

const Card = ({columnId, id, label, desc, date, endDate}) => {
const {handleDeleteTask, transferTask, isEdit, toggleEditTask} = useContext(todoAppContext)


const currentDate = dayjs()
const isTaskComplete = dayjs(endDate).isBefore(currentDate)

return (
    <div className={`card mb-5 w-full bg-base-100 shadow-xl ${isTaskComplete && "border-2 border-red-500"}`}>
        <div className="card-body break-all p-3 max-h-fit">
            {isEdit ? <input value={label} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" name="labelEdit" id="labelEdit"/> : <h2 className="card-title px-3">{label}</h2>}
            {isEdit ? <input value={desc} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" name="descEdit" id="descEdit"/> : <p className="px-3">{desc}</p>}
            <hr />
            {isEdit &&
                <div className="card-body p-0 w-full relative">
                    <label className="block">
                        <span className="sr-only"></span>
                        <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
                    </label>
                </div>
            }
            {isEdit &&
                <div className="card-body p-0 w-full relative">
                    <label className="m-0 font-light" htmlFor="expirationDate">Ending Date</label>
                    <input name="expirationDate" placeholder="End date" type="datetime-local" className="input input-bordered input-ghost w-ful max-w-xs" />
                </div>
            }


            {columnId === 1 &&
                <div className="card-actions btn-block flex justify-center">
                    <button onClick={() => transferTask(0, 1, id)} className="btn btn-sm text-white btn-warning">Pending</button>
                    <button onClick={() => transferTask(0, 2, id)} className="btn btn-sm text-white btn-success">Done</button>
                    <button onClick={() => handleDeleteTask(columnId, id)} className="btn btn-sm text-white btn-error"><MdDeleteOutline size={20}/></button>
                    <button onClick={toggleEditTask} className="btn btn-sm text-white btn-circle btn-info">{!isEdit ? <BiEdit size={17} /> : <BiLike size={17} />}</button>
                </div>
            }

            {columnId === 2 &&
                <div className="card-actions flex justify-center">
                    <button onClick={() => transferTask(1, 2, id)} className="btn btn-sm text-white w-2/4 btn-success">Done</button>
                    <button onClick={() => handleDeleteTask(columnId, id)} className="btn btn-sm w-1/4 text-white btn-error"><MdDeleteOutline size={20}/></button>
                    <button onClick={toggleEditTask} className="btn btn-sm text-white btn-circle btn-info">{!isEdit ? <BiEdit size={17} /> : <BiLike size={17} />}</button>
                </div>
            }

            {columnId === 3 &&
                <div className="card-actions flex justify-center">
                    <button onClick={() => transferTask(2, 1, id)} className="btn btn-sm text-white w-2/4 btn-warning">Pending</button>
                    <button onClick={() => handleDeleteTask(columnId, id)} className="btn btn-sm w-1/4 text-white btn-error"><MdDeleteOutline size={20}/></button>
                    <button onClick={toggleEditTask} className="btn btn-sm text-white btn-circle btn-info">{!isEdit ? <BiEdit size={17} /> : <BiLike size={17} />}</button>
                </div>
            }

            <div className="card-body font-light text-sm text-center p-0">
                <p>Created: {dayjs(date).format("DD.MM.YYYY, HH:mm")}</p>
                <p>Ending: {dayjs(endDate).format("DD.MM.YYYY, HH:mm")}</p>
            </div>
        </div>
    </div>
);
};

export default Card;