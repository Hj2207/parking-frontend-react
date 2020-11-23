import React,{useState} from "react";
import axios from 'axios'
// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomButton from '../../components/custom-button/custom-button'
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: 50
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 250,
  },
  reports: {
    display: 'flex',
    marginBottom: 40
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  const [bookingDetails,setBookingDetails]=useState({
    bookingFrom:'2017-05-24T10:30',
    bookingTo:'2017-05-24T10:30'
 })
  const [reportDetails,setReportDetails]=useState([])
  const handleSubmit = async event => {
    event.preventDefault();
    console.log(bookingDetails);
    const data=await axios.post('http://localhost:5000/api/parking/parkingSpace/generateReport',bookingDetails)
    setReportDetails(data.data.data)
}
const handleChange = event => {
  const { name, value } = event.target;
  setBookingDetails({ ...bookingDetails,[name]: value});
}

  return (
    <div>
      <div className={classes.reports}>
      <form className={classes.container} onSubmit={handleSubmit} >
      <TextField
        id="datetime-local-from"
        label="From"
        name='bookingFrom'
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="datetime-local-to"
        label="To"
        name='bookingTo'
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <CustomButton onClick={handleSubmit} type='submit'>
        Generate Report
      </CustomButton>
    </form>
      </div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Parking Zone Report</h4>
            <p className={classes.cardCategoryWhite}>
              select to and from date
            </p>
          </CardHeader>
          <CardBody>
            {reportDetails!==[]?<Table
              tableHeaderColor="primary"
              tableHead={["Parking Zone", "Parking Space", "# of Vehicle Parked(0/1)"]}
              tableData={reportDetails}
            />:<div/>}
          </CardBody>
        </Card>
      </GridItem>
    
    </GridContainer>
    </div>
   
  );
}
