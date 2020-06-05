import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBook, 
  faGift, 
  faMicrochip, 
  faTabletAlt, 
  faMicrophoneAlt, 
  faCalendarAlt,
  faCheckCircle,
  faGamepad
} from '@fortawesome/free-solid-svg-icons'
import {
  faPaypal,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import "bulma/css/bulma.css";

const style = {
  fontSize: "30px"
}

const brandStyle = {
  fontSize: "20px"
}

const Icons = ({type}) => {
  switch(type) {
    case "book":
      return <span style={style} ><FontAwesomeIcon icon={faBook} /></span>
    case "gift":
      return <span style={style} ><FontAwesomeIcon icon={faGift} /></span>
    case "tablet":
      return <span style={style} ><FontAwesomeIcon icon={faTabletAlt} /></span>
    case "tech":
      return <span style={{ ...style, marginLeft: -2 }} ><FontAwesomeIcon icon={faMicrochip} /></span>
    case "microphone":
      return <span style={{ ...style, marginLeft: 3 }} ><FontAwesomeIcon icon={faMicrophoneAlt} /></span>
    case "event":
      return <span style={style} ><FontAwesomeIcon icon={faCalendarAlt} /></span>
    case "check":
      return <FontAwesomeIcon icon={faCheckCircle} style={{color: "lightGreen"}} />
    case "paypal":
      return <span style={brandStyle} ><FontAwesomeIcon icon={faPaypal} /></span>
    case "toy":
      return <span style={style} ><FontAwesomeIcon icon={faGamepad} /></span>
    case "twitter":
      return <span style={brandStyle} ><FontAwesomeIcon icon={faTwitter} /></span>
    default: 
      return <span style={style}><FontAwesomeIcon icon={faGift} /></span>
  }
}

export default Icons
