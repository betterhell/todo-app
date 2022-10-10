import React, {useContext} from 'react';
import todoAppContext from "../context/TodoAppContext";

const Card = ({columnId, id, label, desc, date}) => {
    const {deleteTask, transferTask} = useContext(todoAppContext)

    return (
        <div className="card m-[20px] max-w-[300px] bg-base-100 shadow-xl">
            <div className="card-body break-all p-3 max-h-fit">
                <h2 className="card-title">{label}</h2>
                <p>{desc}</p>
                <hr />
                {columnId === 1 &&
                    <div className="card-actions btn-block">
                        <button onClick={() => transferTask(0, 1)} className="btn btn-sm text-white text- btn-block btn-warning">Pending</button>
                        <button onClick={() => transferTask(0, 2)} className="btn btn-sm text-white btn-block btn-success">Done</button>
                        <button onClick={() => deleteTask(columnId, id)} className="btn btn-sm text-white btn-block btn-error">Delete</button>
                    </div>
                }
                {columnId === 2 &&
                    <div className="card-actions btn-block">
                        <button onClick={() => transferTask(1, 2)} className="btn btn-sm text-white btn-block btn-success">Done</button>
                        <button onClick={() => deleteTask(columnId, id)} className="btn btn-sm text-white btn-block btn-error">Delete</button>
                    </div>
                }
                {columnId === 3 &&
                    <div className="card-actions btn-block">
                        <button onClick={() => transferTask(2, 1)} className="btn btn-sm text-white text- btn-block btn-warning">Pending</button>
                        <button onClick={() => deleteTask(columnId, id)} className="btn btn-sm text-white btn-block btn-error">Delete</button>
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