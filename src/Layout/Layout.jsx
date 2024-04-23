import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div className=''>
        <div className=' px-4 flex gap-3 items-center border-b py-4 shadow-xl'>
            <h3 className='bg-violet-600 w-8 h-8 text-xl font-bold text-white flex justify-center items-center rounded-full'>G</h3>
        <h3 className='text-xl font-semibold text-violet-600'>CRUD Food</h3>
        </div>
    <div className='flex gap-3 px-4 py-6'>
        <div className='w-2/12'>
        <Header/>
        </div>
        <div className='w-10/12'>
      <Outlet/>
        </div>
        </div>
    </div>
  )
};

export default Layout;