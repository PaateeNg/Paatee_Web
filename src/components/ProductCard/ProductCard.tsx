import Image from "next/image";
import React from "react";
import cake1 from "../../../public/assets/img/cake1.png";
import cart from "../../../public/assets/img/shopping-cart.png";
import { data } from "../data";
import ProductCardMain from "./ProductCardMain";

const ProductCard = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row">
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
		</>
	);
};

export default ProductCard;
