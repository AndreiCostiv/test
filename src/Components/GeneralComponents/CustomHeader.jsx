import React from 'react';

const CustomHeader = ({index, content, Class}) => (
    <>
        {index === 1 && <h1 className = {`CustomHeader ${Class}`}> {content} </h1>}
        {index === 2 && <h2 className = {`CustomHeader ${Class}`}> {content} </h2>}
        {index === 3 && <h3 className = {`CustomHeader ${Class}`}> {content} </h3>}
        {index === 4 && <h4 className = {`CustomHeader ${Class}`}> {content} </h4>}
        {index === 5 && <h5 className = {`CustomHeader ${Class}`}> {content} </h5>}
    </>
); 

export default CustomHeader;