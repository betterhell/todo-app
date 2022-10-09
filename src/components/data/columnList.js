import {allTasksList} from "./allTasksList";
import {pendingTasksList} from "./pendingTasksList";
import {doneTasksList} from "./doneTasksList";

export const initialColumns = [
    {
        name: "Initial Tasks",
        items: allTasksList,
        id: 1
    },
    {
        name: "Pending Tasks",
        items: pendingTasksList,
        id: 2,
    },
    {
        name: "Done Tasks",
        items: doneTasksList,
        id: 3,
    },
]
