import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id}=useParams()
  const [product,setProduct]=useState(null);
  const getProductDetail=async()=>{
    let url =`https://my-json-server.typicode.com/KimTaeGyu/shopweb/products/${id}`;
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <div>
        <Container>
          <Row>
            <Col className='product-img'>
              <img src={product?.img}/>
            </Col>
            <Col>
              <div><h3>{product?.title}</h3></div>
              <div><h4>{product?.price}원</h4></div>
              <div>{product?.new == true?"신제품":''}</div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default ProductDetail