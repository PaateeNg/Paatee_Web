import Image from "next/image";
import React from "react";
import cake1 from "../../../public/assets/img/cake1.png";
import cart from "../../../public/assets/img/shopping-cart.png";
import { data } from "../data";
import ProductCardMain from "./ProductCardMain";
import Link from "next/link";

const ProductCard = () => {
	return (
		<>	
		<Link href='/product/product-detail'>
			<div className="flex flex-col md:flex-row hover:cursor-pointer">
				{data.map((d) => (
					<ProductCardMain
						key={d.id}
						price={d.price}
						image={d.image}
						label={d.label}
						tag={d.tag}
                        
					/>
				))}
			</div>
		</Link>
		</>
	);
};

export default ProductCard;
