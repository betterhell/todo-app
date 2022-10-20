import React, {useContext, useEffect, useState} from 'react';
import Column from "../components/Column";
import todoAppContext from "../context/todoAppContext";
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const MainPage = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const {columns} = useContext(todoAppContext)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
            <div className="flex justify-center min-h-screen flex-col lg:flex-row">
                {columns.map(column =>
                    <Column
                        id={column.id}
                        key={column.id}
                        label={column.name}
                        tasks={column.items}
                    />
                )}
                {showTopBtn && <button onClick={goToTop}><BsFillArrowUpCircleFill size={50} className="text-neutral fixed bottom-20 right-10" /></button> }
            </div>
    );
};



export default MainPage;