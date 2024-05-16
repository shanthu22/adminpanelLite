import axios from "axios";
import cors from "cors";

// const axios = require("axios");
//url, method, data
export const apiGet = async (tableName) => {
  try {
    console.log("GET Api is called");
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
    return response;
  } catch (error) {
    return ["error", "connection error"];
  }
};

//apiPost();
export const apiPost = async (tableName, data) => {
  try {
    console.log("POST Api is called ");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0MSIsImlhdCI6MTcxMzkxODI4OH0.cYuZxd4uKcTUmH4CZZvln0ww9efmoO8F1FOGQi9nej0";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `http://localhost:3001/${tableName}/`,
      data,
      config
    );
    //console.log(response);
  } catch (error) {
    return ["error", "connection error"];
  }
};

export const apiPut = async (tableName, data) => {
  try {
    console.log("PUT Api is called ");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0MSIsImlhdCI6MTcxMzkxODI4OH0.cYuZxd4uKcTUmH4CZZvln0ww9efmoO8F1FOGQi9nej0";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(
      `http://localhost:3001/${tableName}/${data.id}`,
      data,
      config
    );
    console.log(response);
  } catch (error) {
    return ["error", "connection error"];
  }
};

export const apiDelete = async (tableName, data) => {
  try {
    console.log("DELETE Api is called");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0MSIsImlhdCI6MTcxMzkxODI4OH0.cYuZxd4uKcTUmH4CZZvln0ww9efmoO8F1FOGQi9nej0";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `http://localhost:3001/${tableName}/${data.id}`,
      config
    );
    //console.log(response);
  } catch (error) {
    return ["error", "connection error"];
  }
};

export const apiUserLogin = async (data) => {
  try {
    console.log("POST Api is called ");
    console.log(data);

    const response = await axios.post(`http://localhost:3001/login/`, data);
    console.log(true, response);
    const result = [true, response.data.token];
    return result;
  } catch (error) {
    return [false, error];
  }
};
