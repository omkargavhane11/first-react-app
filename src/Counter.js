import { useState } from "react";

// Counter JS
export function Counter() {
  // let like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => setLike(like + 1)} className="lg-btn">
        {like} 👍
      </button>

      <button onClick={() => setDislike(dislike + 1)} className="lg-btn">
        {dislike} 👎
      </button>
    </div>
  );
}
