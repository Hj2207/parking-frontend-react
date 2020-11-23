import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button'
import './bookparkingspace.styles.scss' 
import SlotDropdown from '../slot-dropdown/slot-dropdown.component'
import {parkingDataFetchStartAsync} from '../../redux/parking/parking.actions'
import { createStructuredSelector } from 'reselect'
import { selectParkingSpaces, selectParkingZone } from '../../redux/parking/parking.selectors'

const BookParkingSpace =({parkingZone,parkingSpaces,parkingDataFetchStartAsync})=> {
    const [bookingDetails,setBookingDetails]=useState({
                                                       parkingSpace:(parkingSpaces[0]!==undefined?parkingSpaces[0].parking_space_title:'A01'),
                                                       vehicleNumber:'',
                                                       bookingFrom:'2017-05-24T10:30',
                                                       bookingTo:'2017-05-24T10:30'
                                                    })
    const handleSubmit = async event => {
            event.preventDefault();
            await axios.put('http://localhost:5000/api/parking/parkingSpace/book',bookingDetails)
            parkingDataFetchStartAsync(parkingZone)
        }

    const handleChange = event => {
            const { name, value } = event.target;
            setBookingDetails({ ...bookingDetails,[name]: value,parkingZone});
        }
   
        return (
            <div className='bookParkingSpace'>
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
                    <TextField
                        id="datetime-local-from"
                        name="bookingFrom"
                        label="From"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className='textField'
                        onChange={handleChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        id="datetime-local-to"
                        name="bookingTo"
                        label="To"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        onChange={handleChange}
                        className='textField'
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    
                    <div className='buttons'>
                        <CustomButton onClick={handleSubmit} type='submit'>
                            Book Parking Space
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

export default connect(mapStateToProps,mapDispatchToProps)(BookParkingSpace);