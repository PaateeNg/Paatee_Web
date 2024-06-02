import ProductCard from "../../ProductCard/ProductCard"
import cake1 from './../../../../public/assets/img/cake1.png';
import cake2 from './../../../../public/assets/img/cake2.png';
import cake3 from './../../../../public/assets/img/cake3.jpg';

export default function Products() {
    return (
        <div className="flex flex-row ">
            <ProductCard/>
            <ProductCard img={cake1}  category="New"/>
            <ProductCard img={cake2}  />
            <ProductCard img={cake3}  category="Popular" categoryBg="gray-400"/>
        </div>
    )
}