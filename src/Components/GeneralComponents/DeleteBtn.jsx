import React from 'react';

//custom hook:
import useLocalStorage from '../CustomHooks/useLocalStorage';

const DeleteBtn = ({uuid, setData}) => {
    const {removeTask, getTasks} = useLocalStorage();
    
    const ClickHandler = (number) => {
        removeTask(number);
        setData(getTasks());
    };

    return(
        <button 
            type = 'button' 
            className = 'DeleteBtn'
            onClick = {() => ClickHandler(uuid)}
        >
            Delete
        </button>
    );
};

export default DeleteBtn;