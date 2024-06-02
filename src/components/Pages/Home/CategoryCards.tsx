import CategoryCard from "@/components/CategoryCard/CategoryCard";
import partyItemsImg from './../../../../public/assets/img/partyItemsImg.png';
import partyPlannerImg from './../../../../public/assets/img/partyPlannerImg.jpeg';
import venuesImg from './../../../../public/assets/img/venueImg.jpeg';

export default function CategoryCards() {
  return (
    <div className="flex flex-row">
      <CategoryCard title="PARTY ITEMS" img={partyItemsImg}/>
      <CategoryCard title="PARTY PLANNERS" img={partyPlannerImg}/>
      <CategoryCard title="VENUES" img={venuesImg}/>
    </div>
  );
}
