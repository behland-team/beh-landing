import Banner from "@/Components/MainPage/Banner";
import Characters from "@/Components/MainPage/Characters";
import RoadMap from "@/Components/MainPage/RoadMap";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner/>
      <RoadMap />
      <Characters/>
     
    </>
  );
}
