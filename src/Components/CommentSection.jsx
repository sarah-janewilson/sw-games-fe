import CommentList from "./CommentList";
import PostComment from "./PostComment";
import { useState } from "react";

function CommentSection({ review_id, loggedInUser, setErrMessage }) {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments((comments) => [comment, ...comments]);
  };

  return (
    <section className="comment-section">
      <PostComment
        addComment={addComment}
        review_id={review_id}
        comments={comments}
        setComments={setComments}
        loggedInUser={loggedInUser}
        setErrMessage={setErrMessage}
      />
      <CommentList
        review_id={review_id}
        comments={comments}
        setComments={setComments}
        loggedInUser={loggedInUser}
      />
    </section>
  );
}

export default CommentSection;
