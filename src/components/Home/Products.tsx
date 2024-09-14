import ProductCard from "../ProductCard/ProductCard"
import cake1 from './../../../../public/assets/img/cake1.png';
import cake2 from './../../../../public/assets/img/cake2.png';
import cake3 from './../../../../public/assets/img/cake3.jpg';

export default function Products() {
    return (
        <div className="flex flex-row ">
            <div className='flex flex-col justify-between p-5 w-[360px] border-[#98A2B3] overflow-hidden' style={{"borderWidth": "0.2px"}}>
                <div>
                    <h3 className="text-2xl font-bold">FAVOURITES</h3>
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!</p>
                </div>

                <p>SEE ALL</p>
            </div>
            <ProductCard img={cake1}  category="New"/>
            <ProductCard img={cake2}  />
            <ProductCard img={cake3}  category="Popular" categoryBg="gray-400"/>
        </div>
    )
}