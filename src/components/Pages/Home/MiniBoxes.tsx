import MiniBox from "@/components/MiniBox/MiniBox";
import venuesImg from "./../../../../public/assets/img/venueIcon.png";
import foodsImg from "./../../../../public/assets/img/foodIcon.png";
import drinksImg from "./../../../../public/assets/img/drinkIcon.png";
import cakesImg from "./../../../../public/assets/img/cakeIcon.png";
import micsImg from "./../../../../public/assets/img/micIcon.png";
import djsImg from "./../../../../public/assets/img/djIcon.png";
import outfitsImg from "./../../../../public/assets/img/outfitIcon.png";
import photographyImg from "./../../../../public/assets/img/cameraIcon.png";

export default function MiniBoxes() {
  return (
    <div className="flex w-full xl:justify-center px-3">
      <div className="flex justify-between py-5 w-full max-w-[1240px]">
        <MiniBox title="Venues" img={venuesImg}/>
        <MiniBox title="Foods" img={foodsImg}/>
        <MiniBox title="Drinks" img={drinksImg}/>
        <MiniBox title="Cakes" img={cakesImg}/>
        <MiniBox title="MICs" img={micsImg}/>
        <MiniBox title="DJs" img={djsImg}/>
        <MiniBox title="Outfits" img={outfitsImg}/>
        <MiniBox title="Photography" img={photographyImg}/>
      </div>
    </div>
  );
}
