const fetch = require("node-fetch");
const url = "https://www.google.com";

const doNetworkCall = async () => {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};
doNetworkCall();
