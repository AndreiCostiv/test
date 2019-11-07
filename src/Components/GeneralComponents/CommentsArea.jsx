import React, {useState, useRef} from 'react';

//components:
import AvatarComponent from './AvatarComponent';
import AvatarPicker from './AvatarPicker';

//custom hook:
import useLocalStorage from '../CustomHooks/useLocalStorage';

//packge:
import useKeys from "@rooks/use-keys";

const CommentsArea = ({uuid, setComments, setData}) => {
    const {addComment, getComments, getTasks} = useLocalStorage();
    const containerRef = useRef();
    const [isEventActive] = useState(true);

    //for avatar picker:
    const [toShowPicker, setToShowPicker] = useState(false);
	const [selectedAvatar, setSelectedAvatar] = useState('');

    const checkCommet = (data) => {
        if(data.length > 0){
            return {
                text: data,
                avatar: selectedAvatar.length > 0 ? selectedAvatar : '#2F80ED' 
            }
        }
        else return false;
    };    

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
        <>
            {
                toShowPicker
                && 
                <AvatarPicker 
                    toShowPicker = {toShowPicker}
                    setToShowPicker = {setToShowPicker}
                    setSelectedAvatar = {setSelectedAvatar} 
                    selectedAvatar ={selectedAvatar}
                />
            }

            <section className = 'CommentsTextSection'>
                <AvatarComponent 
                    toShowPicker = {toShowPicker}
                    setToShowPicker = {setToShowPicker}
                    selectedAvatar = {selectedAvatar} 
                    setSelectedAvatar= {setSelectedAvatar}
                />
                
                <textarea 
                    placeholder = 'Write description and then press CTRL + Enter'
                    ref = {containerRef}
                    name = 'comment' 
                    title = 'To save, press: Ctrl + Enter'
                    className = 'CommentsTextArea'
                />
            </section>
        </>
    );
};

export default CommentsArea;