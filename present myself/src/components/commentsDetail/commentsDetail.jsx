import { useState } from "react";
import personIcon from "./../../assets/icons-person.png";
import chevronLeft from "./../../assets/icons-chevronright.png";
import chevronright from "./../../assets/icons-chevronleft.png";

function CommentsDetail(props) {
  const [curr, setCurr] = useState(0);
  const commentList = props.children;

  const prev = () => {
    setCurr((curr) => (curr === 0 ? commentList.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === commentList.length - 1 ? 0 : curr + 1));
  };

  console.log(curr)

  return (
    <>
      <div className="flex transition-transform ease-in-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>
        {commentList.map((comment) => (
          <div className="bg-neutral-900 min-w-md rounded-3xl p-8 text-white">
            <div className="flex justify-center -mt-13">
              <div className="bg-amber-200 rounded-full w-10 h-10 flex items-center justify-center">
                <img src={personIcon} alt="personIcon" />
              </div>
            </div>

            <p className="my-4">{comment.content}</p>

            <span className="italic text-xs">{comment.writer}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="cursor-pointer bg-neutral-700 mt-5 p-3 rounded-full" onClick={prev}>
          <img src={chevronright} alt="" width='15px'/>
        </button>
        <button className="cursor-pointer bg-neutral-700 mt-5 ml-5 p-3 rounded-full" onClick={next}>
          <img src={chevronLeft} alt="" width='15px'/>
        </button>
      </div>
    </>
  );
}

export default CommentsDetail;