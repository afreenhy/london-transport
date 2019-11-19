import React from 'react';
import { connect } from 'react-redux';
import { fetchBikes, setBikeResults } from '../../actions/appData';

const CycleHire = (props) => {

    const handleInputChange = (e) => {
        const query = e.target.value;
        const isCached = props.cahcedQuery[query];
        if (isCached) {
            // fecth from cache and set as results
            props.setBikeResults(isCached);
        } else {
            //make a new api call and save in cache
            props.fetchBikes(query);
        }
        
    }
    return (
        <div className="cycle-hire-container">
            <div className="search-bar">
                <input
                type="text"
                id="search-input"
                placeholder="Search..."
                onChange={handleInputChange}></input>
            </div>
            <div className="bikes-container">
                {props.data.map((bikes, index) => {
                    return <div key={index}> {bikes.commonName}  ({bikes.lat},  {bikes.lon}) </div>
                })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
	return {
        searchResults: state.cycleHireReducer.bikesData,
        cahcedQuery: state.cycleHireReducer.queryCache,
        data: state.cycleHireReducer.bikesData
	}
}

const mapDispatchToProps = dispatch => {
	return {
    fetchBikes: (url) => dispatch(fetchBikes(url)),
    setBikeResults: (bikes) => dispatch(setBikeResults(bikes))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CycleHire);