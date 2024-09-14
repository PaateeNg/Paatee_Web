"use client"
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Link from "next/link";

export const cards = [
  {title: 'Vendors', img: '/partyItemsImg.png', button:'Buy from a vendor', link:'/vendors'},
  {title: 'Party planners', img: '/partyItemsImg.png', button:'Buy from a planner', link:'/party-planners'},
  {title: 'Venues', img: '/partyItemsImg.png', button:'Buy from a vrnur', link:'/venues'}
]

export default function CategoryCards() {
  
  return (
    <section className="flex flex-col justify-center py-10 px-3 md:px-0  md:flex-row gap-4">
      {
        cards.map(card => (
          <Link href={card.link} key={card.title} className=" relative flex justify-center items-center  h-[220px] rounded-lg md:w-[400px] md:h-[450px]">
            <CategoryCard title={card.title} link={card.link} img={card.img} button={card.button}/>
          </Link>
        ))
      }
    </section>
  );
}
