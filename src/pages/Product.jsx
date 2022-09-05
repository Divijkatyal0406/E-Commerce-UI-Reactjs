import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container=styled.div`

`;

const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection:"column",padding:"10px"})};
`;

const ImgContainer=styled.div`
    flex: 1;
`;

const Image=styled.img`
    width: 100%;
    height: 90vh;
    object-fit:cover;
    ${mobile({height:"30vh"})};
`;

const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 40px;
    ${mobile({padding: "0px 10px"})};
`;

const Title=styled.h1`
    font-weight: 200;
`;

const Desc=styled.p`
    margin: 20px 0px;
`;

const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer=styled.div`
    width: 40%;
    margin: 30px 0px;
    justify-content: space-between;
    display: flex;
`;

const Filter=styled.div`
    display: flex;
    align-items: center;

`;

const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;

`;

const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize=styled.select`
    margin: 20px 4px;
    padding: 5px;
    
`;

const FilterSizeOption=styled.option`

`;


const AddContainer=styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: "100%"})};  
`;

const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    display: flex;
    margin: 0px 5px;
    justify-content: center;
`;

const Button=styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: teal;
        color: white;
    }
`;


const Product = () => {
  return (
        <Container>
            <Navbar />
            <Announcement/>

            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Nike premium</Title>
                    <Desc>Nike red shoes premium limited edition</Desc>
                    <Price>Rs 4599</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption> 
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product