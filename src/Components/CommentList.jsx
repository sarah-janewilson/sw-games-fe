import { fetchCommentsByReviewId } from "../api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";


function CommentList({review_id}) {
  const [currentComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((comments) => {
        setCurrentComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="comment-list">
      <h2>Comments:</h2>
      {!currentComments ? (
        <p>No comments available.</p>
      ) : (
        <ul>
          {currentComments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
      </ul>
      )}
    </section>
  );
}

export default CommentList;
