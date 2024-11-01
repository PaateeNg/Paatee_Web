import Details from '../Details'
import Products from '../Products'
import Orders from '../Orders'
import Bookings from '../Bookings'
import Transactions from '../Transactions'




type menuItems = {
    id: string;
    label: string;
    content: JSX.Element;
}

export const menuItems: menuItems[] = [
    {id: 'menu1', label: 'Details', content: <Details/>},
    {id: 'menu2', label: 'Product', content: <Products/>},
    // {id: 'menu3', label: 'Orders', content: <Orders/>},
    // {id: 'menu4', label: 'Bookings', content: <Bookings/>},
    // {id: 'menu5', label: 'Transactions', content: <Transactions/>}
  ]