import { useParams } from "react";
import CommentList from "./CommentList";

function CommentSection() {
  const { review_id } = useParams();
  return (
    <div>
      <CommentList review_id={review_id} />
    </div>
  );
}

export default CommentSection;