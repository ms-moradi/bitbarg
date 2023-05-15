import React, {useState} from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../../styles/styleButton";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import logo from 'assets/image/header-logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import WalletIcon from '@mui/icons-material/Wallet';
import InsertChartIcon from '@mui/icons-material/InsertChart';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:380,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p:1,
}

const Header =()=>{
    return(
        <>
        </>
    )
}

export default Header;
