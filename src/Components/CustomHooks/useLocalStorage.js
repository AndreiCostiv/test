import {useState} from 'react';

const useLocalStorage = () => {
    const getTasks = () => {        
        if (localStorage.getItem('tasks') !== null) {
            return(JSON.parse(localStorage.getItem('tasks')));
        }
        else {
            localStorage.setItem('tasks', JSON.stringify([]))
            return([])
        };
    };

    const saveTask = (item) => {
        let newData = getTasks();
        newData.push(item);        

        localStorage.setItem('tasks', JSON.stringify(newData));
        setTasks(newData);
    };

    const removeTask = (uuid) => {
        const filtred = getTasks().filter( (item) => item.uuid !== uuid );

        localStorage.setItem('tasks', JSON.stringify(filtred));
        setTasks(filtred);
    };    

    const [tasks, setTasks] = useState(getTasks);

    return {
        tasks, 
        getTasks, 
        setTasks, 
        saveTask, 
        removeTask
    };
};

// removeTask, reset, saveDescription, getDescriptionCount

export default useLocalStorage;