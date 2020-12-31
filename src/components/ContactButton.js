import React from 'react';
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const ContactButton = (props) => {

    function getIcon() {
        if(props.icon == "block") {
            return(<BlockIcon className="button-icon-font" />)
        }
        else if(props.icon == "report") {
            return(<ThumbDownIcon className={`button-icon-font ${props.addStyle}`} />)
        }
        else if(props.icon == "delete") {
            return(<DeleteIcon className={`button-icon-font ${props.addStyle}`} />)
        }
    }

    return(
        <div className="contact-button">
            <div className="button-icon">
                {getIcon()}
            </div>
            <div className={props.addStyle}>{props.displayText}</div>
        </div>
    );
}

export default ContactButton;