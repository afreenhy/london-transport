import React from 'react';

const ServiceDetails = (props) => {
    if (props.selected) {
        if (props.selected.hasDisruptions) {
            return (
                <div className="service-details">
                    <h3>Service currently suffering disruptions</h3>
                    <div className="details-description">
                        {props.selected.lineStatuses.map((status, index) => {
                            if (status.statusSeverity !== 10) {
                                return <p key={index}> {status.reason} </p>
                            }
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div className="service-details">
                <h3>No Service disruptions</h3>    
            </div>
        )
    }
    return (
        <div>
            <h1> Select Options from the menu</h1>
        </div>
    )
}

export default ServiceDetails;