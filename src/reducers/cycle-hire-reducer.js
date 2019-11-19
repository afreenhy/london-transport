import {
    TOGGLE_CYCLE_HIRE_VIEW,
    FETCH_BIKES_REQUEST,
    FETCH_BIKES_SUCCESS,
    FETCH_BIKES_FAILURE,
    SET_BIKES_DATA
  } from '../actions/ACTION_TYPES';
  
  const initialState = {
      isCycleHirePageDisplayed: false,
      isCycleHirePageLoading: false,
      bikesData: [],
      hasError: false,
      fetchErrorMsg: null,
      queryCache: {}
  };
  
  const cycleHireReducer = (state = initialState, action) => {
    switch(action.type) {
      case TOGGLE_CYCLE_HIRE_VIEW: return {
        ...state,
        isCycleHirePageDisplayed: action.payload.isDisplayed,
        bikesData: []
      }
      case FETCH_BIKES_REQUEST: return {
        ...state,
        isCycleHirePageLoading: action.payload.isLoading
      }
      case FETCH_BIKES_SUCCESS: 
        const { bikes, query } = action.payload;
        const { queryCache } = state;
        const cache = {};
        cache[query] = bikes;
        const updatedSearchQuery = {...queryCache, ...cache}
        return {
          ...state,
          bikesData: bikes,
          isCycleHirePageLoading: false,
          queryCache: updatedSearchQuery
      }
      case FETCH_BIKES_FAILURE: return {
        ...state,
        hasError: true,
        fetchErrorMsg: action.payload.error
      }
      case SET_BIKES_DATA : return {
        ...state,
        bikesData: action.payload.bikes
      }
      default: return state;
    }
  }
  
  export default cycleHireReducer;
  
  
  
  
    