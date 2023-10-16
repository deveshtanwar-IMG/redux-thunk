import {useDispatch} from 'react-redux'
import '../App.css'
import { addtoCart } from '../store/slices/cartSlice'
import { fetchProducts } from '../store/slices/productSlice'
import { useEffect } from 'react'

const Page = () => {

  const dispatch = useDispatch();

  const clickHandler = () =>{
    dispatch(addtoCart("hello"));
  }

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  return (
    <div>
        <h1>Hello</h1>
        <button onClick={clickHandler}>Redux</button>
      </div>
  )
}

export default Page;