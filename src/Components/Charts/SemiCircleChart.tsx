"use client";
import {useEffect, useRef} from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import logo from "../../../public/images/Logo.png";
import {
    Chart,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import Image from "next/image";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title , ChartDataLabels);

interface SemiCircleProps {
    data: any;
}

export default function SemiCircleChart({
                                            data,
                                        }: SemiCircleProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!canvasRef.current || chartRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        chartRef.current = new Chart(ctx, {
            type: "doughnut",
            data: data,
            options: {
                responsive: true,
                rotation: -90,
                circumference: 180,
                cutout: "30%",
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false,
                    },
                    datalabels : {
                        color : "#FFF",
                        padding : 20,
                        formatter : (value)=>value+"%",
                        font : {
                            size : 10,
                        }

                    }

                },
            },
        });
    }, []);

    return (
        <div className="w-72 xxs:w-[370px] h-44  relative mx-auto flex justify-center items-center gap-5">
            {/* Canvas full size */}
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"/>
            <div className="absolute  w-12 h-12 -bottom-4 translate-x-1/2 right-1/2">
                <Image src={logo} alt={"logo"}/>
            </div>
        </div>
    );
}
