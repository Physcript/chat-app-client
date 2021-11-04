


import { gql } from '@apollo/client'


export const SEND_MESSAGE_ROOM = gql`
    mutation sendMessage($body: String $roomId: String){
        sendMessage(body:$body roomId: $roomId)
    }
`
