import React from 'react'

type Menu = {
    setShowBackgroundComponent: React.Dispatch<React.SetStateAction<boolean>>;
  }
const AddProduct = ({setShowBackgroundComponent}: Menu ) => {

    const handleCloseAdd = () => {
        setShowBackgroundComponent(false)
    }
    
  return (
    <form className='border max-w-md flex flex-col gap-5 py-5 px-2 rounded-xl bg-white'>
        <div className='flex justify-between items-center'>
            <h3 className='text-lg'>Create new product</h3>
            <div onClick={handleCloseAdd}>X</div>
        </div>

        <div className='text-center bg-red-200 p-7'>
            <div>icon</div>
            <p>Upload image</p>
            <p>Drag and drop a file or <span>choose file</span></p>
        </div>

        <div className='flex flex-col gap-5'>
            <div className='flex'> 
                <div>
                    <label>Product name</label>
                    <input type="text" placeholder='Product name' className='p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12' />
                </div>
                <div>
                    <label>Category</label>
                    <input type="text" placeholder='Select Category' className='p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12' />
                </div>
            </div>
            <div className='flex flex-col'>
                <label>Desciption</label>
                <textarea name="" id=""  placeholder='Enter a description for your product' className='p-2 mt-2 border-gray-400 border rounded-md outline-none'/>
            </div>
            <div className='flex'>
                <div className='flex flex-col'>
                    <label>Price</label>
                    <input type="number" placeholder='0' className='p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12' />
                </div>
                <div className='flex flex-col'>
                    <label>product quality</label>
                    <input type="number" placeholder='0' className='p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12'/>
                </div>
            </div>
        </div>
        <div>
        <button type='submit' className='bg-red-500 w-full p-2 rounded-2xl text-white'>Add Product</button>
        </div>
    </form>
  )
}

export default AddProduct