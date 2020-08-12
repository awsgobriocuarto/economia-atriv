import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faCreditCard, 
  faEnvelope,
  faAtlas,
  faEdit,
  faReceipt
} from "@fortawesome/free-solid-svg-icons"

export default function ServiceIcon(props) {
  const icon = props.icon;
  const size = props.size;
  switch (icon) {
    case 'faBriefcase':
      return <FontAwesomeIcon icon={faBriefcase} size={size} />  
    case 'faCreditCard':
      return <FontAwesomeIcon icon={faCreditCard} size={size} />  
    case 'faEnvelope':
      return <FontAwesomeIcon icon={faEnvelope} size={size} />  
    case 'faAtlas':
      return <FontAwesomeIcon icon={faAtlas} size={size} />  
    case 'faEdit':
      return <FontAwesomeIcon icon={faEdit} size={size} />  
    case 'faReceipt':
      return <FontAwesomeIcon icon={faReceipt} size={size} />  
    default:
      break;
  }
}
