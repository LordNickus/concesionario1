import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import DirectionsCarTwoToneIcon from '@material-ui/icons/DirectionsCarTwoTone';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import NotificationsTwoToneIcon from '@material-ui/icons/NotificationsTwoTone';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
});

export default function BottomNav() {
  const classes = useStyles();
  

  return (
      <div className={classes.root}>
    <IconButton color="primary" aria-label="Personaliza"><DirectionsCarOutlinedIcon /></IconButton>
    <IconButton color="primary" aria-label="Mapa"><RoomTwoToneIcon /></IconButton>
    <IconButton color="primary" aria-label="Usuario"><PermIdentityOutlinedIcon /></IconButton>
    <IconButton color="primary" aria-label="Buscar"><SearchTwoToneIcon /></IconButton>
    
    
    
   
    </div>
    //   <BottomNavigation value={value}
    //   onChange={(event, newValue) => {
    //     setValue(newValue);
    //   }}
    //   showLabels
    //   className={classes.root}>
    
    //   <BottomNavigationAction label="Personaliza" icon={<DirectionsCarOutlinedIcon />} />
    //   <BottomNavigationAction label="Mapa"icon={<RoomOutlinedIcon />}  />
    //   <BottomNavigationAction label="Usuario" icon={<PermIdentitySharpIcon />}  />
    //   <BottomNavigationAction label="Buscar"  icon={<SearchOutlinedIcon/>} />
    //   {/* Ejemplo con etiqueta<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
    // </BottomNavigation>
  );
}