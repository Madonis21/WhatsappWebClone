import React from 'react';
import ContactImage from './ContactImage'

function ContactInfo({currentUser}) {


    return(
        <div className="contact-info">
            <div className="contactinfo-header"></div>
            <div className="contact-info-section">
            <div className="contact-pic-holder">
                <ContactImage displayPic={currentUser?.displayPic} addClass="full-display-pic"></ContactImage>
            </div>
            </div>
            <div className="contact-info-section"></div>
        </div>
    );
}

export default ContactInfo;