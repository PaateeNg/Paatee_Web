import Image from "next/image";

const VPBanner = ({name, img}:{name:string | undefined; img:string | undefined}) => {

	return (
		<>
			<div className="w-full h-[200px] relative">
				<div className="w-full h-full items-center md:ps-[52px] flex px-[10px] z-20 absolute">
					<span className="text-white font-bold text-[34px]">{name}</span>
				</div>
				<Image
					src={img}
					alt=""
					fill
					className="absolute  object-cover -z-20"
				/>
			</div>
		</>
	);
};

export default VPBanner;
