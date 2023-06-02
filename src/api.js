import axios from "axios";

const gamesApi = axios.create({
  baseURL: `https://sarah-nc-games.onrender.com/api`,
});

export const fetchReviews = (categorySlug) => {
  const queryParams = categorySlug ? `?category=${categorySlug}` : "";
  return gamesApi
    .get(`/reviews${queryParams}`)
    .then((response) => response.data);
};

export const fetchSingleReview = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}`)
    .then((response) => response.data);
};

export const fetchCommentsByReviewId = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}/comments`)
    .then((response) => response.data);
};

export const voteOnSingleReview = (review_id, increment) => {
  const patchVotes = {
    inc_votes: increment ? 1 : -1,
  };
  return gamesApi
    .patch(`/reviews/${review_id}`, patchVotes)
    .then((response) => response.data)
};

export const fetchUsers = () => {
  return gamesApi.get(`/users`).then((response) => response.data);
};

export const postComment = (review_id, commentData) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, commentData)
    .then((response) => response.data)
};

export const fetchCategories = () => {
  return gamesApi.get(`/categories`).then((response) => response.data);
};
