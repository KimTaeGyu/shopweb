import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {

    const navigate = useNavigate();
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
    //카드를 클릭했을 때 onclick showDetail 함수를 실행해라
    // navigate로 상품을 보여주되! item의 id값 파라미터값을 동적으로 받아서 경로를 맞게 틀어라

  return (
    <div onClick={showDetail}>
        <img className='card' width={265} height={397} src={item?.img}/>
        <div><h5>{item?.title}</h5></div>
        <div>{item?.price}원</div>
        <div>{item?.new == true?"신제품":''}</div>
        <div>{item?.choice == true?"Seleb Pick":''}</div>
    </div>
  )
}

export default ProductCard