import React from 'react'

function ChatImg({ imgFileChange, timestamp }) {

    const DrawImage = () => {
        return imgFileChange && <img 
        alt="uploaded" 
        src={URL.createObjectURL(imgFileChange)}
        className="drawn-img"/>
    }
    return (
        imgFileChange && <div className="chat-image">
                <DrawImage></DrawImage>
            <span className="tail-out"></span>
            <span className="timestamp">{timestamp}</span>
        </div>
    )
}

export default ChatImg
