import React from 'react';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CardSaleReport = () => {
    const state = {
        series: [
            {
                name: 'series1',
                data: [100, 120, 99, 125, 127, 130, 148],
            },
        ],

        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#fcb800', '#f9f9f9', '#9C27B0'],
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
            responsive: [
                {
                    breakpoint: 1680,
                    options: {
                        chart: {
                            width: '100%',
                        },
                    },
                },
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%',
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className="ps-card ps-card--sale-report">
            <div className="ps-card__header">
                <h4>Sales Reports</h4>
            </div>

            <div className="ps-card__content">
                <div id="chart"></div>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={320}
                />
            </div>

            <div className="ps-card__footer">
                <div className="row">
                    <div className="col-md-8">
                        <p>Items Earning Sales ($)</p>
                    </div>
                    <div className="col-md-4">
                        <a href="#">
                            Export Report
                            <i className="icon icon-cloud-download ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSaleReport;
