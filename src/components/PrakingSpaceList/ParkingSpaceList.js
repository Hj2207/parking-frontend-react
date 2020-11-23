import React from 'react';
import ParkingSpace from '../ParkingSpace/ParkingSpace.js';

const ParkingSpaceList=({parkingSpaces})=>{
  return (
    <div>
    {parkingSpaces!==null?
      parkingSpaces.map(parkingSpace=>{
        return(
          <ParkingSpace
          key={parkingSpace._id}
          parking_zone_id={parkingSpace.parking_zone_id}
          parking_space_title={parkingSpace.parking_space_title}
          vehicleNumber={parkingSpace.vehicleNumber}
          />
        )
      }):<div/>
    }
    </div>
  );
}
export default ParkingSpaceList;