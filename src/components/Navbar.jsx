import {Search,ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'; 
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Container=styled.div`
    height:60px;
    /* @media only screen and (max-width:380px){
            display: none;
    } */
    ${mobile({height:"50px"})}
`;

const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})};
`;

const Language=styled.span`
    font-size:14;
    cursor:pointer;
    ${mobile({display:"none"})};
`;

const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Center=styled.div`
    flex:1;
    display: flex;
    justify-content:center;
`;
const Right=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    ${mobile({flex:2,justifyContent:"center"})};
`;

const SearchConatiner=styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgrey;
    margin-left: 25px;
    padding: 5px;
`;

const Input=styled.input`
    border: none;
    ${mobile({fontSize:"5px"})}
`;
const Logo=styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`;

const MenuItem=styled.div`
    font: 14px;
    cursor: pointer;
    ${mobile({fontSize:"12px",marginLeft:"10px"})};
`;

const Navbar = () => {
    const quant=useSelector(state=>state.cart);
    console.log("heheheh")
    console.log(quant);

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchConatiner>
                    <Input placeholder='search'/>
                    <Search style={{color:"gray",fontSize:16}}/>
                </SearchConatiner>
            </Left>
            <Center><Logo>ShopKart</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quant.quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar