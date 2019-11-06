import React from 'react';

//packages:
import * as uuid from 'uuid/v1';

//custom hooks:
import useLocalStorage from '../CustomHooks/useLocalStorage';

const NewTasksForm = ({children, setData}) => {
    const {saveTasks, getTasks} = useLocalStorage();
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        saveTasks({
            task: e.target.taskName.value,
            description: false,
            uuid: uuid(),
        });
        
        //updates task's list after submit:
        setData(getTasks());
    };

    return(
        <form 
            className = 'NewTasksForm' 
            onSubmit = { HandleSubmit }
            children = {children}    
        />
    )
};

export default NewTasksForm;