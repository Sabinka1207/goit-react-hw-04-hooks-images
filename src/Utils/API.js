import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "16347216-fb50075837ded8f23f3479d31";

export const fetchImages = async (request, page) => {
  const response = await axios.get(`?key=${KEY}&q=${request}&page=${page}`);
  return response.data;
};
