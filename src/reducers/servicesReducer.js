import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  SET_SELECTED_SERVICE
} from '../actions/ACTION_TYPES';

const initialState = {
    isLoading: false,
    data: [],
    hasError: false,
    servicesError: '',
    servicesTypes: [],
    selectedService: null
};

const servicesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SERVICES_REQUEST: return {
      ...state,
      isLoading: action.payload.isLoading
    }
    case FETCH_SERVICES_SUCCESS: 
      let servicesTypes = [];
      const servicesData = action.payload.services;
      servicesData.map((item) => {
        if (!servicesTypes.includes(item.modeName)) {
          servicesTypes.push(item.modeName);
        }
      })
      return {
        ...state,
        data: servicesData,
        isLoading: false,
        servicesTypes
      }
    case FETCH_SERVICES_FAILURE: return {
      ...state,
      hasError: true,
      servicesError: action.payload.error
    }
    case SET_SELECTED_SERVICE: return {
      ...state,
      selectedService: action.payload.item
    }
    default: return state;
  }
}

export default servicesReducer;




  