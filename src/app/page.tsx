import Banner from "@/Components/MainPage/Banner";
import Characters from "@/Components/MainPage/Characters";
import FAQF from "@/Components/MainPage/FAQF/FAQF";
import News from "@/Components/MainPage/News";
import RoadMap from "@/Components/MainPage/RoadMap";
import Team from "@/Components/MainPage/Team";
import { Token } from "@/Components/MainPage/Token";
import WhyBeh from "@/Components/MainPage/WhyBeh";

export default function Home() {

  return (
    <>
      <Banner/>
      <RoadMap />
      <Characters />
      <WhyBeh />
      <Token/>
      <Team />
      <News />
      <FAQF/>

    
     
    </>
  );
}
