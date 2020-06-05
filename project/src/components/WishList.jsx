import React from "react";
import "bulma/css/bulma.css";
import WishListItem from "./WishListItem"

const WishList = ({ content }) => {
    const list = content.map(( item, index ) => {
        return <WishListItem content={item} key={`wish-${index}`} />
    })

    return list
}
  
export default WishList
