'use client'
import { vendorProduct } from '@/components/vendorProfileMenu/mock data/Data'
import { useState } from 'react'
//Styles in global css

const Products = () => {
    const [editProductID, setEditProductID] = useState<number | null>(null);

    const onEdit = (productID: number) => {
        setEditProductID(prevID => (prevID === productID ? null : productID));
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
                        className={`${editProductID === product.ProductID ? 'bg-red-300' : ''}`} 
                        onClick={() => onEdit(product.ProductID)}
                    >
                        <td>{product.ProductID}</td>
                        <td>{product.ProductName}</td>
                        <td>{product.Category}</td>
                        <td>{product.Description}</td> {/* Fixed typo: Descriptio to Description */}
                        <td>{product.Price}</td>
                        <td>{product.StockQty}</td>
                        <td>{product.Rating}</td>
                        <td>{product.DateAdded}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Products;
