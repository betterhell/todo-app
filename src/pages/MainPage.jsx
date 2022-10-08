import React from 'react';
import Column from "../components/Column";
import {columnList} from "../components/data/columnList";

const MainPage = () => {
    return (
        <div className="flex">
            {columnList.map((column,id) => <Column key={id} label={column.columnName} array={column.columnArray} /> )}
        </div>
    );
};



export default MainPage;