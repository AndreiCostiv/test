import React from 'react';

//custom hook:
import useLocalStorage from '../CustomHooks/useLocalStorage';

const TaskItem = ({children, uuid, setComments, setSelectedUuid}) => {
    const {getComments} = useLocalStorage();

    const setUpData = (uuid)=> {
        setSelectedUuid(uuid);
        setComments(getComments(uuid))
    }
    
    return(
        <section className = {`TaskItem`} onClick = {() =>  setUpData(uuid)}>
            {children}
        </section>
    );
};

export default TaskItem;