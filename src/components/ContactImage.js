import React from 'react';

const ContactImage = ({displayPic, addClass}) => {
    return (
        <div className={`contact-card circular-wrap ${addClass}`}>
                <img src={displayPic} className="avataar" alt="profile pic"/>
            </div>
    );
}

export default ContactImage;
