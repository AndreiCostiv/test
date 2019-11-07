import React, {useState, useRef} from 'react';

//custom hook:
import useLocalStorage from '../CustomHooks/useLocalStorage';

//packge:
import useKeys from "@rooks/use-keys";

const CommentsArea = ({uuid, setComments, setData, children}) => {
    const {addComment, getComments, getTasks} = useLocalStorage();
    const containerRef = useRef(document);
    const [isEventActive] = useState(true);

    const checkCommet = (data) => data.length > 0 ? {text: data} : false;
    
    useKeys(
        ["ControlLeft", "Enter"],
        (e) => {          
            if(typeof(checkCommet(e.target.value)) === 'object'){
                addComment(uuid, checkCommet(e.target.value))
                //for displaying changes:        
                setComments(getComments(uuid));
                setData(getTasks());
                //cleaning up text area:
                e.target.value = '';
            }else alert('Write some text!');    
        },
        {
          target: containerRef,
          when: isEventActive
        }
    );
    
    return(
        <section className = 'CommentsTextSection'>
            {children}
            
            <textarea 
                name = 'comment' 
                title = 'To save, press: Ctrl + Enter'
                className = 'CommentsTextArea'
            />
        </section>
    );
};

export default CommentsArea;