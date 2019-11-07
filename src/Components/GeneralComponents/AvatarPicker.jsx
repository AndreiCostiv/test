import React from 'react';

const AvatarPicker = ({setSelectedAvatar, toShowPicker, setToShowPicker}) => {
    const colors = ['#2F80ED', '#F2994A', '#EB5757', '#56CCF2', '#F2C94C'];

    const handleClick = (color) => {
        setSelectedAvatar(color);
        setToShowPicker(!toShowPicker);
    };

    return(
        <section className = 'AvatarPickerSection'>
        {
            colors.map( item => 
                <section 
                    key = {item}
                    onClick = {() => handleClick(item)}
                    className = 'AvatarItem' 
                    style = {{backgroundColor: `${item}`}}
                />
            )
        }
        </section>
    );
}; 

export default AvatarPicker;