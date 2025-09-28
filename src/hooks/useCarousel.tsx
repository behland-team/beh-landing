import {CarouselApi} from "@/Components/UI/carousel";
import {useCallback, useEffect, useState} from "react";
import {EmblaCarouselType} from "embla-carousel";


export const useCarousel = (api :CarouselApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onPrevButtonClick = useCallback(() => {
        if (!api) return
        api.scrollPrev()
    }, [api])

    const onNextButtonClick = useCallback(() => {
        if (!api) return
        api.scrollNext()
    }, [api])

    const onDotBtnClick = useCallback((index: number) => {
        if (!api) return;
        api.scrollTo(index);
    }, [api]);

    const onSelect = useCallback((api: EmblaCarouselType) => {
        setPrevBtnDisabled(!api.canScrollPrev())
        setNextBtnDisabled(!api.canScrollNext())
        setSelectedIndex(api.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!api) return

        onSelect(api)
        api.on('reInit', onSelect).on('select', onSelect)

        return () => {
            api.off('reInit', onSelect).off('select', onSelect)
        }
    }, [api, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
        selectedIndex,
        onDotBtnClick
    }
}