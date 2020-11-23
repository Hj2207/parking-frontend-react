import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Initialize() {
  const classes = useStyles();
  const handleAddParkingZoneData= async event=>{
    event.preventDefault();
    await axios.get('http://localhost:5000/api/parking/initialize/parkingZoneData')
    alert('Data initialized A B C as parking zones.')
  }
  const handleAddParkingSpaceData= async event=>{
    event.preventDefault();
    await axios.get('http://localhost:5000/api/parking/initialize/parkingSpacesData')
    alert('Data initialized: Parking Spaces for every zone .')
  }
  const handleAllocate= async event=>{
    event.preventDefault();
    await axios.put('http://localhost:5000/api/parking/initialize/deallocate')
    alert('Data deallocated.')
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Parking Zone Data</h4>
              <p className={classes.cardCategoryWhite}>Three Parking Zones: A, B, C</p>
            </CardHeader>
            <CardBody>
              
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleAddParkingZoneData}>Add</Button>
            </CardFooter>
          </Card>
        </GridItem>   
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Parking Space Data</h4>
              <p className={classes.cardCategoryWhite}>30 parking slots</p>
            </CardHeader>
            <CardBody>
              
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleAddParkingSpaceData}>Add</Button>
            </CardFooter>
          </Card>
        </GridItem>   
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Allocation</h4>
              <p className={classes.cardCategoryWhite}>Remove all transactional data</p>
            </CardHeader>
            <CardBody>
              
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleAllocate}>Remove</Button>
            </CardFooter>
          </Card>
        </GridItem>   
      </GridContainer>
    </div>
  );
}
