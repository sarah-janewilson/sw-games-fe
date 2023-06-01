import { useState } from "react";
import { postComment } from "../api";

function PostComment({ review_id, loggedInUser, addComment, setErrMessage }) {
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      username: loggedInUser.username,
      body,
    };

    setBody("");

    postComment(review_id, commentData)
      .then((comment) => {
        addComment(comment);
        setBody("");
      })
      .catch(() => {
        setErrMessage(
          "Error occurred while posting comment. Please refresh the page and try again."
        );
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Post a comment:</p>
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="Write a comment..."
        required
      ></textarea>
      {loggedInUser ? (
        <button type="submit">Submit</button>
      ) : (
        <p>Please log in to submit a comment.</p>
      )}
    </form>
  );
}

export default PostComment;
