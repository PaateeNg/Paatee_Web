'use client'

import { useState } from "react"
import { orders } from "../mock data/Data"
import { FaNairaSign } from "react-icons/fa6";

const Orders = () => {
    const [statusColor, setStatusColor] = useState('')

    
    return <table>
        <thead>
        <tr className='bg-gray-200 text-gray-600'>
                    <th>Order ID</th>
                    <th>Customer name</th>
                    <th>Product ID</th>
                    <th>Product name</th>
                    <th>Qty</th>
                    <th> Order date</th>
                    <th>Total price</th>
                    <th>Shipping address</th>
                    <th>Order Status </th>
                </tr>
        </thead>

        <tbody>
        {orders.map((order, index) => (
                    <tr 
                        key={index} 
                        // className={`${editProductID === product.ProductID ? 'bg-red-300' : ''}`} 
                        // onClick={() => onEdit(product.ProductID)}
                    >
                        <td>{order.OrderID}</td>
                        <td>{order.customerName}</td>
                        <td>{order.productID}</td>
                        <td>{order.productName}</td> {/* Fixed typo: Descriptio to Description */}
                        <td>{order.Qty}</td>
                        <td>{order.orderDate}</td>
                        <td className="flex items-center gap-1"> <FaNairaSign />{order.totalPrice}</td>
                        <td>{order.address}</td>
                        <td
                        className={`${order.status === 'Processing' ? 'text-yellow-600 ' 
                            : order.status === 'Delivered' ? 'text-green-600' : ''} `}
                        >{order.status}</td>
                    </tr>
                ))}
        </tbody>
    </table>
}

export default Orders