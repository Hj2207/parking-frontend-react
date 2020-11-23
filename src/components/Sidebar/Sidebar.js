/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import {signOutSuccess} from '../../redux/user/user.action'
// core components
import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

 function Sidebar(props) {
  const classes = useStyles();
  
  const {logo, image, logoText,currentUser,signOutSuccess } = props;
  var links = (
    <List className={classes.list}>
      {currentUser.userType==='Booking Counter Agent'?(<NavLink
            to={'/admin' + '/user'}
            className={classes.item}
            activeClassName="active"
          >
            <ListItem button className={classes.itemLink}>
                <Icon
                  className={classNames(classes.itemIcon, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  <Person/>
                </Icon>
              <ListItemText
                primary={'Initialize'}
                className={classNames(classes.itemText, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>):
          <div></div>
          }
          <NavLink
            to={'/admin' + '/dashboard'}
            className={classes.item}
            activeClassName="active"
          >
            <ListItem button className={classes.itemLink}>
                <Icon
                  className={classNames(classes.itemIcon, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  <Dashboard/>
                </Icon>
              <ListItemText
                primary={'Dashboard'}
                className={classNames(classes.itemText, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
          <NavLink
            to={'/admin' + '/table'}
            className={classes.item}
            activeClassName="active"
          >
            <ListItem button className={classes.itemLink}>
                <Icon
                  className={classNames(classes.itemIcon, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {"content_paste"}
                </Icon>
              <ListItemText
                primary={'Reports'}
                className={classNames(classes.itemText, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
          <NavLink
            to={'/material-dashboard-react'}
            className={classes.item}
            activeClassName="active"
          >
            <ListItem button onClick={signOutSuccess} className={classes.itemLink}>
              <ListItemText
                primary={'Sign-out'}
                className={classNames(classes.itemText, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="#"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })} 
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
         
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps=dispatch=>({
  signOutSuccess: ()=>dispatch(signOutSuccess())
});

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
