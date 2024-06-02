"use client";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const productsDataSet = [
    {
      product: "Cakes",
      link: "#"
    },
    {
      product: "Drinks",
      link: "#"
    },
    {
      product: "Venues",
      link: "#"
    },
    {
      product: "Caterers",
      link: "#"
    },
    {
      product: "Djs",
      link: "#"
    },
    {
      product: "MCs",
      link: "#"
    },
    {
      product: "Photographers",
      link: "#"
    },
    {
      product: "Party decorators",
      link: "#"
    },
    {
      product: "Vendors",
      link: "#"
    }
  ];
  return (
    <nav className="h-[90px] bg-transparent md:flex md:align-middle md:p-[32px]">
      {/* start --> logo */}
      <div className="md:ps-[32px] relative" style={{ top: "-5px" }}>
        <Image
          src="/assets/img/logo.png"
          alt=""
          width={179}
          height={49}
          style={{ width: "auto", height: "auto", position: "relative", top: "-5px" }}
        />
      </div>

      {/* middle */}
      <div className="md:flex md:flex-grow md:justify-center">
        <div className="md:flex md:justify-between md:align-middle md:flex-grow max-w-[622px] mx-[32px]">
          <Dropdown
            label="Products"
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            {productsDataSet.map((value, index) => {
              return (
                <Dropdown.Item key={index}>
                  {value.product}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
          <Dropdown
            label="Categories"
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
          </Dropdown>
          <Dropdown
            label="FAQS"
            style={{ backgroundColor: "transparent", color: "black" }}
            className="hidden"
            arrowIcon={false}
          />
          <Dropdown
            label="Contact Us"
            className="hidden"
            style={{ backgroundColor: "transparent", color: "black" }}
            arrowIcon={false}
          />
          <Link href="/login">
          
            <Dropdown
              
              label="Join Us"
              style={{ backgroundColor: "transparent", color: "black", position: "relative", top: "-8.5px" }}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Dropdown>
          </Link>
        </div>
      </div>

      {/* icons with navs */}
      <div
        className="md:flex gap-5 md:pe-[32px]"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Image
          src="/assets/img/profile.png"
          alt=""
          height={24}
          width={24}
          className="inline-block w-[24px] h-[24px]"
        />
        <Image
          src="/assets/img/heart.png"
          alt=""
          height={24}
          width={24}
          className="inline-block w-[24px] h-[24px]"
        />
        <Image
          src="/assets/img/search-normal.png"
          alt=""
          height={24}
          width={24}
          className="inline-block w-[24px] h-[24px]"
        />
        <Image
          src="/assets/img/shopping-cart.png"
          alt=""
          height={24}
          width={24}
          className="inline-block w-[24px] h-[24px]"
        />
      </div>
    </nav>
  );
}
