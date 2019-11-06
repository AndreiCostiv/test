import React from 'react';

const Tasks = ({children}) => {
    return(
        <section className = 'Tasks'>
            {children}
        </section>
    );
};

export default Tasks;