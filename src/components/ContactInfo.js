import React from 'react';
import ContactImage from './ContactImage';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Checkbox } from '@material-ui/core';
import ContactButton from './ContactButton.js';
import CloseIcon from '@material-ui/icons/Close';

function ContactInfo({currentUser}) {


    return(
        <div className="contact-info">
            <div className="contactinfo-header">
                <div className="header-icon-holder">
                    <CloseIcon className="header-icon"/>
                </div>
                <div>Contact info</div>
            </div>
            <div class="contactinfo-body">
            <div className="contact-info-section large-section">
            <div className="contact-pic-holder">
                <ContactImage displayPic={currentUser?.displayPic} addClass="full-display-pic"></ContactImage>
            </div>
            <div className="contact-name">{currentUser?.contactName}</div>
            <div className="contact-status">last seen today at 16:12</div>
            </div>

            <div className="contact-info-section small-section">
                <div className="section-header">
                    <div className="section-header-text">Media, Links and Docs</div>
                    <ChevronRightIcon className="right-arrow"/>
                </div>
                <div className="media-label">No Media, Links and Docs</div>
            </div>

            <div className="contact-info-section">
                <div className="contact-info-button">
                    <div className="info-button-text">Mute notifications</div>
                    <div><label>
                        <Checkbox style={{display: "none"}}></Checkbox>
                        <div className="visible-checkmark"></div>
                        </label></div>
                </div>
                <div className="contact-info-button button-top-border">
                    <div className="info-button-text">Starred Messages</div>
                    <div>
                    <ChevronRightIcon className="right-arrow"/>
                    </div>
                </div>
                <div className="contact-info-button button-top-border">
                    <div><div className="info-button-text">Disappearing Messages</div>
                    <div className="lighter-text">Off</div>
                    </div>
                    <div>
                    <ChevronRightIcon className="right-arrow"/>
                    </div>
                </div>
            </div>

            <div className="contact-info-section small-section">
                <div className="section-header">
                    <div className="section-header-text">About and phone number</div>
                </div>
                <div className="about-contact">I am king of my kingdom</div>
                <div className="contact-info-button button-top-border" style={{height: "50px"}}>
                    <div className="info-button-text">+91 9911004455</div>
                </div>
            </div>
            <ContactButton icon="block" displayText="Block" />
            <ContactButton icon="report" displayText="Report Contact" addStyle="red-colored "/>
            <ContactButton icon="delete" displayText="Delete chat" addStyle="red-colored "/>
            </div>
        </div>
    );
}

export default ContactInfo;