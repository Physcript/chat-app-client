
import { gql } from '@apollo/client'

export const AUTHENTICATE_HOME_QUERY = gql`
    query {
        authenticateUser {
            user {
                email
                displayName
                image
                verified
                createdAt
            }
            valid
        }
    }
`
