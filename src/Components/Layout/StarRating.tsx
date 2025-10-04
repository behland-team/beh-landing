"use client";
import React from 'react';
import classNames from "classnames";

interface StarRatingProps{
    length?: number;
    value : number,
    onChange :(value:number) => void;
}

function StarRating({length = 5 ,value = 0 ,onChange}: StarRatingProps) {
    const stars = Array.from({length: length});

    const handleRate = (index: number) => {
        onChange(index + 1);
    }
    return (
        <div className="flex items-center gap-2">
            {
                stars.map((_, index) => (
                    <span key={index}
                          className={classNames("icon ", index + 1 <= value ? "text-yellow-600 icon-star-bold" : "text-black icon-star")}
                          onClick={() => handleRate(index)}></span>
                ))
            }
        </div>
    );
}

export default StarRating;