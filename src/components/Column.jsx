import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import Card from "./Card";

const Column = ({label, tasks, id}) => {
    const userScreenHeight = window.innerHeight

    return (
         <div className={`container ${userScreenHeight >= tasks.length ? `overflow-y-scroll` : `overflow-y-hidden`} relative p-5 rounded shadow-2xl w-[300px] h-screen mx-5 my-5`}>
            <div className="card-title pb-2 justify-center">
                <h3 className="font-mono">{label}</h3>
            </div>

             {tasks.length > 0 &&
                 <div className="flex end absolute top-3 right-10">
                    <span className="badge badge-lg badge-info text-white right-100 p-[7px]">{tasks.length}</span>
                 </div>}
             <div className="divider"></div>

            {(!tasks || tasks.length === 0) && (<p className="flex justify-center font-light m-5">No tasks yet...</p>)}
            <div className="container">
                {tasks.map(task =>
                    <Card
                        id={task.id}
                        key={task.id}
                        columnId={id}
                        label={task.label}
                        desc={task.description}
                        date={task.createDate}
                    />
                    )}
            </div>
            <TaskCard columnId={id} />
         </div>
    );
};

Column.defaultProps = {
    label: "All Tasks"
}

Column.propTypes = {
    label: PropTypes.string
}


export default Column;