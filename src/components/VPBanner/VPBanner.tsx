import Image from "next/image";
import React, { useState } from "react";

const VPBanner = ({}) => {
    const vendor = true;

	return (
		<>
			<div className="w-full h-[200px] relative">
				<div className="w-full h-full items-center md:ps-[52px] flex px-[10px] z-20 absolute">
					<span className="text-white font-bold text-[34px]">{vendor? "Vendors" : "Party Planners"}</span>
				</div>
				<Image
					src="/assets/img/planner-banner.png"
					alt=""
					fill
					className="absolute  object-cover -z-20"
				/>
			</div>
		</>
	);
};

export default VPBanner;
