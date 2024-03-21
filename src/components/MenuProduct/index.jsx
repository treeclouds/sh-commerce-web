import Button from '@mui/material/Button';
import React from "react";
import { WrapperHeader } from "./element";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Header = () => {
  return (
    <WrapperHeader >
      <Button size="large" startIcon={<QuestionAnswerOutlinedIcon />}variant="outlined" >Chat Seller</Button>
      <Button size="large" startIcon={<ShoppingCartOutlinedIcon />} variant="contained" color="secondary">Add to Cart</Button>
    </WrapperHeader>
  );
};

export default Header;
