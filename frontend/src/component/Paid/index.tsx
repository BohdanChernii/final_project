import React from 'react';

import './paid.scss'
import {Box} from "@mui/material";
import Header from './Header'
import Footer from "./Footer";
import DataGridDemo from "../Clients";
const Paid = () => {
  return (
    <Box className={'paid'}>
      <Header/>
      <DataGridDemo/>
      <Footer/>
    </Box>
  );
};

export default Paid;