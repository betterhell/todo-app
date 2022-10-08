import {allTasksList} from "./allTasksList";
import {pendingTasksList} from "./pendingTasksList";
import {doneTasksList} from "./doneTasksList";

export const columnList = [
    {
        columnName: "All Tasks",
        columnArray: allTasksList,
    },
    {
        columnName: "Pending Tasks",
        columnArray: pendingTasksList,
    },
    {
        columnName: "Done Tasks",
        columnArray: doneTasksList,
    },
]
