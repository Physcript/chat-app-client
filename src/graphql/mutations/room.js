


import { gql } from '@apollo/client'

export const JOIN_ROOM_MUTATION = gql`
    mutation joinRoom($roomId: String) {
        joinRoom(roomId:$roomId){
            _id
            name
            count
        }
    }
`

export const JOIN_ROOM_SUBSCRIPTION = gql`
    subscription {
        refreshRoom
    }
`
