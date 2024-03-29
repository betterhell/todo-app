import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import Card from "./Card";
import {MdOutlineTaskAlt, MdOutlinePending} from "react-icons/md"
import {BsListTask} from "react-icons/bs"

const Column = ({label, tasks, id}) => {
    const userScreenHeight = window.innerHeight

    const iconSwitcher = (label) => {
        switch (label) {
            case "Initial Tasks":
                return <BsListTask size={60} />
            case "Pending Tasks":
                return <MdOutlinePending size={60} />
            case "Done Tasks":
                return <MdOutlineTaskAlt size={60} />
            default:
                return <BsListTask size={60} />
        }
    }

    return (
         <div className={`container ${userScreenHeight >= tasks.length ? `overflow-y-scroll` : `overflow-y-hidden`} px-2 py-5 h-max relative rounded shadow-xl w-1/2 lg:w-[300px] m-5`}>
            <div className="card-title pb-2 justify-center">
                <h3 className="font-mono">{label}</h3>
            </div>

             {tasks.length > 0 &&
                 <div className="flex absolute top-3 right-10">
                    <span className="badge border-gray-400 text-xs text-white right-100 p-[6px]">{tasks.length}</span>
                 </div>}

             <div className="divider">
                 {iconSwitcher(label)}
             </div>

            {(!tasks || tasks.length === 0) && (
                <p className="flex justify-center font-light m-5">No tasks yet...</p>)
            }

            <div className="container">
                {tasks.map(task =>
                    <Card
                        id={task.id}
                        key={task.id}
                        columnId={id}
                        label={task.label}
                        desc={task.description}
                        date={task.createDate}
                        endDate={task.endDate}
                        files={task.files}
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