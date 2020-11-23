import ParkingActionTypes from './parking.types'
import axios from 'axios'


export const setParkingZone=parkingZone=>({
    type: ParkingActionTypes.SET_PARKING_ZONE,
    payload: parkingZone
});

export const parkingDataFetchSuccess=parkingSpaces=>({
    type: ParkingActionTypes.FETCH_PARKING_SUCCESS,
    payload: parkingSpaces
});

export const parkingDataFetchFail=error=>({
    type: ParkingActionTypes.FETCH_PARKING_FAILURE,
    payload: error
});

export const parkingDataFetchStart=()=>({
    type: ParkingActionTypes.FETCH_PARKING_START,
});

export const parkingDataFetchStartAsync= (parkingZone)=>{
    return async (dispatch)=>{
        dispatch(parkingDataFetchStart());
        try {
            const data =  await axios.get(`http://localhost:5000/api/parking/getParkingSpace/${parkingZone}`);
            dispatch(parkingDataFetchSuccess(data.data.data[0].parking_space));
        } catch (error) {
            dispatch(parkingDataFetchFail(error))
        }
    }
}