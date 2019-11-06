import React from 'react';

const CustomTitle = ({content, Class}) =>  
    <p className = {`CustomTitle ${Class}`} children ={content} />;

export default CustomTitle;