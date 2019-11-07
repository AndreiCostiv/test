import React from 'react';

//components:
import CustomHeader from '../GeneralComponents/CustomHeader';
import CustomTitle from '../GeneralComponents/CustomTitle';

const DairyAppTitle = () => (
    <section className = 'DairyAppTitle'> 
        <CustomHeader index = {1} content = 'DAIRY APP'/>
        <CustomTitle content = 'Comment with no sense'/>
    </section>
);

export default DairyAppTitle;