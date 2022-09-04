import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components';

const Container=styled.div`
     
`;

const Wrapper=styled.div`
    padding: 20px;
    text-align: cnter;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin: 5px;
`;

const Title=styled.h1`
    text-align: center;
    padding: 10px;
`;

const Top=styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    justify-content: space-between;
`;

const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer ;
    border:${props=>props.type==="filled" && "none"};
    background-color:${props=>props.type==="filled" ? "black":"transparent"};
    color:${props=>props.type==="filled" && "white"};
`;

const Bottom=styled.div`
     display: flex;
     justify-content: space-between;
`;

const TopTexts=styled.div`
     
`;

const TopText=styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Info=styled.div`
    flex: 3;
`;

const Summary=styled.div`
    flex: 1;
    background-color: red;
`;

const Product=styled.div`
    display: flex;
    justify-content: space-between;
`; 

const ProductDetail=styled.div`
    flex:2;
`;

const Image =styled.img`
    width: 200px;
`;

const ProductName=styled.span`
margin: 2px;
`;


const Details=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    /* padding: 20px; */
`;

const PriceDetail=styled.div`
    flex:1;
    display: flex;
`;


const ProductSize=styled.span`
margin: 2px;
`;

const ProductColor=styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductId=styled.span`
    margin: 2px;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>SHOPPING BAG(2)</TopText>
                    <TopText>WISH LIST(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                            <Details>
                                <ProductName><b>Product: </b>Nike Tshirt</ProductName>
                                <ProductId><b>Id: </b>NAS345</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size: </b>10</ProductSize>
                            </Details>
                            </ProductDetail>
                        <PriceDetail>
                            Price: 
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>Summary</Summary>
            </Bottom> 
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart