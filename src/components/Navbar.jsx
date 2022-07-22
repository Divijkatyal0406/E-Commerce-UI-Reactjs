import {Search,ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height:60px;
`

const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items: center;
`

const Language=styled.span`
    font-size:14;
    cursor:pointer;
`

const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Center=styled.div`
    flex:1;
    display: flex;
    justify-content:center;
`
const Right=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-evenly
`

const SearchConatiner=styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgrey;
    margin-left: 25px;
    padding: 5px;
`

const Input=styled.input`
    border: none;
`
const Logo=styled.h1`
    font-weight:bold;
`

const MenuItem=styled.div`
    font: 14px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchConatiner>
                    <Input/>
                    <Search style={{color:"gray",fontSize:16}}/>
                </SearchConatiner>
            </Left>
            <Center><Logo>ShopKart</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar