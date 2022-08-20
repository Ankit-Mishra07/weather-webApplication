// const API_KEY = "1ddf6812bbb8afff8c25ea8c00dacac5";
// const API_KEY = "931d5a3b1bee118ece374e2777410d27";
const API_KEY = "c0d290eeee9dd399b017a6d2ba64be7e";
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
