import React from "react";
import "bulma/css/bulma.css";

const WishListItem = ({ content }) => (
  <div class="box">
    <div class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src={content.image} />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{`${content.title} `}</strong> 
            {content.fulfilled && <i className="far fa-check-circle" style={{color: "lightGreen"}} /> }
            <br />
            {content.subtext}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WishListItem