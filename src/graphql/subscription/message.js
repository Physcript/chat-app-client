

import { gql } from '@apollo/client'


export const REFRESH_MESSAGE_ROOM_SUBSCRIPTION = gql`

    subscription refreshMessage($roomId: String, $token: String){
        refreshMessage (roomId: $roomId, token: $token)
    }

`
