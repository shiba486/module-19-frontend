import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Helper from '../utility/Helper'

const UpdateFood = ({id}) => {
    const navigate = useNavigate()
    const [values,setValues] = useState({
        id:id,
      ProductName:'',
      ProductCode:'',
      Img:'',
      Category:'',
      Qty:'',
      Price:'',
    })
  
    useEffect(()=>{
        axios.get(`${Helper.API_BASE}/read/${id}`)
        .then((res)=>{
            console.log(res.data)
            setValues({
                ...values,
                ProductName:res.data['data'].ProductName,
                ProductCode:res.data['data'].ProductCode,
                Img:res.data['data'].Img,
                Category:res.data['data'].Category,
                Qty:res.data['data'].Qty,
                Price:res.data['data'].Price,
            })
        }).catch((err)=>{
            console.log(err)
        })
    },[])

  const handleFrom =(e)=>{
    e.preventDefault()
    axios.post(`${Helper.API_BASE}/update/${id}`,values)
   .then((res)=>{
     console.log(res)
     navigate('/')
     console.log('successfully create data')
   }).catch((err)=>{
     console.log(err)
   })
  
  }
    console.log(id)
  return (
    <div className='w-8/12'>
      <h3 className='text-2xl font-semibold' >Update Food Item</h3>
      <div className='mt-8'>
        <form action="">
            <div className='flex gap-8' >
                <div>
                    <label htmlFor="">Food Name</label>
                    <input type="text" name='ProductName' value={values.ProductName} onChange={(e)=>setValues({...values,ProductName:e.target.value})} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Add Food Name' />
                </div>
                <div>
                    <label htmlFor="">Food Code</label>
                    <input type="text" name='ProductCode' value={values.ProductCode}  onChange={(e)=>setValues({...values,ProductCode:e.target.value})} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Add Food Code' />
                </div>
                <div>
                    <label htmlFor="">Food Image</label>
                    <input type="text" name='Img' value={values.Img}  onChange={(e)=>setValues({...values,Img:e.target.value})} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Add Food Image' />
                </div>
            </div>
            <div className='flex gap-8 mt-8' >
                <div>
                    <label htmlFor="">Food Category</label>
                    <input type="text" name='Category' value={values.Category}  onChange={(e)=>setValues({...values,Category:e.target.value})} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder=' Category' />
                </div>
                <div>
                    <label htmlFor="">QTY</label>
                    <input type="text" name='Qty' value={values.Qty} onChange={(e)=>setValues({...values,Qty:e.target.value})} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Quantity' />
                </div>
                <div>
                    <label htmlFor=""> Price</label>
                    <input type="text" name='Price' value={values.Price} onChange={(e)=>setValues({...values,Price:e.target.value})} className='mt-2 w-full outline-none border border-indigo-400 rounded p-2'  placeholder='Price' />
                </div>
            </div>
            <button  onClick={handleFrom} type='submit' className='capitalize text-base bg-violet-600 px-8 py-2 text-white rounded hover:bg-pink-500 mt-8'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateFood
