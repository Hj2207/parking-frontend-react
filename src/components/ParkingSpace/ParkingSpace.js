import React from 'react';
import './ParkingSpace.css';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

const ParkingSpace=({parking_space_title,parking_zone_id,vehicleNumber})=>{
  return(
    <div className='parkingSpace'>
        <CardIcon color={vehicleNumber===undefined||vehicleNumber===null?'success':'danger'}>
                <DirectionsCarIcon />
        </CardIcon>
    <div>
    <p>{parking_space_title}</p>
    </div>
    <CardFooter>
                {vehicleNumber===undefined||vehicleNumber===null?'Available':vehicleNumber}
    </CardFooter>
    </div>
  );
}
export default ParkingSpace;
