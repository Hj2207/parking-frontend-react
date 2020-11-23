import {createSelector} from 'reselect'

const selectParking=state=>state.parking;

export const selectParkingSpaces= createSelector(
    [selectParking],
    (parking)=>parking.parkingSpaces
)

export const selectParkingZone= createSelector(
    [selectParking],
    (parking)=>parking.parkingZone
)