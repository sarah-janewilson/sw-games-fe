import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "../api";

function SingleReview() {
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((review) => setCurrentReview(review));
    setIsLoading(false);
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
    </article>
  );
}

export default SingleReview;