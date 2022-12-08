import React from 'react'
import styled  from 'styled-components';
import {products} from '../data';
import Product from './Product';
import {useState,useEffect} from 'react';
import axios from 'axios';

const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  const [products, setproducts] = useState([]);
  const [filteredProducts, setFilteredproducts] = useState([]);

  useEffect(() => {
    const getProduct=async ()=>{
      try {
        const res=await axios.get(`http://localhost:5000/api/products`)
        console.log(res.data);
        setproducts(res.data);
      } catch (error) {
        
      }
    }
    getProduct();
  }, [cat])

  useEffect(() => {
    cat &&
    setFilteredproducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [cat,filters,products])
  

  return (
    <Container>
        {filteredProducts.map((item)=>{
            return <Product item={item} key={item.id}></Product>
        })}
    </Container>
  )
}

export default Products