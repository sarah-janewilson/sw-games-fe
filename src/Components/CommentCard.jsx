import Card from "react-bootstrap/Card";

function CommentCard({ comment }) {
  return (
    <article className="comment-card-container">
      <Card>
        <Card.Body>
        <Card.Text>{comment.author} says: "{comment.body}"</Card.Text>
          <Card.Text>Commented at: {comment.created_at}</Card.Text>
          <Card.Text>Comment votes: {comment.votes}</Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default CommentCard;
