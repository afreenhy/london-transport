import { 
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  SET_SELECTED_SERVICE,
  TOGGLE_CYCLE_HIRE_VIEW,
  FETCH_BIKES_REQUEST,
  FETCH_BIKES_SUCCESS,
  FETCH_BIKES_FAILURE,
  SET_BIKES_DATA
} from './ACTION_TYPES';

export const fetchServicesRequest = (isLoading) => ({
  type: FETCH_SERVICES_REQUEST,
  payload: { isLoading }
});

export const fetchServicesSuccess = services => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: { services }
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: { error }
});

export const setSelectedMenuItem = (item) => ({
  type: SET_SELECTED_SERVICE,
  payload: { item }
}) 

export const toggleCycleHirePageView = (isDisplayed) => ({
  type: TOGGLE_CYCLE_HIRE_VIEW,
  payload: { isDisplayed }
})

export function fetchServices(url) {
  return (dispatch) => {
      dispatch(fetchServicesRequest(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(fetchServicesRequest(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(fetchServicesSuccess(items)))
          .catch((error) => dispatch(fetchServicesFailure(error)));
  };
}

export const fetchBikesRequest = (isLoading) => ({
  type: FETCH_BIKES_REQUEST,
  payload: { isLoading }
});

export const fetchBikesSuccess = (query, bikes) => ({
  type: FETCH_BIKES_SUCCESS,
  payload: { query, bikes }
});

export const fetchBikesFailure = error => ({
  type: FETCH_BIKES_FAILURE,
  payload: { error }
});

export const setBikeResults = bikes => ({
  type: SET_BIKES_DATA,
  payload: { bikes}
})

export function fetchBikes(query) {
  return (dispatch) => {
      dispatch(fetchBikesRequest(true));

      fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${query}`)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(fetchBikesRequest(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(fetchBikesSuccess(query, items)))
          .catch((error) => dispatch(fetchBikesFailure(error)));
  };
}




  
