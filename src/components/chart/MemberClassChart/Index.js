'use client'

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
};

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map((label) => {
                return {
                    value: 10
                };
            }),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map((label) => {
                if (label === 'January' || label === 'March') {
                    return {
                        value: 10,
                    };
                } else {
                    return {
                        value: Math.floor(Math.random() * 5) + 1,
                    };
                }
            }),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function MemberClassChart() {
    return (
        <div className="w-full mt-5 md:h-1/2 py-5 bg-blue-100 text-blue-700 rounded-3xl px-5">
            <p className='text-xl md:text-2xl font-bold'>Your Class in This Year</p>
            <Line options={options} data={data} />
        </div>
    );
}
