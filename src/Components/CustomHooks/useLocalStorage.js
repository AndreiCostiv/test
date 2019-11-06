import {useState} from 'react';

const useLocalStorage = () => {
    const getTasks = () => {
        if (localStorage.getItem('tasks') !== null) {
            return(JSON.parse(localStorage.getItem('tasks')));
        }
        
        else return([]);
    };

    const saveTasks = (item) => {
        let newData = tasks;
        newData.push(item);
        
        
        localStorage.setItem('tasks', JSON.stringify(newData));
        setTasks(newData);
    };

    const [tasks, setTasks] = useState(getTasks());

    return {tasks, getTasks, setTasks, saveTasks};
};

// removeTask, reset, saveDescription, getDescriptionCount

export default useLocalStorage;