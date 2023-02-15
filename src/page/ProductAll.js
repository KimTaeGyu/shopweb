import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query,setQuery] = useSearchParams(); //쿼리값을 읽어오는 함수

  const getProducts= async()=>{
    let searchQuery=query.get("q") || "";
    console.log(searchQuery)
    let url = `https://my-json-server.typicode.com/KimTaeGyu/shopweb/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }
  //json.server에서 제공해주는 기능 / 쿼리값을 보내주면 search해주는 기능이있음.

  useEffect(()=>{
    getProducts()
  },[query])
  //useEffect 특성상 프로젝트 시작후 딱 한번 render를 시켜준다
  // 그렇기 때문에 query값이 바뀔 때 마다 render를 시켜줘라 라고 호출하는 함수.
  return (
    <div>
      <Container>
        <Row>
          {productList.map(menu=><Col lg={3}><ProductCard item={menu}/></Col>)}
        </Row>
      </Container>
        
    </div>
  )
}

export default ProductAll