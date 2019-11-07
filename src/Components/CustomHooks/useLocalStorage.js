import {useState} from 'react';

const useLocalStorage = () => {
    // tasks
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

    const SaveUpdatedTasks = (updatedTasksList) => {        
        localStorage.setItem('tasks', JSON.stringify(updatedTasksList));
        setTasks(updatedTasksList);
    };

    const removeTask = (uuid) => {
        const filtred = getTasks().filter( (item) => item.uuid !== uuid );

        localStorage.setItem('tasks', JSON.stringify(filtred));
        setTasks(filtred);
    };    

    const updateTask = (item, uuid) => {
        const allTasks = getTasks();
        //Find index of specific object using findIndex method:    
        const objIndex = allTasks.findIndex((obj => obj.uuid === uuid));
        
        //updating:
        allTasks[objIndex] = item[0]; 
        SaveUpdatedTasks(allTasks);
    };

    const [tasks, setTasks] = useState(getTasks);

    //comments:
    const getComments = (uuid) => {
        let comments = getTasks().filter( (item) => item.uuid === uuid );              
        if(comments[0] !== undefined) {
            return comments[0].descriptions;
        };
    };

    const addComment = (uuid, data) => {
        let selectedTask = getTasks().filter( (item) => item.uuid === uuid )
        //getting comments for selected taks only:
        selectedTask[0].descriptions.push(data);
        
        //counting descriptions:
        selectedTask[0].descriptionCount++;

        updateTask(selectedTask, uuid);
    };

    return {
        tasks, getTasks, setTasks, saveTask, removeTask,
        getComments, addComment
    }
};

export default useLocalStorage;