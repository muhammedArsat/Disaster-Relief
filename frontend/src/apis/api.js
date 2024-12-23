// API fetch function
import axios from "axios"

export const weatherApi = {
    key: '6026a92f387fc2a4e7b1ffd4f332f7b1',
    base: 'https://api.openweathermap.org/data/2.5/'
  }
  
  const search = "chennai";  // Search location (Chennai in this case)
  
  export const weather = async () => {
    try {
          const res = await axios
              .get(`${weatherApi.base}weather?q=${search}&units=metric&APPID=${weatherApi.key}`);
          return res.data;
      } catch (error) {
          console.error("Unexpected Error", error); // Handle unexpected errors
      }
  }
  