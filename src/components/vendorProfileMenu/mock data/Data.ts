type Product = {
    ProductID: number;
    ProductName: string;
    Category: string;
    Description: string;
    Price: number;
    StockQty: number;
    Rating: number;
    DateAdded: string;
}

type Orders = {
    OrderID: number;
    customerName: string;
    productID: string;
    productName: string;
    Qty: number;
    orderDate: string;
    totalPrice: number;
    address: string;
    status: 'Processing' | 'Shipped' | 'Delivered' ;
}[]

export const vendorProduct: Product[] = [
    {
        ProductID: 1,
        ProductName: 'Wireless 1',
        Category: 'Electronics',
        Description: 'Ergonomic wireless mouse with adjustable DPI',
        Price: 25.99,
        StockQty: 150,
        Rating: 4.5,
        DateAdded: '2024-01-15'
    },
    {
        ProductID: 2,
        ProductName: 'Wireless 2',
        Category: 'Electronics',
        Description: 'Ergonomic wireless mouse with adjustable DPI',
        Price: 25.99,
        StockQty: 150,
        Rating: 4.5,
        DateAdded: '2024-01-15'
    },
    {
        ProductID: 3,
        ProductName: 'Wireless 3',
        Category: 'Electronics',
        Description: 'Ergonomic wireless mouse with adjustable DPI',
        Price: 25.99,
        StockQty: 150,
        Rating: 4.5,
        DateAdded: '2024-01-15'
    },
    {
        ProductID: 4,
        ProductName: 'Wireless Mouse',
        Category: 'Electronics',
        Description: 'Ergonomic wireless mouse with adjustable DPI',
        Price: 25.99,
        StockQty: 150,
        Rating: 4.5,
        DateAdded: '2024-01-15'
    },
]

export const orders : Orders = [
    {
        OrderID: 1000,
        customerName: 'Courtney Henry',
        productID: 'Electronics',
        productName: 'Wireless Mouse',
        Qty: 1,
        orderDate: '2024-01-15',
        totalPrice: 25.99,
        address: 'address',
        status:  'Processing'
    },
    {
        OrderID: 1001,
        customerName: 'Wireless Mouse',
        productID: 'Electronics',
        productName: 'Ergonomic wireless mouse with adjustable DPI',
        Qty: 2,
        orderDate: '2024-01-15',
        totalPrice: 95.99,
        address: 'address',
        status:  'Delivered'
    },
    {
        OrderID: 1002,
        customerName: 'Wireless Mouse',
        productID: 'Electronics',
        productName: 'Ergonomic wireless mouse with adjustable DPI',
        Qty: 7,
        orderDate: '2024-01-15',
        totalPrice: 95.99,
        address: 'address',
        status:  'Shipped'
    },
    {
        OrderID: 1003,
        customerName: 'Wireless Mouse',
        productID: 'Electronics',
        productName: 'Ergonomic wireless mouse with adjustable DPI',
        Qty: 8,
        orderDate: '2024-01-15',
        totalPrice: 95.99,
        address: 'address',
        status:  'Delivered'
    },
    {
        OrderID: 1004,
        customerName: 'Wireless Mouse',
        productID: 'Electronics',
        productName: 'Ergonomic wireless mouse with adjustable DPI',
        Qty: 2,
        orderDate: '2024-01-15',
        totalPrice: 95.99,
        address: 'address',
        status:  'Shipped'
    },
]