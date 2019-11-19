import { createSelector } from 'reselect';

const servicesData = state => state.servicesReducer.data;
const servicesTypes = state => state.servicesReducer.servicesTypes;

const checkDisruptions = (service) => {
    return service.lineStatuses.some((element) => {
        return element.statusSeverity !== 10;
    });
}

const sortServiceTypes = (types) => {
    let typesObject = {};
    types.forEach(element => {
        typesObject[element] = []
    });
    return typesObject;
}

export const getUpdatedData = createSelector(
    [servicesData, servicesTypes],
    (data, types) => {
        debugger;
        const serviceTypesData = sortServiceTypes(types);
        data.forEach((item) => {
            const { modeName } = item;
            const hasDisruptions = checkDisruptions(item);
            const modifiedItem = hasDisruptions ? { ...item, hasDisruptions: true } : item;
            serviceTypesData[modeName].push(modifiedItem);
        });
        return serviceTypesData; 
    });