"use client";
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
      product: "DJs",
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
    <nav className="h-[90px] bg-transparent flex align-middle p-[32px]">
      {/* start --> logo */}
      <div className="ps-[32px] relative" style={{ top: "-5px" }}>
        <Image
          src="/assets/img/logo.png"
          alt="Logo"
          width={179}
          height={49}
          style={{ width: "auto", height: "auto", position: "relative", top: "-5px" }}
        />
      </div>

      {/* middle */}
      <div>Would rebuild this</div>

      {/* icons with navs */}
      <div
        className="flex gap-5 pe-[32px]"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Image
          src="/assets/img/profile.png"
          alt="Profile"
          height={24}
          width={24}
          className="inline-block w-[24px] h-[24px]"
        />
        <Image
          src="/assets/img/heart.png"
          alt="Favorites"
          height={24}
          width={24}
          className="inline-block w-[24px] h-[24px]"
        />
        <Image
          src="/assets/img/search-normal.png"
          alt="Search"
          height={24}
          width={24}
          className="inline-block w-[24px] h-[24px]"
        />
        <Image
          src="/assets/img/shopping-cart.png"
          alt="Cart"
          height={24}
          width={24}
          className="inline-block w-[24px] h-[24px]"
        />
      </div>
    </nav>
  );
}
