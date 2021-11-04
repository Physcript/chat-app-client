

const { gql } = require('@apollo/client')

export const GET_ROOM_QUERY = gql`
    query {
        getRoom{
            _id
            count
            name
        }
    }

`
