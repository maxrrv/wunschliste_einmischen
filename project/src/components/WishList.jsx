import React from "react";
import "bulma/css/bulma.css";
import WishListItem from "./WishListItem"

const WishList = ({ content }) => {
    const list = content.map(item => {
        return <WishListItem content={item} />
    })

    return list
}
  
export default WishList