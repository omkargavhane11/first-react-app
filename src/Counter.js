import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


// Counter JS
export function Counter() {
  // let like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter">
      <div className="counter-div">
      <Badge className="counter-badge" onClick={() => setLike(like + 1)} badgeContent={like} color="primary" >
        👍
      </Badge>
      <Badge className="counter-badge" onClick={() => setDislike(dislike + 1)} badgeContent={dislike} color="error" >
        👎
      </Badge></div>
      <div className="delete-edit-icon-div"><IconButton aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" color="secondary">
          <EditIcon />
        </IconButton></div>
    </div>
  );
}
