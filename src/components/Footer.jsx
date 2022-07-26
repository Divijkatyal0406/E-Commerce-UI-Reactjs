import { Facebook, Instagram, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive';

const Container=styled.div`
    display: flex;
    padding: 10px;
    background-color: lightgoldenrodyellow;
    ${mobile({flexDirection:"column"})};
`;
const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Logo=styled.div`
    font-weight: 900;
    font-size: 20px;
`;

const Desc=styled.div`
    margin: 20px 0px;
`;
const SocialContainer=styled.div`
    display: flex;
`;

const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: black;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center=styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})};
`;

const Title=styled.h3`

`;

const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right=styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment=styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHOPY.</Logo>
            <Desc>Online shopping app</Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>
                <SocialIcon>
                    <Twitter />
                </SocialIcon>
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Populars</ListItem>
                <ListItem>New Launches</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Phone></Phone>93XXXXXXXX</ContactItem>
            <ContactItem><Room></Room>Gurgaon, Haryana</ContactItem>
            <Payment src="https://media.horusrc.com/wysiwyg/pay_by_cards.jpg"></Payment>
        </Right>
    </Container>
  )
}

export default Footer