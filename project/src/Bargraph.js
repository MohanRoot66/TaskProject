import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarGraph = ({ funscore, benchscore }) => {
  const categories = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5'];

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false, // Hide toolbar/menu
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        show: true, // Show x-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis border
      },
    },
    yaxis: {
      show: false, // Hide y-axis
    },
    grid: {
      show: false, // Hide grid lines
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '67%',
        barWidth:"80%",
        dataLabels: {
          position: 'top', // Show data labels on top of each bar
          style: {
            colors: ['#000000'], // Set data label color to black
          },
        },
      },
    },
    legend: {
      show: false, // Hide legend
    },
    noData: {
      text: 'No data available', // Customize no data message
    },
    dataLabels: {
      enabled: true, // Show data labels
      style: {
        colors: ['#000000'], // Set data label color to black
      },
      position: 'top', // Display data labels on top of each bar
    },
    fill: {
      opacity: 1, // Set fill opacity to 1 to make bars solid
    },
  };

  const series = [
    {
      name: 'Fun Score',
      data: funscore,
      color: '#184d47',
      dataLabels: {
        position: 'top',
        style: {
          colors: ['#000000'],
        },
      },
    },
    {
      name: 'Bench Score',
      data: benchscore,
      color: '#f2b880',
      dataLabels: {
        position: 'top',
        style: {
          colors: ['#000000'],
        },
      },
    },
  ];

 
  return (
    <div className='stats'>
      <h2 style={{ marginLeft: '10px' }}>Fun Score Vs Bench Score</h2>
      <ReactApexChart options={options} series={series} type='bar' width={1300} height={350} />
    </div>
  );
};

export default BarGraph;
