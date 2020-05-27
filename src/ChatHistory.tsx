import * as React from 'react';
import { Message, } from "./store/chat/types";

interface ChatHistoryProps {
    messages: Message[];
    deleteMessage: (timestamp: number) => void
}

const ChatHistory: React.FunctionComponent<ChatHistoryProps> = ({ messages, deleteMessage, }) => {

    function handleDeleteMessage(e: any) {
        deleteMessage(parseInt(e.target.value))
    }

    return (
        <div className='chat-history'>
            {messages.map(message => (
                <div className='message-item' key={message.timestamp}>
                    <h3>From: {message.user}</h3>
                    <p>
                        {message.message}
                        <button value={message.timestamp} onClick={handleDeleteMessage}>Delete</button>
                    </p>
                </div>
            ))}
        </div>
    )
};

export default ChatHistory;
