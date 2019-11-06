import React from 'react';

const TaskItem = ({children}) => {
    return(
        <section className = {`TaskItem`}>
            {children}
        </section>
    );
};

export default TaskItem;