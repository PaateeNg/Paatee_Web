import Image from "next/image";
import PrimaryBtn from "../Buttons/PrimaryBtn";

export default function Footer() {
  return (
    <footer className="relative flex flex-col">
      {/* first road of footer  */}
      <div className="md:flex md:p-[110px] border-y-2 pt-5">
        <span className="w-1/2">
          <Image
            src="/assets/img/Logo3.png"
            alt=""
            width={123.95}
            height={41.7}
          />
        </span>
        <span className="w-1/2 text-[18px] md:max-w-[526px]">
          Say goodbye to the traditional ways of planning a party when parties
          meet technology
        </span>
      </div>

      {/* Next road of footer with the product, company, downloads etc */}
      <div className="md:flex md:p-[110px]">
        <div className="md:flex md:flex-col md:w-1/6">
          <span className="font-[700] text-[20px] md:mb-[22px]">Product</span>
          <div className="md:flex md:flex-col gap-[22px] md:mt-[22px]">
            <span>Features</span>
            <span>Pricing</span>
            <span>Case Studies</span>
            <span>Reviews</span>
            <span>Updates</span>
          </div>
        </div>
        <div className="md:flex md:flex-col md:w-1/6">
          <span className="font-[700] text-[20px] md:mb-[22px]">Company</span>
          <div className="md:flex md:flex-col gap-[22px] md:mt-[22px]">
            <span>About</span>
            <span>Contact Us</span>
            <span>Career</span>
            <span>Culture</span>
            <span>Blog</span>
          </div>
        </div>
        <div className="md:flex md:flex-col md:w-1/6">
          <span className="font-[700] text-[20px] md:mb-[22px]">Supports</span>
          <div className="md:flex md:flex-col gap-[22px] md:mt-[22px]">
            <span>Getting Started</span>
            <span>Help Center</span>
            <span>Chat Support</span>
          </div>
        </div>
        <div className="md:flex md:flex-col md:w-1/6">
          <span className="font-[700] text-[20px] md:mb-[22px]">Downloads</span>
          <div className="md:flex md:flex-col gap-[22px] md:mt-[22px]">
            <span>IOS</span>
            <span>Andriod</span>
            <span>Mac</span>
            <span>Windows</span>
            <span>Chrome</span>
          </div>
        </div>
        <div className="md:flex md:flex-col md:w-2/6 md:px-[20px]">
          <span className="font-[700] text-[20px] md:mb-[22px]">
            Subscribe to our newsletter
          </span>
          <div className="md:flex md:flex-col gap-[22px] md:mt-[22px]">
            <span className="max-h-[358px] max-w-[359px]">
              Stay Updated With Our Newsletter for Exclusive Offers, Latest
              Updates, and More!
            </span>
            <input type="text" placeholder="Enter Your Email" className="h-[68px] max-w-[359px] px-5 rounded-[25px]"/>
            <PrimaryBtn title="Subscribe"/>
          </div>
        </div>
      </div>

      {/* Where copyright and social media icons are */}
      <div className="flex md:px-[110px] md:pb-[30px]">
        <span className="w-1/2">
        Copyright © 2023 Paatee | All Rights Reserved 
        </span>
        <div className="md:flex w-1/2 justify-end gap-5">
            <Image src="/assets/img/Facebook.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
            <Image src="/assets/img/Twitter.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
            <Image src="/assets/img/Instagram.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
            <Image src="/assets/img/Linkedin.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
            <Image src="/assets/img/Youtube.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
        </div>
      </div>
    </footer>
  );
}
