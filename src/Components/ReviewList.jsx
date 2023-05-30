import { fetchReviews } from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function ReviewList() {
    const [currentReviews, setCurrentReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    fetchReviews().then((reviews) => {
      setCurrentReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
      <section>
      <h2>All reviews</h2>
        <ul className="review-list">
          {currentReviews.map((review, index) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </ul>
      </section>
  );
}

export default ReviewList;
