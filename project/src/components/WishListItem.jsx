import React from "react";
import "bulma/css/bulma.css";
import Icons from './Icons'

const WishListItem = ({ content })=> { 

  return (
    <div className="box">
      <div className="media">
        <figure className="media-left">
            <Icons type={content.icon} /> 
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              {content.title && <strong>{`${content.title} `}</strong>}
              {content.subtitle && <small>{content.subtitle}</small>}
              {content.fulfilled && <i className="far fa-check-circle" style={{color: "lightGreen"}} /> }
              <br />
              {content.description && <span>{content.description}</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishListItem
