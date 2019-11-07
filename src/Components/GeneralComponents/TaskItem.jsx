import React, {useState} from 'react';

//custom hook:
import useLocalStorage from '../CustomHooks/useLocalStorage';

const TaskItem = ({children, uuid, setComments, setSelectedUuid, selectedUuid}) => {    
    const {getComments} = useLocalStorage();
    const [isActive, setIsActive] = useState(false)

    React.useEffect(() => {
        uuid === selectedUuid ? setIsActive(true) : setIsActive(false) 
    }, [selectedUuid])

    const setUpData = (uuid)=> {
        setSelectedUuid(uuid);
        setComments(getComments(uuid));

    };
    
    return(
        <section 
            className = {`TaskItem ${isActive ? 'TaskActive' : ''}`} 
            onClick = {() =>  setUpData(uuid)}
        >
            {children}
        </section>
    );
};

export default TaskItem;