import React from 'react';

const ContactImage = ({displayPic, addClass}) => {
    return (
        <div className={`contact-card circular-wrap ${addClass}`}>
                <img src={displayPic} className="avataar"/>
            </div>
    );
}

export default ContactImage;
