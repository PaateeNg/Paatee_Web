import MiniBox from "@/components/MiniBox/MiniBox";



export default function MiniBoxes() {

  const miniBox = [
    {title: "Venues", img:"/venueIcon.png"},
    {title: "Foods", img:"/foodIcon.png"},
    {title: "Drinks", img:"/drinkIcon.png"},
    {title: "Cakes", img:"/cakeIcon.png"},
    {title: "MICs", img:"/micIcon.png"},
    {title: "DJs", img:"/djIcon.png"},
    {title: "Outfits", img:"/outfitIcon.png"},
    {title: "Photography", img:"/cameraIcon.png"},
  ]
  
  return (
    <div className="flex w-full xl:justify-center px-3">
      <div className="flex flex-wrap md:justify-between py-5 w-full ">
        {
          miniBox.map(box => (
            <MiniBox key={box.title} title={box.title} img={box.img}/>
          ))
        }
        
      </div>
    </div>
  );
}
