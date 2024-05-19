import Image from "next/image";
import logo from "../../../public/assets/img/paatee-logo.png";
import icon from "../../../public/assets/img/icon-new.png";

const Auth = () => {
	let signInfo = [
		{
			image: icon,
			title: "Book your bash in minutes!",
			sub: "Effortlessly select your venue, catering and entertainment all in one place, saving you time and hassle",
		},
		{
			icon: "yh",
			title: "Customize your celebration",
			sub: "Personalize every detail of your event with our flexible booking options ",
		},
		{
			icon: "yh",
			title: "Peace of mind guranteed",
			sub: "Rest easy knowing that your event is in good hands",
		},
		{
			icon: "yh",
			title: "Peace of mind guranteed",
			sub: "Rest easy knowing that your event is in good hands",
		},
	];
	return (
		<>
			<div className="flex md:flex-row flex-col bg-gray-100 ">
				{/* left */}
				<div
					className="  rounded-xl overflow-hidden  bg-white m-[3rem] relative flex-1 "
					style={{
						backgroundImage: `url('/assets/img/party-bg.jpg')`,
					}}
				>
					{/* image */}
					<Image
						height={100}
						width={200}
						alt="logo"
						src={logo}
						className="absolute top-[5rem] left-[3rem]"
					/>
					<div className=" w-full bg-rose-100 h-[70%] absolute bottom-0 flex flex-col justify-center  shadow rounded-xl  ">
						{/* info */}
						{signInfo.map((i, index) => (
							<>
								<div
									className="flex gap-2  mx-[3rem] "
									key={index}
								>
									<Image
										height={50}
										width={50}
										alt="logo"
										src={icon}
										className=" absolute"
									/>
									<div className="flex gap-2 flex-col justify-center mb-4 text-sm max-w-[27rem] ml-[4rem]">
										<span className="font-bold text-red-600  text-[1.2rem]">
											{i.title}
										</span>
										<span className="text-gray-600">
											{i.sub}
										</span>
									</div>
								</div>
							</>
						))}
					</div>
				</div>
				{/* right */}
				<div className="h-[580px] max-w-[25rem] flex-1   m-[2rem]  flex flex-col gap-2 justify-center text-sm">
					<span className="font-bold text-xl">Sign in</span>
					<span>Get into your account and begin exploring</span>
					<div className="flex gap-2">
						<div className="shadow py-3 text-[13px] px-5 rounded-full bg-white">
							Sign in with Google
						</div>
						<div className="shadow py-3 px-5 text-[13px] rounded-full bg-white">
							Sign in with Apple Id
						</div>
					</div>
					<div className="flex items-center justify-center">
						<span className="relative overflow-hidden w-full">
							<span className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-gray-400 h-px w-full"></span>
							<span className="px-2 text-gray-700 font-medium absolute top-1/2 left-1/2 transform -translate-y-1/2">
								or
							</span>
						</span>
					</div>

					<span>Email Address</span>
					<input
						type="text"
						placeholder="jamieohakwe@gmail.com "
						className="rounded-full"
					/>
					<span>Password</span>
					<input
						type="password"
						className="rounded-full"
						placeholder="jhsvdhvrw"
					/>
					<div className="flex justify-between">
						<span>Keep me signed in</span>
						<span className="text-red-600">Forgot password</span>
					</div>
					<button className="bg-red-500  rounded-full mt-4 h-[3rem] text-white">
						Reset Password
					</button>
					<span className="text-[13px]">
						If you do not have an account with us, you could{" "}
						<span className="text-red-600 text-center">
							{" "}
							<a href="">Sign Up</a>
						</span>
					</span>
				</div>
			</div>
		</>
	);
};

export default Auth;
