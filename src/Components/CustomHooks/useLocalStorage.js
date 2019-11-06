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

    const getTask = (uuid) => getTasks().filter( (item) => item.uuid === uuid );

    const [tasks, setTasks] = useState(getTasks);

    //comments:

    const getComments = (uuid) => {
        let comments

        if (getTask(uuid) === undefined) {
            comments = getTask(uuid)[0].descriptions;  
        }

        return comments;
    };

    // const addComment = (uuid, data) => {
    //     let descriptions = getTask(uuid)[0].descriptions;
    //     typeof(data) === "object" ? descriptions.push(data) : 
    //     ''
    // };

    return {
        tasks, getTasks, setTasks, saveTask, removeTask,
        getComments
    }
};

export default useLocalStorage;