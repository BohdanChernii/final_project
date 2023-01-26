import React from 'react';
import {Box, Typography} from "@mui/material";
import './paid.scss'
const Header = () => {
  return (
    <header className="paid__item paid__header">
      <a href={'#'} className="logo">BigBirdSPS</a>
      <Box className="authBar"
           sx={{
             display: 'flex',
             marginLeft: 'auto',
             gap:'10px'
           }}>
        <Typography sx={{
          fontWeight: 'bold',
          fontSize: '18px',
          lineHeight: '40px'
        }}>
          admin
        </Typography>
        <button className="authBar__btn" >
          Admin
        </button>
        <button className="authBar__btn">
          LogOut
        </button>
      </Box>
    </header>
  );
};

export default Header;