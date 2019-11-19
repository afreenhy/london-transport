import React from 'react';
import ServiceDetails from './ServiceDetails';
import CycleHire from './CycleHire';

const MainContent = (props) => {
    if (props.isCycleHirePageDisplayed) {
        return (
            <CycleHire />
        )
    }
    return (
        <ServiceDetails selected={props.selected}/>
    )
};

export default MainContent;