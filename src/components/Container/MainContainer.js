import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchServices, toggleCycleHirePageView, setSelectedMenuItem } from '../../actions/appData';
import { getUpdatedData } from '../../reducers/services-selector';
import MenuItem from './MenuItem';
import MainContent from '../Details/MainContent';
import '../App.css';

function MainContainer(props) {
 	useEffect(() => {
		props.fetchServices('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true');
  }, [])

  const toggleCycleHirePageView = () => {
    props.setSelectedMenuItem(null);
    props.toggleCycleHirePageView(true);
  }
  
  const isCycleHire = props.isCycleHirePageDisplayed ? 'active' : '';
  
      if (props.servicesTypes && props.servicesTypes.length) {
        return (
          <div className="menu-container">
            <div className="side-menu">
              <ul>

              <li onClick={toggleCycleHirePageView} className={`cycle-hire ${isCycleHire}`}> 
                <h3> HIRE CYCLE </h3>
              </li>

              {props.servicesTypes.map((item, index) => {
                return (
                <li key={index}> 
                  <h3 className='service-type'> {item} </h3>
                  {props.servicesData[item].map((service) => {
                    return <li key={service.id}>
                             <MenuItem item={service}/> 
                             </li>
                  })}
                  
                </li>
              )}
              )}
              </ul>
            </div>
            <div className="details-container">
              <MainContent  selected={props.selectedService} isCycleHirePageDisplayed={props.isCycleHirePageDisplayed}/>
            </div>
        </div>
        )
      }  
      return <p> No data fetched</p>
      
}

const mapStateToProps = state => {
	return {
    servicesTypes: state.servicesReducer.servicesTypes,
    servicesData: getUpdatedData(state),
    selectedService: state.servicesReducer.selectedService,
    isCycleHirePageDisplayed: state.cycleHireReducer.isCycleHirePageDisplayed
	}
}

const mapDispatchToProps = dispatch => {
	return {
    fetchServices: (url) => dispatch(fetchServices(url)),
    setSelectedMenuItem: (item) => dispatch(setSelectedMenuItem(item)),
    toggleCycleHirePageView: (isDisplayed) => dispatch(toggleCycleHirePageView(isDisplayed))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
