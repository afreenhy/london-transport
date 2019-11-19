import React from 'react';
import { setSelectedMenuItem, toggleCycleHirePageView } from '../../actions/appData';
import { connect } from 'react-redux';


const  MenuItem = (props) => {
  const isActive = props.selectedService && props.selectedService.name === props.item.name;
  const navClass = isActive ? 'active' : '';

  const handleMenuClick = () => {
    props.setSelectedMenuItem(props.item);
    if(props.isCycleHirePageDisplayed) {
      props.toggleCycleHirePageView(!props.isCycleHirePageDisplayed)
    }
  }
    const operatesInEveText = props.item.serviceTypes[0].name === 'N' ? <span> Eve </span> : '';
    const hasDisruptions = props.item.hasDisruptions ? 'D' : '';
    return(
        <div  onClick={handleMenuClick} className={`nav-item ${navClass}`}> 
        <span> {props.item.name}  </span>
        <span className='night-op-symbol'> {operatesInEveText}  </span>
        <span className='disrup-symbol'> {hasDisruptions} </span>
        </div>
    )
}

const mapStateToProps = state => {
	return {
    selectedService: state.servicesReducer.selectedService,
    isCycleHirePageDisplayed: state.cycleHireReducer.isCycleHirePageDisplayed
	}
}

const mapDispatchToProps = dispatch => {
	return {
    setSelectedMenuItem: (item) => dispatch(setSelectedMenuItem(item)),
    toggleCycleHirePageView: (isDisplayed) => dispatch(toggleCycleHirePageView(isDisplayed))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);