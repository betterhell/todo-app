import React, {useContext} from 'react';
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import TodoAppContext from "../context/TodoAppContext";
import Card from "./Card";

const Column = ({label, array}) => {
    const {allTasks} = useContext(TodoAppContext)

    return (
        <>
             <div className={`container ${allTasks.length >= 3 ? `overflow-y-scroll` : `overflow-y-hidden`} p-5 rounded shadow-2xl w-[300px] h-screen mx-5 my-5`}>
                <div className="card-title pb-2 border-b-2 justify-center">
                    <h3 className="font-mono">{label}</h3>
                </div>
                {(!allTasks || allTasks.length === 0) && (<p className="flex justify-center m-5">No tasks yet...</p>)}
                <div className="container">
                    {allTasks.map((task, id) => <Card array={array} key={id} label={task.label} desc={task.description} date={task.createDate}/> )}
                </div>
                <TaskCard />
            </div>
        </>
    );
};

Column.defaultProps = {
    label: "All Tasks"
}

Column.propTypes = {
    label: PropTypes.string,
}


export default Column;