import React, {useContext} from 'react';
import Column from "../components/Column";
import todoAppContext from "../context/todoAppContext";

const MainPage = () => {
    const {columns} = useContext(todoAppContext)

    return (
        <div className="flex justify-center flex-col items-center lg:flex-row">
            {columns.map(column =>
                <Column
                    id={column.id}
                    key={column.id}
                    label={column.name}
                    tasks={column.items}
                />
            )}
        </div>
    );
};



export default MainPage;