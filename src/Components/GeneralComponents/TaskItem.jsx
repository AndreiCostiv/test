import React from 'react';

//custom hook:
import useLocalStorage from '../CustomHooks/useLocalStorage';

const TaskItem = ({children, uuid, setComments}) => {
    const {getComments} = useLocalStorage();

    return(
        <section className = {`TaskItem`} onClick = {() =>  setComments(getComments(uuid))}>
            {children}
        </section>
    );
};

export default TaskItem;