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

export const fetchSingleReview = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
