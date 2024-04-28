import axios from "axios";
import cors from "cors";

// const axios = require("axios");
//url, method, data
export const apiFetch = async (tableName) => {
  try {
    let oldconfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:3001/${tableName}/`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0MSIsImlhdCI6MTcxMzkxODI4OH0.cYuZxd4uKcTUmH4CZZvln0ww9efmoO8F1FOGQi9nej0",
      },
      // data: data,
    };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0MSIsImlhdCI6MTcxMzkxODI4OH0.cYuZxd4uKcTUmH4CZZvln0ww9efmoO8F1FOGQi9nej0";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    //const response = await axios.request(config);
    const response = await axios.get(
      `http://localhost:3001/${tableName}/`,
      config
    );

    // ({
    //   method,
    //   url,
    //   data,
    // });
    // Assuming response.data is the array of items
    // response.data.forEach((item) => {
    //   console.log(item.name);
    // });
    return response;
  } catch (error) {
    return ["error", "connection error"];
  }
};

apiFetch();
