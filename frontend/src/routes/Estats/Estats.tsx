import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Estats: React.FC = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "pie",
    },
    title: {
      text: "E-Stats",
    },
    series: [
      {
        type: "pie",
        data: [
          { name: "Large Home Appliances", y: 61.9 },
          { name: "Small Home Appliances", y: 19 },
          { name: "IT Devices", y: 14.3 },
          { name: "Network Devices", y: 4.8 },
        ],
      },
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            click: function () {
              if (this.name === "Large Home Appliances") {
                setBarChartOptions({
                  chart: {
                    type: "bar",
                  },
                  title: {
                    text: "Large Home Appliances",
                  },
                  xAxis: {
                    categories: [
                      "Referigerator",
                      "Washing Machine",
                      "Air Conditioner",
                      "Stove",
                      "Dish Washer",
                    ],
                  },
                  series: [
                    {
                      type: "bar",
                      name: "Bar Series",
                      data: [15, 7, 10, 3, 12],
                      color: "#45C8FF",
                    },
                  ],
                });
              }
              if (this.name === "Small Home Appliances") {
                setBarChartOptions({
                  chart: {
                    type: "bar",
                  },
                  title: {
                    text: "Small Home Appliances",
                  },
                  xAxis: {
                    categories: [
                      "Microwave",
                      "Hair Dryer",
                      "Mixie",
                      "Vaccum Cleaner",
                      "Toaster",
                    ],
                  },
                  series: [
                    {
                      type: "bar",
                      name: "Bar Series",
                      data: [23, 25, 7, 14, 22],
                      color: "#544FC5",
                    },
                  ],
                });
              }
              if (this.name === "IT Devices") {
                setBarChartOptions({
                  chart: {
                    type: "bar",
                  },
                  title: {
                    text: "IT Devices",
                  },
                  xAxis: {
                    categories: [
                      "Smart Phone",
                      "PC",
                      "Notebook",
                      "Music Player",
                      "Printer",
                    ],
                  },
                  series: [
                    {
                      type: "bar",
                      name: "Bar Series",
                      data: [19, 25, 32, 27, 42],
                      color: "#19FB8B",
                    },
                  ],
                });
              }
              if (this.name === "Network Devices") {
                setBarChartOptions({
                  chart: {
                    type: "bar",
                  },
                  title: {
                    text: "Network Devices",
                  },
                  xAxis: {
                    categories: [
                      "Router",
                      "Modem",
                      "Cables",
                      "Switches",
                      "Booster",
                    ],
                  },
                  series: [
                    {
                      type: "bar",
                      name: "Bar Series",
                      data: [40, 27, 9, 5, 21],
                      color: "#FE6A35",
                    },
                  ],
                });
              }
            },
          },
        },
      },
    },
  });

  const [barChartOptions, setBarChartOptions] = useState({});

  return (
    <div>
      <h2>Highcharts Chart</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HighchartsReact
          key={JSON.stringify(chartOptions)}
          highcharts={Highcharts}
          options={chartOptions}
        />
        <HighchartsReact
          key={JSON.stringify(barChartOptions)}
          highcharts={Highcharts}
          options={barChartOptions}
        />
      </div>
    </div>
  );
};

export default Estats;
