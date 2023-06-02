import { fetchCommentsByReviewId } from "../api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

function CommentList({ review_id, comments, setComments }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="comment-list">
      <h2>Comments:</h2>
      {!comments ? (
        <p>No comments available.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default CommentList;
