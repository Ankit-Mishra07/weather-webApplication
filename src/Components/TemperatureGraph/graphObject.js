export const graphObj = (times, temps) => {
  const obj = {
    options: {
      chart: {
        id: "basic-bar",
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      xaxis: {
        categories: times,
      },
    },
    series: [
      {
        name: "Temprature",
        data: temps,
      },
    ],
  };

  return obj;
};
