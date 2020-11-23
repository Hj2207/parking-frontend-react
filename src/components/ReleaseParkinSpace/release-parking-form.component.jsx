import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button'
/*  import './bookparkingspace.styles.scss'  */
import SlotDropdown from '../slot-dropdown/slot-dropdown.component'
import { createStructuredSelector } from 'reselect'
import {parkingDataFetchStartAsync} from '../../redux/parking/parking.actions'
import { selectParkingSpaces, selectParkingZone } from '../../redux/parking/parking.selectors'

const ReleaseParkingSpace =({parkingZone,parkingSpaces,parkingDataFetchStartAsync})=> {
    const [bookingDetails,setBookingDetails]=useState({
                                                       parkingSpace:(parkingSpaces[0]!==undefined?parkingSpaces[0].parking_space_title:'A01'),
                                                       vehicleNumber:'',
                                                    })
    const handleSubmit = async event => {
            event.preventDefault();
            console.log(bookingDetails);
            await axios.put('http://localhost:5000/api/parking/parkingSpace/release',bookingDetails)
            parkingDataFetchStartAsync(parkingZone)
        }

    const handleChange = event => {
            const { name, value } = event.target;
            setBookingDetails({ ...bookingDetails,[name]: value,parkingZone});
        }
   
        return (
            <div >
                <span>Select a slot from a parking zone: {parkingZone}</span>

                <form onSubmit={handleSubmit}>
                        <SlotDropdown
                        name='parkingSpace'
                        handleChange={handleChange}
                        value={bookingDetails.parkingSpace}
                        label='Parking Space'
                        options={parkingSpaces}
                        required />
                    <FormInput
                        name='vehicleNumber'
                        type='text'
                        handleChange={handleChange}
                        value={bookingDetails.vehicleNumber}
                        label='Vehicle Number'
                        required />
                    <div className='buttons'>
                        <CustomButton onClick={handleSubmit} type='submit'>
                            Release Parking Space
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

    const mapStateToProps = createStructuredSelector({
        parkingSpaces: selectParkingSpaces,
        parkingZone: selectParkingZone
      });

    const mapDispatchToProps=dispatch=>({
        parkingDataFetchStartAsync: (parkingZone)=>dispatch(parkingDataFetchStartAsync(parkingZone))
      });

export default connect(mapStateToProps,mapDispatchToProps)(ReleaseParkingSpace);