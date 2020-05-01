import React from "react";
import "bulma/css/bulma.css";

const style = {
  fontSize: "30px"
}

const Icons = ({type}) => {
  switch(type) {
    case "Book":
      return <span style={style} ><i className="fas fa-book" /></span> 
      break
    case "GiftCard":
      return <span style={style} ><i className="fas fa-gift" /></span> 
      break
    case "Tablet":
      return <span style={style} ><i className="fas fa-tablet-alt" /></span> 
      break
    default: 
      return <span><i className="fas fa-gift" /></span> 
      break
  }
}

export default Icons
