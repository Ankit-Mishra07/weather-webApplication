const API_KEY = "9102fcb602fc2c718391570e2dab5618";
const baseUrl = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherDataByLocation = async (latitude, longitude) => {
  const res = await fetch(
    `${baseUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

export const fetchForcastData = async (latitude, longitude) => {
  const res = await fetch(
    `${baseUrl}/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

export const fetchDataForHourly = async (latitude, longitude) => {
  const res = await fetch(
    `${baseUrl}/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`
  );
  const data = await res.json();
  return data;
};
