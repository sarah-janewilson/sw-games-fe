import axios from "axios";

const gamesApi = axios.create({
    baseURL: `https://sarah-nc-games.onrender.com/api`,
  });

  export const fetchReviews = () => {
    return gamesApi
      .get(`/reviews`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  };