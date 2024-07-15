'use client'
import { vendorProduct } from '@/components/vendorProfileMenu/mock data/Data'
import { useState } from 'react'
import { CiEdit } from "react-icons/ci";
//Styles in global css

const Products = () => {
    const [click, setClick] = useState<number | null>(null);
    const [showEdit, setShowEdit] = useState(false)

    const handleClick = (ProductID: number) => {
        if (click === ProductID) {
            setClick(null);
            setShowEdit(false);
        } else {
            setClick(ProductID);
            setShowEdit(true);
        }
    }

    return (
        <table>
            <thead>
                <tr className='bg-gray-200 text-gray-600'>
                    <th>Product</th>
                    <th>Product name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock Qty</th>
                    <th>Rating</th>
                    <th>Date added</th>
                </tr>
            </thead>
            <tbody>
                {vendorProduct.map(product => (
                    <tr 
                        key={product.ProductID} 
                        className={`${click === product.ProductID ? 'bg-red-300' : ''} cursor-pointer`} 
                        onClick={() => handleClick(product.ProductID)}
                    >
                        <td>{product.ProductID}</td>
                        <td>{product.ProductName}</td>
                        <td>{product.Category}</td>
                        <td>{product.Description}</td>
                        <td>{product.Price}</td>
                        <td>{product.StockQty}</td>
                        <td>{product.Rating}</td>
                        <td>{product.DateAdded}</td>
                        <td>
                            {click === product.ProductID && showEdit && (
                                <CiEdit className="text-2xl text-red-800" />
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Products;
