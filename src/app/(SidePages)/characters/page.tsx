import React from 'react';
import Banner from "@/Components/SidePages/Characters/Banner";
import CharactersSlider from "@/Components/SidePages/Characters/CharactersSlider";
import CharacterSymbol from "@/Components/SidePages/Characters/CharacterSymbol";
import FAQCharacter from "@/Components/SidePages/Characters/FAQCharacter";

function CharacterPage() {
    return (
        <div dir="rtl">
            <Banner />
            <CharactersSlider/>
            <CharacterSymbol />
            <FAQCharacter />
        </div>
    );
}

export default CharacterPage;