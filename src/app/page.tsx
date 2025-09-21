import Banner from "@/Components/MainPage/Banner";
import Characters from "@/Components/MainPage/Characters";
import FAQF from "@/Components/MainPage/FAQF/FAQF";
import News from "@/Components/MainPage/News";
import RoadMap from "@/Components/MainPage/RoadMap";
import Team from "@/Components/MainPage/Team";
import {Token} from "@/Components/MainPage/Token/Token";
import WhyBeh from "@/Components/MainPage/WhyBeh";
import Header from "@/Components/Layout/Header";


export default function Home() {

    return (
        <>
            <Header variant={"landing"}/>
            <Banner/>
            <WhyBeh/>
            <Token/>
            <Team/>
            <RoadMap/>
            <Characters/>
            <News/>
            <FAQF/>
        </>
    );
}
