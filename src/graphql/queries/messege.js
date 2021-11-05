
import { gql } from '@apollo/client'


export const GET_MESSAGE_ROOM = gql`
query messageRoom($roomId: String) {
    messageRoom(roomId: $roomId){
        _id
        body
        createdAt
        roomId
        userId
        user    {
            _id
            displayName
            email
            image
            online
            verified
        }
    }
}
`
