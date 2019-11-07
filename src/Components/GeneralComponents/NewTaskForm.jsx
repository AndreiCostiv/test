import React from 'react';

//packages:
import * as uuid from 'uuid/v1';

//custom hooks:
import useLocalStorage from '../CustomHooks/useLocalStorage';

const NewTasksForm = ({children, setData}) => {
    const {saveTask, getTasks} = useLocalStorage();
    
    const HandleSubmit = (e) => {
        e.preventDefault();

        let taskData = {
            task: e.target.taskName.value,
            descriptions: [],
            descriptionCount: 0,
            uuid: uuid()
        };

        if (e.target.taskName.value.length > 0){
            saveTask(taskData);
        }

        //for displaying changes:
        setData(getTasks());

        //cleaning the input after submit:
        e.target.taskName.value = '';
    };

    return(
        <form 
            className = 'NewTasksForm' 
            onSubmit = { HandleSubmit }
            children = {children}    
        />
    );
};

export default NewTasksForm;