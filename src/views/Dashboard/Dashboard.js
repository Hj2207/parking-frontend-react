import React,{useEffect} from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ParkingSpaceList from "components/PrakingSpaceList/ParkingSpaceList"
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectParkingSpaces, selectParkingZone } from '../../redux/parking/parking.selectors'
import {setParkingZone,parkingDataFetchStartAsync} from '../../redux/parking/parking.actions'
import './Dashboard.css'
import BookParkingSpace from '../../components/BookParkingSpace/bookparkinspace.component'
import ReleaseParkingSpace from '../../components/ReleaseParkinSpace/release-parking-form.component'
const useStyles = makeStyles(styles);

function Dashboard({currentUser,parkingSpaces,parkingZone,setParkingZone,parkingDataFetchStartAsync}) {
  const classes = useStyles();
  useEffect(() => {
    parkingDataFetchStartAsync(parkingZone)
    }, [parkingZone])


  const handleClick= event=>setParkingZone(event.currentTarget.value)
  return (
    <div>
      <div className="dashboard__button">
      <Button color="info" value="A" onClick={handleClick}>A</Button>
      <Button color="info" value="B" onClick={handleClick}>B</Button>
      <Button color="info" value="C" onClick={handleClick}>C</Button>
      </div>
        {parkingSpaces!==null? <ParkingSpaceList parkingSpaces={parkingSpaces}/>:''}
      {currentUser.userType==='Booking Counter Agent'?(<GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Book Parking Space</h4>
              <p className={classes.cardCategoryWhite}>
                Enter Details
              </p>
            </CardHeader>
            <CardBody>
              {parkingSpaces!==null? <BookParkingSpace />:'' }
            </CardBody>
          </Card>
        </GridItem>
       
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Release Parking Space</h4>
              <p className={classes.cardCategoryWhite}>
               Enter Details
              </p>
            </CardHeader>
            <CardBody>
      {parkingSpaces!==null? <ReleaseParkingSpace />:'' }
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>):(<div></div>)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  parkingSpaces: selectParkingSpaces,
  parkingZone: selectParkingZone,
  currentUser: selectCurrentUser
});

const mapDispatchToProps=dispatch=>({
  setParkingZone: (parkingZone)=>dispatch(setParkingZone(parkingZone)),
  parkingDataFetchStartAsync: (parkingZone)=>dispatch(parkingDataFetchStartAsync(parkingZone))
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
