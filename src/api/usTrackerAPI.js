import axios from "axios";
// axios = require("axios");
const url = "https://covidtracking.com/api/v1/";

export const getAllStates = async () => {
  const { data } = await axios.get(`${url}/states/info.json`);
  let states = data.map((d) => `${d["state"]}-${d["name"]}`);
  console.log(states);
  return states;
};

export const getCurrentData = async (state) => {
  console.log(state);
  let data;
  console.log(state);
  if (state === "us") {
    data = getCurrentDataForUSA();
  } else {
    data = getCurrentDataForAState(state);
  }
  return data;
};

export const getCurrentDataForAState = async (state) => {
  let state1 = state.split("-")[0];
  const { data } = await axios.get(
    `${url}/states/${state1.toLowerCase()}/current.json`
  );
  //   states = data.map((d) => d["state"]);

  console.log(data);
  return data;
};

export const getCurrentDataForUSA = async () => {
  const { data } = await axios.get(`${url}/us/current.json`);
  return data[0];
};
