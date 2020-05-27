import { DELETE_MESSAGE, DeleteMessageAction, Message, SEND_MESSAGE, SendMessageAction,} from "./types";

export function sendMessage(newMessage: Message, ): SendMessageAction {
    return {
        type: SEND_MESSAGE,
        payload: newMessage,
    }
}

export function deleteMessage(timestamp: number): DeleteMessageAction {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp,
        }
    }
}
