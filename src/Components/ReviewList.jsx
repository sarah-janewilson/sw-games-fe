import { fetchReviews } from "../api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function ReviewList() {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by") || "created_at");
  const [order, setOrder] = useState(searchParams.get("order" || "desc") || "desc");
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchReviewsByCategory = () => {
      setIsLoading(true);
      fetchReviews(category, sortBy, order).then((reviews) => {
        setCurrentReviews(reviews);
        setIsLoading(false);
      });
    };
    fetchReviewsByCategory();
  }, [searchParams, sortBy, order]);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleSortByChange = (event) => {
    const newSortBy = event.target.value;
    const params = { sort_by: newSortBy, order };
    if (category) {
      params.category = category;
    }
    setSearchParams(params);
    setSortBy(newSortBy);
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;
    const params = { sort_by: sortBy, order: newOrder };
    if (category) {
      params.category = category;
    }
    setSearchParams(params);
    setOrder(newOrder);
  };

  return (
    <section>
      <h2>{ category ? `All ${category} reviews` : "All reviews"}</h2>
      
      <div className="order-options">
        <label htmlFor="sort-order">Order by:</label>
        <select id="sort-order" value={sortBy} onChange={handleSortByChange}>
          <option value="created_at">Date Reviewed</option>
          <option value="votes">Votes</option>
        </select>

        <label htmlFor="sort-direction">Sort by:</label>
        <select id="sort-direction" value={order} onChange={handleOrderChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      
      <ul className="review-list">
        {currentReviews.map((review, index) => {
          return <ReviewCard key={index} review={review} />;
        })}
      </ul>
    </section>
  );
}

export default ReviewList;
