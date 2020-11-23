import ParkingActionTypes from './parking.types'
const INITIAL_STATE={
    parkingSpaces:[],
    parkingZone:'A',
    isFetching:false,
    error:null
}

const parkingReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ParkingActionTypes.FETCH_PARKING_START:
            return{
                ...state,
                error:null,
                isFetching: true
            }
        case ParkingActionTypes.FETCH_PARKING_SUCCESS:
            return {
                ...state,
                parkingSpaces : action.payload,
                error: null,
                isFetching: false
            };
            case ParkingActionTypes.FETCH_PARKING_FAILURE:
                return {
                    ...state,
                    parkingSpaces : null,
                    error: action.payload
                };
            case ParkingActionTypes.SET_PARKING_ZONE:
                return {
                    ...state,
                    parkingZone:action.payload
                 };
        default :
            return state;
    }
};

export default parkingReducer;