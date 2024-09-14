import Image from "next/image";
import React from "react";

const Testimonial = () => {
	return (
		<>
			<div className="p-8 border shadow h-[355px] w-[450px] flex flex-col justify-center " style={{borderRadius: "20px"}}>
				<div>
					<span className="font-bold text-lg">“BRIX Templates is the #1”</span> <br />
					<span className="text-gray-500">
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat
						aute irure sint amet occaecat cupidatat non proident
					</span>
				</div>
				<div className="flex p-3 ">
					<Image height={62} width={62} className="rounded-full" src={'/portrait-male.png'} alt="" style={{width: "auto", height: "auto"}} />
					<div className="flex flex-col justify-center">
						<span className="font-bold">Adam Smith</span>
						<span className="text-gray-400">Webflow Developer</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
