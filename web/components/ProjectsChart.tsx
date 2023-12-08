import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import axios from 'axios';

const ProjectsChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/v1/users/current/projects');
            const projects = response.data.data;
            const ctx = chartRef.current.getContext('2d');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: projects.map(project => project.name),
                    datasets: [{
                        label: 'Projects',
                        data: projects.map(project => project.clients.length), // or any other data you want to display
                        backgroundColor: projects.map(project => project.color || '#000000'),
                    }],
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        }],
                    },
                },
            });
        };

        fetchData();
    }, []);

    return <canvas ref={chartRef} />;
};
