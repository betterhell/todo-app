import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import Card from "./Card";
import {MdOutlineTaskAlt, MdOutlinePending} from "react-icons/md"
import {BsListTask} from "react-icons/bs"

const Column = ({label, tasks, id}) => {
    const userScreenHeight = window.innerHeight

    const IconSwitcher = (label) => {
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
         <div className={`container ${userScreenHeight >= tasks.length ? `overflow-y-scroll` : `overflow-y-hidden`} h-max relative p-5 rounded shadow-2xl w-1/2 lg:w-[300px] mx-5 my-5`}>
            <div className="card-title pb-2 justify-center">
                <h3 className="font-mono">{label}</h3>
            </div>

             {tasks.length > 0 &&
                 <div className="flex absolute top-3 right-10">
                    <span className="badge border-gray-400 text-xs text-white right-100 p-[6px]">{tasks.length}</span>
                 </div>}

             <div className="divider">
                 {IconSwitcher(label)}
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