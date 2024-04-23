import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Helper from '../utility/Helper'
import { Link } from 'react-router-dom'

const ReadFood = () => {
    const [readProduct,setReadProduct] = useState([])
    const [refresh,setRefresh] = useState(true)

    useEffect(()=>{
        (async()=>{
           await fetchProduct()
        })()
    },[refresh])
    const fetchProduct =async()=>{
        const res = await axios.get(`${Helper.API_BASE}/read`)
        const data = await res.data['data']
        setReadProduct(data)
    }

    const handleDelete = (id)=>{
        axios.get(`${Helper.API_BASE}/delete/${id}`)
        .then((res)=>{
            setRefresh(false)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
      <h3 className='text-xl font-semibold capitalize '>read food item</h3>

      <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {
            readProduct.length!==0 &&
            readProduct.map((item)=>{
                return(
                    <div key={item['_id']} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-300">
                    <div className='relative'>
                    <a href="#">
                        <img className="rounded-t-lg h-60" src={item['Img']}  width={400} alt="" />
                    </a>
                    <span className='absolute top-4 right-5 bg-violet-500 text-sm px-3 py-1 rounded text-white'>TK: {item['Price']}.00</span>
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-gray-900">{item['ProductName']}</h5>
                        </a>
                        <div className='flex gap-10'>
                        <Link to={`/edit/${item['_id']}`} className="inline-flex items-center px-3 py-2 text-base font-medium text-center text-green-600">
                           Edit
                        </Link>
                        <button onClick={()=>handleDelete(item['_id'])} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-500 rounded ">
                           Delete
                        </button>
                        </div>
                    </div>
                    </div>
                )
            })
        }


        
      </div>
    </div>
  )
}

export default ReadFood
