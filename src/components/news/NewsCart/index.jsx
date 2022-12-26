import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

export default function NewsCart({ image, heading, _id }) {
  return (
    <Link to={`/news/${_id}`}>
      <div className="cardNews" >
        <img
          width={"100%"}
          src={`http://localhost:4000/${image}`}
          alt="news-ima"
        />
        <div className="heading-news">{heading}</div>
      </div>
    </Link>
  );
}
