import React from 'react';

const AvatarComponent = ({selectedAvatar, toShowPicker, setToShowPicker}) => {
    return(
        <button 
            style = {{backgroundColor: `${selectedAvatar}`}}
            onClick = {() => setToShowPicker(!toShowPicker)}
            className = 'AvatarComponent'
        />
    );
};

export default AvatarComponent;