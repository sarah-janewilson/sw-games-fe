import { fetchReviews } from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function ReviewList() {
    const [currentReviews, setCurrentReviews] = useState([])
  useEffect(() => {
    fetchReviews().then((reviews) => {
      setCurrentReviews(reviews);
    });
  }, []);

  return (
    <main className="review-list">
      <h2>All reviews</h2>
      <section>
        <ul className="event-list">
          {currentReviews.map((review, index) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default ReviewList;
