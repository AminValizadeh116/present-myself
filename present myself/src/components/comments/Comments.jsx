import styled from "./Comments.module.css";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import CommentsDetail from "../commentsDetail/commentsDetail";

function Comments() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios("http://localhost:8000/comments").then((result) =>
      setCommentList(result.data)
    );
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-md py-20 overflow-hidden">
          <CommentsDetail>{commentList}</CommentsDetail>
        </div>
      </div>

      <div className="text-center"></div>
    </>
  );
}

export default Comments;
