"use client";
import {useEffect, useRef} from "react";
import {
    Chart,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import classNames from "classnames";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title);

interface DoughnutChartProps {
    data: any;
    icon: string;
    percentage: number;
    color: string;
}

export default function DoughnutChart({
                                          data,
                                          icon,
                                          percentage,
                                          color,
                                      }: DoughnutChartProps) {
    console.log(icon);
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
                cutout: "65%",
                plugins: {
                    title: {
                        display: false,
                    },
                    datalabels :{
                        display : false
                    }
                },
            },
        });
    }, []);

    return (
        <div className="size-36 relative mx-auto flex justify-center items-center gap-5">
            {/* Canvas full size */}
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"/>
            <div
                className="absolute top-1/2 left-1/2 w-11 h-11 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center">
                <img src={icon} alt="icon" className="w-2/3 h-2/3"/>
                <p
                    className={classNames(
                        "font-yekan text-lg font-bold",
                        color
                    )}
                >
                    {Intl.NumberFormat("fa").format(percentage)}%
                </p>
            </div>
        </div>
    );
}
