import React, { useState } from 'react'
import axios from 'axios';
import Helper from '../utility/Helper';
import { useNavigate } from 'react-router-dom';
const CreateFood = () => {
  const navigate = useNavigate()
  const [productList,setProductList] = useState({
    ProductName:'',
    ProductCode:'',
    Img:'',
    Category:'',
    Qty:'',
    Price:'',
  })

  const InputValue =(e)=>{
    const key = e.target.name
    const value = e.target.value
    setProductList(productList=>({
      ...productList,
      [key]:value
    }))

  }
const handleFrom =(e)=>{
  e.preventDefault()
   axios.post(`${Helper.API_BASE}/create`,productList)
  .then((res)=>{
    console.log(res)
    navigate('/')
    console.log('successfully create data')
  }).catch((err)=>{
    console.log(err)
  })

}
  return (
    <div className='w-8/12'>
      <h3 className='text-2xl font-semibold' >Create Food Item</h3>
      <div className='mt-8'>
        <form action="">
            <div className='flex gap-8' >
                <div>
                    <label htmlFor="">Food Name</label>
                    <input type="text" name='ProductName' onChange={(e)=>InputValue(e)} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Add Food Name' />
                </div>
                <div>
                    <label htmlFor="">Food Code</label>
                    <input type="text" name='ProductCode' onChange={(e)=>InputValue(e)} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Add Food Code' />
                </div>
                <div>
                    <label htmlFor="">Food Image</label>
                    <input type="text" name='Img' onChange={(e)=>InputValue(e)} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Add Food Image' />
                </div>
            </div>
            <div className='flex gap-8 mt-8' >
                <div>
                    <label htmlFor="">Food Category</label>
                    <input type="text" name='Category' onChange={(e)=>InputValue(e)} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder=' Category' />
                </div>
                <div>
                    <label htmlFor="">QTY</label>
                    <input type="text" name='Qty' onChange={(e)=>InputValue(e)} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Quantity' />
                </div>
                <div>
                    <label htmlFor=""> Price</label>
                    <input type="text" name='Price' onChange={(e)=>InputValue(e)} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Price' />
                </div>
            </div>
            <button  onClick={handleFrom} type='submit' className='capitalize text-base bg-violet-600 px-8 py-2 text-white rounded hover:bg-pink-500 mt-8'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateFood
