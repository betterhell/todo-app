import React, {useState} from 'react';

const InputFile = ({files, setFiles, isOpen}) => {
    const [isDrag, setIsDrag] = useState(false)

    const dragStartHandler = (e) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const onDropHandler = (e) => {
        e.preventDefault()
        const filesArray = [...files, ...e.dataTransfer.files].map(item => ({name: item.name}))
        setFiles(filesArray)
    }

    return (
        <div onDrop={onDropHandler}
            onDragStart={dragStartHandler}
            onDragLeave={dragLeaveHandler}
            onDragOver={dragStartHandler}
            className="mb-5 flex justify-center cursor-pointer w-full p-3 border-2 border-dashed">
            <label
                className="cursor-pointer"
                htmlFor="file-loader-button">
                {isOpen && !isDrag ? "Drag and drop files" : "Release to load"}
            </label>
            <input
                className="hidden cursor-pointer"
                id="file-loader-button"
                type="file"
            />
        </div>

    );
};

export default InputFile;