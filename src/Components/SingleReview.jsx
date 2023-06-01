import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview, voteOnSingleReview } from "../api";
import CommentList from "./CommentList";

function SingleReview() {
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const { review_id } = useParams();

  useEffect(() => {
    fetchSingleReview(review_id).then((review) => {
      setCurrentReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleVote = (increment) => {
    const updatedReview = {
      ...currentReview,
      votes: increment ? currentReview.votes + 1 : currentReview.votes - 1,
    };
    setCurrentReview(updatedReview);
    voteOnSingleReview(review_id, increment).catch((err) => {
      setErrMessage("Error occurred while voting. Your vote has not been counted. Please refresh the page and try again.");
      console.log(err);
    });
  };

  return (
    <article>
      <h2>{currentReview.title}</h2>
      <p>Game designed by: {currentReview.designer}</p>
      <p>Game category: {currentReview.category}</p>
      <img
        className="single-review-img"
        src={currentReview.review_img_url}
        alt={`Image of ${currentReview.title}.`}
      />
      <p>Reviewed by: {currentReview.owner}</p>
      <p>Reviewed at: {currentReview.created_at}</p>
      <p>
        {currentReview.owner}'s review: {currentReview.review_body}
      </p>
      <p>This review currently has {currentReview.votes} votes.</p>
      <section className="vote-button-container">
        <button className="upvote-button" onClick={() => handleVote(true)}>
          Upvote 👍
        </button>
        <button className="downvote-button" onClick={() => handleVote(false)}>
          Downvote 👎
        </button>
        {errMessage && <p className="err-message">{errMessage}</p>}
      </section>
      <CommentList review_id={review_id} />
    </article>
  );
}

export default SingleReview;
