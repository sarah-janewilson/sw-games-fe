import Card from "react-bootstrap/Card";

function ReviewCard({ review }) {
  return (
    <article className="review-card-container">
    <Card className="review-card">
      <Card.Img className= "review-img" variant="top" src={review.review_img_url} alt={`Image of ${review.title}.`} />
      <Card.Body>
        <Card.Title>Review title: {review.title}</Card.Title>
        <Card.Subtitle>Reviewed by: {review.owner}</Card.Subtitle>
      </Card.Body>
    </Card>
    </article>
  );
}

export default ReviewCard;
