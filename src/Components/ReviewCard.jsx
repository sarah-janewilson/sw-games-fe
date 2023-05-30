function ReviewCard({ review }) {
  return (
    <>
      <article className="review-card">
        <h3 className="review-title">{review.title}</h3>
        <img
          className="review-img"
          src={review.review_img_url}
          alt={`Image of ${review.title}.`}
        />
        <p>Reviewed by: {review.owner}</p>
      </article>
    </>
  );
}

export default ReviewCard;
